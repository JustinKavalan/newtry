import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import RecordButton from './RecordButton';

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        }
    }
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <RecordButton />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>

            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.container}>
              <SectionList
                sections={[
                  { title: 'Physics', data: ['Lecture 1', 'Lecture 2', 'Lecture 3'] },
                  { title: 'Chem', data: ['Lecture 1', 'Lecture 2', 'Lecture 3', 'Lecture 4', 'Lecture 5', 'Lecture 6', 'Lecture 7'] },
                ]}
                renderItem={({ item }) =>
                  <Button
                    title={item}
                    onPress={() =>
                      this.props.navigation.navigate('Item', { param: item, })
                    }
                  />}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Home