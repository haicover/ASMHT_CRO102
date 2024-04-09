import React from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import FONT_SIZE from '../value/font_size';
import COLOR from '../value/color';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
const ItemChinhSuaThongTin = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        marginBottom: 100,
      }}>
      <View style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PersonScreen');
          }}>
          <Ionicons name="arrow-left" color={COLOR.black} size={30} />
        </TouchableOpacity>
        <Text style={{marginStart: 80, textAlign: 'center',fontSize:FONT_SIZE.font_size_16,color:COLOR.black,fontWeight:'bold'}}>
          CHỈNH SỬA THÔNG TIN
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{width: 100, height: 100, borderRadius: 60}}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lvOlv8T1RxWmnHtt7Y6MY~NeeaMYgQxgTK802S91ZCXWJcXFcEFaHTdDokdgGFKP~HrP7EQVcxmQxkp0AZnKXgFabTP2nsTstwp3xzW3Bd9pIDxsw8V2vUzNDGDxhjUdXC3oPde0EKi-H3qKHpkGwCCfj~hA8CR0QL-XbWiVYHzJt5nLrjp35wKVy9kULOIzj~snQ~olC3UknhWcKs6amE1PxzRx9xKkusze~gppqLFHEhUIfa3FBKdZoeDCW4gDqJA1zOf~Y6nPzilP2mSKCTShWoN0yyanOzRH20v2ZGcuRf3GxkUrv-~MVrQER2zxoyEnN2tmP4RjWWGwcueD1g__',
          }}
        />
        <Text
          style={{
            width: 310,
            fontWeight: '400',
            fontSize: FONT_SIZE.font_size_15,
            color: COLOR.black,
            marginTop: 30,
            marginBottom: 60,
          }}>
          Thông tin sẽ được lưu cho lần mua kế tiếp. Bấm vào thông tin chi tiết
          để chỉnh sửa.
        </Text>
      </View>

      <TextInput
        placeholder="Trần Minh Trí"
        style={{
          width: '80%',
          marginStart: 30,
          marginEnd: 30,
          borderBottomWidth: 1,
          fontWeight: 'bold',
          fontSize: FONT_SIZE.font_size_15,
          color: COLOR.gray1,
        }}
      />
      <TextInput
        placeholder=" tranminhtri@gmail.com"
        style={{
          width: '80%',
          marginStart: 30,
          marginEnd: 30,
          borderBottomWidth: 1,
          fontWeight: 'bold',
          fontSize: FONT_SIZE.font_size_15,
          color: COLOR.gray1,
        }}
      />
      <TextInput
        placeholder="60 Láng Hạ, Ba Đình, Hà Nội"
        style={{
          width: '80%',
          marginStart: 30,
          marginEnd: 30,
          borderBottomWidth: 1,
          fontWeight: 'bold',
          fontSize: FONT_SIZE.font_size_15,
          color: COLOR.gray1,
        }}
      />
      <TextInput
        placeholder=" 0123456789"
        style={{
          width: '80%',
          marginStart: 30,
          marginEnd: 30,
          borderBottomWidth: 1,
          fontWeight: 'bold',
          fontSize: FONT_SIZE.font_size_15,
          color: COLOR.gray1,
        }}
      />
    </View>
  );
};

export default ItemChinhSuaThongTin;
