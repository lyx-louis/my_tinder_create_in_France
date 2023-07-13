import React, {useLayoutEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from "../../styles/inscriptionStyle"
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

function Etape2Screen() {
    const navigation = useNavigation();
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
                <Image
                    source={require('../../assets/logoFlammeTinder.png')}
                    style={{
                        top: 80,
                        height: 30,
                        width: 30,
                        alignSelf: 'center'
                    }}
                />
                <Text style={{
                    fontWeight: '500',
                    fontSize: 27,
                    alignSelf: 'center',
                    top: 90,
                    color: '#464646'
                }}>Bienvenue sur Tinder.</Text>
                <Text style={{
                    fontSize: 15,
                    alignSelf: 'center',
                    top: 100,
                    fontWeight: '600',
                    width: 360,
                    color: 'gray',
                    textAlign: 'center'
                }}>Voici les règles : merci de les respecter pour une expérience au top.
                </Text>
                <Icon name={'checkmark-outline'} size={28} color={'#FF5864'} style={{top: 130, left: 40}}/>
                <Text style={{top: 105, left: 75, fontSize: 18, fontWeight: '600', color: '#464646'}}>Sois
                    toi-même.</Text>
                <Text style={{top: 115, left: 40, fontSize: 15, fontWeight: '500', color: '#8D8D8D', width: '80%'}}>Assure-toi
                    que tes photos, ton âge et ta bio sont fidèles à toi-même.</Text>

                <Icon name={'checkmark-outline'} size={28} color={'#FF5864'} style={{top: 135, left: 40}}/>
                <Text style={{top: 110, left: 75, fontSize: 18, fontWeight: '600', color: '#464646'}}>Ta sécurité
                    avant tout.</Text>
                <Text style={{top: 120, left: 40, fontSize: 15, fontWeight: '500', color: '#8D8D8D', width: '90%'}}>Ne
                    partage pas tes informations personnelles trop vite.</Text>

                <Icon name={'checkmark-outline'} size={28} color={'#FF5864'} style={{top: 140, left: 40}}/>
                <Text style={{top: 115, left: 75, fontSize: 18, fontWeight: '600', color: '#464646'}}>Sois
                    bienveillant.</Text>
                <Text style={{top: 125, left: 40, fontSize: 15, fontWeight: '500', color: '#8D8D8D', width: '90%'}}>Traite
                    les autres membres avec respect, exactement comme tu aimerais être traité.e.</Text>

                <Icon name={'checkmark-outline'} size={28} color={'#FF5864'} style={{top: 145, left: 40}}/>
                <Text style={{top: 120, left: 75, fontSize: 18, fontWeight: '600', color: '#464646'}}>Agis quand c'est
                    nécessaire.</Text>
                <Text style={{top: 130, left: 40, fontSize: 15, fontWeight: '500', color: '#8D8D8D', width: '90%'}}>N'hésite
                    pas à signaler les comportements irrespectueux.</Text>
                <View style = {{top:130}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Etape3")} style={{top:50}}>
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
                            }}> J'accepte
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Etape2Screen;