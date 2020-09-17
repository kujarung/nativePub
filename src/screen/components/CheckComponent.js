import React, {useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import common from 'assets/styleSheet/common';
import {icEmptyChecked, icChecked} from 'assets/styleSheet/imageUtils';

const CheckComponent = (props) => {
  const [isChecked, setIschecked] = useState(false);

  checkedFun = () => {
    console.log(isChecked);
    setIschecked(!isChecked);
  };

  return (
    <TouchableOpacity style={common.checkContainer} onPress={checkedFun}>
      <Image
        source={isChecked ? icChecked : icEmptyChecked}
        style={common.checkImage}
      />
      <Text style={isChecked ? common.checkTxt : common.uncheckedTxt}>
        {props.statusTxt}
      </Text>
    </TouchableOpacity>
  );
};

export default CheckComponent;
