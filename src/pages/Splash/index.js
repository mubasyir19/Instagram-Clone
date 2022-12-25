import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {IconLogo, IconMeta} from '../../assets';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.pages}>
      <View style={styles.pages}>
        <IconLogo />
      </View>
      <View style={styles.by}>
        <Text style={styles.from}>from</Text>
        <IconMeta />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  by: {
    alignItems: 'center',
    bottom: 70,
  },
  from: {
    marginBottom: 11,
    color: '#767676',
  },
});
