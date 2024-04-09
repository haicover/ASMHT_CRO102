import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FONT_SIZE from '../value/font_size';
import COLOR from '../value/color';



const ItemSreach = ({navigation, item}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
      }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DentailProductScreen', {
            itemId: item.id,
            itemName: item.name,
            itemPrice: item.price,
            itemImage: item.image,
            itemType:item.type,
          })
        }
        style={{
          width: '100%',
          height: 100,
          flexDirection: 'row',
          alignItems: 'center',
          margin: 10,
        }}>
        <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: 5,
            backgroundColor: COLOR.gray,
            marginRight: 10,
          }}
          source={{
            uri: item.image,
          }}
        />
        <View style={{margin: 10}}>
          <View style={{flexDirection: 'row'}}>
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
                fontSize: FONT_SIZE.font_size_14,
                fontWeight: 'bold',
                color: COLOR.gray,
                margin: 3,
              }}>
              {item.type}
            </Text>
          </View>
          <Text
            style={{
              fontSize: FONT_SIZE.font_size_13,
              fontWeight: '600',
              color: COLOR.main,
              margin: 3,
            }}>
            {item.price}
          </Text>
          <Text
            style={{
              fontSize: FONT_SIZE.font_size_14,
              fontWeight: 'bold',
              color: COLOR.black,
              margin: 3,
            }}>
            {item.remaining}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemSreach;
