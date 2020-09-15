import React from 'react';
import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../components/Header';
import common from 'assets/styleSheet/common';
import daily from 'assets/styleSheet/daily';
import {base, base2} from 'assets/styleSheet/imageUtils';

export const Daily = (props) => {
  const imgList = [base, base2];
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Header nav={props.nav} />
      <View style={[common.contentCon, {marginBottom: 20}]}>
        <Text style={common.h2Samll}>오늘의 콘텐츠</Text>
      </View>
      {imgList.map((val, index) => {
        return (
          <View style={{marginBottom: 20}}>
            <View style={common.contentCon}>
              <ImageBackground
                source={val}
                style={daily.imageSizeLong}
                resizeMode="stretch">
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.6)']}
                  style={daily.linearGradientLong}
                />
                <View style={daily.innerTxtCon}>
                  <View style={daily.labelWrap}>
                    <View style={daily.labelContainer}>
                      <Text style={daily.labelFont}>Global</Text>
                    </View>
                    <View style={daily.labelContainer}>
                      <Text style={daily.labelFont}>Lv.30</Text>
                    </View>
                  </View>
                  <Text style={[common.h4, common.fontBold, {color: 'white'}]}>
                    At least 50 people {'\n'}
                    burned to death in a bus {'\n'}
                    collision in Ghana
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};
