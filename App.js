/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

class App extends React.Component {
  buttonRef1;
  buttonRef2;

  render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <View style={styles.body}>
              <View style={styles.container}>
                <View style={styles.separator} />
                <TouchableOpacity
                  ref={(ref) => (this.buttonRef1 = ref)}
                  onPress={() => this.buttonRef2.focus()}
                  style={styles.linkContainer}
                >
                  <Text style={styles.link}>Button 1</Text>
                  <Text style={styles.description}>
                    Press to focus Button 2
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.container}>
                <View style={styles.separator} />
                <TouchableOpacity
                  ref={(ref) => (this.buttonRef2 = ref)}
                  onPress={() => this.buttonRef1.focus()}
                  style={styles.linkContainer}
                >
                  <Text style={styles.link}>Button 2</Text>
                  <Text style={styles.description}>
                    Press to focus Button 1
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: "400",
    fontSize: 18,
    color: Colors.dark,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
});

export default App;
