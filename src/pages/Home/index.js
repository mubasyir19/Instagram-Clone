import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Story, TopBar, Gap, PostHome} from '../../components';
import {Account5, Account6, MY, Photo1} from '../../assets';

export default function Home() {
  return (
    <View style={styles.pages}>
      <TopBar />
      <ScrollView>
        <View style={styles.story}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Gap width={15} />
            <Story />
          </ScrollView>
        </View>
        <View>
          <PostHome
            style={styles.post}
            photo={Photo1}
            comment={'Juara 3 Geografi KSM 2019 Kota Bandung'}
          />
          <PostHome
            style={styles.post}
            photo={Account5}
            comment={'Diklatsar Green Pioneer'}
          />
          <PostHome
            style={styles.post}
            photo={MY}
            comment={'Gunung Papandayan'}
          />
          <PostHome
            style={styles.post}
            photo={Account6}
            comment={'Sunset Puncak Gunung Cikuray'}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: 'black',
  },
  story: {
    marginVertical: 15,
  },
  post: {
    // marginVertical: 19,
  },
});
