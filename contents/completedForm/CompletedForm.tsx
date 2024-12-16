import { AntDesign, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Completedform = () => {
    const router = useRouter();
  return (
    <View style={{flex:1,backgroundColor:'#EEF5FD'}}>

        <ScrollView showsVerticalScrollIndicator={false}>
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

        <TouchableOpacity onPress={()=>router.push('/upload')}  style={{position:'absolute',height:70,backgroundColor:'#D5FFDE',width:'90%',alignSelf:'center',top:120,borderRadius:10,padding:10,flexDirection:'row',alignItems:'center',gap:20}}>
            <View style={{height:50,width:50,backgroundColor:'#12B869',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
            <AntDesign name="filetext1" size={24} color="white" />
            </View>
            <View>
            <Text style={{fontSize:20,color:'black',fontWeight:'800'}}>Completed Form</Text>
            
            </View>
        </TouchableOpacity>
      </View>


        <View style={styles.scoreContainer}>
              <Text style={styles.farmScore}>farm∞SCORE</Text>
              
              <View style={{flexDirection:'row',alignItems:'center',gap:30,justifyContent:'space-between',width:'90%'}}>
      <View style={{alignItems:'center'}}>
          <Image source={require('../../assets/images/score.png')}/>
      <Text style={styles.mediumText}>MEDIUM</Text>
      </View>
              <View style={styles.scoreDetails}>
                <Text style={styles.scoreValue}>417</Text>
                <Text style={styles.grade}>Grade: C3</Text>
              </View>
              </View>
              
              <View style={styles.creditWorthiness}>
                <Text style={styles.creditText}>CREDIT WORTHINESS</Text>
                <Text style={styles.stars}>★★★★☆</Text>
              </View>
            </View>


             <TouchableOpacity onPress={()=>router.push('/upload')}  style={{height:100,backgroundColor:'white',width:'90%',alignSelf:'center',borderRadius:10,padding:10,flexDirection:'row',alignItems:'center',gap:20}}>
                        <View style={{height:50,width:50,backgroundColor:'#0E3C77',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                        <AntDesign name="filetext1" size={24} color="white" />
                        </View>
                        <View>
                        <Text style={{fontSize:20,color:'black',fontWeight:'800'}}>Start form filling</Text>
                        <Text style={{fontSize:16,color:'black',}}>Start a new form</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={()=>router.push('/upload')}  style={{height:100,backgroundColor:'white',width:'90%',alignSelf:'center',borderRadius:10,padding:10,flexDirection:'row',alignItems:'center',gap:20,marginTop:20}}>
                        <View style={{height:50,width:50,backgroundColor:'#0E3C77',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                        <FontAwesome6 name="money-bills" size={24} color="white" />
                        </View>
                        <View>
                        <Text style={{fontSize:20,color:'black',fontWeight:'800'}}>View loan history</Text>
                        <Text style={{fontSize:16,color:'black',}}>Fill form for a new famer</Text>
                        </View>
                    </TouchableOpacity>



                    <View style={{width:'90%',alignSelf:'center',gap:20,marginTop:40}}>
          <Text style={{fontSize:20,color:'black',}}>Other Products</Text>
        

      <View style={{height:'auto',backgroundColor:'white',width:'100%',alignSelf:'center',borderRadius:10,padding:10,flexDirection:'row',gap:20}}>
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


        <View style={{height:'auto',backgroundColor:'white',width:'100%',alignSelf:'center',borderRadius:10,padding:10,flexDirection:'row',gap:20}}>
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
        </ScrollView>
    </View>
  )
}

export default Completedform


const styles = StyleSheet.create({
    scoreContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        width:'90%',
        alignSelf:'center',
        marginTop:40
      },
      farmScore: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5a67d8',
      },
      scoreDetails: {
        
        marginVertical: 10,
      },
      scoreValue: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#333',
      },
      grade: {
        fontSize: 16,
        marginLeft: 10,
        color: '#666',
      },
      mediumText: {
        fontSize: 16,
        color: '#ff9800',
        marginVertical: 5,
      },
      creditWorthiness: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'black',
        width:'95%',
        height:40,
        borderRadius:10,
        justifyContent:'center'
       
      },
      creditText: {
        fontSize: 14,
        color: 'white',
        marginRight: 5,
      },
      stars: {
        fontSize: 16,
        color: '#ffc107',
      },
})
