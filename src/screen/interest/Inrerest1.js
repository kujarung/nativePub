import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BtnPrimaryBac } from 'screen/components/BtnPrimaryBac'
import common from 'assets/styleSheet/common';
import interest from 'assets/styleSheet/interest';
import btn from 'assets/styleSheet/btn';

export const Inrerest1 = () => {

  const [ list, setList ] = useState([]);
  useEffect( () => {
    setList([
      {
        id: 1,
        title: '정치',
        active: true
      },
      {
        id: 2,
        title: '경제',
        active: false
      },
      {
        id: 3,
        title: '스포츠',
        active: false
      },
      {
        id: 4,
        title: '건강LGBTIQ',
        active: false
      },
      {
        id: 6,
        title: '게임',
        active: false
      },
      {
        id: 5,
        title: '소프트웨어개발',
        active: false
      },      
    ])
  },[] )


  const onPress = (item) => {
    const pressItem = list.find( val => val.id === item.id) 
    const resultList = list.map(val => {
      if(val.id === pressItem.id) {
        return { ...val ,active:  !val.active}
      } else {
        return val
      }
    })
    setList(resultList)
  }

  return (
    <View style={common.stackWidthContainer}>
      <View style={[common.contentCon, {marginTop: 15 }]}>
        <View style={{marginBottom: 36 }}>
          <Text style={[common.h5, common.fontBold]}>
            관심사는 무엇인가요?
          </Text>
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


      <View style={btn.bottomBtnCon}>
        <BtnPrimaryBac btnTxt={'다음'}/>
      </View>

    </View>
  )
}