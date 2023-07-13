import React, {useLayoutEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "../../styles/inscriptionStyle"
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {addAge} from "../../Controller/LoginController";

function Etape4Screen() {
    const navigation = useNavigation();
    const [age,setAge] = useState(0);
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
                    }}>Mon âge</Text>
                    <TextInput style={{
                        fontSize:20,
                        borderBottomWidth:1,
                        height:40,
                        width:330,
                        borderBottomColor:'gray',
                        top:25,
                        left:50,
                    }}
                               placeholder="Âge"
                               underlineColorAndroid="transparent"
                               placeholderTextColor="lightgray"
                               keyboardType='number-pad'
                               onChangeText={(age) => setAge(parseInt(age))}
                               defaultValue={age.toString()}
                    >
                    
                    
                    </TextInput>
                    <Text style={{
                        fontSize: 15,
                        left: 50,
                        right: 50,
                        top: 40,
                        fontWeight: '400',
                        width: 360,
                        color: '#B3B0B0'
                    }}>Ton âge sera visible par tous
                    </Text>
                    <TouchableOpacity onPress={() => addAge(age)} style={{top:160}}>
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

export default Etape4Screen;