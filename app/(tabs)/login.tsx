import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


const Login = () => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState('farmer');
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>

        <View style={{height:220,width:'100%',backgroundColor:'#eef5fd'}}>
        <Text style={{fontSize:24,fontWeight:'700',lineHeight:30,color:'#2276e3',textAlign:'center',marginTop:20}}>You are</Text>

        <View style={{flexDirection:'row',alignSelf:'center',gap:50,marginTop:20}}>
            <TouchableOpacity onPress={()=>setSelectedOption('farmer')} style={[styles.button,
                selectedOption === 'farmer' && styles.selectedButton,
            ]}>
                 <View style={[styles.icon,selectedOption === 'farmer' && styles.selectedIcon,]}>

                 </View>
                 <Text style={[styles.buttonText,selectedOption === 'farmer' && styles.selectedText]}>Farmer</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setSelectedOption('agent')} style={[styles.button,selectedOption === 'agent' && styles.selectedButton,]}>
                 <View style={[
                    styles.icon,
                    selectedOption === 'agent' && styles.selectedIcon,
                 ]}>

                 </View>
                 <Text style={[styles.buttonText,selectedOption === 'agent' && styles.selectedText]}>Field Agent</Text>
            </TouchableOpacity>
        </View>
        </View>

        {
            selectedOption === 'farmer' ? (

        <View>
       <View style={{width:'90%',alignSelf:'center',marginTop:50}}>
       <Text style={{fontSize:16,color:'#2276e3'}}>Mobile Number</Text>
         <TextInput  style={{backgroundColor:'#eef5fd',height:50,borderRadius:10,marginTop:5,paddingLeft:10}}/>
       </View>


       <TouchableOpacity onPress={()=>router.push('/otp')} style={{height:60,width:170,alignSelf:'center',backgroundColor:'#ff6d38',borderRadius:30,marginTop:50,justifyContent:'center'}}>
       <Text style={{fontSize:24,textAlign:'center',color:'white'}}>Get OTP</Text>
       </TouchableOpacity>

       <View style={{width:'70%',alignSelf:'center',marginTop:20}}>
       <Text style={{fontSize:18,color:'#9D9D9D',textAlign:'center'}}>OTP will be send to your registered 
       mobile number</Text>
       </View>

        </View>
            ):(
                <View>
                     <View style={{width:'90%',alignSelf:'center',marginTop:50}}>
       <Text style={{fontSize:16,color:'#2276e3'}}>Email</Text>
         <TextInput  style={{backgroundColor:'#eef5fd',height:50,borderRadius:10,marginTop:5,paddingLeft:10}}/>
       </View>


       <View style={{width:'90%',alignSelf:'center',marginTop:20}}>
       <Text style={{fontSize:16,color:'#2276e3'}}>Password</Text>
         <TextInput  style={{backgroundColor:'#eef5fd',height:50,borderRadius:10,marginTop:5,paddingLeft:10}}/>
       </View>

       <TouchableOpacity onPress={()=>router.push('/agent-profile')} style={{height:60,width:170,alignSelf:'center',backgroundColor:'#ff6d38',borderRadius:30,marginTop:50,justifyContent:'center'}}>
       <Text style={{fontSize:24,textAlign:'center',color:'white'}}>Sign in</Text>
       </TouchableOpacity>

       <View style={{width:'70%',alignSelf:'center',marginTop:20}}>
       <Text style={{fontSize:16,color:'#9D9D9D',textAlign:'center'}}>By signing in you accept ouur Tnc</Text>
       </View>

       <Text style={{fontSize:18,lineHeight:30,color:'#164B90',textAlign:'center',marginTop:10}}>Forgot password</Text>
                </View>
            )
        

}
    </View>
  )
}

export default Login


const styles = StyleSheet.create({
 button: {
    height: 110,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    gap: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9D9D9D',
  },
  selectedButton: {
    backgroundColor: '#2276e3',
    borderColor: '#2276e3',
  },
  icon: {
    height: 30,
    width: 30,
    backgroundColor: '#9D9D9D',
    borderRadius: 15,
    alignSelf:'center'
  },
  selectedIcon: {
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    color: '#9D9D9D',
    textAlign:'center'
  },
  selectedText: {
    color: 'white',
  },
})
