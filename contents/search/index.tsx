import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const search = () => {
  const router = useRouter();
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
       <View style={{marginTop:10,position:'relative',width:'90%',alignSelf:'center'}}>
           <TextInput placeholder='Search Farmer'  style={{backgroundColor:'#eef5fd',height:45,borderRadius:5,marginTop:5,paddingLeft:40}}/>
           <View style={{position:'absolute',top:15,left:5}}>
           <Ionicons name="search-sharp" size={24} color="#2276e3" />
           </View>
        </View>

        <TouchableOpacity onPress={()=>router.push('/agenttab')} style={{width:'90%',alignSelf:'center',marginTop:10,gap:5}}>
            <Text>Mr akhd sdh</Text>
            <Text>Mr aghs jsgdbgf jhsgd</Text>
            <Text>Mr Rupesh Mandal</Text>
            <Text>Mr sdfjb kjsbdkb</Text>
        </TouchableOpacity>
    </View>
  )
}

export default search
