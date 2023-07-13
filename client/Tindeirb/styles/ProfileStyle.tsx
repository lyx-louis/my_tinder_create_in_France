import {StyleSheet} from "react-native";


const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFFFF',
    },
    container2: {
        flex: 1,
        backgroundColor: '#EEEFF6',
        bottom:-35,
        alignItems: 'center',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    seeMatch: {
        top:60,
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#FFFFFF",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    image: {
        top: 110,
        height: 180,
        width: 250,
        borderRadius: 100,

    },
    textProfile: {
        marginTop:10,
        fontFamily: "monospace",
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500'
    },
    icon: {
        fontSize: 25,
        color: '#A9A9A9',
    },
    roundButtonSetting: {
        width: 60,
        borderRadius: 50,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 350,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        right: 120,
        borderWidth: 1.5,
        borderColor: "white",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    
    roundButtonProfile: {
        width: 60,
        borderRadius: 50,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -80,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        left: 120,
        borderWidth: 1.5,
        borderColor: "white",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
})

export default styles;