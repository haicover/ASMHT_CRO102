import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FONT_SIZE from '../value/font_size';
import COLOR from '../value/color';
const ItemComboChamSoc = (props) => {
  const {navigation} = props;
  return (
    <View
      style={{
        justifyContent: 'center',
        width: '85%',
        height: 150,
        elevation: 10,
        marginStart: 30,
        marginEnd: 30,
        marginBottom: 30,
        shadowColor: COLOR.gray,
        borderRadius: 20,
        backgroundColor: COLOR.gray,
      }}>
      <TouchableOpacity >
        <View style={{flexDirection: 'row', position: 'relative'}}>
          <View style={{margin: 20}}>
            <Text
              style={{
                fontSize: FONT_SIZE.font_size_18,
                fontWeight: 'bold',
                color: COLOR.black,
                margin: 3,
              }}>
              Kí kíp chăm sóc cây trồng
            </Text>
            <Text
              style={{
                width: 180,
                fontSize: FONT_SIZE.font_size_14,
                fontWeight: 'bold',
                textAlign: 'left',
                color: 'grey',
                margin: 3,
              }}>
              Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker
              đánh dấu...
            </Text>
          </View>
          <Image
            style={{
              position: 'absolute',
              top: -10,
              right: 0,
              width: 100,
              height: 150,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/45b1/5973/6a3fa215dd71eb42b47fad70ff2bb233?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lrnc-d4NSrHUDTMOWsoryu1M6qJUisrMu3A6LvQEHLyHwCgGNog5T~ou~Is8foWQCDLgU0YagQVsXhnbK9K7MJuYvMTiSemLxTesazA52XvdN6XcKrvdRLr3t80LLM3H7~h-K~FHvTmsT3N9GBCFZ9TWuKRSVpFGSN8U2Tb0etBKaRQSTvNZAc52vdpFCHb7Tl-nItwkXUZm-9fRgGKfbLZavlaWWGKE0tdjelyCwxskEDsqWOITm~jJL-8cKZgBIumIDSMPzt9GEyrBbOLH5VB6m0vvf2f0uA76Dc5RlonNqQp0GjUD31MHvqatnM0a0ZDGmCQuCKripb1szsPV6A__',
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemComboChamSoc;
