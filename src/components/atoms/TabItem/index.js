import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  IconHomeActive,
  IconHome,
  IconSearch,
  IconSearchActive,
  IconReelsActive,
  IconReels,
  IconShop,
  IconShopActive,
  IconProfileActive,
  IconProfile,
} from '../../../assets';

export default function TabItem({title, active, onPress, onLongPress}) {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (title === 'Explore') {
      return active ? <IconSearchActive /> : <IconSearch />;
    }
    if (title === 'Reels') {
      return active ? <IconReelsActive /> : <IconReels />;
    }
    if (title === 'Shop') {
      return active ? <IconShopActive /> : <IconShop />;
    }
    if (title === 'Profile') {
      return active ? <IconProfileActive /> : <IconProfile />;
    }
    return <IconHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      {/* <Text style={styles.text(active)}>{title}</Text> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontFamily: 'Poppins-Medium',
    color: active ? '#FFFFFF' : '#8F929B',
    fontSize: 10,
  }),
});
