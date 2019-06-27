import React, { Component } from "react";
import { View, Animated, Text, PanResponder } from "react-native";

class Ball extends Component {
  render() {
    return (
      <View>
        <View style={styles.ball} />
      </View>
    );
  }
}

const styles = {
  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: "black"
  }
};

export default Ball;
