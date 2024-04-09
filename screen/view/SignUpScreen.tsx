import React, { useEffect, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import FONT_SIZE from "../value/font_size";
import COLOR from "../value/color";
import { TextInput } from "react-native";
import axios from 'axios';

const SignUpScreen = (props: { navigation: any; }) => {

    const { navigation } = props;
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const atpos = email.indexOf("@");
    // const dotpos = email.lastIndexOf(".");
    // const onSubmit = () => {
    //     if (validateInputs()) {
    //         let formData = {
    //             email: email,
    //             password: password,
    //         }
    //         axios.post('https://660f96b1356b87a55c51b896.mockapi.io/signup', formData)
    //             .then((res) => {
    //                 if (res.data) {
    //                     Alert.alert('Bạn đã đăng kí thành công');
    //                     // In your SignUp component where you navigate to the Login screen
    //                     navigation.navigate('LoginScreen', { e: email, p: password });
    //                 }
    //             }
    //             )
    //             .catch((err) => console.log("Lỗi"+err));

    //     }
    // }
    // const validateInputs = () => {
    //     if (!email || !password) {
    //         Alert.alert('Error', 'Vui lòng nhập đầy đủ thông tin.');
    //         return false;
    //     }
    //     if (atpos < 1 || (dotpos - atpos < 2)) {
    //         Alert.alert('Vui lòng nhập đúng dạng email');
    //         return false;
    //     }
       
    //     return true;
    // };
    const [name, setName] = useState('')
    const [password, setPassWord] = useState('')
    const [repassword, setRepassWord] = useState('')

    const handleRegister = async () => {
        if (name == "" || password == "" || repassword == "" ) {
            ToastAndroid.show('Vui lòng không bỏ trống', ToastAndroid.SHORT);

            return;
        }
        if (password.length < 6) {
            ToastAndroid.show('Mật khẩu phải có hơn 6 kí tự', ToastAndroid.SHORT);

            return;
        }
        if (password !== repassword) {
            ToastAndroid.show('Mật khẩu không trùng khớp', ToastAndroid.SHORT);
            return;
        }
        try {
            fetch('https://6614464e2fc47b4cf27c05b2.mockapi.io/users').then(res => res.json()).then(data => {
                const user = data.find((user: { name: string; }) => user.name == name)
                if (user) {
                    ToastAndroid.show("Tài khoản đã tồn tại", ToastAndroid.SHORT);
                    return;
                }
                let obj_user = {
                    name: name,
                    password: password,
                    repassword: repassword,
                }
                fetch("https://6614464e2fc47b4cf27c05b2.mockapi.io/users", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj_user)
                }).then(res => res.json()).then(data => {
                    ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT);
                    navigation.navigate('LoginScreen')
                })
            })

        } catch (error) {
            console.error('Lỗi đăng ký:', error);
        }
    }
    return (
        <View
            style={{
                flex: 1,
            }}>
                <Image
                    source={require('../image/img1.png')}
                    style={{ width: '100%', resizeMode: "stretch", height: 280 }}
                />
                <Text
                    style={{
                        fontSize: FONT_SIZE.font_size_25,
                        color: COLOR.black,
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>Đăng kí </Text>
                <Text
                    style={{
                        fontSize: FONT_SIZE.font_size_16,
                        color: COLOR.black,
                        fontWeight: '400',
                        textAlign: 'center',
                        marginTop: 20
                    }}>Tạo tài khoản</Text>
                <View style={{ width: '85%', justifyContent: 'center', margin:20, }}>
                    <TextInput
                    value={name}
                        onChangeText={text => setName(text)}
                        placeholder="name"
                        style={styles.input} />
                    <TextInput
                        value={password}
                        onChangeText={text => setPassWord(text)}
                        placeholder="Password"
                        secureTextEntry={true}
                        style={styles.input} />
                    <TextInput
                        value={repassword}
                        onChangeText={text => setRepassWord(text)}
                        placeholder="Re-password"
                        secureTextEntry={true}
                        style={styles.input} />
                </View>
                <View style={{ width: "85%", padding: 15, justifyContent: 'center', marginStart: 30, marginEnd: 30, marginTop: 10 }}>
                    <TouchableOpacity onPress={handleRegister}>
                        <View style={{ backgroundColor: COLOR.main, padding: 15, borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', color: COLOR.white, fontWeight: 'bold' }}>ĐĂNG KÍ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10, }}>
                    <Text style={{ flexDirection: 'row', justifyContent: 'center' }}>Tôi đã có tài khoản</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={{ marginStart: 10, color: COLOR.main }}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: COLOR.main,
        borderRadius: 10,
        paddingLeft: 20,
        margin: 10
    }
})
