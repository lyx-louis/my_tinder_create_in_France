import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'tailwind-rn';
import Icon from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Materiel from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from "../styles/ProfileStyle"
import {useTailwind} from 'tailwind-rn';
import GestionRequete from "../Controller/GestionRequete";
import base64 from "react-native-base64";

const ProfileScreen = () => {
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

    requete.recupInfoUser().then(async reponse => {
        const data = JSON.parse(await reponse.json());
        setPrenom(data.prenom);
        setAge(data.age);
        // @ts-ignore
        setImage(base64.decode(data.image[0]));
    })


    return (
        <SafeAreaView style={styles.container}>
            {/*Header*/}
            <View style={{
                alignItems: 'center',
            }}>                
                <TouchableOpacity  style={{ left: 5, top: 13, position: 'absolute',}}  onPress={onPressBack}>
                    <Icon name={'chevron-back-outline'} size={34} color={'#FF5864'} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    top: 13,
                    position: 'relative',
                }}>
                <Text style={styles.textProfile}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        right: 5,
                        top: 13,
                        position: 'absolute',
                    }
                    }>
                </TouchableOpacity>


                {/*Settings*/}
                <TouchableOpacity style={styles.roundButtonSetting} onPress={()=>{navigation.navigate("Settings")}}>
                    <Foundation name="widget" style={styles.icon}></Foundation>
                </TouchableOpacity>
                <Text style={{ 
                    right: 120, 
                    top: 13,        
                    marginTop: 1,
                    fontSize: 17,
                    color:'#808080'}}> REGLAGES</Text>

                {/*Edit Profile*/}

                <TouchableOpacity style={styles.roundButtonProfile} onPress={() => navigation.navigate("EditProfile")}>
                    <Materiel name="lead-pencil" style={styles.icon}></Materiel>
                </TouchableOpacity>
                <Text style={{ 
                    left: 115,
                    top: 13,        
                    marginTop: 1,
                    fontSize: 17,
                    color: '#808080'}}> MODIFIER LE PROFIL</Text>


                {/*Picture*/}

                <TouchableOpacity style={{ position: 'absolute', }}>
                    {image && <Image source={{ uri: image }} style={styles.image} />}
                </TouchableOpacity>
                <Text style={{ 
                    fontFamily: "monospace",
                    fontSize: 30,
                    textAlign: 'center',
                    top: -160,}}>{prenom} , {age} ans</Text>

            </View>
            <View style={styles.container2}>
            <TouchableOpacity style={{ position: 'relative', }}>
                    <Image
                        source={require('../assets/logoFlammeTinder.png')}
                        style={{
                            right: 13,
                            top: 50,
                            height: 30,
                            width: 30,                    
                        }}
                    />

                    <Text style={{ 
                        left: 19,
                        top: 22,        
                        marginTop: 1,
                        fontSize: 22,
                        color: 'black',
                        fontWeight: '500',}}> Vous avez X matchs !
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.seeMatch} onPress={() => navigation.navigate("HomePage")}>
                <Text style={{fontSize:15, color:'#FF5864', fontWeight:'500'}}>VOIR MES MATCHS</Text>
            </TouchableOpacity>
            </View>
            {/*End Of Header*/}

        </SafeAreaView>
        
    );
};


export default ProfileScreen;

