import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { BtnPrimaryBac } from 'screen/components/BtnPrimaryBac'
import common from 'assets/styleSheet/common';
import btn from 'assets/styleSheet/btn';
import color from 'assets/styleSheet/color';
import { SearchInput } from '../components/SearchInput';
import interest from 'assets/styleSheet/interest';
import CheckComponent from '../components/CheckComponent';

export const Inrerest2 = () => {
  const [ list, setList ] = useState([]);
  const [ autoList , setAutoList ] = useState([])
  useEffect( () => {
    setList([
      {
        id: 1,
        title: '#정치',
        active: true
      },
      {
        id: 2,
        title: '#경제',
        active: true
      },
      {
        id: 3,
        title: '#스포츠',
        active: true
      },
      {
        id: 4,
        title: '#건강LGBTIQ',
        active: true
      },
      {
        id: 6,
        title: '#게임',
        active: true
      },
      {
        id: 5,
        title: '#소프트웨어개발',
        active: true
      },      
    ])
    setAutoList([
      {
        id: "pro1",
        title: "# program",
        isChecked: false
      },
      {
        id: "pro2",
        title: "# programming",
        isChecked: false
      },
      {
        id: "pro3",
        title: "# programming",
        isChecked: false
      }            
    ])
  },[] )

  return (
    <View style={common.stackWidthContainer}>
      <View style={[common.contentCon, {marginTop: 15}]}>
        <View style={{marginBottom: 36 }}>
          <Text style={[common.h5, common.fontBold]}>
            관심사는 해시태그는 무엇인가요?
          </Text>      
        </View>

        <View style={{marginBottom: 26}}>
          <View style={{marginBottom: 22 }} >
            <SearchInput placeholder={'programming'}/>
          </View>
          <View style={interest.autoCompleteWarp}>
            {
              autoList.map(val => (
              <View 
                style={interest.autoCompleteContainer}
                key={val.id}
              >
                <Text style={[common.h6, {color:color.darkBlack}]}>
                  {val.title}
                </Text>
                <CheckComponent />
              </View>
              ))
            }
          </View>
        </View>
        
        <ScrollView horizontal style={interest.listContainer}>
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
        </ScrollView>

      </View>
      <View style={btn.bottomBtnCon}>
        <BtnPrimaryBac btnTxt={'다음'}/>
      </View>      
    </View>
  )
}