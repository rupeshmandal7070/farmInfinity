import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'



const Profile = () => {
    const router = useRouter();
  return (
    <View style={{flex:1,backgroundColor:'#eef5fd'}}>
      <View style={{height:150,width:'100%',backgroundColor:'#2276e3'}}>
        <View style={{width:'90%',alignSelf:'center',marginTop:20,flexDirection:'row',gap:20,alignItems:'center'}}>
          <View style={{height:60,width:60,borderRadius:50,backgroundColor:'gray',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'white'}}>
             <Image source={require('../../assets/images/avatar.png')}  style={{height:58,width:58}}/>
          </View>

          <View>
             <Text style={{fontSize:20,color:'white'}}>Farmer</Text>
             <Text style={{fontSize:20,color:'white',marginTop:5}}>9876543210</Text>
          </View>

        </View>

        <TouchableOpacity onPress={()=>router.push('/upload')}  style={{position:'absolute',height:100,backgroundColor:'white',width:'90%',alignSelf:'center',top:120,borderRadius:10,padding:10,flexDirection:'row',alignItems:'center',gap:20}}>
            <View style={{height:50,width:50,backgroundColor:'#0E3C77',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
            <AntDesign name="filetext1" size={24} color="white" />
            </View>
            <View>
            <Text style={{fontSize:20,color:'black',fontWeight:'800'}}>Start form filling</Text>
            <Text style={{fontSize:20,color:'black',}}>Start a new form</Text>
            </View>
        </TouchableOpacity>
      </View>




          <View style={{top:100,width:'90%',alignSelf:'center'}}>
          <Text style={{fontSize:20,color:'black',}}>Other Products</Text>
        

      <View style={{height:'auto',backgroundColor:'white',width:'100%',alignSelf:'center',top:20,borderRadius:10,padding:10,flexDirection:'row',gap:20}}>
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


        <View style={{height:'auto',backgroundColor:'white',width:'100%',alignSelf:'center',top:50,borderRadius:10,padding:10,flexDirection:'row',gap:20}}>
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
    </View>
  )
}

export default Profile
