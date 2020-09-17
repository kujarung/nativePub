import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import {btn} from 'assets/styleSheet/btn';

export const BtnPrimaryBorder = (props) => {
  press = () => {
    this.state.press();
  };

  return (
    <TouchableOpacity onPress={press}>
      <View style={[btn.btn, btn.borderPrimaryBtn]}>
        <Text style={[btn.btnFontPrimary]}>{props.btnTxt}</Text>
      </View>
    </TouchableOpacity>
  );
};
