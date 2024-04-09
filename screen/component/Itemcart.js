import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FONT_SIZE from '../value/font_size';
import COLOR from '../value/color';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemCart = ({item, onDelete}) => {
  const [quantity, setQuantity] = useState(1);
  const price = 250000;
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const totalPrice = price * quantity;
  
  const handleDelete = () => {
    onDelete(item.id);
  };
  return (
    <View>
      <View style={styles.itemContainer}>
        <Image
          style={styles.itemImage}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.itemDetails}>
          <View style={styles.itemNameContainer}>
            <Text style={styles.itemName}>{item.name} |</Text>
            <Text style={styles.itemType}>{item.type}</Text>
          </View>
          <Text style={styles.itemPrice}>{item.price}đ</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decreaseQuantity}>
              <Ionicons
                style={{marginEnd: 20}}
                name="minus-box"
                color={COLOR.black}
                size={20}
              />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity}>
              <Ionicons
                style={{marginStart: 21}}
                name="plus-box"
                color={COLOR.black}
                size={20}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <Text style={styles.removeText}>Xóa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.priceContainer}>
          <Text style={styles.totalPriceText}>Giá tạm tính</Text>
          <Text style={styles.totalPrice}>{totalPrice}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 5,
    backgroundColor: COLOR.gray,
  },
  itemDetails: {
    margin: 10,
  },
  itemNameContainer: {
    flexDirection: 'row',
  },
  itemName: {
    fontSize: FONT_SIZE.font_size_14,
    fontWeight: 'bold',
    color: COLOR.black,
    margin: 3,
  },
  itemType: {
    fontSize: FONT_SIZE.font_size_14,
    fontWeight: 'bold',
    color: COLOR.gray,
    margin: 3,
  },
  itemPrice: {
    fontSize: FONT_SIZE.font_size_12,
    fontWeight: '600',
    color: COLOR.main,
    margin: 3,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontSize: FONT_SIZE.font_size_14,
    fontWeight: 'bold',
    color: COLOR.black,
  },
  removeText: {
    fontSize: FONT_SIZE.font_size_14,
    fontStyle: 'italic',
    fontWeight: '500',
    color: COLOR.black,
    marginStart: 100,
    textDecorationLine: 'underline',
  },
  priceContainer: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  totalPriceText: {
    fontSize: FONT_SIZE.font_size_12,
    color: COLOR.black,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: FONT_SIZE.font_size_16,
    color: COLOR.black,
    fontWeight: 'bold',
  },
});

export default ItemCart;
