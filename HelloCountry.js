import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import CountryFlag from "./CountryFlag";
import Welcome from "./Welcome";
import ChangeCountry from "./ChangeCountry";

class HelloCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "america",
      label: "America",
      flag:
        "https://rawgit.com/dmitryvinn/hello-country-react/d114bf3970014ad4126fb843ca52fa85f13a6010/src/assets/american-flag.png"
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
      countryFlag =
        "https://rawgit.com/dmitryvinn/hello-country-react/d114bf3970014ad4126fb843ca52fa85f13a6010/src/assets/canadian-flag.png";
    } else {
      countryName = "america";
      countryLabel = "America";
      countryFlag =
        "https://rawgit.com/dmitryvinn/hello-country-react/d114bf3970014ad4126fb843ca52fa85f13a6010/src/assets/american-flag.png";
    }
    this.setState({
      country: countryName,
      flag: countryFlag,
      label: countryLabel
    });
  }

  render() {
    return (
      <div>
        <Welcome name={this.state.label} />
        <CountryFlag img={this.state.flag} />
        <div>
          <ChangeCountry action={this.changeCountry} />
        </div>
      </div>
    );
  }
}

export default HelloCountry;
