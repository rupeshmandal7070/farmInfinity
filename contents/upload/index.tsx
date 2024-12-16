import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const Upload = () => {
  const router = useRouter();
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
         <View style={{height:110,width:'100%',backgroundColor:'#2276e3'}}>
        <View style={{width:'90%',alignSelf:'center',marginTop:20,flexDirection:'row',gap:20,alignItems:'center'}}>
          <View style={{height:60,width:60,borderRadius:50,backgroundColor:'gray',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'white'}}>
             <Image source={require('../../assets/images/avatar.png')}  style={{height:58,width:58}}/>
          </View>

          <View>
             <Text style={{fontSize:20,color:'white'}}>Farmer</Text>
             <Text style={{fontSize:20,color:'white',marginTop:5}}>9876543210</Text>
          </View>

        </View>
        </View>

<Text style={{textAlign:'center',fontSize:18,marginTop:30}}>Upload your Pan or Aadhar card</Text>

<View style={{height:400,width:'90%',borderWidth:1,alignSelf:'center',marginTop:50,borderRadius:10,borderStyle:'dashed',backgroundColor:'#eef5fd',justifyContent:'space-evenly'}}>

    <View style={{alignSelf:'center'}}>
        <Image source={require('../../assets/images/upload.png')} style={{alignSelf:'center'}}/>
        <Text style={{fontSize:18,color:'#2276E3',width:'65%',marginTop:5}}>Upload from gallery</Text>
    </View>

    <View style={{alignSelf:'center'}}>
        <Image source={require('../../assets/images/camera.png')} style={{alignSelf:'center'}}/>
        <Text style={{fontSize:18,color:'#2276E3',width:'65%',marginTop:5}}>Click from camera</Text>
    </View>

</View>


<TouchableOpacity onPress={()=>router.push('/formdetail')} style={{width:170,height:50,backgroundColor:'#ff6d38',alignSelf:'center',marginTop:40,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <Text style={{textAlign:'center',color:'white',fontSize:20}}>Next</Text>
</TouchableOpacity>

    </View>
  )
}

export default Upload
