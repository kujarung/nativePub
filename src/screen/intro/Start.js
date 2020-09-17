import React from 'react';
import common from 'assets/styleSheet/common';
import color from 'assets/styleSheet/color';
import btn from 'assets/styleSheet/btn';
import {View, Image, Dimensions, AppRegistry, Text} from 'react-native';
import {
  logoImg,
  logoTxt,
  bottomBack,
  icRest,
} from 'assets/styleSheet/imageUtils';
import Swiper from 'react-native-swiper';
import {BtnPrimaryBac} from '../components/BtnPrimaryBac';
import intro from 'assets/styleSheet/intro';

const {width, height} = Dimensions.get('window');
export const Start = () => {
  const slide1 = () => (
    <View style={(common.mainContainer, {height})}>
      <View style={{marginTop: 160, alignItems: 'center'}}>
        <Image resizeMode="contain" source={logoTxt} style={{width: 280}} />
      </View>

      <View
        style={{
          width: width - 40,
          position: 'absolute',
          bottom: 20,
          left: 20,
          alignItems: 'center',
        }}>
        <Image source={bottomBack} resizeMode="contain" />
      </View>
    </View>
  );

  const slide2 = () => (
    <View style={(common.mainContainer, {height})}>
      <View style={{marginTop: 130, marginBottom: 40, alignItems: 'center'}}>
        <Image source={logoImg} style={{width: 50, height: 50}} />
      </View>
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <Image
          source={logoTxt}
          style={{width: 300, height: 40}}
          resizeMode="contain"
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={[common.h7, common.fontAvenir, {color: color.fontGray}]}>
          Just get on a rocket ship with READING PERCENT!
        </Text>
      </View>
      <View style={btn.bottomBtnConLong}>
        <BtnPrimaryBac btnTxt="시작하기" />
      </View>
    </View>
  );

  const slide3 = () => (
    <View style={(common.mainContainer, {height})}>
      <View style={[intro.bottomCard]}>
        <View>
          <View>
            <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
              지금 우리에게 {'\n'}
              가장 필요한 영어 능력은
            </Text>
          </View>
          <View>
            <View
              style={{
                width: 45,
                borderBottomColor: 'rgba(23, 105,255, .5)',
                borderBottomWidth: 8,
                bottom: -35,
              }}
            />
            <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
              읽기,
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              width: 145,
              borderBottomColor: 'rgba(23, 105,255, .5)',
              borderBottomWidth: 8,
              bottom: -35,
            }}
          />
          <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
            READING% 입니다
          </Text>
        </View>

        <View style={intro.innerBottomText}>
          <View style={{marginBottom: 15}}>
            <Image source={icRest} style={common.restIcon} />
          </View>
          <Text style={[common.h6, common.fontThin, {lineHeight: 30}]}>
            인터넷 영어
            <Text style={[common.fontBold, , {lineHeight: 30}]}>콘텐츠</Text>의
            비율은 약
            <Text style={[common.fontBold, , {lineHeight: 30}]}>60%</Text> 로
            {'\n'}
            한국어보다
            <Text style={[common.fontBold, {lineHeight: 30}]}>600배</Text>나
            많아요.
            {'\n'}
            디지털 콘텐츠의 폭발적인 증가로 {'\n'}
            <Text style={[common.fontBold, {lineHeight: 30}]}>정보</Text>의
            격차는 더욱 심해지고 있죠.
          </Text>
        </View>
      </View>
      <View style={btn.bottomBtnCon}>
        <BtnPrimaryBac btnTxt="어떻게 하면 되나요?" />
      </View>
    </View>
  );

  const slide4 = () => (
    <View style={(common.mainContainer, {height})}>
      <View style={[intro.bottomCard]}>
        <View>
          <View>
            <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
              그럼 어떻게 {'\n'}
            </Text>
          </View>
          <View>
            <View
              style={{
                width: 125,
                borderBottomColor: 'rgba(23, 105,255, .5)',
                borderBottomWidth: 8,
                bottom: -35,
              }}
            />
            <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
              영어 콘텐츠 습득 능력을
            </Text>
          </View>
        </View>
        <View>
          <View />
          <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
            향상 시킬 수 있나요?
          </Text>
        </View>

        <View style={intro.innerBottomText}>
          <View style={{marginBottom: 15}}>
            <Image source={icRest} style={common.restIcon} />
          </View>
          <View>
            <Text style={[common.h6, common.fontThin, {lineHeight: 30}]}>
              <Text style={[common.fontBold, , {lineHeight: 30}]}>
                영어 전문가
              </Text>
              들은 다양한 원서를
              <Text style={[common.fontBold, , {lineHeight: 30}]}>꾸준히</Text>
              {'\n'}
              그리고
              <Text style={[common.fontBold, {lineHeight: 30}]}>많이</Text>
              읽어야 한다고{' '}
              <Text style={[common.fontBold, {lineHeight: 30}]}>조언</Text>
              하고 있어요.
              {'\n'}
              막상 해보면 정말 말처럼 쉽지만은 않아요.
            </Text>
          </View>
        </View>
      </View>
      <View style={btn.bottomBtnCon}>
        <BtnPrimaryBac btnTxt="어떻게 하면 되나요?" />
      </View>
    </View>
  );

  const slide5 = () => (
    <View style={(common.mainContainer, {height})}>
      <View style={[intro.bottomCard]}>
        <View>
          <View>
            <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
              지금 우리에게 {'\n'}
              가장 필요한 영어 능력은
            </Text>
          </View>
          <View>
            <View
              style={{
                width: 45,
                borderBottomColor: 'rgba(23, 105,255, .5)',
                borderBottomWidth: 8,
                bottom: -35,
              }}
            />
            <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
              읽기,
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              width: 145,
              borderBottomColor: 'rgba(23, 105,255, .5)',
              borderBottomWidth: 8,
              bottom: -35,
            }}
          />
          <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
            READING% 입니다
          </Text>
        </View>

        <View style={intro.innerBottomText}>
          <View style={{marginBottom: 15}}>
            <Image source={icRest} style={common.restIcon} />
          </View>
          <Text style={[common.h6, common.fontThin, {lineHeight: 30}]}>
            인터넷 영어
            <Text style={[common.fontBold, , {lineHeight: 30}]}>콘텐츠</Text>의
            비율은 약
            <Text style={[common.fontBold, , {lineHeight: 30}]}>60%</Text> 로
            {'\n'}
            한국어보다
            <Text style={[common.fontBold, {lineHeight: 30}]}>600배</Text>나
            많아요.
            {'\n'}
            디지털 콘텐츠의 폭발적인 증가로 {'\n'}
            <Text style={[common.fontBold, {lineHeight: 30}]}>정보</Text>의
            격차는 더욱 심해지고 있죠.
          </Text>
        </View>
      </View>
      <View style={btn.bottomBtnCon}>
        <BtnPrimaryBac btnTxt="어떻게 하면 되나요?" />
      </View>
    </View>
  );

  const slide6 = () => (
    <View style={(common.mainContainer, {height})}>
      <View style={[intro.bottomCard]}>
        <View>
          <View>
            <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
              지금 우리에게 {'\n'}
              가장 필요한 영어 능력은
            </Text>
          </View>
          <View>
            <View
              style={{
                width: 45,
                borderBottomColor: 'rgba(23, 105,255, .5)',
                borderBottomWidth: 8,
                bottom: -35,
              }}
            />
            <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
              읽기,
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              width: 145,
              borderBottomColor: 'rgba(23, 105,255, .5)',
              borderBottomWidth: 8,
              bottom: -35,
            }}
          />
          <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
            READING% 입니다
          </Text>
        </View>

        <View style={intro.innerBottomText}>
          <View style={{marginBottom: 15}}>
            <Image source={icRest} style={common.restIcon} />
          </View>
          <Text style={[common.h6, common.fontThin, {lineHeight: 30}]}>
            인터넷 영어
            <Text style={[common.fontBold, , {lineHeight: 30}]}>콘텐츠</Text>의
            비율은 약
            <Text style={[common.fontBold, , {lineHeight: 30}]}>60%</Text> 로
            {'\n'}
            한국어보다
            <Text style={[common.fontBold, {lineHeight: 30}]}>600배</Text>나
            많아요.
            {'\n'}
            디지털 콘텐츠의 폭발적인 증가로 {'\n'}
            <Text style={[common.fontBold, {lineHeight: 30}]}>정보</Text>의
            격차는 더욱 심해지고 있죠.
          </Text>
        </View>
      </View>
      <View style={btn.bottomBtnCon}>
        <BtnPrimaryBac btnTxt="어떻게 하면 되나요?" />
      </View>
    </View>
  );

  const slide7 = () => (
    <View style={(common.mainContainer, {height})}>
      <View style={[intro.bottomCard]}>
        <View>
          <View>
            <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
              지금 우리에게 {'\n'}
              가장 필요한 영어 능력은
            </Text>
          </View>
          <View>
            <View
              style={{
                width: 45,
                borderBottomColor: 'rgba(23, 105,255, .5)',
                borderBottomWidth: 8,
                bottom: -35,
              }}
            />
            <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
              읽기,
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              width: 145,
              borderBottomColor: 'rgba(23, 105,255, .5)',
              borderBottomWidth: 8,
              bottom: -35,
            }}
          />
          <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
            READING% 입니다
          </Text>
        </View>

        <View style={intro.innerBottomText}>
          <View style={{marginBottom: 15}}>
            <Image source={icRest} style={common.restIcon} />
          </View>
          <Text style={[common.h6, common.fontThin, {lineHeight: 30}]}>
            인터넷 영어
            <Text style={[common.fontBold, , {lineHeight: 30}]}>콘텐츠</Text>의
            비율은 약
            <Text style={[common.fontBold, , {lineHeight: 30}]}>60%</Text> 로
            {'\n'}
            한국어보다
            <Text style={[common.fontBold, {lineHeight: 30}]}>600배</Text>나
            많아요.
            {'\n'}
            디지털 콘텐츠의 폭발적인 증가로 {'\n'}
            <Text style={[common.fontBold, {lineHeight: 30}]}>정보</Text>의
            격차는 더욱 심해지고 있죠.
          </Text>
        </View>
      </View>
      <View style={btn.bottomBtnCon}>
        <BtnPrimaryBac btnTxt="어떻게 하면 되나요?" />
      </View>
    </View>
  );

  return (
    <Swiper showsButtons={false} showsPagination={false}>
      <View>{slide1()}</View>
      <View>{slide2()}</View>
      <View>{slide3()}</View>
      <View>{slide4()}</View>
    </Swiper>
  );
};
AppRegistry.registerComponent('publish', () => Start);
