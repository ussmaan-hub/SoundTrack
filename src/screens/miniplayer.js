// MiniPlayer.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TrackPlayer, { State, usePlaybackState, useProgress } from 'react-native-track-player';

const MiniPlayer = ({ onExpand }) => {
  const { position, duration } = useProgress();
  const playbackState = usePlaybackState();

  const togglePlayback = async () => {
    if (playbackState.state === State.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onExpand}>
      <Text style={styles.trackInfo}>Current Track Info</Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={togglePlayback}>
          <Text style={styles.controlText}>{playbackState === State.Playing ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
        <Text style={styles.controlText}>{`${Math.floor(position)}/${Math.floor(duration)}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#333',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trackInfo: {
    color: '#fff',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlText: {
    color: '#fff',
    marginHorizontal: 10,
  },
});

export default MiniPlayer;
