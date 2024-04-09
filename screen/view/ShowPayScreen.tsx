import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import COLOR from '../value/color'
import FONT_SIZE from '../value/font_size'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const ShowPayScreen = ({ navigation,route}) => {
    const { name, address, email, phone,subtotal, } = route.params || {};
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flexDirection: 'row', margin: 20, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('CartScreen');
                    }}>
                    <Ionicons name="arrow-left" color={COLOR.black} size={30} />
                </TouchableOpacity>
                <Text style={{ marginStart: 80, textAlign: 'center', fontSize: FONT_SIZE.font_size_16, color: COLOR.black, fontWeight: 'bold' }}>
                    THÔNG BÁO
                </Text>
            </View>
            <Text style={{ color: COLOR.main, fontSize: FONT_SIZE.font_size_20, textAlign: 'center', marginTop: 50, fontWeight: '600' }}>
                Bạn đã thanh toán thành công
            </Text>
            <Text style={{ color: COLOR.black, fontSize: FONT_SIZE.font_size_18, textAlign: 'center', marginTop: 50, fontWeight: '600' }}>
                Thông tin khác hàng đã thanh toán thành công
            </Text>
            <Text style={{ color: COLOR.black, fontSize: FONT_SIZE.font_size_14, textAlign: 'left', marginTop: 30, fontWeight: '500' ,marginStart:30}}>
                Tên: {name} - -  Địa chỉ: {address}
            </Text>
            <Text style={{ color: COLOR.black, fontSize: FONT_SIZE.font_size_14, textAlign: 'left', marginTop: 30, fontWeight: '500', marginStart: 30 }}>
                Email: {email}  
            </Text>
            <Text style={{ color: COLOR.black, fontSize: FONT_SIZE.font_size_14, textAlign: 'left', marginTop: 30, fontWeight: '500', marginStart: 30 }}>
                 Số điện thoại: {phone}
            </Text>
            <Text style={{ color: COLOR.main, fontSize: FONT_SIZE.font_size_14, textAlign: 'left', marginTop: 30, fontWeight: '500', marginStart: 30 }}>
                Subtotal: {subtotal.toString()}đ {/* Convert subtotal to string before displaying */}
            </Text>
        </View>
    )

}
export default ShowPayScreen;
