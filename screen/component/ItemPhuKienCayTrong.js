import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import FONT_SIZE from '../value/font_size';
import COLOR from '../value/color';
const ItemPhuKienCayTrong = ({navigation, item}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        width: '50%',
        height: 217,
        elevation: 10,
        shadowColor: COLOR.gray,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: COLOR.white,
        marginRight: 10,
      }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DentailProductScreen', {
            itemId: item.id,
            itemName: item.name,
            itemPrice: item.price,
            itemImage: item.image,
          })
        }>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 5,
            }}
            source={{
              uri: item.image,
            }}
          />
        </View>
        <View style={{margin: 15}}>
          <Text
            style={{
              fontSize: FONT_SIZE.font_size_14,
              fontWeight: 'bold',
              color: COLOR.black,
              margin: 3,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: FONT_SIZE.font_size_12,
              fontWeight: '600',
              color: COLOR.main,
              margin: 3,
            }}>
            {item.price}đ
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemPhuKienCayTrong;
