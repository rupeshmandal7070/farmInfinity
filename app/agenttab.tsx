import Profile from '@/contents/agenttab/Profile';
import Property from '@/contents/agenttab/Property';
import Scorecard from '@/contents/agenttab/Scorecard';
import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const AgentTab = () => {
    const [value,setValue] = useState('profile');
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
       <View style={{height:100,backgroundColor:'#f0fbff',justifyContent:'center'}}>
           <View style={{width:'90%',alignSelf:'center',flexDirection:'row',gap:10}}>
                <TouchableOpacity onPress={()=>setValue('profile')} style={[value === 'profile' ? styles.button2 : styles.button]}>
                    <Text style={[value === 'profile' ? styles.text2 : styles.text]}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setValue('property')} style={[value === 'property' ? styles.button2 : styles.button]}>
                    <Text style={[value === 'property' ? styles.text2 : styles.text]}>Property</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setValue('scorecard')} style={[value === 'scorecard' ? styles.button2 : styles.button]}>
                    <Text style={[value === 'scorecard' ? styles.text2 : styles.text]}>Scorecard</Text>
                </TouchableOpacity>
           </View>
       </View>

       <ScrollView showsVerticalScrollIndicator={false}>
          {
            value === 'profile' && (
                <Profile/>
            )
          }

{
            value === 'property' && (
                <Property/>
            )
          }

{
            value === 'scorecard' && (
                <View style={{paddingBottom:50}}>
                    <Scorecard/>
                    
                </View>
            )
          }
       </ScrollView>
       {
            value === 'scorecard' && (
       <TouchableOpacity style={{position:'absolute',height:70,width:'100%',backgroundColor:'#FF6D38',zIndex:10,bottom:-10,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',textAlign:'center',fontWeight:600,fontSize:18}}>Download Scorecard</Text>
        </TouchableOpacity>
            )}
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        flex:1,
        borderWidth:1,
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#2276E3',
        borderRadius:10
    },

    button2:{
        flex:1,
        borderWidth:1,
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#2276E3',
        borderRadius:10,
        backgroundColor:'#2276E3'
    },
    text:{
        color:'#2276E3',
        textAlign:'center'
    },
    text2:{
        color:'white',
        textAlign:'center'
    }

})

export default AgentTab
