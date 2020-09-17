import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../components/Header';
import color from 'assets/styleSheet/color';
import common from 'assets/styleSheet/common';
import daily from 'assets/styleSheet/daily';
import {
  base,
  base2,
  ic_percent,
  tempback1,
  tempback2,
} from 'assets/styleSheet/imageUtils';
import LinearGradient from 'react-native-linear-gradient';
import {RenderTabBar} from 'screen/components/RenderTab';
import {TabView, SceneMap} from 'react-native-tab-view';

export const MainHome = (props) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: '정치'},
    {key: 'second', title: '경제'},
    {key: 'third', title: '사회'},
    {key: 'four', title: '문화'},
  ]);
  const onIndexChange = (item) => {
    setIndex(item);
  };

  const imageList = [base, base2];
  const horizalData = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
  const verticalData = [{id: 10}, {id: 20}, {id: 30}, {id: 40}];

  const renderHorizalItem = () => (
    <View style={{paddingLeft: 20, paddingVertical: 20}}>
      <TouchableOpacity style={daily.horizalCardContainer}>
        <Image
          source={tempback1}
          style={{
            height: 140,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        />
        <View style={{paddingVertical: 10, paddingHorizontal: 15}}>
          <View style={daily.topDesc}>
            <Text style={[common.h6, {color: color.checkGray}]}>
              Apr 18, 2020
            </Text>
            <View style={daily.levelTxt}>
              <Text style={{color: color.primary}}>Lv.30</Text>
            </View>
          </View>
          <Text
            style={[{flexWrap: 'wrap'}, common.h6, common.fontBold]}
            numberOfLines={2}
            ellipsizeMode={'tail'}>
            At least 50 people burned to death in a b At least 50 people burned
            to death in a b At least 50 people burned to death in a b
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderVerticalItem = () => (
    <View style={common.contentCon}>
      <View style={daily.cardContainer}>
        <TouchableOpacity style={daily.innerCard}>
          <Image source={tempback2} style={[daily.innerImage]} />
          <View style={{flex: 1}}>
            <View style={daily.topDesc}>
              <Text style={[common.h6, {color: color.checkGray}]}>
                Apr 18, 2020
              </Text>
              <View style={daily.levelTxt}>
                <Text style={{color: color.primary}}>Lv.30</Text>
              </View>
            </View>
            <Text
              style={[{flexWrap: 'wrap'}, common.h6, common.fontBold]}
              numberOfLines={2}
              ellipsizeMode={'tail'}>
              At least 50 At leastAt least 50 At leastAt least 50 At leastAt
              least 50 At leastAt least 50 At leastAt least 50 At leastAt least
              50 At leastAt least 50 At leastAt least 50 At leastAt least 50 At
              least
            </Text>
          </View>
        </TouchableOpacity>
        <View style={[common.flexRow, common.Xaround, daily.bottomBack]}>
          <View>
            <Text style={[common.textCenter, common.h6, common.fontBold]}>
              27개
            </Text>
            <Text style={[common.h7, {color: color.gray50}]}>학습 단어 수</Text>
          </View>
          <View>
            <Text style={[common.textCenter, common.h6, common.fontBold]}>
              27개
            </Text>
            <Text style={[common.h7, {color: color.gray50}]}>학습 단어 수</Text>
          </View>
          <View>
            <Text style={[common.textCenter, common.h6, common.fontBold]}>
              27개
            </Text>
            <Text style={[common.h7, {color: color.gray50}]}>학습 단어 수</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderImageItem = (val) => (
    <View style={common.contentCon}>
      <ImageBackground
        source={val}
        style={daily.imageSize}
        resizeMode="stretch">
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.6)']}
          style={daily.linearGradient}
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
          <Text
            style={[
              common.h4,
              common.fontBold,
              {color: 'white', lineHeight: 32},
            ]}>
            At least 50 people {'\n'}
            burned to death in a bus {'\n'}
            collision in Ghana
          </Text>
        </View>
      </ImageBackground>
    </View>
  );

  const renderContent = () => (
    <>
      <View style={{marginBottom: 40}}>
        {imageList.map((val, index) => {
          return (
            <View key={`image-${index}`} style={{marginBottom: 40}}>
              {renderImageItem(val)}
            </View>
          );
        })}
      </View>

      <View style={{marginBottom: 40}}>
        <View style={[daily.titleCon, {marginBottom: 5}]}>
          <Text style={[common.h5, common.fontBold]}>최근 본 컨텐츠</Text>
          <TouchableOpacity>
            <Text style={[common.h7, common.fontBold, {color: color.primary}]}>
              더보기
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={horizalData}
          renderItem={renderHorizalItem}
        />
      </View>

      <View style={{marginBottom: 20}}>
        <View style={[daily.titleCon, {marginBottom: 20}]}>
          <Text style={[common.h5, common.fontBold]}>추천 컨텐츠</Text>
          <TouchableOpacity>
            <Text style={[common.h7, common.fontBold, {color: color.primary}]}>
              더보기
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList data={verticalData} renderItem={renderVerticalItem} />
      </View>
    </>
  );
  return (
    <>
      <ScrollView style={{backgroundColor: 'white'}}>
        <Header nav={props.nav} />
        <View
          style={[
            common.flexRow,
            common.contentCon,
            common.Xeq,
            common.Ycenter,
            {marginBottom: 21},
          ]}>
          <View>
            <Text style={[common.h2Samll, common.fontAvenirBold]}>
              Contents
            </Text>
          </View>
          <View style={daily.percentContainer}>
            <Image source={ic_percent} style={common.iconSize} />
          </View>
        </View>

        <View style={{marginBottom: 21}}>
          <TabView
            swipeEnabled={false}
            renderTabBar={RenderTabBar}
            navigationState={{index, routes}}
            onIndexChange={onIndexChange}
            renderScene={SceneMap({
              first: renderContent,
              second: renderContent,
              third: renderContent,
              four: renderContent,
            })}
          />
        </View>
      </ScrollView>
    </>
  );
};
