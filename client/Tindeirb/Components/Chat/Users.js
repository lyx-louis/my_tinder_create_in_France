import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Button,FlatList,Image,Pressable,StyleSheet,TextInput,View,Text,SafeAreaView,TouchableOpacity,Dimensions,} from 'react-native';

export default function Users({ users, onClickUser, userToAdd, setUserToAdd, onAddMatch }) {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  const renderUser = ({ item }) => {
    return (
      <Pressable onPress={() => onClickUser(item)} style={styles.row}>
        <Image style={styles.avatar} source={{ uri: item.avatar }} />
        <Text>{item.username}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      {/*Header*/}
      <View style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        <TouchableOpacity style={{ position: 'relative',marginHorizontal:windowWidth/10 }} onPress={() => navigation.navigate("Profile")}>
          <Image
            source={require('../../assets/icon_profil.png')}
            resizeMode='contain'
            style={{
              width: 35,
              height: 35,
            }
            } />
        </TouchableOpacity>


        <TouchableOpacity style={{position: 'relative',marginHorizontal:windowWidth/10}}>
          <Image
            source={require('../../assets/header_tinder.png')}
            resizeMode='contain'
            style={{
              
              width: 120,
              height: 60,
            }
            } />
        </TouchableOpacity>

        <TouchableOpacity style={{position: 'relative',marginHorizontal:windowWidth/10}}>
          <Image
            source={require('../../assets/icon_notification.png')}
            resizeMode='contain'
            style={{
              width: 35,
              height: 35,
            }
            } />
        </TouchableOpacity>
      </View>
      {/*End Of Header*/}


      <View style={styles.addUser}>
        <TextInput
          style={styles.input}
          onChangeText={setUserToAdd}
          value={userToAdd}
        />
        <Button title={'Add Match'} onPress={() => onAddMatch(userToAdd)} />
      </View>
      <FlatList
        style={{
          top: 20,
          height:0.7*windowHeight,
        }}
        data={users}
        renderItem={renderUser}
        keyExtractor={item => item.username.toString()}
      />
      


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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#cacaca',
    borderBottomWidth: 1,
  },
  addUser: {
    top: 10,
    flexDirection: 'row',
    padding: 10,
    
  },
  input: {
    backgroundColor: '#cacaca',
    flex: 1,
    marginRight: 10,
    padding: 10,
  },
});