import React from 'react';
import {TextInput, View, Image} from 'react-native';
import btn from 'assets/styleSheet/btn';
import {search} from 'assets/styleSheet/imageUtils';
import common from 'assets/styleSheet/common';

export const SearchInput = (props) => {
  return (
    <View style={btn.searchContainer}>
      <Image source={search} style={[common.iconSize, {marginRight: 10}]} />
      <TextInput placeholder={props.placeholder} />
    </View>
  );
};
