import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VideoReceiver from './components/VideoReceiver';
export default function About() {
    return (
      <View style={styles.container}>
        <VideoReceiver />
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