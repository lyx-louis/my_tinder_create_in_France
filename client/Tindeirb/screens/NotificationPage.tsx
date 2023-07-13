import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar} from 'expo-status-bar';
import React,{useState} from 'react';
import {Image, View, TouchableOpacity,Text} from 'react-native';
import styles from "../styles/homePageStyle"


function NotificationPageScreen() {
  return (
      <View style={styles.container}>
          <Text> Notification page </Text>
      </View>
  );
};

export default NotificationPageScreen;