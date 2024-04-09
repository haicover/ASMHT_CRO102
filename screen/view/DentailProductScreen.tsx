import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, Alert } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import COLOR from "../value/color";
import FONT_SIZE from "../value/font_size";
import ItemChiTietSanPham from "../component/ItemChiSanPham";
const DentailProductScreen = ({ route, navigation }): React.JSX.Element => {
    const { itemName, itemType, itemPrice, itemCategory, itemImage ,itemId} = route.params || {};
    // const chonMuahandler = () => {
    //     const item = {
    //         name: itemName,
    //         image: itemImage,
    //         price: itemPrice,
    //         type:itemType,
    //     }
    //     navigation.navigate('CartScreen',{item})
    // }
    const chonMuahandler = async () => {
        try {
            // Tạo một đối tượng sản phẩm để gửi lên server
            const item = {
                id: itemId,
                name: itemName,
                image: itemImage,
                price: itemPrice,
                type: itemType,
            };
            // Gửi yêu cầu POST đến API để thêm sản phẩm vào giỏ hàng
            const response = await fetch('https://6614464e2fc47b4cf27c05b2.mockapi.io/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });
            // Kiểm tra xem yêu cầu đã thành công hay không
            if (response.ok) {
                // Hiển thị thông báo thành công
                Alert.alert('Thông báo', 'Đã thêm sản phẩm vào giỏ hàng');
                // Chuyển sang màn hình giỏ hàng
                navigation.navigate('CartScreen');
            } else {
                // Hiển thị thông báo lỗi nếu yêu cầu không thành công
                Alert.alert('Lỗi', 'Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng. Vui lòng thử lại sau.');
            }
        } catch (error) {
            // Xử lý lỗi nếu có bất kỳ lỗi nào xảy ra trong quá trình xử lý yêu cầu
            console.log(error);
            Alert.alert('Lỗi', 'Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng. Vui lòng thử lại sau.');
        }
    }
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flexDirection: 'row', margin: 20, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { navigation.navigate('Homescreen') }}>
                    <Ionicons name='arrow-back' color={COLOR.black} size={30} />
                </TouchableOpacity>
                <Text style={{ flex: 1, textAlign: 'center', fontSize: FONT_SIZE.font_size_18, fontWeight: 'bold', color: COLOR.black }}>{itemName}</Text>
            </View>
            <Image source={{ uri: itemImage }} style={{ height: 400, }} />
            {itemCategory === 'Cây trồng' && (
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: FONT_SIZE.font_size_12, padding: 5, backgroundColor: COLOR.main, borderRadius: 5, marginRight: 10, color: COLOR.white, fontWeight: 'bold', marginTop: 10 }}>{itemCategory}</Text>
                    <Text style={{ fontSize: FONT_SIZE.font_size_12, padding: 5, backgroundColor: COLOR.main, borderRadius: 5, color: COLOR.white, fontWeight: 'bold', marginTop: 10 }}>{itemType}</Text>
                </View>
            )}
            <ItemChiTietSanPham  navigation={navigation} />
            <View
                style={{
                    backgroundColor: COLOR.main,
                    padding: 10,
                    borderRadius: 10,
                    margin: 10,
                    
                }}>
                <TouchableOpacity onPress={chonMuahandler}>
                    <Text style={styles.box}>CHỌN MUA</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    box: {
        fontSize: FONT_SIZE.font_size_16,
        fontWeight: 'bold',
        color: COLOR.white,
        textAlign: 'center',
    },
});

export default DentailProductScreen;