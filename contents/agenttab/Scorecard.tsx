import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';

const Scorecard = () => {
  return (

    <View>

   
    <View style={styles.container}>
      {/* Application Number */}
      <Text style={styles.applicationNumber}>Application No: 062423XXXX</Text>
      
      {/* Score Section */}
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
      
      {/* KCC Limit and Eligibility */}
      <View style={styles.card2}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',alignSelf:'center',}}>
        <View style={{padding:15}}>
          <Text style={styles.label}>TOTAL KCC LIMIT</Text>
          <Text style={styles.value}>₹ 0.0 Lakhs</Text>
        </View>
        <View style={{backgroundColor:'#DBEBFF',height:'100%',width:'50%',padding:15,borderTopRightRadius:10,borderBottomRightRadius:10}} >
          <Text style={styles.label}>ELIGIBILITY</Text>
          <Text style={styles.highlightedValue}>₹ 5.09 Lakhs</Text>
        </View>
        </View>
      </View>
      
      {/* Net Worth */}
      <View style={styles.card}>

        <View style={{gap:10}}>
        <Text style={styles.label}>NET WORTH</Text>
        <View style={{flexDirection:'row',flex:1,width:'99%',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={styles.value}>₹ 10.17 Lakhs</Text>
        <Text style={styles.estimated}>Estimated</Text>
        </View>
        </View>
      </View>
      
      {/* Crop Highlight */}
      <View style={styles.card}>
        <View style={{gap:10}}>
        <Text style={styles.label}>CROP HIGHLIGHT & WORTH</Text>
        <View style={{flexDirection:'row',width:'99%',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={styles.value}>₹ 6.48 Lakhs</Text>
        <Text style={styles.estimated}>Harvested Annually</Text>
        </View>
        </View>
      </View>
      
      {/* Existing Exposure */}
      <View style={styles.card}>
        <View style={{gap:10}}>
        <Text style={styles.label}>EXISTING EXPOSURE</Text>
        <View style={{flexDirection:'row',width:'99%',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={styles.value}>₹ 0 Lakhs</Text>
        <Text style={styles.error}>Not a KCC holder</Text>
        </View>
        </View>
      </View>


      
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    padding: 20,
    backgroundColor: '#f9f9f9',
    
  },
  applicationNumber: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 10,
  },
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
   
  },
  card2: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
   
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    color: '#777',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  highlightedValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196f3',
  },
  estimated: {
    fontSize: 12,
    color: '#999',
  },
  error: {
    fontSize: 12,
    color: '#d32f2f',
  },
});

export default Scorecard;
