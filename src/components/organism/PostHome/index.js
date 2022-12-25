import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Account1,
  // Account5,
  IconComment,
  IconLiked,
  IconOption,
  IconSave,
  IconSend,
} from '../../../assets';

export default function PostHome(props) {
  const {photo, comment} = props;
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.user}>
          <Image source={Account1} style={styles.account} />
          <Text style={styles.username}>mubasyirmahdy</Text>
        </View>
        <View>
          <IconOption />
        </View>
      </View>
      <View style={styles.postImage}>
        <Image source={photo} style={styles.image} />
      </View>
      <View style={styles.action}>
        <View style={styles.actionLeft}>
          <IconLiked style={styles.icon} />
          <IconComment style={styles.icon} />
          <IconSend style={styles.icon} />
        </View>
        <View style={styles.actionRight}>
          <IconSave />
        </View>
      </View>
      <View style={styles.likes}>
        <Text style={styles.totalLikes}>
          105,762 <Text style={styles.bold}>likes</Text>
        </Text>
      </View>
      <View style={styles.desc}>
        <Text style={styles.caption} numberOfLines={2}>
          <Text style={styles.bold}>mubasyirmahdy</Text> {comment}
        </Text>
        <Text style={styles.comment}>View all 103 comments</Text>
        <Text style={styles.times}>
          <Text>13 hours</Text> ago
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 19,
  },
  head: {
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: '#ffffff',
    marginLeft: 5,
  },
  account: {
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  postImage: {
    marginTop: 8,
  },
  image: {
    width: 'auto',
    height: 375,
  },
  action: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
  actionRight: {
    marginRight: 30,
  },
  likes: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  totalLikes: {
    color: '#ffffff',
  },
  desc: {
    marginHorizontal: 15,
  },
  caption: {
    color: '#ffffff',
  },
  comment: {
    marginTop: 9,
    color: '#8A8A8A',
  },
  times: {
    marginTop: 7,
    fontSize: 12,
    color: '#8A8A8A',
  },
});
