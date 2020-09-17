import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import common from 'assets/styleSheet/common';
import popup from 'assets/styleSheet/popup';
import Modal, {ModalContent} from 'react-native-modals';
import CheckComponent from '../components/CheckComponent';
import {BtnPrimaryBac} from '../components/BtnPrimaryBac';

export const signupPop = () => {
  const [visible, setVisible] = useState(false);
  const [agreeList] = useState([
    {
      title: '전체 동의하기',
    },
    {
      title: '[필수] 서비스 이용약관 >',
    },
    {
      title: '[필수] 개인정보 처리방침 >',
    },
    {
      title: '[선택] 마케팅 메시지 수신 동의 (이메일) >',
    },
    {
      title: '[선택] 마케팅 메시지 수신 동의 (SMS) >',
    },
  ]);
  openPop = () => {
    setVisible(true);
  };

  onPress = () => {
    console.log('aaa');
  };
  return (
    <View style={(common.mainContainer, {marginTop: '50%'})}>
      <TouchableOpacity onPress={openPop}>
        <Text style={{textAlign: 'center'}}>회원가입</Text>
      </TouchableOpacity>
      <Modal
        width={0.9}
        visible={visible}
        onTouchOutside={() => {
          setVisible(false);
        }}>
        <ModalContent>
          <View style={[popup.popupContainer, {marginBottom: 30}]}>
            <Text style={[common.h4, common.fontBold, {marginBottom: 43}]}>
              약관 및 동의
            </Text>
            <View>
              {agreeList.map((val, index) => (
                <CheckComponent
                  key={val.title + '_' + index}
                  statusTxt={val.title}
                />
              ))}
            </View>
          </View>
          <BtnPrimaryBac btnTxt={'동의하고 계속하기'} onPress={onPress} />
        </ModalContent>
      </Modal>
    </View>
  );
};
