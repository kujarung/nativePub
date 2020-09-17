import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import btn from 'assets/styleSheet/btn';
import common from 'assets/styleSheet/common';

export const BtnPrimaryBac = (props) => {
  onPress = () => {
    props.onPress();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[btn.btn, btn.backgroundPrimaryBtn]}>
        <Text style={[btn.btnFontWhite, btn.btnFont, common.fontBold]}>
          {props.btnTxt}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
