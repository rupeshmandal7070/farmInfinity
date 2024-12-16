import React, { useState } from 'react'
import { Text, View } from 'react-native'

const ProfileView = () => {
    const [selectedValue,setSelectedValue] = useState('profile')
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{height:'auto',backgroundColor:'#dceafb'}}>
            <View style={{width:'90%',alignSelf:'center',flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
                <View style={{height:45,backgroundColor:'#2276e3',width:'30%',justifyContent:'center',borderRadius:10}}>
                   <Text style={{color:'white',textAlign:'center'}}>Profile</Text>
                </View>

                <View style={{height:45,backgroundColor:'#2276e3',width:'30%',justifyContent:'center',borderRadius:10}}>
                   <Text style={{color:'white',textAlign:'center'}}>Property</Text>
                </View>

                <View style={{height:45,backgroundColor:'#2276e3',width:'30%',justifyContent:'center',borderRadius:10}}>
                   <Text style={{color:'white',textAlign:'center'}}>Scorecard</Text>
                </View>
            </View>
        </View>
      <Text>Profile</Text>
    </View>
  )
}

export default ProfileView
