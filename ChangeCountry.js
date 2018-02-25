import React from "react";
import {Button, StyleSheet} from 'react-native';

class ChangeCountry extends React.Component {
  render() {
    return (
            <Button
                onPress={this.props.action}
                title="Change Country"
                color="#555555"
                accessibilityLabel="Learn more about this purple button"
            />
        );
  }
}

export default ChangeCountry;
