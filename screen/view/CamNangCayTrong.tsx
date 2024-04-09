import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import COLOR from "../value/color";
import FONT_SIZE from "../value/font_size";
import ItemCamNangCayTrong from "../component/ItemCamNangCayTrong";
import Slider from "../component/Slide";
const CamNangCayTrong = (props: { navigation: any; }) => {
    const {navigation} = props;
    return(
        <View style={{flex:1}}>
            <ItemCamNangCayTrong navigation={navigation} />
            <Slider />
            <ScrollView style={{ flex: 1, marginTop: 15,marginStart:10, marginBottom:10,}}>
                <Text style={{fontSize:FONT_SIZE.font_size_17,margin:10,fontWeight:'500'}}>Kiến thức cơ bản</Text>
                <Text style={{margin:5}}>Bước 1: Làm thế nào để chăm sóc cây cối trong nhà?</Text>
                    <Text style={{ marginStart: 20, }}>- Hãy đảm bảo rằng cây nhận đủ ánh sáng và không gian để phát triển.</Text>
                    <Text style={{ marginStart: 20, }}>- Tưới nước đều đặn nhưng đừng làm ẩm quá nhiều.</Text>
                    <Text style={{marginStart:20,}}>- Chăm sóc và bảo dưỡng đất trong chậu bằng cách thêm phân bón hoặc thay đổi đất định kỳ.</Text>
                <Text style={{ margin: 5 }}>Bước 2: Cách phòng tránh sâu bệnh và côn trùng gây hại cho cây?</Text>
                    <Text style={{ marginStart: 20, }}>- Hãy đảm bảo rằng cây nhận đủ ánh sáng và không gian để phát triển.</Text>
                    <Text style={{ marginStart: 20, }}>- Tưới nước đều đặn nhưng đừng làm ẩm quá nhiều.</Text>
                    <Text style={{ marginStart: 20, }}>- Chăm sóc và bảo dưỡng đất trong chậu bằng cách thêm phân bón hoặc thay đổi đất định kỳ.</Text>
                <Text style={{ margin: 5 }}>Bước 3: Cần chú ý gì khi trồng cây trong chậu?</Text>
                    <Text style={{ marginStart: 20, }}>- Hãy đảm bảo rằng cây nhận đủ ánh sáng và không gian để phát triển.</Text>
                    <Text style={{ marginStart: 20, }}>- Tưới nước đều đặn nhưng đừng làm ẩm quá nhiều.</Text>
                    <Text style={{ marginStart: 20, }}>- Chăm sóc và bảo dưỡng đất trong chậu bằng cách thêm phân bón hoặc thay đổi đất định kỳ.</Text>
                <Text style={{ margin: 5 }}>Bước 4: Cách chăm sóc cây cảnh ngoài trời trong mùa đông?</Text>
                    <Text style={{ marginStart: 20, }}>- Hãy đảm bảo rằng cây nhận đủ ánh sáng và không gian để phát triển.</Text>
                    <Text style={{ marginStart: 20, }}>- Tưới nước đều đặn nhưng đừng làm ẩm quá nhiều.</Text>
                    <Text style={{ marginStart: 20, }}>- Chăm sóc và bảo dưỡng đất trong chậu bằng cách thêm phân bón hoặc thay đổi đất định kỳ.</Text>
                <Text style={{ margin: 5 }}>Bước 5: Làm thế nào để biết khi cây cần phải được chăm sóc?</Text>
                    <Text style={{ marginStart: 20, }}>- Hãy đảm bảo rằng cây nhận đủ ánh sáng và không gian để phát triển.</Text>
                    <Text style={{ marginStart: 20, }}>- Tưới nước đều đặn nhưng đừng làm ẩm quá nhiều.</Text>
                    <Text style={{ marginStart: 20, }}>- Chăm sóc và bảo dưỡng đất trong chậu bằng cách thêm phân bón hoặc thay đổi đất định kỳ.</Text>
                <Text style={{ margin: 5 }}>Bước 6: Có những loại cây nào thích hợp cho người mới bắt đầu trồng?</Text>
                    <Text style={{ marginStart: 20, }}>- Hãy đảm bảo rằng cây nhận đủ ánh sáng và không gian để phát triển.</Text>
                    <Text style={{ marginStart: 20, }}>- Tưới nước đều đặn nhưng đừng làm ẩm quá nhiều.</Text>
                    <Text style={{ marginStart: 20, }}>- Chăm sóc và bảo dưỡng đất trong chậu bằng cách thêm phân bón hoặc thay đổi đất định kỳ.</Text>
                <Text style={{ margin: 5 }}>Bước 7: Cần chú ý gì khi trồng cây trong nhà có trẻ em hoặc thú cưng?</Text>
                    <Text style={{ marginStart: 20, }}>- Hãy đảm bảo rằng cây nhận đủ ánh sáng và không gian để phát triển.</Text>
                    <Text style={{ marginStart: 20, }}>- Tưới nước đều đặn nhưng đừng làm ẩm quá nhiều.</Text>
                    <Text style={{ marginStart: 20, }}>- Chăm sóc và bảo dưỡng đất trong chậu bằng cách thêm phân bón hoặc thay đổi đất định kỳ.</Text>
            </ScrollView>
        </View>
    )
}

export default CamNangCayTrong;