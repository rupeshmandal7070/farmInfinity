import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Products from './Products'



const AgentProfile = () => {
    const router = useRouter();
  return (
    <View style={{backgroundColor:'#eef5fd'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
      
      <View style={{height:150,width:'100%',backgroundColor:'#ff6d38'}}>
        <TouchableOpacity onPress={()=>router.push('/profile-view')} style={{width:'90%',alignSelf:'center',marginTop:20,flexDirection:'row',gap:20,alignItems:'center'}}>
          <View style={{height:60,width:60,borderRadius:50,backgroundColor:'gray',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'white'}}>
             <Image source={require('../../assets/images/avatar.png')}  style={{height:58,width:58}}/>
          </View>

          <View>
             <Text style={{fontSize:20,color:'white'}}>Field Agent</Text>
             <Text style={{fontSize:20,color:'white',marginTop:5}}>9876543210</Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity onPress={()=>router.push('/upload')}  style={{position:'absolute',height:100,backgroundColor:'white',width:'90%',alignSelf:'center',top:120,borderRadius:10,padding:10,flexDirection:'row',alignItems:'center',gap:20}}>
            <View style={{height:50,width:50,backgroundColor:'#ff6d38',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
            <AntDesign name="filetext1" size={24} color="white" />
            </View>
            <View>
            <Text style={{fontSize:20,color:'black',fontWeight:'800'}}>Start form filling</Text>
            <Text style={{fontSize:16,color:'black',}}>Fill a form for new farmer</Text>
            </View>
        </TouchableOpacity>
      </View>

<View style={{marginTop:100}}>
      <TouchableOpacity onPress={()=>router.push('/search')}  style={{height:'auto',backgroundColor:'white',width:'90%',alignSelf:'center',borderRadius:10,padding:10,}}>

        <View style={{flexDirection:'row',alignItems:'center',gap:20}}>
            <View style={{height:50,width:50,backgroundColor:'#2276e3',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
            <AntDesign name="filetext1" size={24} color="white" />
            </View>
            <View>
            <Text style={{fontSize:20,color:'black',fontWeight:'800'}}>Enrolled farmers list</Text>
            <Text style={{fontSize:16,color:'black',}}>Existing farmers list</Text>
            </View>
        </View>
        <View style={{marginTop:10,position:'relative'}}>
           <TextInput placeholder='Search Farmer'  style={{backgroundColor:'#eef5fd',height:45,borderRadius:5,marginTop:5,paddingLeft:40}}/>
           <View style={{position:'absolute',top:15,left:5}}>
           <Ionicons name="search-sharp" size={24} color="#2276e3" />
           </View>
        </View>
        </TouchableOpacity>



        <TouchableOpacity onPress={()=>router.push('/search')}  style={{height:'auto',backgroundColor:'white',width:'90%',alignSelf:'center',borderRadius:10,padding:10,marginTop:20}}>

        <View style={{flexDirection:'row',alignItems:'center',gap:20}}>
            <View style={{height:50,width:50,backgroundColor:'#2276e3',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
            <AntDesign name="filetext1" size={24} color="white" />
            </View>
            <View>
            <Text style={{fontSize:20,color:'black',fontWeight:'800'}}>View farmers scorecard</Text>
            <Text style={{fontSize:16,color:'black',}}>Existing farmers list</Text>
            </View>
        </View>
        <View style={{marginTop:10,position:'relative'}}>
           <TextInput placeholder='Search Farmer'  style={{backgroundColor:'#eef5fd',height:45,borderRadius:5,marginTop:5,paddingLeft:40}}/>
           <View style={{position:'absolute',top:15,left:5}}>
           <Ionicons name="search-sharp" size={24} color="#2276e3" />
           </View>
        </View>
        </TouchableOpacity>

</View>

            <View>
                <Products/>
            </View>


       
              
        </ScrollView>
    </View>
  )
}

export default AgentProfile
