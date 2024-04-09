import React, { useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLOR from "../value/color";
import FONT_SIZE from "../value/font_size";
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import ItemCayTrong from "../component/ItemCayTrong";
import ItemChauCayTrong from "../component/ItemChauCayTrong";
import ItemComboChamSoc from "../component/ItemComboChamSoc";
import caytrongData from "../data/caytrong";
import chauCaytrongData from "../data/chaucaytrong";
import phukiencaytrongData from "../data/phukiencaytrong";
import ItemPhuKienCayTrong from "../component/ItemPhuKienCayTrong";
const Homescreen = (props: { navigation: any; }) => {
    const {navigation} = props;
    const [cayTrongItems, setCayTrongItems] = useState(caytrongData);
    const [chauCayTrongItems, setChauCayTrongItems] = useState(chauCaytrongData);
    const [phuKienCayTrongItems, setPhuKienCayTrongItems] = useState(phukiencaytrongData);
    return (
        <View style={styles.container}>
            <ScrollView style={{flex:1}}>
                <Image
                    style={{ width: '100%', height: 200, marginTop: 50, position: 'relative', }}
                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/3084/d533/3c5e831f02921d6fe59087cc1e9b8e20?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUraWBwpYeA69wm-53gErmI4JOlE-QEwcua4uPIbd9NfI0LFnDNwKlH7PLBs19VJpyon4o4NIPt1Z~B8PpDsGuiHVHIgU27hxLQcMPde8aKme-OnWC-6aucpxT-iexkvsHOVnapptc524VF~IiMKjt9LyrmnFT-StquWFax6BQSjYN-ea1SH1SqfBhK31oyYHDZZQxjN8XvrY5ygQCuPaqZs2hzsCoi5493utnctuJ~zz95YQbnJU1makErd3YTpZtg5NHP45tRLejqNHj5ZgTvvsCXt0TlyrWhHN8~YA8727geKMd9DESmPnvZI9RQ3AsL~Cg1Har7EFUBvHC~4Zg__' }} />
                <Text style={{ top: 45, left: 20, position: 'absolute', color: COLOR.black, fontSize: FONT_SIZE.font_size_18, }}>Planta - toả sáng </Text>
                <Text style={{ top: 70, left: 20, position: 'absolute', color: COLOR.black, fontSize: FONT_SIZE.font_size_18 }}>không gian nhà bạn</Text>
                <TouchableOpacity  style={{ flexDirection: 'row', position: 'absolute', top: 130, left: 20, }}>
                    <Text style={{ color: COLOR.main, fontSize: FONT_SIZE.font_size_16 }}>Xem hàng mới về </Text>
                    <Ionicons name="arrow-right-thin" color={COLOR.main} size={20} />
                </TouchableOpacity>


                {/**Cây trồng*/}
                <View style={styles.viewItems}>
                    <Text style={styles.title_container}>Cây trồng</Text>
                    <View style={{ marginStart: 15, marginEnd: 15 }}>
                        <FlatList
                            numColumns={2}
                            data={cayTrongItems}
                            keyExtractor={item => item.id}
                            contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}
                            renderItem={({ item }) => (
                                <ItemCayTrong  navigation={navigation} item={item} />
                            )}
                        />
                    </View>
                </View>

                {/**Chậu cây trồng*/}
                <View style={styles.viewItems}>
                    <Text style={styles.title_container}>Chậu cây trồng</Text>
                    <View style={{ marginStart: 15, marginEnd: 15 }}>
                        <FlatList
                            numColumns={2}
                            data={chauCayTrongItems}
                            keyExtractor={item => item.id}
                            contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}
                            renderItem={({ item }) => (
                                <ItemChauCayTrong navigation={navigation} item={item} />
                            )}
                        />
                    </View>
                </View>


                {/**Phụ kiện cây trồng*/}
                <View style={styles.viewItems}>
                    <Text style={styles.title_container}>Phụ kiện cây trồng</Text>
                    <View style={{ marginStart: 15, marginEnd: 15 }}>
                        <FlatList
                            numColumns={2}
                            data={phuKienCayTrongItems}
                            keyExtractor={item => item.id}
                            contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}
                            renderItem={({ item }) => (
                                <ItemPhuKienCayTrong navigation={navigation} item={item} />
                            )}
                        />
                    </View>
                </View>
                {/**Combo chăm sóc*/}
                <View>
                   <ItemComboChamSoc/>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    title_container: {
        fontSize: FONT_SIZE.font_size_18,
        color: COLOR.black,
        fontWeight: "bold",
        margin: 10,
    },
    viewItems: {
        padding: 10,
        width: '100%'
    },
})
export default Homescreen;