import { StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Options() {
  return (
    <View style={styles.container}>
      <Text style={{color: "white", fontSize:20}}>Options Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});