import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {Alert, Image, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Materiel from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from "../styles/EditProfileStyle"
import TagSelect from '../screens/TagSelect';
import GestionRequete from "../Controller/GestionRequete";
import base64 from "react-native-base64";



const EditProfileScreen = () => {
    const navigation = useNavigation();
    const onPressBack = () => {
        navigation.goBack();
    };
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const requete = new GestionRequete();

    const [prenom,setPrenom]= useState('');
    const [age,setAge]= useState(0);
    const [image,setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [passion, setPassion] = useState([]);

    requete.recupInfoUser().then(async reponse => {
        const data = JSON.parse(await reponse.json());
        setPrenom(data.prenom);
        setAge(data.age);
        // @ts-ignore
        setImage(base64.decode(data.image[0]));
    })

    const data = [
        {id: 1, label: 'Manga'},
        {id: 2, label: 'Films'},
        {id: 3, label: 'Séries'},
        {id: 4, label: 'Voyage'},
        {id: 5, label: 'Netflix'},
        {id: 6, label: 'Sport'},
        {id: 7, label: 'Football'},
        {id: 8, label: 'Jeux vidéos'},
        {id: 9, label: 'Nature'},
        {id: 10, label: 'Chant'},

    ];

    const data2 = [
        {id: 1, label: 'Homme'},
        {id: 2, label: 'Femme'},

    ];



    return (
        <ScrollView style={styles.container}>
            {/*Header*/}
            <View style={{
                alignItems: 'center',
            }}>
                <TouchableOpacity  style={{ right: 15, top: 23, position: 'absolute',}}  onPress={() => navigation.navigate("Profile")}>
                    <Text style={{fontSize: 20, color: '#FF5864', fontWeight: '500'}}> Done</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    top: 13,
                    position: 'relative',
                }}>
                    <Text style={styles.textProfile}>Informations</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        right: 5,
                        top: 13,
                        position: 'absolute',

                    }
                    }>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{
                        right: 100,
                        fontFamily: "monospace",
                        fontSize: 20,
                        textAlign: 'center',
                        top: 40,
                        fontWeight: '700',
                        color: '#FF5864'
                    }}> Modifier
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Preview")}>
                    <Text style={{
                        left: 100,
                        fontFamily: "monospace",
                        fontSize: 20,
                        textAlign: 'center',
                        top: 16,
                        color: 'gray',
                    }}> Aperçu
                    </Text>
                </TouchableOpacity>
                <Icon name={'ellipsis-vertical-outline'} style={{
                    fontSize: 20,
                    top: -7,
                    color: 'gray',
                }}/>


            </View>
            <View style={styles.container2}>
                <TouchableOpacity style={{position: 'absolute', left: 130}}>
                    <Image
                        source={require('../assets/user2.jpg')}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.roundButtonProfile}>
                        <Materiel name="close" style={styles.icon}></Materiel>
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    position: 'absolute',
                    left: 265
                }}>
                    <Image
                        source={require('../assets/gris.png')}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.roundButtonProfile}>
                        <Icon name="add-outline" style={{fontSize: 25, color: '#FF5864', left: 1, top: 1}}></Icon>
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    position: 'absolute',
                    left: 400
                }}>
                    <Image
                        source={require('../assets/gris.png')}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.roundButtonProfile}>
                        <Icon name="add-outline" style={{fontSize: 25, color: '#FF5864', left: 1, top: 1}}></Icon>
                    </TouchableOpacity>
                </TouchableOpacity>

                <View style={{top: 190}}>
                    <TouchableOpacity style={{
                        position: 'absolute',
                        left: -77
                    }}>
                        <Image
                            source={require('../assets/gris.png')}
                            style={styles.image}
                        />
                        <TouchableOpacity style={styles.roundButtonProfile}>
                            <Icon name="add-outline" style={{fontSize: 25, color: '#FF5864', left: 1, top: 1}}></Icon>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        position: 'absolute',
                        left: 58
                    }}>
                        <Image
                            source={require('../assets/gris.png')}
                            style={styles.image}
                        />
                        <TouchableOpacity style={styles.roundButtonProfile}>
                            <Icon name="add-outline" style={{fontSize: 25, color: '#FF5864', left: 1, top: 1}}></Icon>
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        position: 'absolute',
                        left: 193
                    }}>
                        <Image
                            source={require('../assets/gris.png')}
                            style={styles.image}
                        />
                        <TouchableOpacity style={styles.roundButtonProfile}>
                            <Icon name="add-outline" style={{fontSize: 25, color: '#FF5864', left: 1, top: 1}}></Icon>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>

                <View style={{top: 400}}>

                    <Text style={{fontWeight: '600'}}> A PROPOS DE MOI</Text>
                    <TextInput
                        style={styles.inputA}
                        placeholder="  500 words max"
                        maxLength={500}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="gray"
                        multiline={true}
                        numberOfLines={10}
                    />
                </View>
                <View style={{top: 430}}>

                    <Text style={{fontWeight: '600', top: -10}}> PASSIONS</Text>
                    <TagSelect
                        data={data}
                        itemStyle={styles2.item}
                        itemLabelStyle={styles2.label}
                        itemStyleSelected={styles2.itemSelected}
                        itemLabelStyleSelected={styles2.labelSelected}
                        max={5}
                        onMaxError={() => {
                            Alert.alert('Erreur', 'Maximum atteint');
                        }}
                    />
                </View>
                <View style={{top: 450}}>
                    <Text style={{fontWeight: '600'}}> TITRE DU POSTE</Text>
                        <TextInput
                            style={styles.inputB}
                            placeholder="  Ajouter un poste"
                            maxLength={100}
                            underlineColorAndroid="transparent"
                            placeholderTextColor="gray"
                        />
                </View>
                <View style={{top: 480}}>
                    <Text style={{fontWeight: '600'}}> ENTREPRISE</Text>
                        <TextInput
                            style={styles.inputB}
                            placeholder="  Ajouter une entreprise"
                            maxLength={100}
                            underlineColorAndroid="transparent"
                            placeholderTextColor="gray"
                        />
                </View>
                <View style={{top: 510}}>
                    <Text style={{fontWeight: '600'}}> VIT ICI :</Text>
                        <TextInput
                            style={styles.inputB}
                            placeholder="  Ajouter une ville"
                            maxLength={100}
                            underlineColorAndroid="transparent"
                            placeholderTextColor="gray"
                        />
                </View>
                <View style={{top: 540, right:123}}>

                    <Text style={{fontWeight: '600', top: -10}}>SEXE </Text>
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

export default EditProfileScreen;

