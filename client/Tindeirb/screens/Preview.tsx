import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {Alert, Image, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Materiel from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from "../styles/EditProfileStyle"
import TagSelect from '../screens/TagSelect';


const PreviewScreen = () => {
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
        <ScrollView style={styles.container}>
            {/*Header*/}
            <View style={{
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{right: 15, top: 23, position: 'absolute',}}
                                  onPress={() => navigation.navigate("Profile")}>
                    <Text style={{fontSize: 20, color: '#FF5864', fontWeight: '500'}}> Done</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    top: 13,
                    position: 'relative',
                }}>
                <Text style={styles.textProfile}>Aperçu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        right: 5,
                        top: 13,
                        position: 'absolute',

                    }
                    }>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
                    <Text style={{
                        right: 100,
                        fontFamily: "monospace",
                        fontSize: 20,
                        textAlign: 'center',
                        top: 40,
                        color:'gray',}}> Modifier
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{
                        left: 100,
                        fontFamily: "monospace",
                        fontSize: 20,
                        textAlign: 'center',
                        top: 16,
                        fontWeight:'700',
                        color:'#FF5864'}}> Aperçu
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
                        style={styles.imagePreview}
                    />
                </TouchableOpacity>

            </View>

        </ScrollView>

    );
};


export default PreviewScreen;

