import React from 'react';
import { TextInput, View, Image } from 'react-native';
import btn from 'assets/styleSheet/btn';
import { zoom } from 'assets/styleSheet/imageUtils'
import common from 'assets/styleSheet/common'

export const SearchInput = (props) => {

  return (
    <View style={btn.searchContainer}>
      <Image source={zoom} style={[common.iconSize, {marginRight: 10} ]}/>
      <TextInput placeholder={props.placeholder}/>
    </View>
  )
}