import React,{useState} from 'react';
import {Text, View, TouchableOpacity, } from 'react-native';
import COLOR from '../value/color';
import FONT_SIZE from '../value/font_size';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
const ItemChiTietSanPham = (props) => {
  const {navigation} = props;
  const [quantity, setQuantity] = useState(1);
  const price = 250000; // Giá của sản phẩm
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const totalPrice = price * quantity;
  return (
    <View
      style={{
        width: '90%',
        margin: 10,
        paddingBottom: 20,
        flex:2,
      }}>
      <View style={{flexDirection: 'row', marginStart: 10}}>
        <Text
          style={{
            fontSize: FONT_SIZE.font_size_14,
            fontWeight: '400',
            color: COLOR.black,
          }}>
          Giá hiện tại
        </Text>
        <Text
          style={{
            marginStart: 10,
            fontSize: FONT_SIZE.font_size_16,
            fontWeight: 'bold',
            color: COLOR.black,
          }}>
          {price}đ
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginStart: 10,
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 2}}>
          <Text
            style={{
              marginTop: 5,
              fontSize: FONT_SIZE.font_size_14,
              fontWeight: '400',
              color: COLOR.black,
            }}>
            Đã chọn {quantity} sản phẩm
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <TouchableOpacity onPress={decreaseQuantity}>
              <Ionicons
                style={{marginEnd: 20}}
                name="minus-box"
                color={COLOR.black}
                size={30}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: FONT_SIZE.font_size_14,
                fontWeight: 'bold',
                color: COLOR.black,
              }}>
              {quantity}
            </Text>
            <TouchableOpacity onPress={increaseQuantity}>
              <Ionicons
                style={{marginStart: 21}}
                name="plus-box"
                color={COLOR.black}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              marginTop: 5,
              fontSize: FONT_SIZE.font_size_14,
              fontWeight: '400',
              color: COLOR.black,
            }}>
            Tạm tính
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: FONT_SIZE.font_size_16,
              fontWeight: 'bold',
              color: COLOR.black,
            }}>
            {totalPrice}đ
          </Text>
        </View>
      </View>
      
    </View>
  );
};

export default ItemChiTietSanPham;
