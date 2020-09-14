import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import btn from 'assets/styleSheet/btn';
import intro from 'assets/styleSheet/intro';
import common from 'assets/styleSheet/common';
import { mainBakWidthImage } from 'assets/styleSheet/imageUtils';


export const Intro1 = () => {
  press = () => {
    console.log(press)
  }
  return (
    <View style={common.mainContainer}>
      <ImageBackground source={mainBakWidthImage} style={intro.mainBackImg}/>
      <View style={[intro.textPosition, {marginBottom: 20} ]}>
        <Text style={[common.h4, common.textCenter]}>
          읽고 생각하고 성장하는 {"\n"}
          당신을 돕습니다.
        </Text>
      </View>
      <View>
        <Text style={[common.h3, common.textCenter]}>
          리딩퍼센트
        </Text>
      </View>

      <TouchableOpacity onPress={press} style={btn.bottomBtnCon}>
        <View style={[btn.btn, btn.borderPrimaryBtn]}>
          <Text style={[btn.btnFontPrimary, btn.btnFontPrimary]}>다음</Text>
        </View>
      </TouchableOpacity>
    </View>
  ) 

}

