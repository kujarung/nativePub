import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { xbtn } from 'assets/styleSheet/imageUtils';
import common from 'assets/styleSheet/common';

export const CustomDrawerContent = (props) =>  {
  console.log(props)
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={({}) => (
          <TouchableOpacity >
            <View style={{marginBottom: 24}}>
              <View style={{marginBottom: 54}}>
                <Image source={xbtn} style={[common.iconSize, {justifyContent: 'flex-end'}]}/>
              </View>
              <View>
                <Text style={[common.h5, common.fontBold]}>
                  오늘의 콘텐츠
                </Text>
                <View style={common.primarySmallLine}/>
              </View>          
            </View>
          </TouchableOpacity>
        )}
      />
      <DrawerItemList
        activeBackgroundColor={'#F3EDE6'}
        activeTintColor={'black'}
        {...props}
      />
    </DrawerContentScrollView>
  );
}
