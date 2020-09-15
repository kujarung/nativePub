import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import btn from 'assets/styleSheet/btn';
import sign from 'assets/styleSheet/sign';
import common from 'assets/styleSheet/common';
import color from 'assets/styleSheet/color';
import {
  naverBtn,
  kakaoBtn,
  fbBtn,
  googleBtn,
} from 'assets/styleSheet/imageUtils';

export const login = () => {
  return (
    <SafeAreaView style={common.mainContainer}>
      <View style={sign.bttomContainer}>
        <View style={sign.logStyleCon}>
          <Text style={{color: 'white', fontSize: 30}}>로고</Text>
        </View>
        <View style={{marginBottom: 29}}>
          <Text style={common.h2}>Sign In</Text>
        </View>
        <View style={{marginBottom: 33}}>
          <Text style={[common.h6, common.fontThin]}>
            읽고, 생각하고 성장하여 <Text style={common.fontBold}>60%</Text>의
            {'\n'}
            장벽을 뛰어 넘는 <Text style={common.fontBold}>리딩퍼센트</Text>에
            초대합니다.
          </Text>
        </View>
        <TouchableOpacity
          style={[btn.btn, btn.backgruondNaverBtn, {marginBottom: 16}]}>
          <Image source={naverBtn} style={btn.leftBtnImg} />
          <Text style={[btn.btnFont, btn.btnFontWhite, common.textCenter]}>
            네이버로 시작
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[btn.btn, btn.backgruondKakaoBtn, {marginBottom: 16}]}>
          <Image source={kakaoBtn} style={btn.leftBtnImg} />
          <Text style={[btn.btnFont, common.textCenter, {color: color.black}]}>
            카카오로 시작
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[btn.btn, btn.backgruondFbBtn, {marginBottom: 16}]}>
          <Image source={fbBtn} style={btn.leftBtnImg} />
          <Text style={[btn.btnFont, btn.btnFontWhite, common.textCenter]}>
            페이스북으로 시작
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[btn.btn, btn.backgruondGoogleBtn, {marginBottom: 16}]}>
          <Image source={googleBtn} style={btn.leftBtnImg} />
          <Text style={[btn.btnFont, common.textCenter, {color: color.gray}]}>
            구글로 시작
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={common.h7}>아직 리딩퍼센트의 회원이 아니신가요?</Text>
          <TouchableOpacity>
            <Text style={[common.primaryEmasis, {marginLeft: 5}]}>
              먼저 둘러보기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
