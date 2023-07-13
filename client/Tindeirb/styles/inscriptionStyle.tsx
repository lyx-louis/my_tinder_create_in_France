import {StyleSheet} from "react-native";


const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFFFF',
    },
    container2: {
        flex: 1,
        backgroundColor: '#EEEFF6',
        bottom:-10,
        alignItems: 'center',
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
    textProfile: {
        marginTop:10,
        fontFamily: "monospace",
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500'
    },
    textInput:{
        fontSize:20,
        borderBottomWidth:1,
        height:40,
        width:330,
        borderBottomColor:'gray',
        top:40,
        left:40,

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
        height:30,
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
        width: 350,
        borderRadius: 25,
        height: 52,
        left:30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(250, 248, 248, 1)',
        borderWidth: 1.5,
        borderColor: 'rgba(250, 248, 248, 1)',
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