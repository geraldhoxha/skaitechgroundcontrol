import React, {useState, useRef} from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import tracker from '../../src/s.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useEffect } from 'react/cjs/react.production.min';



export default function Map(props) {
    // Map function States
    const [darkMap, setDarkMap] = useState(false)
    const [onLoadZoomed, setOnLoadZoom] = useState(false)
    const [location, setLocation] = useState(props.location)


    // Map refs
    const mapRef = useRef(null);



    
    const fit = ()=>{
        mapRef.current.animateToRegion(location)
        setOnLoadZoom(true)
        checks()
    }

    const checks = ()=> {
      if (props.location !== null && props.location !== location ){
        setLocation(props.location)
      }
    }


    const doNothing = () =>{}

    return (
      <>
        <MapView ref={mapRef} style={props.stylesField.isVideo ? styles.map : props.stylesField.fullScreen}
            provider={PROVIDER_GOOGLE}
            customMapStyle={darkMap ? customStyle : null}
            showsUserLocation={true}
            mapType={darkMap? null : 'satellite'}
            onLayout={ location && !onLoadZoomed ? fit()  : doNothing()}
            >
              {
                props.location === null ? null
                :<>
                  <MapView.Marker
                    coordinate={{ latitude : props.location['latitude'] , longitude : props.location['longitude'] }}
                    image={tracker}
                    anchor={{x: 0.5, y: 0.1}}
                    centerOffset={{x: 0.5, y:0.1}}
                    
                    />
                  <MapView.Circle
                    center={{ latitude : props.location['latitude'] , longitude : props.location['longitude'] }}
                    radius={parseInt(props.location['accuracy'] +1 )} 
                    strokeColor={darkMap ? "#add8e644" :'#061c4344'}
                    strokeWidth= {2}
                    fillColor={darkMap ? "#add8e633" :'#061c4333'}
                    />
                </>
              }  
        </MapView>
         
        {props.stylesField.isVideo ? null :(
          <TouchableOpacity
            style={{
              backgroundColor: darkMap ? 'black' : 'white',
              position: 'absolute',
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              right: 25,
              bottom: 25,
              borderRadius: 30
            }}
            onPress={()=>{setDarkMap(!darkMap)}}
            
          >
                  <Ionicons
                    // style={{
                    //   position: 'relative',
                    // }}
                    name={darkMap ? 'map-outline' : 'map'} size={20} color={darkMap ? 'white' : 'black'} />
          </TouchableOpacity>
          )
        }
      </>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      flex: 1,
      // backgroundColor: '#red',
    },
    floatingButtonStyle: {
      resizeMode: 'contain',
      width: 30,
      height: 30,
      backgroundColor:'black'
    },
    
  });
  


  const customStyle = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#151b24',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#fac648',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#263f30',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#ffb606',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d57263',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#263f2b',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#00ff00',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#38414e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#212a37',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9ca5b3',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#746855',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#1f2835',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#f3d19c',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#2f3948',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#515c6d',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
  ];
