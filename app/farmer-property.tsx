import CustomDrawer from '@/contents/farmerProperty/FarmDrawer'
import Stepper from '@/contents/farmerProperty/Stepper'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const FarmerProperty = () => {
  return (
    <View style={{flex:1,backgroundColor:'#2276E3'}}>
       <Stepper/>

       <View>
           <Text style={{fontSize:22,fontWeight:600,color:'white',textAlign:'center',marginTop:40}}>Property owned by farmer</Text>
       </View>


       <CustomDrawer/>

      
    </View>
  )
}

export default FarmerProperty


