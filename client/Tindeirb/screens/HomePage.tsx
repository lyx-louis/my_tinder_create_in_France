import { useNavigation } from '@react-navigation/native';
// @ts-ignore
import React, { useLayoutEffect } from 'react';
import { Image, View, StyleSheet,TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// @ts-ignore
import CardTinder from '../Components/CardTinder/CardTinder';



const HomePage = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView>
            {/*Header*/}
            <View style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <TouchableOpacity style={{ position: 'relative', marginHorizontal: windowWidth / 10 }} onPress={() => navigation.navigate("Profile")}>
                    <Image
                        source={require('../assets/icon_profil.png')}
                        resizeMode='contain'
                        style={{
                            width: 35,
                            height: 35,
                        }
                        } />
                </TouchableOpacity>


                <TouchableOpacity style={{ position: 'relative', marginHorizontal: windowWidth / 10 }}>
                    <Image
                        source={require('../assets/header_tinder.png')}
                        resizeMode='contain'
                        style={{

                            width: 120,
                            height: 60,
                        }
                        } />
                </TouchableOpacity>

                <TouchableOpacity style={{ position: 'relative', marginHorizontal: windowWidth / 10 }}>
                    <Image
                        source={require('../assets/icon_notification.png')}
                        resizeMode='contain'
                        style={{
                            width: 35,
                            height: 35,
                        }
                        } />
                </TouchableOpacity>
            </View>
            {/*End Of Header*/}



            <View style={{
                height:windowHeight*0.78,
            }}>
                <CardTinder/>
            </View>


            {/*Begin Tab */}
            <View style={{
                height: 0.1 * windowHeight,
                position: 'relative',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent:'center',
            }}>
                <TouchableOpacity style={{ marginHorizontal: windowWidth / 10 }} onPress={() => navigation.navigate("HomePage")}>
                    <Image
                        source={require('../assets/icon_tinder.png')}
                        resizeMode='contain'
                        style={{
                            width: 35,
                            height: 40,
                            tintColor: '#f02d5c',
                        }

                        } />

                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: windowWidth / 10 }} onPress={() => navigation.navigate("LikePage")}>
                    <Image
                        source={require('../assets/icon_like.png')}
                        resizeMode='contain'
                        style={{
                            width: 35,
                            height: 40,
                            tintColor: '#9e9e9e',
                        }

                        } />

                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: windowWidth / 10 }} onPress={() => navigation.navigate("ChatPage")}>
                    <Image
                        source={require('../assets/icon_chat.png')}
                        resizeMode='contain'
                        style={{
                            width: 35,
                            height: 40,
                            tintColor: '#9e9e9e',
                        }

                        } />

                </TouchableOpacity>

            </View>
            {/*End Tab */}
        </SafeAreaView>
    );
};


export default HomePage;

