import React, { useEffect, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View, } from "react-native";
import FONT_SIZE from "../value/font_size";
import COLOR from "../value/color";
import { TextInput } from "react-native";
import { useDispatch } from 'react-redux'
import { saveUserData } from '../redux/userAction';

function LoginScreen({ navigation }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    // const onLogin = () => {
    //     if (!email || !password) {
    //         Alert.alert('Vui lòng nhập đầy đủ thông tin');
    //         return false;
    //     }
    //     if (email === e && password === p) {
    //         Alert.alert('Email và mật khẩu khớp với thông tin đăng ký..');
    //         navigation.navigate('MyTabs');
    //     } else {
    //         Alert.alert('Email hoặc mật khẩu không đúng.');
    //     }
    //     return true;
    // };
    const handleLogin = async () => {
        try {
            await fetch('https://6614464e2fc47b4cf27c05b2.mockapi.io/users')
                .then(res => res.json())
                .then(data => {
                    let checkLogin = data.find((item: { name: string; password: string; }) => item.name == name && item.password == password)
                    if (checkLogin) {
                        ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
                        navigation.navigate("MyTabs")
                        const userData = {
                            name: checkLogin.name,
                            password: password,
                            
                        };
                        dispatch(saveUserData(userData));
                    } else {
                        ToastAndroid.show('Đăng nhập thất bại', ToastAndroid.SHORT);
                    }
                })
        } catch (error) {
            console.error('Lỗi:', error);
        }
    };

    return (
        <View
            style={{
                flex: 1,
            }}>
            <ScrollView>
                <Image
                    source={require('../image/img1.png')}
                    style={{ width: '100%', resizeMode: "stretch", height: 300 }}
                />
                <Text style={{ fontSize: FONT_SIZE.font_size_25, color: COLOR.black, fontWeight: 'bold', textAlign: 'center' }}>Chào mừng bạn</Text>
                <Text style={{ fontSize: FONT_SIZE.font_size_16, color: COLOR.black, fontWeight: '400', textAlign: 'center' }}>Đăng nhập tài khoản</Text>
                <View style={{ width: '85%', justifyContent: 'center', margin: 20, }}>
                    <TextInput
                        value={name}
                        onChangeText={text => setName(text)}
                        placeholder="Name"
                        style={{ padding: 10, borderWidth: 1, borderColor: COLOR.main, borderRadius: 10, paddingLeft: 20 }} />
                    <TextInput
                        value={password}
                        onChangeText={text => setPassword(text)}
                        placeholder="Password"
                        secureTextEntry={true}
                        style={{ padding: 10, borderWidth: 1, borderColor: COLOR.main, borderRadius: 10, paddingLeft: 20, marginTop: 20 }} />
                </View>
                <View style={{ width: "85%", padding: 15, justifyContent: 'center', marginStart: 30, marginEnd: 30, marginTop: 10 }}>
                    <TouchableOpacity onPress={handleLogin}>
                        <View style={{ backgroundColor: COLOR.main, padding: 15, borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', color: COLOR.white, fontWeight: 'bold' }}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
                    <Text style={{ flexDirection: 'row', justifyContent: 'center' }}>Bạn không có tài khoản</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                        <Text style={{ marginStart: 10, color: COLOR.main }}>Tạo tài khoản</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: COLOR.main,
        borderRadius: 10,
        margin: 10,
        paddingLeft: 20
    }
})