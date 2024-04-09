import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import COLOR from "../value/color";
import FONT_SIZE from "../value/font_size";
import ItemPerson from "../component/ItemPerson";
const PersonScreen = (props: { navigation: any; }) => {
    const {navigation} = props;
    return (
        <View style={{ flex: 1, }}>
            <Text style={{ textAlign: 'center', fontSize: FONT_SIZE.font_size_18, fontWeight: 'bold', color: COLOR.black, marginTop: 10, }}>PERSON</Text>
            <View style={{ flexDirection: 'row', margin: 10, marginBottom: 10, marginStart:30,alignItems:'center'}}>
                <Image
                    style={{ width: 40, height: 40, borderRadius: 20, }}
                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lvOlv8T1RxWmnHtt7Y6MY~NeeaMYgQxgTK802S91ZCXWJcXFcEFaHTdDokdgGFKP~HrP7EQVcxmQxkp0AZnKXgFabTP2nsTstwp3xzW3Bd9pIDxsw8V2vUzNDGDxhjUdXC3oPde0EKi-H3qKHpkGwCCfj~hA8CR0QL-XbWiVYHzJt5nLrjp35wKVy9kULOIzj~snQ~olC3UknhWcKs6amE1PxzRx9xKkusze~gppqLFHEhUIfa3FBKdZoeDCW4gDqJA1zOf~Y6nPzilP2mSKCTShWoN0yyanOzRH20v2ZGcuRf3GxkUrv-~MVrQER2zxoyEnN2tmP4RjWWGwcueD1g__' }} />
                <View style={{ flexDirection: 'column', margin: 10 }}>
                    <Text style={{ fontSize: FONT_SIZE.font_size_12, color: COLOR.black, fontWeight: 'bold' }}>Trần Minh Trí</Text>
                    <Text style={{ fontSize: FONT_SIZE.font_size_12, color: COLOR.gray1, fontWeight: 'bold' }}>tranminhtri@gmail.com</Text>
                </View>
            </View>
            <ItemPerson navigation={navigation} />
        </View>
    )
};
export default PersonScreen;