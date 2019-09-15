import React from 'react';
import { Heading, StyleSheet, Text, View, Button } from 'react-native';

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transcript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        }
    }

    // updateTranscript = (newscript) => {
    //     this.setState({
    //         transcript: newscript;
    //     })
    // }

  render() {
    const { navigation } = this.props;
    const param = navigation.getParam('param', 'NO-ID');
    return (
      <View style={styles.container}>
        <>
          <Text>
                {param}
        
                {"\n"}
                {"\n"}

                {this.state.transcript}
        
          </Text>
          <Button
            title="Back to Home"
            onPress={() =>
              this.props.navigation.navigate('Home')
            }
          />
        </>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});