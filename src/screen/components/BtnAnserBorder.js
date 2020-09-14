import btn from 'assets/styleSheet/btn';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const BtnAnserBorder = (props) => {
  
  const [ btnStatus, setBtnStatus ] = useState( !props.active ? true : false );

  onPress = () => {
    setBtnStatus(!btnStatus)
    props.onPress(props.btnTxt, btnStatus)
  }
  
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[btn.btn, btnStatus ? btn.anserBtnBorder : btn.anserBtnBorderSelect]}>
        <Text style={[btnStatus ? null : btn.btnFontPrimary, btn.btnFont]}>{props.btnTxt}</Text>
      </View>
    </TouchableOpacity>
  )
}