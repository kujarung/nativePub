import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { BtnPrimaryBac } from 'screen/components/BtnPrimaryBac'
import common from 'assets/styleSheet/common';
import btn from 'assets/styleSheet/btn';
import { SearchInput } from '../components/SearchInput';
import interest from 'assets/styleSheet/interest';

export const Inrerest3 = () => {
  const [ list, setList ] = useState([]);
  useEffect( () => {
    setList([
      {
        id: 1,
        title: '학생',
        active: true
      },
      {
        id: 2,
        title: '직장인',
        active: true
      },
      {
        id: 3,
        title: '기업가',
        active: true
      },
      {
        id: 4,
        title: '은퇴자',
        active: true
      },
      {
        id: 6,
        title: '일반인',
        active: true
      },
      {
        id: 5,
        title: '선택안함',
        active: true
      },      
    ])
  },[] )

  return (
    <View style={common.stackWidthContainer}>
      <View style={[common.contentCon, {marginTop: 15}]}>
        <View style={{marginBottom: 36 }}>
          <Text style={[common.h5, common.fontBold]}>
            현재 직업은 무엇인가요
          </Text>      
        </View>

        <View style={{marginBottom: 26}}>
          <View style={{marginBottom: 22 }} >
            <SearchInput placeholder={'직접입력 (ex: 디자이너, 개발자, 번역가 등)'}/>
          </View>
          <View style={interest.listContainer}>
          {
            list.map( item => {
              return (
                <TouchableOpacity 
                  onPress={() => onPress(item)} 
                  style={[interest.selectItem, item.active ? interest.selectedCotainer : null]}
                  key={item.id}
                >
                  <Text style={[interest.selectItemFont, item.active ? interest.selectedFont : null]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )
            })
          }
          </View>
        </View>
      </View>
      <View style={btn.bottomBtnCon}>
        <BtnPrimaryBac btnTxt={'다음'}/>
      </View>      
    </View>
  )
}