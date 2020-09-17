import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import pretest from 'assets/styleSheet/pretest';
import {BtnPrimaryBac} from 'screen/components/BtnPrimaryBac';
import color from 'assets/styleSheet/color';
import common from 'assets/styleSheet/common';
import {ProgressCircle} from 'react-native-svg-charts';
import {icRest} from 'assets/styleSheet/imageUtils';

export const PretestResult = () => {
  return (
    <ScrollView style={[common.stackWidthContainer]}>
      <View style={pretest.contentContainer}>
        <Text style={[common.h2, {marginBottom: 10}]}>Result</Text>
        <View style={{marginBottom: 40, lineHeight: 26}}>
          <Text style={[common.h6, common.fontThin]}>
            닉네임님은 <Text style={common.fontBold}>42%</Text>의 콘텐츠을 읽을
            수 있어요.{'\n'}약 <Text style={common.fontBold}>123만개</Text>의
            콘텐츠를 학습해보세요!
          </Text>
        </View>

        <View style={{marginBottom: 32}}>
          <ProgressCircle
            style={{height: 200}}
            progress={0.42}
            progressColor={color.primary}
          />
          <View style={pretest.innerPercent}>
            <Text style={[common.h2, common.textCenter]}>
              42<Text style={[common.h7]}>%</Text>
            </Text>
            <Text
              style={[common.h7, common.textCenter, {color: color.fontGray}]}>
              약 123만개 콘텐츠
            </Text>
          </View>
        </View>

        <View style={{marginBottom: 15}}>
          <TouchableOpacity>
            <Text style={[common.primaryEmasis, {textAlign: 'right'}]}>
              먼저 둘러보기
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[common.textBox, {marginBottom: 20}]}>
          <View style={{marginBottom: 10}}>
            <Image source={icRest} style={common.restIcon} />
          </View>
          <Text style={[common.h6, common.fontThin, {lineHeight: 26}]}>
            닉네임님에 대해 알려주시면{' '}
            <Text style={common.fontBold}>딱 맞는 콘텐츠</Text>를{'\n'}
            찾아볼게요. {'\n'}
            닉네임님의 <Text style={common.fontBold}>응답</Text>을 선택해
            주세요!
          </Text>
        </View>

        <View style={{marginBottom: 30}}>
          <BtnPrimaryBac btnTxt={'설문조사 하기'} />
        </View>
      </View>
    </ScrollView>
  );
};
