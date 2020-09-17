import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import common from 'assets/styleSheet/common';
import popup from 'assets/styleSheet/popup';
import Modal, {ModalContent} from 'react-native-modals';
import {BtnPrimaryBac} from '../components/BtnPrimaryBac';
import {icRest} from 'assets/styleSheet/imageUtils';

export const PretestIntro = () => {
  const [visible, setVisible] = useState(false);

  openPop = () => {
    setVisible(true);
  };

  onPress = () => {
    console.log('aaa');
  };
  return (
    <View style={(common.mainContainer, {marginTop: '50%'})}>
      <TouchableOpacity onPress={openPop}>
        <Text style={{textAlign: 'center'}}>openPop</Text>
      </TouchableOpacity>
      <Modal
        width={0.9}
        visible={visible}
        onTouchOutside={() => {
          setVisible(false);
        }}>
        <ModalContent>
          <View style={[popup.popupContainer, {marginBottom: 43}]}>
            <Text style={[common.h4, common.fontBold, {marginBottom: 30}]}>
              나의 첫번째 콘텐츠
            </Text>
            <View style={{marginBottom: 10}}>
              <Image source={icRest} style={common.restIcon} />
            </View>
            <View>
              <Text style={[common.h6, common.fontThin]}>
                <Text style={common.fontBold}>어떤 콘텐츠</Text> 로 시작하면
                좋을까요?{'\n'}
                학습 효과가 좋고 <Text style={common.fontBold}>
                  관심사
                </Text>와 <Text style={common.fontBold}>흥미</Text>에 맞는{' '}
                {'\n'}
                콘텐츠가 좋을 것 같아요.{'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                편한 마음으로 <Text style={common.fontBold}>퀴즈</Text>를 풀어
                주세요!
              </Text>
            </View>
          </View>
          <BtnPrimaryBac btnTxt={'시작하기'} onPress={onPress} />
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => console.log('press')}>
            <Text style={[common.primaryEmasis, common.textCenter]}>
              먼저 둘러보기
            </Text>
          </TouchableOpacity>
        </ModalContent>
      </Modal>
    </View>
  );
};
