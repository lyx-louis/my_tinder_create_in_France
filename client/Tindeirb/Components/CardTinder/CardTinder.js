
'use strict';

import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import GestionRequete from "../../Controller/GestionRequete";
import { addLike } from "../../Controller/UserController";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class Card extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

      <View style={{
        width: windowWidth * 0.9,
        height: windowHeight * 0.7,

      }}>

        <View style={{
          backgroundColor: '#fff',
          resizeMode: 'cover',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          shadowColor: 'black',
          shadowRadius: 20,
          borderRadius: 20,
        }}>
          <ImageBackground style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: 20,
          }} source={require('../../assets/user1.jpg')}>
            <Text style={{
              marginHorizontal: 10,
              marginVertical: 5,
              color: '#fff',
              fontSize: 32,
              top: windowHeight * 0.5,
            }}>{this.props.prenom}</Text>
            <Text style={{
              marginHorizontal: 10,
              marginVertical: 5,
              color: '#fff',
              fontSize: 19,
              top: windowHeight * 0.5,
            }}>{this.props.age}</Text>
          </ImageBackground>
        </View>
      </View>
    )
  }
}



export default class CardTinder extends React.Component {

  requete = new GestionRequete();

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      outOfCards: false
    }
  }

  componentDidMount() {
    this.requete.RecupUserCards().then(async reponse => {
      const data = await JSON.parse(await reponse.json());
      this.setState({ cards: data });
    })
  }

  handleYup(card) {
    addLike(card).then();
  }

  cardRemoved(index) {
    console.log(`The index is ${index}`);

  }


  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={true}

        renderCard={(cardData) => <Card {...cardData} />}
        showYup={true}
        showNope={true}
        nopeText={"NO"}
        yupText={"LIKE"}
        allowGestureTermination={true}

        handleYup={this.handleYup}
        cardRemoved={this.cardRemoved.bind(this)}
        smoothTransition={true}
      />
    )
  }
}
