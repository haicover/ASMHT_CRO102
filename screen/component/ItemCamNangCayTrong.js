import React from 'react';
import {Text, View, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import FONT_SIZE from '../value/font_size';
import COLOR from '../value/color';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
const ItemCamNangCayTrong = (props) => {
    const {navigation} = props;
  return (
    <View
      style={{
        width: '100%',
      }}>
      <View style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PersonScreen');
          }}>
          <Ionicons name="arrow-left" color={COLOR.black} size={30} />
        </TouchableOpacity>
        <Text
          style={{
            marginStart: 80,
            textAlign: 'center',
            fontSize: FONT_SIZE.font_size_16,
            color: COLOR.black,
            fontWeight: 'bold',
          }}>
          CẨM NANG CÂY TRỒNG
        </Text>
      </View>
    </View>
  );
};

export default ItemCamNangCayTrong;
