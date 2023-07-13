import {StyleSheet} from "react-native";

import { Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        marginTop: 0,
        height: 120,
        width: 250,
    },
    textBas: {
        alignItems: 'center',
        marginTop: 60,
        height: 50,
        width: "100%",
        
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    textWhite: {
        color: "#FFFFFF",
    },
    oublieMdpBtn: {
        height: 30,
        marginBottom: 30,
        color: "white",
    },

    connexionBtn: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderWidth: 1.5,
        borderColor: "#FFFFFF",
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

