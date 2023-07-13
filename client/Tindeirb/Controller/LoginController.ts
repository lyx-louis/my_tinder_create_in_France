import GestionRequete from "./GestionRequete";
import CryptoJS from "crypto-js";
import * as rootNavigation from "../rootNavigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from "expo-location";
import base64 from "react-native-base64";

const requete = new GestionRequete();


async function getLocation() {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        return;
    }
    let location = await Location.getCurrentPositionAsync({});
    if (location) {
        AsyncStorage.setItem("position", JSON.stringify(location)).then();
    }
}

const randomString = (length = 8) => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;

};

function encodeMDP(data: string): string[] {
    const poivre: string | undefined = process.env.REACT_APP_CLE_API;
    const sel: string = randomString(20);
    const hash = CryptoJS.SHA512(data + sel + poivre);
    return [hash.toString(CryptoJS.enc.Hex), sel];
}

function decodeMDP(data: string, sel: string): string {
    const poivre: string | undefined = process.env.REACT_APP_CLE_API;
    const hash = CryptoJS.SHA512(data + sel + poivre);
    return hash.toString(CryptoJS.enc.Hex);
}

export function creationUser(mail: string, motDePasse: string) {
    const url: string = "/account/login";
    const email = {
        mail:mail,
    };
    const MDP = {
        motDePasse:motDePasse,
    }
    const reponse = requete.envoiData(url, email);
    getLocation().then();
    AsyncStorage.getItem("position").then(position => {
        reponse.then(response => infoCreationUser(response, MDP, email,position));
    })

}

export function identificationUser(mail: any, motDePasse: any) {
    getLocation().then();
    AsyncStorage.getItem("position").then(position => {
        const url: string = "/account/login";
        const reponse = requete.envoiData(url, mail);
        reponse.then(reponse => infoConnexionUser(reponse, motDePasse, mail, position));
    });


}

async function connexionUser(reponse: Response) {
    if (reponse.status === 210) {
        const resultat:any = await reponse.json();
        const token:string = resultat.token;
        await AsyncStorage.setItem("jwtToken",token);
        rootNavigation.navigate("HomePage", {});
    }
    else if (reponse.status === 250){
        const resultat:any = await reponse.json();
        const token:string = resultat.token;
        await AsyncStorage.setItem("jwtToken",token);
        rootNavigation.navigate("Etape2", {});
    }
    else if(reponse.status === 500){
        console.log("Login Invalide\n");
    }
    else if(reponse.status == 230){
        rootNavigation.navigate("HomePage", {});
    }
}

async function infoConnexionUser(reponse: Response, motDePasse: any, mail: any,position:any) {
    if (reponse.status === 410) {
        const posObject = JSON.parse(position);
        const sel = await reponse.json();
        motDePasse = decodeMDP(motDePasse.motDePasse, sel.sel);
        const user = {
            mail: mail.mail,
            motDePasse: motDePasse,
            position:{
                longitude:posObject.coords.longitude,
                latitude:posObject.coords.latitude,
            },
        };
        requete.envoiData("/account/login", user).then(reponse => connexionUser(reponse));
    }
}

async function infoCreationUser(reponse: Response, motDePasse: any, mail: any,position:any) {

    if(reponse.status === 220){
        const MDP = {
            motDePasse: "",
            sel: "",
        };
        const dataCoder: Array<string> = encodeMDP(motDePasse.motDePasse);
        const posObjet = JSON.parse(position);
        MDP.motDePasse = dataCoder[0];
        MDP.sel = dataCoder[1];
        const user = {
            mail:mail.mail,
            motDePasse: MDP.motDePasse,
            sel:MDP.sel,
            position:{
                longitude: posObjet.coords.longitude,
                latitude: posObjet.coords.latitude,
            },
        }
        requete.envoiData("/account/newUser", user).then(reponse => connexionUser(reponse));
    }
    else if(reponse.status === 410){
        console.log("Utilisateur déjà existant création impossible\n");
    }
}

export function checkJWT(){
    AsyncStorage.getItem("jwtToken").then(async token => {
        getLocation().then();
        const position = await AsyncStorage.getItem("position")
        if (token) {
            if (typeof position === "string") {
                const posObjet = JSON.parse(position);
                const data = {
                    token: token,
                    position: {
                        longitude: posObjet.coords.longitude,
                        latitude: posObjet.coords.latitude,
                    },
                };
                requete.envoiData("/account/login", data).then(reponse => connexionUser(reponse));
            }
        }
    });
}

export async function addPrenom(prenom: string) {
    const token = await AsyncStorage.getItem("jwtToken");
    const data = {
        token:token,
        prenom:prenom,
    };
    requete.envoiData("/user/addPrenom",data).then(res => {
        if (res.status === 200) {
            rootNavigation.navigate("Etape4",{});
        }
    });
}

export async function addAge(age: number) {
    const token = await AsyncStorage.getItem("jwtToken");
    const data = {
        token:token,
        age:age,
    };
    requete.envoiData("/user/addAge",data).then(res => {
        if (res.status === 200) {
            rootNavigation.navigate("Etape5",{});
        }
    });
}

export async function addSexe(sexeID: number) {
    const token = await AsyncStorage.getItem("jwtToken");
    let sexe:string;
    if(sexeID === 1){
        sexe = "femme";
    }else{
        sexe = "homme"
    }
    const data = {
        token:token,
        sexe:sexe,
    };
    requete.envoiData("/user/addSexe",data).then(res => {
        if (res.status === 200) {
            rootNavigation.navigate("Etape6",{});
        }
    });
}

export async function addOrientation(orientationArray: Array<object>) {
    const token = await AsyncStorage.getItem("jwtToken");
    let orientation: any[] = [];
    orientationArray.forEach(element => orientation.push(element.label));
    const data = {
        token:token,
        orientation:orientation,
    };
    requete.envoiData("/user/addOrientation",data).then(res => {
        if (res.status === 200) {
            rootNavigation.navigate("Etape7",{});
        }
    });
}

export async function addGenre(genre: object) {
    const token = await AsyncStorage.getItem("jwtToken");
    let genreTexte:string = '';
    if(genre.id === 1){
        genreTexte = "femme"
    }else if(genre.id === 2){
        genreTexte = "homme"
    }
    else if(genre.id === 3){
        genreTexte = "les deux"
    }
    const data = {
        token:token,
        genre:genreTexte,
    };
    requete.envoiData("/user/addGenre",data).then(res => {
        if (res.status === 200) {
            rootNavigation.navigate("Etape8",{});
        }
    });
}

export async function addPassion(passionArray: Array<object>) {
    const token = await AsyncStorage.getItem("jwtToken");
    let passion: any[] = [];
    passionArray.forEach(element => passion.push(element.label));
    const data = {
        token:token,
        passion:passion,
    };
    requete.envoiData("/user/addPassion",data).then(res => {
        if (res.status === 200) {
            rootNavigation.navigate("Etape9",{});
        }
    });
}

export async function addImage(imageArray: Array<object>) {
    const token = await AsyncStorage.getItem("jwtToken");
    let image: string[] = [];
    // @ts-ignore
    imageArray.forEach((element => image.push(base64.encode(element))));
    const data = {
        token:token,
        image:image,
    };
    requete.envoiData("/user/addImage",data).then(res => {
        if (res.status === 200) {
            rootNavigation.navigate("HomePage",{});
        }
    });
}