import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';

export default function CustomDrawer() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const router = useRouter();

  // Function to open drawer with selected option
  const openDrawer = (option:any) => {
    setSelectedOption(option);
    setModalVisible(true);
  };

  // Function to close drawer
  const closeDrawer = () => {
    setModalVisible(false);
    setSelectedOption('');
  };

  const closeDrawer2 = () => {
    setModalVisible(false);
    router.push('/farmer-scorecard')
    
  };

  return (
    <View>
      {/* Options */}
      <View style={{flexDirection:'row',width:'85%',alignSelf:'center',gap:20,marginTop:40}}>
          <TouchableOpacity onPress={() => openDrawer('Farming')} 
          style={[selectedOption === 'Farming' ? styles.option2 : styles.option]}>
              <Image source={require('../../assets/images/crop.png')}/>
              <Text style={[selectedOption === 'Farming' ? styles.optionText2 : styles.optionText]}>Farming</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openDrawer('Goat')} style={[selectedOption === 'Goat' ? styles.option2 : styles.option]}>
              <Image source={require('../../assets/images/goat.png')}/>
              <Text style={[selectedOption === 'Goat' ? styles.optionText2 : styles.optionText]}>Goat</Text>
          </TouchableOpacity>
       </View>


       <View style={{flexDirection:'row',width:'85%',alignSelf:'center',gap:20,marginTop:40}}>
          <TouchableOpacity onPress={() => openDrawer('Fish')} style={[selectedOption === 'Fish' ? styles.option2 : styles.option]}>
              <Image source={require('../../assets/images/fish.png')}/>
              <Text style={[selectedOption === 'Fish' ? styles.optionText2 : styles.optionText]}>Fish</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openDrawer('Chicken')} style={[selectedOption === 'Chicken' ? styles.option2 : styles.option]}>
              <Image source={require('../../assets/images/chicken.png')}/>
              <Text style={[selectedOption === 'Chicken' ? styles.optionText2 : styles.optionText]}>Chicken</Text>
          </TouchableOpacity>
       </View>

      {/* Bottom Drawer */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={closeDrawer}
        style={styles.modal}
      >
        <View style={styles.drawerContent}>
          {/* Selected Option */}
          <Text style={styles.selectedOption}>
            {selectedOption ? `Selected: ${selectedOption}` : ''}
          </Text>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Farm land (in acres)</Text>
            <TextInput style={styles.input} placeholder="Enter value" keyboardType="numeric" />
            <Text style={styles.label}>Farm yield (no)</Text>
            <TextInput style={styles.input} placeholder="Enter value" keyboardType="numeric" />
            <Text style={styles.label}>Another yield (no)</Text>
            <TextInput style={styles.input} placeholder="Enter value" keyboardType="numeric" />
          </View>

          {/* Next Button */}
         <TouchableOpacity onPress={closeDrawer2} style={{width:170,height:50,backgroundColor:'#ff6d38',alignSelf:'center',marginTop:0,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
             <Text style={{textAlign:'center',color:'white',fontSize:20}}>Next</Text>
         </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4285F4',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  option: {
   height:100,
   flex:1,
   borderWidth:1,
   borderColor:'white',
   borderRadius:10,
   alignItems:'center',
   justifyContent:'center'
  },

  option2: {
    height:100,
    flex:1,
    borderWidth:1,
    borderColor:'white',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
   },
  optionText: {
    textAlign:'center',
    color:'white',
    fontSize:16,
    fontWeight:600
  },
  optionText2: {
    textAlign:'center',
    color:'black',
    fontSize:16,
    fontWeight:600
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  drawerContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 400,
  },
  selectedOption: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
  },
  nextButton: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
