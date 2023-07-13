import React, {useLayoutEffect, useState} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "../../styles/inscriptionStyle"
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Materiel from 'react-native-vector-icons/MaterialCommunityIcons'
import * as ImagePicker from "expo-image-picker"
import {addImage} from "../../Controller/LoginController";

function Etape9Screen() {
    const navigation = useNavigation();
    const [image,setImage] = useState([]);

    const onPressBack = () => {
        navigation.goBack();
    };
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        setImage(oldArray => [...oldArray, result.uri]);
    }



        // @ts-ignore
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <TouchableOpacity style={{left: 5, top: 35, position: 'relative',}} onPress={onPressBack}>
                    <Icon name={'chevron-back-outline'} size={54} color={'gray'}/>
                </TouchableOpacity>
                <View style={{top: 0}}>
                    <Text style={{
                        fontWeight: "500",
                        fontSize: 40,
                        left: 50
                    }}>Ajouter des photos</Text>
                    <Text style={{
                        fontSize: 15,
                        left: 60,
                        right: 50,
                        top: 10,
                        fontWeight: '400',
                        width: 360,
                        color: '#B3B0B0'
                    }}>Ajoute au moins une photo pour continuer
                    </Text>
                    </View>
                    <View style={{top:60, left:1}}>
                    <TouchableOpacity style={{position: 'relative', left: 130}} onPress={pickImage}>
                        {image && <Image source={{ uri: image[0] }} style={styles.image} />}
                    <TouchableOpacity style={styles.roundButtonProfile}>
                        <Icon name="add-outline" style={{fontSize: 25, color: '#FF5864', left: 1, top: 1}}></Icon>
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    position: 'relative',
                    bottom:110,
                    left: 265
                }}>
                    {image && <Image source={{ uri: image[1] }} style={styles.image} />}

                    <TouchableOpacity style={styles.roundButtonProfile} onPress={pickImage}>
                        <Icon name="add-outline" style={{fontSize: 25, color: '#FF5864', left: 1, top: 1}}></Icon>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    position: 'relative',
                    bottom: 220,
                    left: 400
                }}>
                    {image && <Image source={{ uri: image[2] }} style={styles.image} />}

                    <TouchableOpacity style={styles.roundButtonProfile} onPress={pickImage}>
                        <Icon name="add-outline" style={{fontSize: 25, color: '#FF5864', left: 1, top: 1}}></Icon>
                    </TouchableOpacity>
                </TouchableOpacity>

                <View style={{bottom:130,left:1}}>
                <TouchableOpacity style={{position: 'relative', left: 130}}>

                    {image && <Image source={{ uri: image[3] }} style={styles.image} />}

                    <TouchableOpacity style={styles.roundButtonProfile} onPress={pickImage}>
                        <Materiel name="close" style={styles.icon}></Materiel>
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    position: 'relative',
                    bottom:110,
                    left: 265
                }}>
                    {image && <Image source={{ uri: image[4] }} style={styles.image} />}

                    <TouchableOpacity style={styles.roundButtonProfile} onPress={pickImage}>
                        <Icon name="add-outline" style={{fontSize: 25, color: '#FF5864', left: 1, top: 1}}></Icon>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    position: 'relative',
                    bottom: 220,
                    left: 400
                }}>
                    {image && <Image source={{ uri: image[5] }} style={styles.image} />}

                    <TouchableOpacity style={styles.roundButtonProfile} onPress={pickImage}>
                        <Icon name="add-outline" style={{fontSize: 25, color: '#FF5864', left: 1, top: 1}}></Icon>
                    </TouchableOpacity>
                </TouchableOpacity>
                </View>
                    <TouchableOpacity onPress={() => addImage(image)} style={{top:-160}}>
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


export default Etape9Screen;