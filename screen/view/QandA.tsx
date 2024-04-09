import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLOR from "../value/color";
import FONT_SIZE from "../value/font_size";


const QandA = (props: { navigation: any; }) => {
    const { navigation } = props;
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', margin: 20, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('PersonScreen');
                    }}>
                    <Ionicons name="arrow-left" color={COLOR.black} size={30} />
                </TouchableOpacity>
                <Text style={{ marginStart: 80, textAlign: 'center', fontSize: FONT_SIZE.font_size_16, color: COLOR.black, fontWeight: 'bold' }}>
                    Q&A
                </Text>
            </View>
            <ScrollView>
                <Text style={{ fontWeight: '500', fontSize: FONT_SIZE.font_size_14, color: COLOR.black, textAlign: 'left', margin: 10 }}>
                    1. **Làm thế nào để chăm sóc cây cối trong nhà?**
                    - Hãy đảm bảo rằng cây nhận đủ ánh sáng và không gian để phát triển.
                    - Tưới nước đều đặn nhưng đừng làm ẩm quá nhiều.
                    - Chăm sóc và bảo dưỡng đất trong chậu bằng cách thêm phân bón hoặc thay đổi đất định kỳ.
                </Text>
                <Text style={{ fontWeight: '500', fontSize: FONT_SIZE.font_size_14, color: COLOR.black, textAlign: 'left', margin: 10 }}>
                    2. **Cách phòng tránh sâu bệnh và côn trùng gây hại cho cây?**
                    - Kiểm tra cây thường xuyên để phát hiện sớm các dấu hiệu của sâu bệnh hoặc côn trùng.
                    - Sử dụng các loại thuốc diệt sâu tự nhiên hoặc an toàn cho môi trường.
                    - Giữ vệ sinh chung trong khu vườn hoặc nơi trồng cây.
                </Text>
                <Text style={{ fontWeight: '500', fontSize: FONT_SIZE.font_size_14, color: COLOR.black, textAlign: 'left', margin: 10 }}>
                    3. **Cần chú ý gì khi trồng cây trong chậu?**
                    - Chọn loại chậu phù hợp với loại cây cần trồng.
                    - Đảm bảo chậu có lỗ thoát nước để tránh ngập úng.
                    - Sử dụng loại đất phù hợp và thêm phân bón để cung cấp dưỡng chất cho cây.
                </Text>
                <Text style={{ fontWeight: '500', fontSize: FONT_SIZE.font_size_14, color: COLOR.black, textAlign: 'left', margin: 10 }}>
                    4. **Cách chăm sóc cây cảnh ngoài trời trong mùa đông?**
                    - Bảo vệ cây khỏi lạnh bằng cách che chắn hoặc di chuyển vào nơi ấm hơn.
                    - Giảm tần suất tưới nước và kiểm tra độ ẩm của đất để tránh đóng băng.
                    - Cung cấp bổ sung ánh sáng cho cây nếu cần thiết.
                </Text>
                <Text style={{ fontWeight: '500', fontSize: FONT_SIZE.font_size_14, color: COLOR.black, textAlign: 'left', margin: 10 }}>
                    5. **Làm thế nào để biết khi cây cần phải được chăm sóc?**
                    - Kiểm tra lá cây để xem có dấu hiệu của bệnh tật, sâu bệnh hoặc thiếu nước không.
                    - Thường xuyên kiểm tra độ ẩm của đất và nhìn chung sức khỏe của cây.
                </Text >
                <Text style={{ fontWeight: '500', fontSize: FONT_SIZE.font_size_14, color: COLOR.black, textAlign: 'left', margin: 10 }}>
                    6. **Có những loại cây nào thích hợp cho người mới bắt đầu trồng?**
                    - Cây lá dễ chăm sóc như cây lá dừa, cây lưỡi hổ, cây phát lộc.
                    - Cây cỏ như cỏ may mắn, cỏ bốn lá.
                    - Cây có hoa như hoa cẩm chướng, hoa lan.
                </Text >
                <Text style={{ fontWeight: '500', fontSize: FONT_SIZE.font_size_14, color: COLOR.black, textAlign: 'left', margin: 10 }}>
                    7. **Cần chú ý gì khi trồng cây trong nhà có trẻ em hoặc thú cưng?**
                    - Chọn loại cây không độc hại khi tiếp xúc hoặc ăn phải.
                    - Đặt cây ở nơi không thể tiếp cận được cho trẻ em hoặc thú cưng.
                    - Tránh sử dụng các loại phân bón hoặc hóa chất có thể gây hại.
                </Text >
                <Text style={{ fontWeight: '500', fontSize: FONT_SIZE.font_size_14, color: COLOR.black, textAlign: 'left', margin: 10 }}>
                    8. **Cách phân biệt và điều chỉnh ánh sáng cho các loại cây khác nhau?**
                    - Cây nào cần ánh sáng mạnh thường cần được đặt gần cửa sổ hoặc nơi có ánh sáng tự nhiên.
                    - Cây cần bóng mát hơn thì có thể đặt ở nơi có ánh sáng phân tán hoặc sử dụng màn che.
                </Text >
                <Text style={{ fontWeight: '500', fontSize: FONT_SIZE.font_size_14, color: COLOR.black, textAlign: 'left', margin: 10 }}>
                    9. **Làm thế nào để phân biệt và giải quyết vấn đề về đất cho cây?**
                    - Kiểm tra độ pH của đất để đảm bảo phù hợp với loại cây.
                    - Sử dụng phân bón hoặc phân hữu cơ để cải thiện chất lượng đất.
                    - Tránh tình trạng lạm dụng đất để tránh việc đất trở nên compact và khó cho cây thâm rễ.
                </Text >
                <Text style={{ fontWeight: '500', fontSize: FONT_SIZE.font_size_14, color: COLOR.black, textAlign: 'left', margin: 10 }}>
                    10. **Có những biện pháp nào để tái sử dụng chậu và đất cho các cây trồng mới?**
                    - Rửa sạch chậu và loại bỏ hoàn toàn đất cũ trước khi tái sử dụng.
                    - Thêm phân bón mới hoặc trộn đất mới với đất cũ để cung cấp dưỡng chất cho cây.
                </Text >
                <Text style={{ fontWeight: '500', fontSize: FONT_SIZE.font_size_14, color: COLOR.black, textAlign: 'left', margin: 10 }}>
                    11. **Có những cây cần đặc điểm sinh học hay điều kiện môi trường đặc biệt không?**
                    - Cây nhiệt đới thường cần độ ẩm và nhiệt độ cao.
                    - Cây sa mạc thích hợp với môi trường khô cằn và ánh sáng mạnh.
                </Text >
                <Text style={{ fontWeight: '500', fontSize: FONT_SIZE.font_size_14, color: COLOR.black, textAlign: 'left', margin: 10 }}>
                    12. **Làm thế nào để biết khi cây cần được chuyển chỗ?**
                    - Kiểm tra dấu hiệu của việc cây cảm thấy chật chội hoặc không đủ ánh sáng.
                    - Quan sát sự phát triển của cây và cân nhắc việc chuyển chỗ khi cây trở nên quá lớn hoặc không còn phát triển tốt.
                </Text >
                <Text style={{ fontWeight: '500', fontSize: FONT_SIZE.font_size_14, color: COLOR.black, textAlign: 'left', margin: 10 }}>
                    13. **Cách giải quyết vấn đề cây bị đục đọt hoặc héo úa?**
                    - Kiểm tra và loại bỏ những phần cây bị hỏng.
                    - Đảm bảo cung cấp đủ nước và ánh sáng cho cây.
                    - Sử dụng phân bón và chất dinh dưỡng phù hợp để kích thích sự phục hồi của cây.
                </Text >
                <Text style={{ fontWeight: '500', fontSize: FONT_SIZE.font_size_14, color: COLOR.black, textAlign: 'left', margin: 10 }}>
                    14. **Có nên sử dụng phân bón hóa học hay hữu cơ cho cây trồng?**
                    - Phân bón hữu cơ thường an toàn hơn cho môi trường và sức khỏe con người.
                    - Phân bón hóa học có thể cung cấp dưỡng chất nhanh hơn nhưng cần phải sử dụng cẩn thận để tránh gây hại cho cây và môi trường.
                </Text >
                <Text style={{ fontWeight: '500', fontSize: FONT_SIZE.font_size_14, color: COLOR.black, textAlign: 'left', margin: 10 }}>
                    15. **Làm thế nào để bảo quản hạt giống và thân cây cho mùa trồng sau?**
                    - Lưu trữ hạt giống ở nơi khô ráo và thoáng mát.
                    - Cắt tỉa cây và loại bỏ các phần cây không còn sống để giữ cho cây khỏe mạnh và sẵn sàng cho mùa trồng tiếp theo.
                </Text >
            </ScrollView>
        </View>
    )
}
export default QandA;