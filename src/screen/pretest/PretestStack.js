import React from 'react';
import {View, Button, TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Pretest1} from 'screen/pretest/Pretest1';
import {Pretest2} from 'screen/pretest/Pretest2';
import {Pretest3} from 'screen/pretest/Pretest3';
import {PretestResult} from 'screen/pretest/PretestResult';
import {backBtn} from 'assets/styleSheet/imageUtils';
import common from 'assets/styleSheet/common';

const Stack = createStackNavigator();
const headerStyle = {
  backgroundColor: '#fff',
  shadowColor: 'transparent',
  shadowRadius: 0,
  shadowOffset: {height: 0, width: 0},
  elevation: 0,
  borderBottomWidth: 0,
};
const noHeader = {
  height: 0,
  backgroundColor: '#fff',
  shadowColor: 'transparent',
  shadowRadius: 0,
  shadowOffset: {height: 0, width: 0},
  elevation: 0,
  borderBottomWidth: 0,
};
const options = (navigation, noLeft) => {
  const style = noLeft ? noHeader : headerStyle;
  return {
    headerTitle: '',
    headerLeft: ({}) => headerLeft(navigation, noLeft),
    headerStyle: style,
  };
};

const headerLeft = (navigation, noLeft) => {
  return noLeft ? null : (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={[
        common.backBtnContainer,
        common.XYcenter,
        {height: 40, width: 30},
      ]}>
      <Image source={backBtn} style={{width: 10, height: 18}} />
    </TouchableOpacity>
  );
};

const PretestStack = () => {
  function Settings({navigation}) {
    return (
      <View>
        <Button
          onPress={() => navigation.navigate('pretest1')}
          title="pretest1"
        />
        <Button
          onPress={() => navigation.navigate('pretest2')}
          title="pretest2"
        />
        <Button
          onPress={() => navigation.navigate('pretest3')}
          title="pretest3"
        />
        <Button
          onPress={() => navigation.navigate('pretestResult')}
          title="pretestResult"
        />
      </View>
    );
  }

  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({navigation, route}) => options(navigation)}
      />
      <Stack.Screen
        name="pretest1"
        component={Pretest1}
        options={({navigation, route}) => options(navigation)}
      />
      <Stack.Screen
        name="pretest2"
        component={Pretest2}
        options={({navigation, route}) => options(navigation)}
      />
      <Stack.Screen
        name="pretest3"
        component={Pretest3}
        options={({navigation, route}) => options(navigation)}
      />
      <Stack.Screen
        name="pretestResult"
        component={PretestResult}
        options={({navigation, route}) => options(navigation, true)}
      />
    </Stack.Navigator>
  );
};

export default PretestStack;
