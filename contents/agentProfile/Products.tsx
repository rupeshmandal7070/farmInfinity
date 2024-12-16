import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

const Products = () => {
  return (
    <View style={{width:'90%',alignSelf:'center',marginTop:20,marginBottom:20}}>
    <Text style={{fontSize:20,color:'black',}}>Other Products</Text>
  

<View style={{height:'auto',backgroundColor:'white',width:'100%',alignSelf:'center',borderRadius:10,padding:10,flexDirection:'row',gap:20,marginTop:20}}>
      <View style={{height:50,width:50,backgroundColor:'#d7e0ff',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
      <MaterialCommunityIcons name="piggy-bank" size={24} color="black" />
      </View>
      <View>
      <Text style={{fontSize:20,color:'#2276E3',fontWeight:'800'}}>Insaurance</Text>
      <Text style={{fontSize:16,color:'black',width:'65%'}}>Buy insurance @199 per month
      for your farmland.</Text>

      <Text style={{fontSize:14,color:'#2276E3',width:'65%',marginTop:5}}>Know more</Text>
      </View>
  </View>


  <View style={{height:'auto',backgroundColor:'white',width:'100%',alignSelf:'center',borderRadius:10,padding:10,flexDirection:'row',gap:20,marginTop:20}}>
      <View style={{height:50,width:50,backgroundColor:'#d7e0ff',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
      <MaterialCommunityIcons name="chemical-weapon" size={24} color="black" />
      </View>
      <View>
      <Text style={{fontSize:20,color:'#2276E3',fontWeight:'800'}}>Fertiliser</Text>
      <Text style={{fontSize:16,color:'black',width:'65%'}}>Buy insurance @199 per month
      for your farmland.</Text>

      <Text style={{fontSize:14,color:'#2276E3',width:'65%',marginTop:5}}>Know more</Text>
      </View>
  </View>
  </View>
  )
}

export default Products
