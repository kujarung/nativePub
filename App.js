/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Button,
  Text,
  SafeAreaView,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Intro1 } from 'screen/intro/Intro1'
import { Intro2 } from 'screen/intro/Intro2'
import { Intro3 } from 'screen/intro/Intro3'
import { login } from 'screen/login'
import { signupPop } from 'screen/signupPop'
import { signupResult } from 'screen/signupResult'
import { PretestIntro } from 'screen/pretest/PretestIntro'
import PretestStack from 'screen/pretest/PretestStack'
import InterestStack from 'screen/interest/InterestStack';
import { CustomDrawerContent } from 'screen/components/CustomDrawerContent'
import { Header } from 'screen/components/Header';

function HomeScreen({ navigation }) {
  return (
    <Header/>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContent = { (props) =>  CustomDrawerContent(props) }
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Intro1" component={Intro1} />
        <Drawer.Screen name="Intro2" component={Intro2} />
        <Drawer.Screen name="Intro3" component={Intro3} />
        <Drawer.Screen name="login" component={login} />
        <Drawer.Screen name="signupPop" component={signupPop} />
        <Drawer.Screen name="signupResult" component={signupResult} />
        <Drawer.Screen name="pretestIntro" component={PretestIntro} />
        <Drawer.Screen name="pretestStack" component={PretestStack} />
        <Drawer.Screen name="interestStack" component={InterestStack} />
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
