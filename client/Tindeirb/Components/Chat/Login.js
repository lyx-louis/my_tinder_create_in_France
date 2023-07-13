import React, { useLayoutEffect } from 'react';
import { Button, StyleSheet, TextInput, View, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login({ onLogin, username, setUsername }) {

  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <View style={{
        position: 'relative',
        height: windowHeight - 0.1 * windowHeight,
        width: windowWidth,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
      }}>
        <TextInput
          style={{
            backgroundColor: 'white',
            width: '80%',
            marginBottom: 40,
            borderRadius: 20,
            paddingHorizontal: 20,
          }}
          onChangeText={setUsername}
          value={username}
        />
        <Button title={'Login'} onPress={onLogin} />
      </View>
      {/*Begin Tab */}
      <View style={{
        height: 0.1 * windowHeight,
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}>
        <TouchableOpacity style={{ marginHorizontal: windowWidth / 10 }} onPress={() => navigation.navigate("HomePage")}>
          <Image
            source={require('../../assets/icon_tinder.png')}
            resizeMode='contain'
            style={{
              width: 35,
              height: 40,
              tintColor: '#9e9e9e',
            }

            } />

        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: windowWidth / 10 }} onPress={() => navigation.navigate("LikePage")}>
          <Image
            source={require('../../assets/icon_like.png')}
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
            source={require('../../assets/icon_chat.png')}
            resizeMode='contain'
            style={{
              width: 35,
              height: 40,
              tintColor: '#f02d5c',
            }

            } />

        </TouchableOpacity>

      </View>
      {/*End Tab */}
    </View>

  );
}

