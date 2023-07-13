import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {Alert, Image, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Materiel from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from "../styles/EditProfileStyle"
import TagSelect from '../screens/TagSelect';



const SettingScreen = () => {
    const navigation = useNavigation();
    const onPressBack = () => {
        navigation.goBack();
    };
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const data2 = [
        {id: 1, label: 'Homme'},
        {id: 2, label: 'Femme'},

    ];

    const [description, setDescription] = useState('');
    const [prenom, setPrenom] = useState('');

    return (
        <ScrollView style={styles.container}>
            {/*Header*/}
            <View style={{
                alignItems: 'center',
                top:30
            }}>
                <TouchableOpacity  style={{ right: 15, top: 23, position: 'absolute',}}  onPress={() => navigation.navigate("Profile")}>
                    <Text style={{fontSize: 20, color: '#FF5864', fontWeight: '500'}}> Done</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    top: 13,
                    position: 'relative',
                }}>
                    <Text style={styles.textProfile}>Réglages</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        right: 5,
                        top: 13,
                        position: 'absolute',

                    }
                    }>
                </TouchableOpacity>


            </View>
            <View style={{        
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
                    top:80,}}>
    
                <View style={{top: 20}}>

                    <Text style={{fontWeight: '600'}}> ADRESSE E-MAIL</Text>
                        <TextInput
                            style={styles.inputB}
                            placeholder="Numéro de téléphone"
                            underlineColorAndroid="transparent"
                            placeholderTextColor="lightgray"
                            keyboardType='number-pad'
                        />
                    <Text style={{
                        top:15,
                        left:10,
                        fontWeight: '400',
                        fontSize:13,
                        width: 360,
                        color: 'gray'
                    }}>Ton adresse e-mail aide à sécuriser ton compte.
                    </Text>
                </View>
                
                <View style={{top: 50}}>
                    <Text style={{fontWeight: '600'}}> DISTANCE MAXIMALE</Text>
                        <TextInput
                            style={styles.inputB}
                            placeholder="  Entrez une distance maximale ( max : 150km )"
                            maxLength={3}
                            underlineColorAndroid="transparent"
                            placeholderTextColor="gray"
                            keyboardType='number-pad'
                        />
                </View>

                <View style={{top: 80, right:123}}>

                    <Text style={{fontWeight: '600', top: -10}}>JE VEUX VOIR : </Text>
                    <TagSelect
                        data={data2}
                        itemStyle={styles2.item}
                        itemLabelStyle={styles2.label}
                        itemStyleSelected={styles2.itemSelected}
                        itemLabelStyleSelected={styles2.labelSelected}
                        max={1}
                        onMaxError={() => {
                            Alert.alert('Erreur', 'Maximum atteint');
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: 50,
        marginLeft: 15,
    },
    buttonContainer: {
        padding: 15,
    },
    buttonInner: {
        marginBottom: 15,
    },
    labelText: {
        color: '#333',
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 15,
    },
    item: {
        borderWidth: 1,
        borderColor: 'lightgray',
        backgroundColor: '#FFF',
        borderRadius: 30,
        height: 37,

    },
    label: {
        color: 'gray',
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '500'
    },
    itemSelected: {
        backgroundColor: '#FFF',
        borderColor: '#FF5864',
    },
    labelSelected: {
        color: '#FF5864',
        fontWeight: '600',
    },
});

export default SettingScreen;

