import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FONT_SIZE from '../value/font_size';
import COLOR from '../value/color';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemPerson = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 100,
        margin: 10,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: FONT_SIZE.font_size_15,
          color: COLOR.gray1,
          marginStart: 20,
        }}>
        Chung
      </Text>
      <View
        style={{
          marginStart: 20,
          marginEnd: 20,
          borderBottomWidth: 1,
          borderColor: COLOR.gray1,
          width: 350,
          marginTop: 5,
        }}></View>
      <TouchableOpacity onPress={() => navigation.navigate('CamNangCayTrong')}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: FONT_SIZE.font_size_15,
            color: COLOR.black,
            marginStart: 20,
            marginBottom: 10,
            marginTop: 25,
          }}>
          Cẩm nang cây trồng
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('QandA')}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: FONT_SIZE.font_size_15,
            color: COLOR.black,
            marginStart: 20,
            marginBottom: 40,
          }}>
          Q&A
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: FONT_SIZE.font_size_15,
          color: COLOR.gray1,
          marginStart: 20,
        }}>
        Bảo mật và Điều khoản
      </Text>
      <View
        style={{
          marginStart: 20,
          marginEnd: 20,
          borderBottomWidth: 1,
          borderColor: COLOR.gray1,
          width: 350,
          marginTop: 5,
        }}></View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: FONT_SIZE.font_size_15,
          color: COLOR.black,
          marginStart: 20,
          marginBottom: 10,
          marginTop: 25,
        }}>
        Điều khoản điều kiện
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: FONT_SIZE.font_size_15,
          color: COLOR.black,
          marginStart: 20,
          marginBottom: 20,
        }}>
        Bảo mật và Điều khoản
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: FONT_SIZE.font_size_15,
            color: COLOR.red,
            marginStart: 20,
            marginBottom: 10,
          }}>
          Đăng xuất
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemPerson;
