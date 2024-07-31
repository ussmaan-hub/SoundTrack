
// import React, { useEffect, useState, useFocusEffect } from 'react'


// import {
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     useColorScheme,
//     useWindowDimensions,
//     View,
// } from 'react-native';
// import pusher from '../utils/pusher';
// import axios from 'axios';


// export default function Chat() {

//     useEffect(() => {
//         getAllChat();
//         setTimeout(() => {
//             getData();
//         }, 2000);
//         return removePusher
//     }, [mergeMsg]);




//     const removePusher = async () => {
//         const channelName = 'chatting12';
//         await pusher.unsubscribe({ channelName });
//     };
//     const getData = async () => {
//         console.log('getData called', 'chatting12');
//         try {

//             await pusher.subscribe({
//                 channelName: 'chatting12',
//                 onSubscriptionSucceeded: () => {
//                     console.log(`Subscription to succeeed!`);
//                 },
//                 onSubscriptionError: (channelName, error) => {
//                     console.log(`ERROR while subscribing: ${error}`);
//                 },

//                 onEvent: event => {
//                     console.log(event, "event");
//                     const data = JSON.parse(event.data);
//                     console.log(data, "afeter evwnrt ");
//                     mergeMsg(data);

//                 },
//             });

//             await pusher.connect();
//         } catch (e) {
//             console.log(`ERROR: ${e}`);
//         }

//     }

//     const [msgArr, setMsgArr] = useState([])

//     const mergeMsg = (data) => {
//         setMsgArr([...msgArr, data?.data]);
//         getAllChat()
//         console.log(data, 'ajaaaaa')
//         console.log("messageArray", msgArr);
//         flatListRef.current.scrollToIndex({ animated: true, index: 0 });

//     }

//     const getAllChat = () => {
//         axios.get("https://beta.monkeymarket.co.uk/api/v1/customer/chat/messages/53", {
//             headers: {
//                 Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNzBlNjc3NDZmNTI5MDUxYzY1MzU5MzhkNGMwMDFiN2RlZDk1YjUyNzBjMGFjYjJjMTY5MDQ3MDE1OTQxMDY3MDdiYzIxMDEzNzJhNWE1MDkiLCJpYXQiOjE3MTA5Mjc5MTIsIm5iZiI6MTcxMDkyNzkxMiwiZXhwIjoxNzQyNDYzOTEyLCJzdWIiOiIxMTciLCJzY29wZXMiOlsiY3VzdG9tZXIiXX0.cJLvpifSDW2AFWCp9wwxVRc-zjqkGwl0ADfy6y7_A9pEOfhNIle2x0MeaC3AQX_ebiPm7GIx8Zhmu5O83weEkUKiE-yITc49Lbt3JhvIVKlmyrVXq7H-4cpzM1mPyqEnQ_Wc7oqfPZ8KMAibbSy2HG_w-hZW-T7nU2Whm14fDRUjmukwaa4ObQNTVadsUSXtuwadeLQ02K6NgHgTa36bzB3DAvnboR3C0ImBBDjPgz79PF_DMW5vxvoxWN2yjwH_Sbe_a1Wqmo9KX3oYoeiUT9m22JJ5fL0v8Hil7Ba-zJk_sagUBCeN2kvYhsNCTD1r9aUNYUvs3QFFbKTQdlc4mvKYYXYu7ppVW2uUvqLOxL3KdsjqDw2sgq5pEs-LouWhfJCJMXBhdqNXEp6wADZgf17v4grPFvMq01RXMnTnSaV02aKKAqBtCIWxRIC2-F1NzXskuDKao-MqZj9pkTr5ViJUUxTeS7pMilnSQzEq4gdlkjxVuiIjpxESClX3joPvWgAbUj-WKTVjmCzuHR0cax64NXiEGYxxuRCHAkFhEgIIW_nKgGfLrjdiZOiRYM8BPkkNHpf4YdudJTstfg-uwwoIS6oOyoBz_XGxsxFoDnmPv60YpUykcco7Hc--TQMZxJyhAv2uGoQwqLCb3NjziWSF-bqgPSo0-0rfgxWCjmc"
//             }
//         }).then((val) => {
//             console.log(val.data);
//             // getData()
//         }).catch(err => console.log(err))
//     }





//     const { width, height } = useWindowDimensions()

//     const { email, setEmail } = useState("")


//     return (
//         <ScrollView
//             style={{ backgroundColor: "white", }}>
//             <View style={{ height: height, justifyContent: "center", alignItems: "center", }}>
//                 <View style={{ width: width - 40, height: 50, borderColor: "grey", borderWidth: 1, borderRadius: 10, paddingHorizontal: 10 }}>

//                     <TextInput
//                         value={email}
//                         onChangeText={(val) => setEmail(val)}
//                         style={{}}
//                         placeholder='Enter Email'
//                     />
//                 </View>
//                 <TouchableOpacity
//                     onPress={() => { }}
//                     style={{ width: width - 40, height: 45, justifyContent: "center", alignItems: "center", backgroundColor: "green", borderRadius: 10, paddingVertical: 10, marginTop: 10, }}>
//                     <Text children={"Submit"} />
//                 </TouchableOpacity>
//             </View>
//         </ScrollView>
//     )
// }



// App.js
import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import TrackPlayer, { Event, State, useTrackPlayerEvents } from 'react-native-track-player';
import MiniPlayer from './miniplayer';

const MainPlayer = () => {
  const [isMiniPlayerVisible, setMiniPlayerVisible] = useState(false);
  const [playbackState, setPlaybackState] = useState(State.None);

  useEffect(() => {
    const setupPlayer = async () => {
      await TrackPlayer.setupPlayer();
      console.log('Player is ready');
      await TrackPlayer.add({
        id: 'trackId',
        url: require('../../ethereal-horizons-227475.mp3'),
        title: 'Track Title',
        artist: 'Track Artist',
      });
    };

    setupPlayer();

    return () => {
      TrackPlayer.reset();
    };
  }, []);

  useTrackPlayerEvents([Event.PlaybackState], (event) => {
    setPlaybackState(event.state);
  });

  const handleExpandMiniPlayer = () => {
    setMiniPlayerVisible(false);
    // Navigate to the full player screen or show the full player
  };

  const handleCollapseMiniPlayer = () => {
    setMiniPlayerVisible(true);
  };

  const togglePlayback = async () => {
    if (playbackState === State.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.trackInfo}>Main Player</Text>
      <Button title="Show Mini Player" onPress={handleCollapseMiniPlayer} />
      <Button
        title={playbackState === State.Playing ? 'Pause' : 'Play'}
        onPress={togglePlayback}
      />
      {isMiniPlayerVisible && <MiniPlayer onExpand={handleExpandMiniPlayer} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackInfo: {
    marginBottom: 20,
    fontSize: 18,
  },
});

export default MainPlayer;
