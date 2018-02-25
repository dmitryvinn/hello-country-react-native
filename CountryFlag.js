import React, { Component } from 'react';
import {AppRegistry, View, Image, StyleSheet} from 'react-native';

class CountryFlag extends React.Component {
  render() {
      var sourceImage = this.props.country === 'america'
          ? require('./assets/american-flag.png')
          : require('./assets/canadian-flag.png');
      return(
        <View>
            <Image style={styles.container}
                source={sourceImage}/>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        height: 260,
        width: 380
    },
});


export default CountryFlag;
