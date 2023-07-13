import React, {useLayoutEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "../../styles/inscriptionStyle"
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {addPrenom} from "../../Controller/LoginController";

function Etape3Screen() {
    const navigation = useNavigation();
    const [prenom,setPrenom] = useState('');
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
                        fontSize: 44,
                        left: 50
                    }}>Mon                             prénom</Text>
                    <TextInput style={{
                        fontSize:20,
                        borderBottomWidth:1,
                        height:40,
                        width:330,
                        borderBottomColor:'gray',
                        top:25,
                        left:50,
                    }}
                               placeholder="Prénom"
                               autoCompleteType='name'
                               underlineColorAndroid="transparent"
                               placeholderTextColor="lightgray"
                                onChangeText={(text)=>setPrenom(text)}
                                defaultValue={prenom}>
                    </TextInput>
                    <Text style={{
                        fontSize: 15,
                        left: 50,
                        right: 50,
                        top: 60,
                        fontWeight: '400',
                        width: 360,
                        color: '#B3B0B0'
                    }}>Voici comment il apparaîtra sur Tinder.
                    </Text>
                    <Text style={{
                        fontSize: 15,
                        left: 50,
                        right: 50,
                        top: 65,
                        fontWeight: '400',
                        width: 360,
                        color: '#B3B0B0'
                    }}>Attention, tu ne pourras pas le modifier.
                    </Text>
                    <TouchableOpacity onPress={() => addPrenom(prenom)} style={{top:160}}>
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

export default Etape3Screen;