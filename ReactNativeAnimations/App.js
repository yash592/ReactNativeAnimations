import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  PanResponder,
  Animated,
  Image
} from "react-native";
import Ball from "./src/components/Ball";

class App extends Component {
  position = new Animated.ValueXY();

  panResponder = new PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gesture) => {
      this.position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderEnd: (e, gesture) => {
      Animated.spring(this.position, { toValue: 0 }).start();
    }
  });

  state = {
    panResponder: this.panResponder,
    position: this.position
  };

  render() {
    console.log(this.panResponder.panHandlers);
    console.log("position", this.position);
    return (
      <View style={styles.container}>
        <Animated.View
          style={this.state.position.getLayout()}
          {...this.state.panResponder.panHandlers}
        >
          <Image
            source={{ uri: "https://i.imgur.com/67jPyVI.png" }}
            style={{ width: 400, height: 400 }}
            resizeMode={"contain"}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
