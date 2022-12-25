import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IconInstagram, IconPost, IconLiked, IconMessage} from '../../../assets';

export default function TopBar() {
  return (
    <View style={styles.container}>
      <View>
        <IconInstagram />
      </View>
      <View style={styles.menus}>
        <IconPost style={styles.menu} />
        <IconLiked style={styles.menu} />
        <IconMessage style={styles.menu} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  menus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    // marginHorizontal: 12,
    marginLeft: 20,
  },
});
