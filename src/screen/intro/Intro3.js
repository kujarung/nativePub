import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import btn from 'assets/styleSheet/btn';
import intro from 'assets/styleSheet/intro';
import common from 'assets/styleSheet/common'
import { mainBak } from 'assets/styleSheet/imageUtils';
import color from 'assets/styleSheet/color';

export const Intro3 = () => {
  
  press = () => {
    console.log(press)
  }

  return (
    <View style={common.mainContainer}>
      <ImageBackground source={mainBak} style={intro.mainBackImg}/>
      <View style={intro.bottomCard}>
        <View>
          <Text style={[common.h3]}>
            시작하기  
          </Text>
        </View>
        <View style={intro.innerBottomText}>
          <Text style={[common.h6, {color: color.fontGray}]}>
            지금보다 더 많은 영어 콘텐츠를{"\n"}
            읽을 수 있으려면 {"\n"}
            특별한 방법이 필요해요.  {"\n"}
            어떻게 하면 되는지 같이 알아봐요
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={press} style={btn.bottomBtnCon}>
        <View style={[btn.btn, btn.backgroundPrimaryBtn]}>
          <Text style={[btn.btnFontWhite, btn.btnFont, common.fontBold]}>어떻게 하면 되나요?</Text>
        </View>
      </TouchableOpacity>
    </View>
  ) 
}
