// import {
//   SafeAreaView,
// } from 'react-native';
// import { initPusher } from './src/utils/pusher';
// // import { Chat } from './src/screens/chat';
// import { useEffect } from 'react';
// import Chat from './src/screens/chat';




// export default App = () => {

//   // eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMjA1YjMwNTFjMTAwMjgxMzhlYzYxMjFiZDViNzdmNmU1ZjhjODdmYWIxMWU0OTYyODQxYzVmM2IxOTUyNzY1ZDY3OGMzN2EwNzUxM2E3ZjEiLCJpYXQiOjE3MTA5MjY1MjcsIm5iZiI6MTcxMDkyNjUyNywiZXhwIjoxNzQyNDYyNTI3LCJzdWIiOiI1Iiwic2NvcGVzIjpbImN1c3RvbWVyIl19.LKro0HKBSgWAu-mBKuy9PlM0mAyMw82eSryNx0TZEo6p2vSPXexG29NJ9pvIUzjlWsnxoaYG8mCr7IhORSNuoqRr-ORVibJRb5SRNscEeCGOCFm0z4paPuGHC4eg5QjxDvzMJtAjCGSAVc1rlufB-kdvtnDVo92xjiHVnwT4LYRX7MPq7eSb5ETUdu_-0bzxI2c9QDP2d8mc7lnAnvdBUCjlW5g8yrU3U2puCmlOiwkp0ZFyIutJyDZMmr58eD5VUyLuwjpD_Z18ZLpwFU5f4Q816qkboJFkkkjxN0ClAwwvj4fgCLa1iI_AMOvUYNnlP24ikw9IlTI52vlRqBgp2Nlx4zhDLyPfuelhiNVyIC0a03FPpBKzl1Db6pKNXEyl3B4NLjPhneRApp1-XSAo6O5r7JNFexpu4aRk-_BqP6g5-slNaIpHzkx9bw058sBHmH3BuXPl0lYKspG3bqDu-eaI6_j4S_vS4X4eVCRDJWr3NmkolTFN8ii4J0zbhwHqAVrFZkN0FAYiQfiFP2jpgZyuo7y44W-XQG7YATNj-Nc34ax6_Bh_VKglbPX2T4rbi4pXcIaThcgjqJFr3yy1lsbfSa0xptgWouElVi1_P52fd_QWJwbaGrfZJX2sGfdb2ag1zLTMdOK4AKA2BxFoWW8dYc3Njw_LqZ5bstDIr-s

//   useEffect(() => {
//     initPusher()
//   }, [])

//   return (
//     <SafeAreaView style={{ backgroundColor: "white" }}>
//      <Chat />
//     </SafeAreaView>
//   );
// }







import { useEffect } from 'react';
import TrackPlayer, { Event, useTrackPlayerEvents } from 'react-native-track-player';
import MainPlayerScreen from './src/screens/chat';
import { View } from 'react-native';
 
export default  MainPlayer = () => {
  // Other states and functions


  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <MainPlayerScreen/>
    </View>
  );
};







