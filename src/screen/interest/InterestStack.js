import React from 'react'
import { View, Button, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Inrerest1 } from 'screen/interest/Inrerest1';
import { Inrerest2 } from 'screen/interest/Inrerest2';
import { Inrerest3 } from 'screen/interest/Inrerest3';
import { Recommend } from 'screen/interest/Recommend';
import { backBtn } from 'assets/styleSheet/imageUtils';
import common from 'assets/styleSheet/common';

const Stack = createStackNavigator();
const headerStyle = {
  backgroundColor: '#fff',
  shadowColor: 'transparent',
  shadowRadius: 0,
  shadowOffset: { height: 0, width: 0 },
  elevation: 0
}

const options = (navigation, noLeft) => {
  return (
    {
      headerTitle: "",
      headerLeft: ({}) => headerLeft(navigation, noLeft),
      headerStyle
    }    
  )
}

const headerLeft = (navigation, noLeft) => {
  return (
    noLeft ? null : <TouchableOpacity onPress={ () => navigation.goBack() } style={common.backBtnContainer}><Image source={backBtn}/></TouchableOpacity>
  )
}

const InterestStack = () => {
  function Main({navigation}) {
    return (
      <View>
        <Button
          onPress={ () => navigation.navigate('recommend') }
          title="recommend"
        />
        <Button
          onPress={ () => navigation.navigate('Inrerest1') }
          title="Inrerest1"
        />        
        <Button
          onPress={ () => navigation.navigate('Inrerest2') }
          title="Inrerest2"
        />          
        <Button
          onPress={ () => navigation.navigate('Inrerest3') }
          title="Inrerest3"
        />              
      </View>
    )
  }

  return (
    <Stack.Navigator
      initialRouteName="Main"
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={ ({ navigation, route }) => options(navigation)}
      />
      <Stack.Screen
        name="recommend"
        component={Recommend}
        options={ ({ navigation, route }) => options(navigation)}
      />      
      <Stack.Screen
        name="Inrerest1"
        component={Inrerest1}
        options={ ({ navigation, route }) => options(navigation)}
      />            
      <Stack.Screen
        name="Inrerest2"
        component={Inrerest2}
        options={ ({ navigation, route }) => options(navigation)}
      />           
      <Stack.Screen
        name="Inrerest3"
        component={Inrerest3}
        options={ ({ navigation, route }) => options(navigation)}
      />             
    </Stack.Navigator>
  );
}



export default InterestStack;