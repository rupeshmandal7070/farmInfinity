import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Stepper = () => {
  return (
    <View >
         <View style={styles.progressContainer}>
        {/* Profile */}
        <View style={styles.step}>
          <View style={styles.circleInactive}></View>
          <Text style={styles.textInactive}>Profile</Text>
        </View>

        {/* Line between Profile and Owned */}
        <View style={styles.line} />

        {/* Owned */}
        <View style={styles.step}>
          <View style={styles.circleActive}>
            <View style={styles.innerCircle}></View>
          </View>
          <Text style={styles.textActive}>Owned</Text>
        </View>

        {/* Line between Owned and Documents */}
        <View style={styles.line} />

        {/* Documents */}
        <View style={styles.step}>
          <View style={styles.circleInactive}></View>
          <Text style={styles.textInactive}>Documents</Text>
        </View>
      </View>
    </View>
  )
}

export default Stepper

const styles = StyleSheet.create({
   
    progressContainer: {
      flexDirection: 'row',
    
      justifyContent: 'center',
      marginTop:20
    },
    step: {
      alignItems: 'center',
    },
    circleInactive: {
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: '#ffffff',
    },
    circleActive: {
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerCircle: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#FF5722', // Orange
    },
    line: {
      width: 80,
      height: 2,
      backgroundColor: '#ffffff',
      marginTop:8
    },
    textInactive: {
      marginTop: 8,
      fontSize: 12,
      color: '#ffffff',
    },
    textActive: {
      marginTop: 8,
      fontSize: 12,
      color: '#ffffff',
      fontWeight: 'bold',
    },
  });
