import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {search, sidelist, activity} from 'assets/styleSheet/imageUtils';
import common from 'assets/styleSheet/common';
import {DrawerActions} from '@react-navigation/native';

export const Header = (props) => {
  const openingDwarer = () => {
    props.nav.dispatch(DrawerActions.openDrawer());
  };

  return (
    <SafeAreaView>
      <View style={style.headerContainer}>
        <TouchableOpacity
          onPress={openingDwarer}
          style={{width: 40, height: 40, justifyContent: 'center'}}>
          <Image source={sidelist} style={common.iconBig} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={activity}
              style={[common.iconBig, {marginRight: 20}]}
            />
          </View>
          <View>
            <Image source={search} style={common.iconBig} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 88,
  },
});
