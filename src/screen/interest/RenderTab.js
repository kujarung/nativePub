import * as React from 'react';
import { TabBar } from 'react-native-tab-view';
import { View, Text, Image, ScrollView, FlatList, TouchableHighlight } from 'react-native';

const RenderTabBar = (props) => {
  return (
    <TabBar
      renderLabel={({ route, focused, color }) => (
        <View style={ 
          [ 
            {paddingBottom: 10, borderBottomWidth: 2, marginBottom: 10},
            focused ? {borderBottomColor: '#F91D3E'} : {borderColor: 'white'}
          ]
        }>
          <Text style={ focused ? { color: 'black', fontWeight: 'bold'} : {color: '#777'}}>
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
        shadowOffset: {
            height: 0,
        },
        borderBottomWidth: 0,
        borderBottomColor: 'transparent'  
      }}
      tabStyle= {{width: 'auto', marginLeft: 20}}
    />
  )
}

export { RenderTabBar }