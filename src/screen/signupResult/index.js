import React from 'react';
import {Text, View, Image} from 'react-native';
import {avatar, icRest} from 'assets/styleSheet/imageUtils';
import btn from 'assets/styleSheet/btn';
import common from 'assets/styleSheet/common';
import sign from 'assets/styleSheet/sign';
import {BtnPrimaryBac} from '../components/BtnPrimaryBac';

export const signupResult = () => {
  onPress = () => {
    console.log('onPress');
  };

  return (
    <View style={[sign.resultContainer]}>
      <View style={{marginBottom: 65}}>
        <Text style={[common.h2]}>Welcome!</Text>
        <View style={common.primarySmallLine} />
      </View>

      <View style={{marginBottom: 30}}>
        <Image source={avatar} style={[sign.avatarImage, sign.avatarCenter]} />
      </View>

      <View style={{marginBottom: 10}}>
        <Image source={icRest} style={common.restIcon} />
      </View>

      <Text style={[common.h6, common.fontThin, {lineHeight: 25}]}>
        안녕하세요, <Text style={common.fontBold}>닉네임</Text>님! {'\n'}
        리딩퍼센트에 합류하신 것을 진심으로{' '}
        <Text style={common.fontBold}>환영합니다.</Text> :) {'\n'}
        장벽을 무너뜨리는 그 날까지 <Text style={common.fontBold}>함께</Text>
        해요! {'\n'}
      </Text>

      <View style={btn.bottomBtnCon}>
        <BtnPrimaryBac btnTxt={'확인'} onPress={onPress} />
      </View>
    </View>
  );
};
