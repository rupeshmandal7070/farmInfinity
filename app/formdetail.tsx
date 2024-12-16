import { useRouter } from 'expo-router'
import React from 'react'
import { Image, TextInput, TouchableOpacity } from 'react-native'
import { ScrollView, Text, View } from 'react-native'

const FormDetail = () => {
    const router = useRouter();
  return (
    <View style={{flex:1,backgroundColor:'#2276E3'}}>

        <ScrollView>
      <View style={{height:100,width:100,borderRadius:50,backgroundColor:'#F2F2F2',alignSelf:'center',marginTop:20,justifyContent:'center',alignItems:'center'}}>
          <Image source={require('../assets/images/camera2.png')}/>
     </View>

     <View style={{width:'90%',alignSelf:'center',marginBottom:20}}>
     <View style={{width:'100%',alignSelf:'center',marginTop:20}}>
       <Text style={{fontSize:16,color:'white'}}>Name</Text>
         <TextInput  style={{backgroundColor:'#eef5fd',height:50,borderRadius:10,marginTop:5,paddingLeft:10}}/>
       </View>

       <View style={{width:'100%',alignSelf:'center',marginTop:20}}>
       <Text style={{fontSize:16,color:'white'}}>Address</Text>
         <TextInput multiline numberOfLines={4}  style={{backgroundColor:'#eef5fd',height:100,borderRadius:10,marginTop:5,paddingLeft:10}}/>
       </View>

       <View style={{width:'100%',alignSelf:'center',marginTop:20}}>
       <Text style={{fontSize:16,color:'white'}}>Pincode</Text>
         <TextInput  style={{backgroundColor:'#eef5fd',height:50,borderRadius:10,marginTop:5,paddingLeft:10}}/>
       </View>

       <View style={{width:'100%',alignSelf:'center',marginTop:20}}>
       <Text style={{fontSize:16,color:'white'}}>District</Text>
         <TextInput  style={{backgroundColor:'#eef5fd',height:50,borderRadius:10,marginTop:5,paddingLeft:10}}/>
       </View>


       <View style={{width:'100%',alignSelf:'center',marginTop:20}}>
       <Text style={{fontSize:16,color:'white'}}>State</Text>
         <TextInput  style={{backgroundColor:'#eef5fd',height:50,borderRadius:10,marginTop:5,paddingLeft:10}}/>
       </View>

       <View style={{width:'100%',alignSelf:'center',marginTop:20}}>
       <Text style={{fontSize:16,color:'white'}}>Alternate Phone Number</Text>
         <TextInput  style={{backgroundColor:'#eef5fd',height:50,borderRadius:10,marginTop:5,paddingLeft:10}}/>
       </View>

       <View style={{width:'100%',alignSelf:'center',marginTop:20}}>
       <Text style={{fontSize:16,color:'white'}}>Email Id</Text>
         <TextInput  style={{backgroundColor:'#eef5fd',height:50,borderRadius:10,marginTop:5,paddingLeft:10}}/>
       </View>


       <View style={{width:'100%',alignSelf:'center',marginTop:20}}>
       <Text style={{fontSize:16,color:'white'}}>Number of family members</Text>
         <TextInput  style={{backgroundColor:'#eef5fd',height:50,borderRadius:10,marginTop:5,paddingLeft:10}}/>
       </View>


       <View style={{width:'100%',alignSelf:'center',marginTop:20}}>
       <Text style={{fontSize:16,color:'white'}}>Save loan name as</Text>
         <TextInput  style={{backgroundColor:'#eef5fd',height:50,borderRadius:10,marginTop:5,paddingLeft:10}}/>
       </View>


       <TouchableOpacity onPress={()=>router.push('/farmer-property')} style={{width:170,height:50,backgroundColor:'#ff6d38',alignSelf:'center',marginTop:40,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <Text style={{textAlign:'center',color:'white',fontSize:20}}>Next</Text>
</TouchableOpacity>
     </View>

        </ScrollView>
    </View>
  )
}

export default FormDetail
