import {useState} from 'react';
import {Image, TextInput,Text, TouchableOpacity, View} from 'react-native';
import styles from "../styles/formUserStyle"
import {identificationUser} from "../Controller/LoginController"
import { LinearGradient } from 'expo-linear-gradient';
import * as React from "react";

function IdentificationUserScreen() {

    const [mail, setMail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');

    return (
        <View style={styles.container}>
            <LinearGradient
            colors={["#fe3f70", "#FF655B"]}
            start={{
                x: 0,
                y: 0.05
              }}
              end={{
                x: 1,
                y: 0
              }}
            style={styles.linearGradient}
            >
            <Image
                style={styles.image}
                source={require("../assets/Tinder-Logo.png")}
            />
            <View style={styles.textBas}>

            <View style={styles.inputView}>
                <TextInput style={styles.TextInput}
                           placeholder='Email'
                           placeholderTextColor="#003f5c"
                           onChangeText={(mail) => setMail({mail})}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.TextInput}
                           placeholder="Mot de passe"
                           placeholderTextColor="#003f5c"
                           secureTextEntry={true}
                           onChangeText={(motDePasse) => setMotDePasse({motDePasse})}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.oublieMdpBtn}>Mot de pass oublié ?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.connexionBtn} onPress={() => identificationUser(mail, motDePasse)}>
                <Text style={styles.textWhite}>CONNEXION</Text>
            </TouchableOpacity>
            </View>
            </LinearGradient>
        </View>
    )
}

export default IdentificationUserScreen;