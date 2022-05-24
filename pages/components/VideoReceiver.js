import * as React from 'react';
import { StyleSheet, } from 'react-native';
import { Video } from 'expo-av';

export default function VideoReceiver(stylesField) {
  const video = React.useRef(null);
  const [lastLoad, setLastLoad] = React.useState(undefined)
  React.useEffect(()=>{
    if (stylesField.stylesField !== undefined){
      setLastLoad(stylesField.stylesField)
    }
  },[])


  return (
        <Video  
          ref={video}
          style={ lastLoad !== undefined ? lastLoad.isVideo ? lastLoad.fullScreen : styles.container : styles.container}
          source={{
            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          
          resizeMode="contain"
        />

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#red',
      borderRadius: 30
    },
  });