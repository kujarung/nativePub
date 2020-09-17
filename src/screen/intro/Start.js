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
              그럼 어떻게
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
              내게 딱 맞는
            </Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 5}}>
                <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
                  가장
                </Text>
              </View>
              <View style={{marginRight: 5}}>
                <View
                  style={{
                    width: 70,
                    borderBottomColor: 'rgba(23, 105,255, .5)',
                    borderBottomWidth: 8,
                    bottom: 5,
                    position: 'absolute',
                  }}
                />
                <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
                  효과적
                </Text>
              </View>
              <View style={{marginRight: 5}}>
                <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
                  이고
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 60,
                    borderBottomColor: 'rgba(23, 105,255, .5)',
                    borderBottomWidth: 8,
                    bottom: 5,
                    position: 'absolute',
                  }}
                />
                <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
                  흥미로운
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View />
          <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
            학습 콘텐츠
          </Text>
        </View>

        <View style={intro.innerBottomText}>
          <View style={{marginBottom: 15}}>
            <Image source={icRest} style={common.restIcon} />
          </View>
          <View>
            <Text style={[common.h6, common.fontThin, {lineHeight: 30}]}>
              <Text style={[common.fontBold, , {lineHeight: 30}]}>
                AI 큐레이터
              </Text>{' '}
              가 추천하는 콘텐츠로{'\n'}
              지금 바로{' '}
              <Text style={[common.fontBold, , {lineHeight: 30}]}>
                읽기 학습
              </Text>{' '}
              을 시작할 수 있어요.{'\n'}
              가장 빠르게 실력이 오르는 순서로{'\n'}
              내가 좋아하는{' '}
              <Text style={[common.fontBold, , {lineHeight: 30}]}>
                콘텐츠
              </Text>{' '}
              를 <Text style={[common.fontBold, , {lineHeight: 30}]}>추천</Text>
              합니다.{'\n'}
              {'\n'}
            </Text>
          </View>
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
            <View
              style={{
                width: 150,
                borderBottomColor: 'rgba(23, 105,255, .5)',
                borderBottomWidth: 8,
                bottom: -35,
                left: 60,
              }}
            />
            <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
              나의 영어 읽기 실력이
            </Text>
          </View>
          <View>
            <View />
            <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
              좋아지고 있는 것을
            </Text>
          </View>
        </View>
        <View>
          <View />
          <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
            눈으로 볼 수 있어요
          </Text>
        </View>

        <View style={intro.innerBottomText}>
          <View style={{marginBottom: 15}}>
            <Image source={icRest} style={common.restIcon} />
          </View>
          <View>
            <Text style={[common.h6, common.fontThin, {lineHeight: 30}]}>
              꾸준히 노력해도 실력이 늘고 있는지{'\n'}
              알기 어려웠던 점을{' '}
              <Text style={[common.fontBold, , {lineHeight: 30}]}>
                AI 큐레이터
              </Text>
              가 해결해줘요.{'\n'}
              모든 학습 과정을{' '}
              <Text style={[common.fontBold, , {lineHeight: 30}]}>
                수치화
              </Text>{' '}
              하고{' '}
              <Text style={[common.fontBold, , {lineHeight: 30}]}>분석</Text>{' '}
              해서{'\n'}
              실력이 어떻게 변하는지 차트로 보여 드려요. {'\n'}
            </Text>
          </View>
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
            <View
              style={{
                width: 130,
                borderBottomColor: 'rgba(23, 105,255, .5)',
                borderBottomWidth: 8,
                bottom: -35,
              }}
            />
            <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
              몇 퍼센트%가
            </Text>
          </View>
          <View>
            <View />
            <Text style={[common.h3, common.fontBlack, {lineHeight: 40}]}>
              되고 싶나요?
            </Text>
          </View>
        </View>

        <View style={intro.innerBottomText}>
          <View style={{marginBottom: 40}}>
            <Text style={common.h7}>여러분의 리딩퍼센트를 채워보세요.</Text>
            <Text style={[common.h4Small, common.fontAvenir]}>
              Just get on a rocket ship
            </Text>

            <View style={{flexDirection: 'row'}}>
              <Text
                style={[common.h4Small, common.fontAvenir, {marginRight: 5}]}>
                with
              </Text>
              <View
                style={{
                  width: 210,
                  position: 'absolute',
                  borderBottomColor: color.primary,
                  borderBottomWidth: 1,
                  bottom: 1,
                  left: 50,
                }}
              />
              <Text
                style={[
                  common.h4Small,
                  common.fontAvenir,
                  common.fontAvenirBold,
                ]}>
                READING PERCENT!{' '}
              </Text>
            </View>
          </View>

          <View style={{marginBottom: 15}}>
            <Image source={icRest} style={common.restIcon} />
          </View>
          <View>
            <Text style={[common.h6, common.fontThin, {lineHeight: 30}]}>
              더 많은 콘텐츠를{' '}
              <Text style={[common.fontBold, , {lineHeight: 30}]}>
                읽고, 생각
              </Text>
              하고,{' '}
              <Text style={[common.fontBold, , {lineHeight: 30}]}>성장</Text>
              하는{'\n'}
              여러분을{' '}
              <Text style={[common.fontBold, , {lineHeight: 30}]}>응원</Text>
              합니다.
            </Text>
          </View>
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
      <View>{slide5()}</View>
      <View>{slide6()}</View>
      <View>{slide7()}</View>
    </Swiper>
  );
};
AppRegistry.registerComponent('publish', () => Start);
