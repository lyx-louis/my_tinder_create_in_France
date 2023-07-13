import GestionRequete from "./GestionRequete";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as rootNavigation from "../rootNavigation"

const requete = new GestionRequete();

export async function addUserInfo(description: string, prenom: string) {
    const token = await AsyncStorage.getItem("jwtToken");
    const infoUser = {
        description: description,
        prenom: prenom,
        jwt: token,
    };
    requete.envoiData("/user/addInfo", infoUser).then(reponse => infoReponseAddInfo(reponse));
}

function infoReponseAddInfo(reponse: Response){
    if(reponse.status === 200){
        rootNavigation.navigate("HomePage",{});
    }
    else if(reponse.status === 510){
        rootNavigation.navigate("LoginPage",{});
    }
}

 export async function addLike(cardInfo:any) {
    const token = await AsyncStorage.getItem("jwtToken");
    const data = {
        token : token,
        userLike: cardInfo,
    };
    await requete.envoiData("/user/addLike",data);
}