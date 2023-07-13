import AsyncStorage from "@react-native-async-storage/async-storage";

class GestionRequete {

    private ngrokUrl:string = "https://b523-2001-861-80-7f20-7c76-54f4-82a3-c25f.ngrok.io"

    async envoiData(url: string, data: object): Promise<Response> {
        const optionConnexion = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data),
        }

        return await fetch(this.ngrokUrl+url, optionConnexion);
    }

    async RecupUserCards() {
        const token = await AsyncStorage.getItem("jwtToken");
        if(token){
            const data = {
                token: token,
            }
            return this.envoiData("/user/recupUsersCards",data);
        }
    }

    async recupInfoUser(){
        const token = await AsyncStorage.getItem("jwtToken");
        const data = {
            token: token,
        }
        return this.envoiData("/user/recupUser",data);
    }
}

export default GestionRequete;