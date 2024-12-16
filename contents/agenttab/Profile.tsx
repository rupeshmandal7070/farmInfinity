import React from 'react'
import { Image } from 'react-native'
import { Text, View } from 'react-native'

const Profile = () => {
  return (
    <View style={{marginBottom:20}}>
       <View style={{height:100,width:100,borderRadius:50,backgroundColor:'#F2F2F2',alignSelf:'center',marginTop:20,justifyContent:'center',alignItems:'center'}}>
          <Image source={require('../../assets/images/camera2.png')}/>
       </View>

       <View style={{width:'90%',alignSelf:'center',marginTop:20,gap:20}}>

        <View style={{gap:5}}>
            <Text>Name</Text>
            <Text style={{fontSize:20}}>Dhaniram Sharma</Text>
        </View>

        <View style={{gap:5}}>
            <Text>Address</Text>
            <Text style={{fontSize:20,flex:1}}>Dhaniram Sharma village</Text>
        </View>

        <View style={{gap:5}}>
            <Text>Pincode</Text>
            <Text style={{fontSize:20,flex:1}}>123456</Text>
        </View>

        <View style={{gap:5}}>
            <Text>District</Text>
            <Text style={{fontSize:20,flex:1}}>Haridwar</Text>
        </View>

        <View style={{gap:5}}>
            <Text>State</Text>
            <Text style={{fontSize:20,flex:1}}>Uttrakhand</Text>
        </View>

        <View style={{gap:5}}>
            <Text>Alternate Phone Number</Text>
            <Text style={{fontSize:20,flex:1}}>1234974983</Text>
        </View>

        <View style={{gap:5}}>
            <Text>Email Id</Text>
            <Text style={{fontSize:20,flex:1}}>dhaniram@gmail.com</Text>
        </View>

        <View style={{gap:5}}>
            <Text>Number of family members</Text>
            <Text style={{fontSize:20,flex:1}}>10</Text>
        </View>

       </View>
    </View>
  )
}

export default Profile
