import React from 'react';
import { View, Text } from 'react-native';
import pretest from 'assets/styleSheet/pretest';
import { BtnAnserBorder } from 'screen/components/BtnAnserBorder'
import btn from 'assets/styleSheet/btn';
import common from 'assets/styleSheet/common';

export const Pretest1 = () => {
  
  onPress = (txt, status) => {}
  
  const anserList = [
    {
      title: '사칭하다',
      active: true
    },
    {
      title: '동행하다',
      active: false
    },
    {
      title: '회사',
      active: false
    },
    {
      title: '이사하다',
      active: false
    }
  ]

  return (
    <View style={common.stackWidthContainer}>
      <View style={pretest.contentContainer}>
        <View style={pretest.titleContainer}>
          <Text style={[common.h2]}>
            Q1
          </Text>
          <View style={common.primarySmallLine}/>
        </View>
        
        <View style={pretest.contentProblem}>
          <Text style={[common.h5, common.fontBold]}>There is a way to </Text>
          <View style={pretest.anserContainer}><Text style={[common.h5, common.fontBold]}></Text>
          </View>
          <Text style={[common.h5, common.fontBold]}>with an English children’s book.</Text>
        </View>

      </View>
      <View style={[btn.bottomBtnConLong]}>
        {
          anserList.map( (anser, index, arr) => {
            return (
              <View 
                style={ index === arr.length - 1? {marginBottom: 0 } : {marginBottom: 15} }
                key={anser + '_' +index}
              >
                <BtnAnserBorder btnTxt={anser.title} active={anser.active} onPress={onPress}/>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}