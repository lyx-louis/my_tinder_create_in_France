import {StyleSheet} from "react-native";

import { Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF655B',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    textBas: {
        alignItems: 'center',
        width: "100%",
        
    },
    image: {
        
        marginTop: windowHeight*0.2,
        height: 120,
        width: 250,
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#FFFFFF",
    },
    loginTransparent: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        borderWidth: 1.5,
        borderColor: "#FFFFFF",

    },
    loginText: {
        color: "black",
    },
    loginTextWhite: {
        color: "#FFFFFF",
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center'
      },
      
});

export default styles;