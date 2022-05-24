import { StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native';
import React , {useState, useEffect} from 'react';
import Map from './components/Map';
import VideoReceiver from './components/VideoReceiver';
import * as Location from 'expo-location'


export default function Main() {
    const [view, setView] = useState({
      isVideo: false,
      fullScreen: styles.fullScreen
    })
    const [latLon, setLatLon] = useState(null)


    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') { // DISPLAY ERROR MESSAGE WHEN PERMISSION DENIED!
          setErrorMsg('Permission to access location was denied');
          return;
        }
          
        let location = await Location.getCurrentPositionAsync({});
        if (location !== undefined){
            setLatLon({
                latitude: location['coords']['latitude'],
                longitude: location['coords']['longitude'],
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
                accuracy: location['coords']['accuracy']
            })
    
        }
      })();
    }), [];


    return (
      <View style={styles.container}>
        {view.isVideo ? <VideoReceiver stylesField={view} /> : <Map stylesField={view} location={latLon} /> }

        <TouchableOpacity
          style={styles.swapScreen}
          onPress={()=>{setView({isVideo: !view.isVideo, fullScreen: styles.fullScreen})}}
          >
        {!view.isVideo ? <VideoReceiver stylesField={view} /> : <Map stylesField={view} location={latLon} /> }
        </TouchableOpacity>

      </View>
      
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: '#000',
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fullScreen: {
      flex: 0,
      width: Dimensions.get('window').width > 800 ? Dimensions.get('window').width : 800,
      height: Dimensions.get('window').height < 320 ? Dimensions.get('window').height : 320,
    },
    swapScreen: {
      width: 200,
      height: 150,
      position: 'absolute',
      left: 5,
      bottom: -10,
    },
  });