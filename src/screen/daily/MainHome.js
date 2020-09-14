import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import color from 'assets/styleSheet/color';
import common from 'assets/styleSheet/common';
import { base, base2, ic_percent } from 'assets/styleSheet/imageUtils';
import LinearGradient from 'react-native-linear-gradient';

export const MainHome = (props) => {
  return (
    <>
      <ScrollView>
        <Header nav={props.nav}/>
        <View style={{}}>
          <Text>
            Contents
          </Text>
          <View>
            <Image source={ic_percent} style={common.iconSize}/>
          </View>
        </View>

        <View style={{paddingLeft: 20, paddingRight: 20}}>
          <LinearGradient colors={['rgba(0,0,0,0.5)', 'transparent']}>
            <Image source={base} style={{height: 540}} resizeMode='contain'/> 
          </LinearGradient>          
        </View>

      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});