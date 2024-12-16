import React from 'react'
import { Image, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

const Property = () => {
  return (
    <View>
        <View style={{height:240,width:'90%',marginTop:15,alignSelf:'center'}}>
       <Swiper autoplay={false}>
           <Image style={{height:200,width:'100%',borderRadius:10}} source={{
            uri:'https://propertypanda.com/storage/images/blog/123/blog%20image100.jpg'
           }}/>
            <Image style={{height:200,width:'100%',borderRadius:10}} source={{
             uri:'https://www.mouryamanagement.com/img/agriculture-land-sale.jpg'
           }}/>
            <Image style={{height:200,width:'100%',borderRadius:10}} source={{
            uri:'https://media.propertypal.com/037002850005d57592/p/964818/37074952.jpg'
           }}/>
            <Image style={{height:200,width:'100%',borderRadius:10}} source={{
            uri:'https://assets.fcsamerica.com/transform/15a72fc9-c731-4716-ac1a-cd7916268d04/land-for-sale-how-to-find-farmland'
           }}/>

          <Image style={{height:200,width:'100%',borderRadius:10}} source={{
           uri:'https://media.istockphoto.com/id/1280715716/photo/germany-stuttgart-magical-orange-sunset-sky-above-ripe-grain-field-nature-landscape-in-summer.jpg?s=612x612&w=0&k=20&c=TukToGq-LkmpxvEXEomC3d11prf_hDRSwA7pYsLYG50='
           }}/>
       </Swiper>
    </View>


    <View style={{width:'90%',alignSelf:'center',marginTop:20,gap:20}}>

<View style={{gap:5}}>
    <Text>Farmland Size</Text>
    <Text style={{fontSize:20}}>5000 Acres</Text>
</View>

<View style={{gap:5}}>
    <Text>Address</Text>
    <Text style={{fontSize:20,flex:1}}>Dhaniram Sharma village</Text>
</View>
</View>
    </View>
  )
}

export default Property
