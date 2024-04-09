import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {SliderBox} from 'react-native-image-slider-box';

const Slider = () => {
  const [image, setImage] = useState([
    'http://192.168.1.6:3000/uploads/image_1712142216724image4.png',
    'http://192.168.1.6:3000/uploads/image_1712142216723image2.png',
    'http://192.168.1.6:3000/uploads/image_1712142216725image5.png',
    'https://s3-alpha-sig.figma.com/img/9535/a104/47ad12d663100e872d9e3244b91407a8?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ya5k34boxZxTuvHCs7GtxeVHFHOjKl~LVBhbaUS-nO8DUf7lDydO8AtR3vxpd~19yZ0jBCZ4oXqu7EWXUE9xr2dcev13ZuXd9TkiE~lMYZvk7iL7qXPwy7J-XfDhQZ0FN2Kb~1FN5aw07pbeMiriBwHAZpwnggXNug9T5HAMFeYDN7kX8qHQU74-u6V7yMkxy11aG~Z-CG7acW0VoJoicfidzo0slVHRPNzJeZGuHpez1L0o1pfLoSUbuiA7-zHeM~eIHfqi-qOXjTA9fnxDQhUPRsTBIaes49kYc4-pDnUi2VBNftUzt4onIeGrmsxJJdS~9b9eWgbItFwPE4TDfw__',
    'https://s3-alpha-sig.figma.com/img/c09f/33fd/b43f93e237e85807ef2954921d8acda1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nNsmqqSGsWEVmb2FyG2O8Zo1XpcOx6ohaqEApRUIZWz2hOUT~ioQZAUrUn4K80v~Y3SNRzF1d19QGlmWT26Uz4FK5xetd3LJC4LZcSf1TS7VJL2Actjowe3e4KuIRN2lXLp8SP3tnoQr9BeQfXD5egM-go0PFfNsUpXwrVAgb0AK5rgq1wzT9ftpcg-kcWCHbzn1~PGa4Q9p5Kar~khDkImX5u0KrX7hTqHaeYeoMwwXOE-vOrOEztzERQzuNStxYZW9w~g2rAEIF0NPwnUozcS47z~2buWSwZ09p0Maa69zDDhYfRg4LtIuRnheWcmgUa5AhrUzYjQhtAU2U5J0hQ__',
  ]);
  return (
    <View style={{width: '100%', height: 330}}>
      <SliderBox
        images={image}
        sliderBoxHeight={330}
        autoplay
        dotColor="#FF69B4"
        inactiveDotColor="#90A4AE"
        circleLoop
      />
    </View>
  );
};

export default Slider;
