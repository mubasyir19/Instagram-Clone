import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconMenu, IconPost} from '../../assets/icons';
import {Gap} from '../../components/atoms';

export default function Profile() {
  return (
    <View style={styles.body}>
      {/* Top */}
      <View style={styles.top}>
        <Text style={styles.username}>mubasyir19</Text>
        <View>
          <TouchableOpacity>
            <IconPost />
          </TouchableOpacity>
          <Gap width={30} />
          <TouchableOpacity>
            <IconMenu />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'black',
    flex: 1,
  },
  top: {
    marginHorizontal: 25,
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    color: 'white',
    fontSize: 26,
  },
});
