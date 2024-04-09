import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import COLOR from '../value/color';
import FONT_SIZE from '../value/font_size';

const ItemXoaDonHang = ({onConfirmDelete, onCancelDelete}) => {
  return (
    <View
      style={{
        width: '90%',
        backgroundColor: COLOR.white,
        height: 180,
        marginStart: 20,
        marginEnd: 20,
        borderRadius: 10,
        margin: 10,
      }}>
      <Text
        style={{
          color: COLOR.black,
          fontWeight: 'bold',
          textAlign: 'center',
          padding: 10,
          fontSize: FONT_SIZE.font_size_16,
        }}>
        Xác nhận xóa đơn hàng
      </Text>
      <Text
        style={{
          color: COLOR.black,
          fontWeight: '400',
          textAlign: 'center',
          fontSize: FONT_SIZE.font_size_16,
        }}>
        Thao tác này sẽ không thể khôi phục
      </Text>
      <TouchableOpacity
        onPress={onConfirmDelete}
        style={{
          backgroundColor: COLOR.main,
          margin: 20,
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: COLOR.white,
            fontWeight: 'bold',
            textAlign: 'center',
            padding: 10,
            fontSize: FONT_SIZE.font_size_16,
          }}>
          Đồng ý
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onCancelDelete}>
        <Text
          style={{
            color: COLOR.black,
            fontWeight: '400',
            fontStyle: 'italic',
            textAlign: 'center',
            textDecorationLine: 'underline',
            fontSize: FONT_SIZE.font_size_16,
          }}>
          Hủy bỏ
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ItemXoaDonHang;
