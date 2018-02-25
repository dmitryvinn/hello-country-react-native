import React from "react";
import {StyleSheet, Text} from 'react-native';

class Welcome extends React.Component {
  render() {
    return(
        <Text style={styles.container}>Hello, {this.props.name}</Text>
    );
  }
}

const styles = StyleSheet.create({
    container: {
       fontSize: 30,
    },
});

export default Welcome;
