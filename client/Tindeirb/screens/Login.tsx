import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from "../styles/loginStyle"
import { LinearGradient } from 'expo-linear-gradient';
import { checkJWT } from "../Controller/LoginController";

function LoginScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container} onLayout={() => checkJWT()}>
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
                <StatusBar style="auto" />
                <View style={styles.textBas}>
                    <TouchableOpacity>
                        <Text style={styles.loginTextWhite}>En appuyant sur Créer un compte ou sur Connexion,
                            tu acceptes nos conditions d'utilisation.</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Inscription")}>
                        <Text style={styles.loginText}>CREER UN COMPTE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginTransparent} onPress={() => navigation.navigate("IdentificationUser")}>
                        <Text style={styles.loginTextWhite}>CONNEXION</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}
export default LoginScreen;
