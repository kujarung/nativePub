import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {xbtn} from 'assets/styleSheet/imageUtils';
import common from 'assets/styleSheet/common';

export const CustomDrawerContent = (props) => {
  closeDrawer = () => {
    props.navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity onPress={closeDrawer} style={{alignItems: 'flex-end'}}>
        <View style={{marginTop: 20, marginRight: 20}}>
          <Image source={xbtn} style={{width: 20, height: 20}} contain />
        </View>
      </TouchableOpacity>
      <View style={{marginBottom: 24, marginTop: 40, marginLeft: 20}}>
        <Text style={[common.h5, common.fontBold]}>오늘의 콘텐츠</Text>
        <View style={common.primarySmallLine} />
      </View>
      <DrawerItemList
        activeBackgroundColor={'transparent'}
        activeTintColor={'black'}
        labelStyle={{
          fontSize: 18,
          color: '#777777',
          fontFamily: 'Avenir-Book',
        }}
        {...props}
      />
    </DrawerContentScrollView>
  );
};
