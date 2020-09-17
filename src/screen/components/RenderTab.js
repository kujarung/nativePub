import * as React from 'react';
import {TabBar} from 'react-native-tab-view';
import {View, Text} from 'react-native';
import color from 'assets/styleSheet/color';

const RenderTabBar = (props) => {
  return (
    <TabBar
      renderLabel={({route, focused}) => (
        <View
          style={[
            {paddingBottom: 10, borderBottomWidth: 2, marginBottom: 10},
            focused
              ? {borderBottomColor: color.primary}
              : {borderColor: 'white'},
          ]}>
          <Text
            style={
              focused ? {color: 'black', fontWeight: 'bold'} : {color: '#777'}
            }>
            {route.title}
          </Text>
        </View>
      )}
      scrollEnabled
      {...props}
      renderIndicator={() => null}
      style={{
        backgroundColor: '#fff',
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {height: 0, width: 0},
        elevation: 0,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
      }}
      tabStyle={{width: 'auto', marginLeft: 20}}
    />
  );
};

export {RenderTabBar};
