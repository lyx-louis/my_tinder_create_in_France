import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login";
import NewUserScreen from "./screens/newUser"
import React from 'react';
import {navigationRef} from "./rootNavigation";
import ProfileScreen from "./screens/Profile";
import EditProfileScreen from "./screens/EditProfile";
import PreviewScreen from "./screens/Preview";
import InscriptionScreen from "./screens/inscription/etape1";
import IdentificationUserScreen from "./screens/identificationUser";
import LikePage from "./screens/LikePage";

import HomePage from "./screens/HomePage";
import ChatPage from './screens/ChatPage';
import Etape2Screen from "./screens/inscription/etape2";
import Etape3Screen from "./screens/inscription/etape3";
import Etape4Screen from "./screens/inscription/etape4";
import Etape5Screen from "./screens/inscription/etape5";
import Etape6Screen from "./screens/inscription/etape6";
import Etape7Screen from "./screens/inscription/etape7";
import Etape8Screen from "./screens/inscription/etape8";
import Etape9Screen from "./screens/inscription/etape9";
import SettingScreen from "./screens/Setting";



const mainStack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer ref={navigationRef} >
            <mainStack.Navigator  screenOptions={{headerShown: false}}>
                <mainStack.Screen name="Login" component={LoginScreen}/>
                <mainStack.Screen name="NewUser" component={NewUserScreen}/>
                <mainStack.Screen name={"IdentificationUser"} component={IdentificationUserScreen}/>
                <mainStack.Screen name="HomePage" component={HomePage}  />
                <mainStack.Screen name="Profile" component={ProfileScreen}/>
                <mainStack.Screen name="ChatPage" component={ChatPage}/>
                <mainStack.Screen name="LikePage" component={LikePage}/>
                <mainStack.Screen name="EditProfile" component={EditProfileScreen}/> 
                <mainStack.Screen name="Preview" component={PreviewScreen}/> 
                <mainStack.Screen name="Inscription" component={InscriptionScreen}/> 
                <mainStack.Screen name="Etape2" component={Etape2Screen}/>
                <mainStack.Screen name="Etape3" component={Etape3Screen}/>
                <mainStack.Screen name="Etape4" component={Etape4Screen}/>
                <mainStack.Screen name="Etape5" component={Etape5Screen}/>
                <mainStack.Screen name="Etape6" component={Etape6Screen}/>
                <mainStack.Screen name="Etape7" component={Etape7Screen}/>
                <mainStack.Screen name="Etape8" component={Etape8Screen}/>
                <mainStack.Screen name="Etape9" component={Etape9Screen}/>
                <mainStack.Screen name="Settings" component={SettingScreen}/>
            </mainStack.Navigator>
        </NavigationContainer>
    );
}


