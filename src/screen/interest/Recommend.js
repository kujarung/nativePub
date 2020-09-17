import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {BtnPrimaryBac} from 'screen/components/BtnPrimaryBac';
import color from 'assets/styleSheet/color';
import common from 'assets/styleSheet/common';
import interest from 'assets/styleSheet/interest';
import {icRest} from 'assets/styleSheet/imageUtils';
import {TabView, SceneMap} from 'react-native-tab-view';
import {rectangle} from 'assets/styleSheet/imageUtils';
import {RenderTabBar} from 'screen/components/RenderTab';

export const Recommend = () => {
  const DATA = [{id: 1}, {id: 2}, {id: 3}];
  const DATA2 = [{id: 10}, {id: 20}, {id: 30}];

  const FirstRoute = () => (
    <View style={{height: DATA.length * 180}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );

  const SecondRoute = () => (
    <View style={{height: DATA2.length * 180}}>
      <FlatList
        data={DATA2}
        renderItem={renderItem}
        keyExtractor={(item) => 'itemId_' + item.id}
      />
    </View>
  );

  const onIndexChange = (item) => {
    setIndex(item);
  };

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: '정치'},
    {key: 'second', title: '라이프스타일라이프스타일라이프스타일'},
  ]);

  const renderItem = (data) => (
    <View style={[common.contentCon, {paddingBottom: 10, paddingTop: 10}]}>
      <View style={interest.cardContainer}>
        <TouchableOpacity style={interest.innerCard}>
          <Image
            source={rectangle}
            style={[interest.innerImage, {marginRight: 10}]}
          />
          <View style={{flex: 1}}>
            <View style={interest.topDesc}>
              <Text style={[common.h7, {color: color.checkGray}]}>
                Apr 18, 2020
              </Text>
              <View style={interest.levelTxt}>
                <Text style={{color: color.primary}}>Lv.30</Text>
              </View>
            </View>
            <Text
              style={[{flexWrap: 'wrap'}, common.fontBold, common.h6]}
              numberOfLines={2}
              ellipsizeMode={'tail'}>
              At least 50 At leastAt least 50 At leastAt least 50 At leastAt
              least 50 At leastAt least 50 At leastAt least 50 At leastAt least
              50 At leastAt least 50 At leastAt least 50 At leastAt least 50 At
              least
            </Text>
          </View>
        </TouchableOpacity>
        <ScrollView horizontal style={interest.bottomCard}>
          <View>
            <Text style={interest.bottomTxt}>#bio</Text>
          </View>
          <View>
            <Text style={interest.bottomTxt}>#bio</Text>
          </View>
          <View>
            <Text style={interest.bottomTxt}>#bio</Text>
          </View>
          <View>
            <Text style={interest.bottomTxt}>#bio</Text>
          </View>
          <View>
            <Text style={interest.bottomTxt}>#bio</Text>
          </View>
          <View>
            <Text style={interest.bottomTxt}>#bio</Text>
          </View>
          <View>
            <Text style={interest.bottomTxt}>#bio</Text>
          </View>
          <View>
            <Text style={interest.bottomTxt}>#bio</Text>
          </View>
          <View>
            <Text style={interest.bottomTxt}>#bio</Text>
          </View>
          <View>
            <Text style={interest.bottomTxt}>#bio</Text>
          </View>
          <View>
            <Text style={interest.bottomTxt}>#bio</Text>
          </View>
          <View>
            <Text style={interest.bottomTxt}>#bio</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );

  return (
    <View style={common.stackWidthContainer}>
      <ScrollView>
        <View style={[common.contentCon, {marginTop: 22}]}>
          <Text style={[common.h2, common.fontAvenirBold, {marginBottom: 25}]}>
            Result
          </Text>
          <View style={{marginBottom: 15}}>
            <Image source={icRest} style={common.restIcon} />
          </View>
          <View style={{marginBottom: 25}}>
            <Text style={[common.h6, common.fontThin, {lineHeight: 26}]}>
              약 <Text style={common.fontBold}>42%</Text>의 콘텐츠들 중에서
              {'\n'}
              닉네임님께서{' '}
              <Text style={common.fontBold}>좋아하실 만한 학습 콘텐츠</Text>를
              골라봤어요. {'\n'}이 중 하나를 선택해서 학습을 시작해 보세요.
            </Text>
          </View>
        </View>

        <View style={[common.contentCon, {marginBottom: 25}]}>
          <Text style={[common.h5, common.fontBold]}>추천 콘텐츠</Text>
        </View>

        <View>
          <TabView
            renderTabBar={RenderTabBar}
            navigationState={{index, routes}}
            onIndexChange={onIndexChange}
            renderScene={SceneMap({
              first: FirstRoute,
              second: SecondRoute,
            })}
          />
        </View>

        <View style={[common.contentCon]}>
          <View style={[common.textBox, {marginBottom: 30}]}>
            <View style={{marginBottom: 10}}>
              <Image source={icRest} style={common.restIcon} />
            </View>
            <Text style={[common.h6, common.fontThin, {lineHeight: 26}]}>
              혹시 마음에 들지 않으세요?{'\n'}
              그렇다면 <Text style={common.fontBold}>홈 화면</Text>에서 매일
              업데이트 되는{'\n'}
              다양한 콘텐츠를{' '}
              <Text style={common.fontBold}>직접 골라보세요.</Text>
            </Text>
          </View>

          <View style={{marginBottom: 30}}>
            <BtnPrimaryBac btnTxt={'홈화면으로 가기'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
