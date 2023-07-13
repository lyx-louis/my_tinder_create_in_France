import React, {useLayoutEffect, useState} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "../../styles/inscriptionStyle"
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import TagSelect from '../../screens/TagSelect';
import {addPassion} from "../../Controller/LoginController";

function Etape8Screen() {
    const navigation = useNavigation();
    const [passion,setPassion] = useState([]);
    const onPressBack = () => {
        navigation.goBack();
    };
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const data = [
        {id: 1, label: 'Manga'},
        {id: 2, label: 'Films'},
        {id: 3, label: 'Séries'},
        {id: 4, label: 'Voyage'},
        {id: 5, label: 'Netflix'},
        {id: 6, label: 'Sport'},
        {id: 7, label: 'Football'},
        {id: 8, label: 'Jeux vidéos'},
    ];


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
                    }}>Passions</Text>
                    <Text style={{
                        fontSize: 15,
                        left: 50,
                        right: 50,
                        top: 10,
                        fontWeight: '500',
                        width: 360,
                        color: '#B3B0B0'
                    }}>Partage tes passions avec les autres membres Tinder en les ajoutant à ton profil.
                    </Text>
                    <View style={{left:30, top:30}}>
                    <TagSelect
                        data={data}
                        itemStyle={styles2.item}
                        itemLabelStyle={styles2.label}
                        itemStyleSelected={styles2.itemSelected}
                        itemLabelStyleSelected={styles2.labelSelected}
                        max={5}
                        onItemPress = {(newPassion) => setPassion(oldArray => [...oldArray,newPassion]) }
                        onMaxError={() => {
                            Alert.alert('Erreur', '5 Maximum');
                        }}
                    />
                    </View>
                    <TouchableOpacity onPress={() => addPassion(passion)} style={{top:60}}>
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

const styles2 = StyleSheet.create({
    item: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#FFF',
        borderRadius: 30,
        height: 45,
        width: 350,


    },
    label: {
        color: 'lightgray',
        textAlign: 'center',
        fontSize: 19,
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

export default Etape8Screen;