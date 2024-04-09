import React, { useEffect, useState } from "react";
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/AntDesign'
import COLOR from "../value/color";
import Slider from "../component/Slide";
import FONT_SIZE from "../value/font_size";
import ItemChiTietSanPham from "../component/ItemChiSanPham";
import ItemSreach from "../component/ItemSreach";
import caytrongData from "../data/caytrong";
import chauCaytrongData from "../data/chaucaytrong";
import phukiencaytrongData from "../data/phukiencaytrong";
import ItemCayTrong from "../component/ItemCayTrong";
import ItemChauCayTrong from "../component/ItemChauCayTrong";
import ItemPhuKienCayTrong from "../component/ItemPhuKienCayTrong";


const SearchScreen = (props: { navigation: any; },) => {

    const { navigation } = props;
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([
        ...caytrongData,
        ...chauCaytrongData,
        ...phukiencaytrongData,
    ])
    const filterSearch = () =>
        data.filter(eachSearch => eachSearch.name.toLowerCase().includes(searchText.toLowerCase()))


    return (
        <View style={{ flex: 1, }}>
            <View style={{ margin: 10, marginBottom: 10, }}>
                <Text style={{ textAlign: 'center', fontSize: FONT_SIZE.font_size_18, fontWeight: 'bold', color: COLOR.black }}>TÌM KIẾM</Text>
            </View>

            <View style={{
                borderRadius: 20,
                justifyContent: 'space-between',
                margin: 20, flexDirection: 'row', backgroundColor: COLOR.gray, alignItems: 'center'
            }}>
                <TextInput
                    value={searchText}
                    onChangeText={text => setSearchText(text)}
                    placeholder="Tìm kiếm"
                    style={{ width: 300, paddingLeft: 20, fontSize: FONT_SIZE.font_size_15 }} />
                <TouchableOpacity >
                    <Ionicons name="search1" color={COLOR.black} size={20} style={{ margin: 10, }} />
                </TouchableOpacity>

            </View>


            {filterSearch().length > 0 ? (
                <FlatList
                    data={filterSearch()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => Alert.alert(`You pressed item's name: ${item.name}`)}>
                            <ItemSreach item={item} key={item.name} navigation={navigation}/>
                        </TouchableOpacity>
                    )}
                    keyExtractor={eachSearch => eachSearch.name}
                />
            ) : (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLOR.gray }}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>No search found</Text>
                </View>
            )}

        </View>
    )
};

const styles = StyleSheet.create({
    box: {

    }

})
export default SearchScreen;