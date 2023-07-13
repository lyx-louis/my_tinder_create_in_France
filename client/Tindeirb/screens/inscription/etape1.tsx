import React, {useLayoutEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "../../styles/inscriptionStyle"
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {creationUser} from "../../Controller/LoginController";

function InscriptionScreen() {
    const navigation = useNavigation();
    const [mail,setMail] = useState('');
    const [motDePasse,setMDP] = useState('');
    const onPressBack = () => {
        navigation.goBack();
    };
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <TouchableOpacity style={{left: 5, top: 35, position: 'absolute',}} onPress={onPressBack}>
                    <Icon name={'chevron-back-outline'} size={54} color={'gray'}/>
                </TouchableOpacity>
                <View style={{top: 80}}>
                    <Text style={{
                        fontWeight: "500",
                        fontSize: 50,
                        left: 50
                    }}>Mon adresse e-mail</Text>
                    <Text style={{
                        fontSize: 15,
                        left: 40,
                        right: 50,
                        top: 10,
                        fontWeight: '400',
                        width: 360,
                        color: '#B3B0B0'
                    }}>Vérifie ton adresse e-mail et choisis un mot de passe pour ne pas perdre l'accès à ton compte.
                    </Text>
                    <TextInput style={styles.textInput}
                               placeholder="Entre ton mail"
                               keyboardType='email-address'
                               underlineColorAndroid="transparent"
                               placeholderTextColor="lightgray"
                               onChangeText={(text)=>setMail(text)}
                                defaultValue={mail}>
                    </TextInput>
                    <View style = {{top:40}}>
                        <TextInput style={styles.textInput}
                                   placeholder="Mot de passe"
                                   placeholderTextColor="lightgray"
                                   onChangeText={(text)=>setMDP(text)}
                                   defaultValue={motDePasse}
                                   secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity onPress={() => creationUser(mail,motDePasse)} style={{top:160}}>
                        <LinearGradient
                            colors={["#fe3f80", "#FF655B"]}
                            start={{
                                x: 0,
                                y: 0.05
                            }}
                            end={{
                                x: 0.8,
                                y: 0
                            }}
                            style={styles.roundButtonSetting}
                        >
                            <Text style={{
                                color: 'white',
                                fontWeight: '800',
                                fontSize: 15 
                            }
                            }> CONTINUER
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default InscriptionScreen;