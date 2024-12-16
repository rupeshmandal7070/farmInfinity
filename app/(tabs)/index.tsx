import { useRouter } from 'expo-router';
import { Image, StyleSheet, Platform, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import {WebView} from 'react-native-webview'



export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* <WebView source={{ uri: 'https://eximbd.com.my/' }} style={{ flex: 1 }} />; */}
    <ImageBackground
      source={require('../../assets/images/bg2.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >

    

      <View style={{flex:1,justifyContent:'flex-end',width:'100%',marginBottom:20}}>
        <View style={{width:'90%',alignSelf:'center',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{width:'55%'}}>
            <Text style={{fontSize:18,lineHeight:30,color:'#164B90'}}>Get your Scorecard and apply for loan in</Text>
            <Text style={{fontSize:22,fontWeight:'700',lineHeight:30,color:'#164B90'}}>3 easy steps</Text>
          </View>

          <TouchableOpacity onPress={()=>router.push('/login')} style={{height:50,width:110,backgroundColor:'#2276e3',display:'flex',justifyContent:'center',borderRadius:25}}>
              <Text style={{textAlign:'center',color:'white',fontSize:18}}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
     
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
       
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
