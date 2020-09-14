import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import btn from 'assets/styleSheet/btn';
import intro from 'assets/styleSheet/intro';
import common from 'assets/styleSheet/common'
import { mainBak } from 'assets/styleSheet/imageUtils';
import color from 'assets/styleSheet/color';
import { ProgressCircle } from 'react-native-svg-charts'

export const Intro2 = () => {
  
  press = () => {
    console.log(press)
  }

  return (
    <View style={common.mainContainer}>
      <ImageBackground source={mainBak} style={intro.mainBackImg}/>
      <View style={intro.bottomCard}>
        <View style={[{ flex: 1, marginBottom: 30}]}>
          <Text style={[common.h3]}>
            인터넷에서  {"\n"}
            영어로 쓰인 콘텐츠는  {"\n"}
            얼마나 될까요?          
          </Text>
        </View>
        <View style={{flex: 4,}}>
          <ProgressCircle style={{ height: 180 }} progress={0.6} progressColor={color.primary} />
          <View style={intro.innerPercent}>
            <Text style={common.percentTxt}>
              60<Text style={[common.h5, {lineHeight: 75}]}>%</Text>
            </Text>
          </View>
        </View>
        <View style={[btn.bottomBtnCon, {flex: 1} ]}>
          <Text style={[common.h6, {color: color.fontGray}, {marginBottom: 14}]}>
            인터넷 조사기관 W3CTech에 의하면 {"\n"}
            영어는 60%이며 1위로 조사됐어요.{"\n"}
            이 중 한글 콘텐츠는 단 0.6%라고 해요.{"\n"}
            우리가 이 0.6%의 장벽을 뛰어 넘는다면 {"\n"}
            어떤 변화가 일어날까요?
          </Text>
          <Text style={[common.h4, common.fontBold]}>
            당신은 몇 퍼센트가 되고 싶나요?
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={press} style={btn.bottomBtnCon}>
        <View style={[btn.btn, btn.backgroundPrimaryBtn]}>
          <Text style={[btn.btnFontWhite, btn.btnFont, common.fontBold]}>알아보기</Text>
        </View>
      </TouchableOpacity>
    </View>
  ) 
}
