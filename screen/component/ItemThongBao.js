import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FONT_SIZE from '../value/font_size';
import COLOR from '../value/color';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemThongBao = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 100,
        margin: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
           flex:1,
            textAlign: 'center',
            fontSize: FONT_SIZE.font_size_16,
            color: COLOR.black,
            fontWeight: 'bold',
          }}>
          THÔNG BÁO
        </Text>
      </View>

      <View>
        <TouchableOpacity>
          <TextInput
            placeholder="Thứ tư, 03/09/2021"
            style={{borderBottomWidth: 1, width: '85%', margin: 30,justifyContent:'center'}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin:30
        }}>
        <Image
          style={{
            width: 80,
            height: 80,
            borderRadius: 5,
            backgroundColor: COLOR.gray,
          }}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/8dc1/c3fd/4c79faa42e885c9a92c6e6b29666fdf3?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SN8dfveQg7QLp6SdSRzbPWu13QARtAMC3~PNhxteWKgTmEB6P-wJqBAGzeJ74Z9PFpp53nIubIwK7wDR1sj7o6EaQIaDsJejYWs8fQdJ4ZskkQ3IprRMmv2aTbA8HTSz5e-CyYvGy271f1tVlSNNazPxmzl~qy61nj9hHOIzvadouQFpg-dX5aSmCwXkh~hG3za5dzsHScrDNGa~yfmujhZ6sH~YFju2CyOq9K0ysR5MwGD3LgL5QWKYUfikrhn3qILLLHx01R8vVwVlI2hQnZIO2~c9wosgrsKwkZND3KkbUjuhwevPRHyzVmyveU8mPIL5LXV8R2IcrtdnvKkvRg__',
          }}
        />
        <View style={{margin: 10}}>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: FONT_SIZE.font_size_14,
                fontWeight: 'bold',
                color: COLOR.main,
                margin: 3,
              }}>
              Đặt hàng thành công
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: FONT_SIZE.font_size_14,
                  fontWeight: 'bold',
                  color: COLOR.black,
                  margin: 3,
                }}>
                Spider Plant |
              </Text>
              <Text
                style={{
                  fontSize: FONT_SIZE.font_size_14,
                  fontWeight: 'bold',
                  color: COLOR.gray,
                  margin: 3,
                }}>
                Ưa bóng
              </Text>
            </View>
            <Text
              style={{
                fontSize: FONT_SIZE.font_size_14,
                fontWeight: 500,
                color: COLOR.black,
                margin: 3,
              }}>
              2 sản phẩm
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemThongBao;
