import React, { useEffect, useState } from "react";
import { Alert, FlatList, Modal, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import COLOR from "../value/color";
import FONT_SIZE from "../value/font_size";
import { StyleSheet } from "react-native";
import ItemCart from "../component/Itemcart";
import ItemXoaDonHang from "../component/ItemXoaDonHang";
import { useFocusEffect } from "@react-navigation/native";
const CartScreen = ({ route, navigation }) => {

    const [cartItems, setCartItems] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemToDeleteIndex, setItemToDeleteIndex] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);


    // const addItemToCart = (item: any) => {
    //     setCartItems([...cartItems, item]);
    // };

    // // Function to remove item from cart
    // const removeItemFromCart = (index: number | null) => {
    //     const newCartItems = [...cartItems];
    //     newCartItems.splice(index, 1);
    //     setCartItems(newCartItems);
    // };

    // // Function to toggle delete confirmation modal
    // const toggleDeleteModal = (index) => {
    //     setItemToDeleteIndex(index);
    //     setShowDeleteModal(!showDeleteModal);
    // };
    // function calculateTotalAmount(cartItems: any) {
    //     let totalAmount = 0;
    //     for (const fruit of cartItems) {
    //         totalAmount += parseFloat(fruit.price);
    //     }
    //     return totalAmount;
    // }
    // // Function to calculate total price of items in cart
    // const calculateTotalPrice = () => {
    //     return calculateTotalAmount(cartItems);
    // };

    // useEffect(() => {
    //     const { item } = route.params || {};
    //     if (item) {
    //         addItemToCart(item);
    //     }
    // }, [route.params]);


    
    const deleteItem = (itemId: any) => {
        fetch(`https://6614464e2fc47b4cf27c05b2.mockapi.io/carts/${itemId}`, {
            method: 'DELETE',
        })
            .then(res => {
                console.log(res);
                if (res.ok) {
                    ToastAndroid.show("Xóa thành công", ToastAndroid.SHORT);
                    fetch(`https://6614464e2fc47b4cf27c05b2.mockapi.io/carts`)
                        .then(rep => rep.json())
                        .then(data => {
                            setCartItems(data);
                            // Tính toán lại tổng giá trị sau khi xóa sản phẩm
                            const total = calculateTotalPrice();
                            setTotalPrice(total);
                        })
                        .catch(err => console.log(err));
                } else {
                    Alert.alert("Bạn đã xóa thất bại");
                }
            })
            .catch(err => {
                console.log(err);
                Alert.alert("Đã xảy ra sự cố khi xóa");

            })
    }
    useEffect(() => {
        fetch(`https://6614464e2fc47b4cf27c05b2.mockapi.io/carts`)
            .then(rep => rep.json())
            .then(data => {
                setCartItems(data)
            })
            .catch(err => console.log(err))
    }, []);
    function calculateTotalAmount(cartItems: any) {
        let totalAmount = 0;
        for (const fruit of cartItems) {
            totalAmount += parseFloat(fruit.price);
        }
        return totalAmount;
    }
    // Function to calculate total price of items in cart
    const calculateTotalPrice = () => {
        return calculateTotalAmount(cartItems);
    };

    useEffect(() => {
        const total = calculateTotalPrice();
        setTotalPrice(total);
    }, [cartItems]);


    const handleCheckout = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    products: cartItems, // Danh sách các sản phẩm trong giỏ hàng
                    total: totalPrice, // Tổng giá trị đơn hàng
                }),
            }); 

            if (response.ok) {
                navigation.navigate('PayScreen');
            } else {
                Alert.alert('Lỗi', 'Có lỗi xảy ra khi tạo đơn hàng. Vui lòng thử lại sau.');
            }
        } catch (error) {
            console.log(error);
            // Xử lý khi có lỗi xảy ra trong quá trình gửi thông tin đơn hàng lên server
            Alert.alert('Lỗi', 'Có lỗi xảy ra khi gửi thông tin đơn hàng. Vui lòng thử lại sau.');
        }
    };




    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>GIỎ HÀNG</Text>
            </View>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ItemCart
                        item={item}
                        onDelete={(itemId: React.SetStateAction<null>) => {
                            setShowDeleteModal(true);
                            setItemToDeleteIndex(itemId);
                        }}
                    />
                )}
                
            />
            <View style={styles.totalPriceContainer}>
                <Text style={styles.totalPriceText}>Tổng tiền: {calculateTotalPrice()}đ</Text>
                <TouchableOpacity
                    style={[styles.checkoutButton, { opacity: cartItems.length > 0 ? 1 : 0.5 }]}
                    disabled={cartItems.length === 0}
                    onPress={() => {
                        navigation.navigate('PayScreen', { subtotal: calculateTotalPrice() });
                    }}
                >
                    <Text style={styles.checkoutButtonText}>TIẾN HÀNH THANH TOÁN</Text>
                </TouchableOpacity>
            </View>
            <Modal
                visible={showDeleteModal}
                transparent={true}
                animationType="slide">
                <View style={styles.modalContainer}>
                    <ItemXoaDonHang
                        onConfirmDelete={() => {
                            deleteItem(cartItems[itemToDeleteIndex].id);
                            setShowDeleteModal(false);
                        }}
                        onCancelDelete={() => setShowDeleteModal(false)}
                    />
                </View>
            </Modal>
        </View>
    )

}
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
    totalPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    totalPriceText: {
        fontSize: FONT_SIZE.font_size_18,
        fontWeight: 'bold',
        color: COLOR.black,
    },
    checkoutButton: {
        backgroundColor: COLOR.main,
        padding: 10,
        borderRadius: 5,
    },
    checkoutButtonText: {
        fontSize: FONT_SIZE.font_size_16,
        fontWeight: 'bold',
        color: COLOR.white,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

})

export default CartScreen;