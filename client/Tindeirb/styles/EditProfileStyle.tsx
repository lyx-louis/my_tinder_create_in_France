import {StyleSheet} from "react-native";


const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFFFF',
        top:20
    },
    container2: {
        flex: 1,
        backgroundColor: '#EEEFF6',
        bottom:-10,
        height:1080,
        alignItems: 'center',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        top:30,
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
        top: 20,
        height: 160,
        width: 120,
        borderRadius: 20,
        right: 120,

    },
    imagePreview: {
        top: 90,
        height: 400,
        width: 360,
        borderRadius: 20,
        right:100
    },
    textProfile: {
        marginTop:30,
        fontFamily: "monospace",
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500'
    },
    textInput:{
        fontWeight:'600',
    },
    inputA: {
        backgroundColor: '#FFFFFF',
        height:60,
        top:10,
        width:415,
        borderColor: 'lightgrey',
        borderWidth: 0.5,
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
     },
     inputB: {
        backgroundColor: '#FFFFFF',
        height:45,
        top:10,
        width:415,
        borderColor: 'lightgrey',
        borderWidth: 0.5,
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
     },
    icon: {
        fontSize: 20,
        color: '#FF5864',
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
        width: 30,
        borderRadius: 50,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -80,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        right:20,
        top:80,
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