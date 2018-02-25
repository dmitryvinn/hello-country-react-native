import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountryFlag from "./CountryFlag";
import ChangeCountry from "./ChangeCountry";
import Welcome from "./Welcome";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "america",
            label: "America"
        };
        this.changeCountry = this.changeCountry.bind(this);
    }

    changeCountry() {
        var countryName = this.state.country;
        var countryFlag = this.state.flag;
        var countryLabel = this.label;
        if (countryName === "america") {
            countryName = "canada";
            countryLabel = "Canada";
            } else {
            countryName = "america";
            countryLabel = "America";
        }
        this.setState({
            country: countryName,
            flag: countryFlag,
            label: countryLabel
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.text}>
                    <Welcome name={this.state.label} />
                </View>
                <CountryFlag country={this.state.country} />
                <View style={styles.button}>
                    <ChangeCountry action={this.changeCountry} />
                </View>
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
    text: {
        padding: 50
    },
    button: {
        padding: 50
    }
});
