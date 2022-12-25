import {Image, StyleSheet, Text, View} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {
  Account1,
  Account2,
  Account3,
  Account4,
  Account6,
  IconAddStory,
  MY,
} from '../../../assets';

export default function Story() {
  return (
    <View style={styles.container}>
      <View style={styles.story}>
        <View>
          <Image source={Account1} style={styles.account} />
          <IconAddStory style={styles.btnAdd} />
        </View>
        <Text style={styles.name}>Your Story</Text>
      </View>
      <View style={styles.story}>
        <View>
          <Image source={MY} style={styles.account} />
        </View>
        <Text style={styles.name}>Mahdy</Text>
      </View>
      {/* <View style={styles.story2}>
        <View style={styles.img}>
          <Image source={Account2} style={styles.account2} />
        </View>
        <Text style={styles.name}>Ar/Vr</Text>
      </View> */}
      <View style={styles.story}>
        <View>
          <Image source={Account2} style={styles.account} />
        </View>
        <Text style={styles.name}>Ar/Vr</Text>
      </View>
      <View style={styles.story}>
        <View>
          <Image source={Account3} style={styles.account} />
        </View>
        <Text style={styles.name}>Mah_M</Text>
      </View>
      <View style={styles.story}>
        <View>
          <Image source={Account4} style={styles.account} />
        </View>
        <Text style={styles.name}>Maher</Text>
      </View>
      <View style={styles.story}>
        <View>
          <Image source={Account6} style={styles.account} />
        </View>
        <Text style={styles.name}>Mubasyir19</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  story: {
    marginRight: 15,
    alignItems: 'center',
  },
  story2: {
    marginRight: 15,
    alignItems: 'center',
  },
  // ellipse: {
  //   position: 'absolute',
  //   alignItems: 'center',
  //   top: 0,
  //   left: 0,
  // },
  account2: {
    // position: 'relative',
    // top: 4,
    // left: 4,
    width: 64,
    height: 64,
    borderRadius: 50,
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  img: {
    // // position: 'relative',
    // // padding: 3,
    // // width: 64,
    // // height: 64,
    // borderWidth: 3,
    // borderColor: 'linear-gradient(#FAF006,#FF0000)',
    // // backgroundColor: '#001AFF',
    // borderRadius: 50,
  },
  account: {
    width: 64,
    height: 64,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  btnAdd: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    // right: 14,
  },
  name: {
    color: '#ffffff',
    fontSize: 12,
  },
  // account2: {
  //   width: 64,
  //   height: 64,
  //   borderRadius: 50,
  //   marginRight: 15,
  // },
  title: {
    color: '#ffffff',
  },
});
