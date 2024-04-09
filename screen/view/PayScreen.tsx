import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/AntDesign'
import COLOR from "../value/color";
import FONT_SIZE from "../value/font_size";
import ItemThanhToan from "../component/ItemThanhToan";



const PayScreen = ({ navigation, route }) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(0|\+84)\d{9,10}$/;
    const { subtotal } = route.params || {};
    const shippingFee = 12000;

    const [name, setName] = useState('');
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [showPayModal, setShowPayModal] = useState(false);

    const handlePay = () => {
        if (!name || !address || !email || !phone) {
            Alert.alert("Vui lòng nhập đầy đủ các thông tin cần thiết");
            return false;
        }
        if (!emailRegex) {
            Alert.alert("Vui lòng nhập đúng dạng email");
            return false;
        }
        if (!phoneRegex) {
            Alert.alert("Vui lòng nhập đúng dạng số điện thoại");
            return false;
        }
        setShowPayModal(true);
        navigation.navigate('ShowPayScreen', {
            name: name,
            address: address,
            email: email,
            phone: phone,
            subtotal: subtotal,
        });
    };
    const handleConfirmPay = () => {
        // Perform actions when payment is confirmed, such as navigating to the ShowPayScreen
        // Pass necessary information to the ShowPay screen using navigation params
        
    };
    const handleCancelPay = () => {
        setShowPayModal(false);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.navigate('CartScreen') }}>
                    <Ionicons name='arrowleft' color={COLOR.black} size={30} />
                </TouchableOpacity>
                <Text style={styles.headerText}>THANH TOÁN</Text>
            </View>
            <View style={styles.content}>
                <Text style={{ margin: 20, fontSize: FONT_SIZE.font_size_15, fontWeight: 'bold' }}>Thông tin khác hàng</Text>
                <View>
                    <TextInput
                        onChangeText={text => setName(text)} placeholder="Nhập họ tên" style={styles.textInput} />
                    <TextInput
                        onChangeText={text => setAddress(text)} placeholder="Nhập địa chỉ" style={styles.textInput} />
                    <TextInput
                        onChangeText={text => setEmail(text)} placeholder="Nhập email" style={styles.textInput} />
                    <TextInput
                        onChangeText={text => setPhone(text)} placeholder="Nhập số điện thoại" style={styles.textInput} />
                </View>
            </View>
            <View style={styles.footer}>
                <View >
                    <View style={styles.footerTop}>
                        <Text style={styles.textFooter}>Tạm tính</Text>
                        <Text >{subtotal}đ</Text>
                    </View>
                    <View style={styles.footerTop}>
                        <Text style={styles.textFooter}>Phí vận chuyển</Text>
                        <Text >{shippingFee}đ</Text>
                    </View>
                    <View style={styles.footerTop}>
                        <Text style={styles.textFooter}>Tổng cộng</Text>
                        <Text style={{ color: COLOR.main }}>
                            {subtotal + shippingFee}đ
                        </Text>
                    </View>
                </View>
                <View style={{
                    backgroundColor: COLOR.main,
                    padding: 10,
                    borderRadius: 10,
                    margin: 10
                }}>
                    <TouchableOpacity onPress={handlePay}>
                        <Text style={{
                            fontSize: FONT_SIZE.font_size_16,
                            fontWeight: 'bold',
                            color: COLOR.white,
                            textAlign: 'center',
                        }}>THANH TOÁN</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                visible={showPayModal}
                transparent={true}
                animationType="slide">
                <View style={styles.modalContainer}>
                    <ItemThanhToan
                        onConfirmPay={() => handlePay()} // Close the modal when confirmed
                        onCancelPay={() => handleCancelPay()} // Close the modal when cancelled
                    />
                </View>
            </Modal>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: FONT_SIZE.font_size_18,
        fontWeight: 'bold',
        color: COLOR.black,
        flex: 1,
    },
    content: {
        flex: 4,
        width: '100%',

    },
    textInput: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 10,
        marginStart: 30,
        marginEnd: 30,
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: COLOR.gray,
    },
    footer: {
        backgroundColor: '#E8E8E8',
    },
    footerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
        marginStart: 20,
        marginEnd: 20,
    },
    textFooter: {
        fontSize: FONT_SIZE.font_size_14,
        fontWeight: 'bold',
        color: COLOR.black,
        flex: 1,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})
export default PayScreen;