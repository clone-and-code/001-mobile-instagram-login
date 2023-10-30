import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";

import InstagramLogo from "./assets/instagram-logo.png";
import MetaLogo from "./assets/meta-logo.png";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={InstagramLogo} style={styles.instagramLogo} />
      <Image source={MetaLogo} style={styles.metaLogo} />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View
        style={{
          ...styles.box,
          justifyContent: "space-evenly",
          flex: 1,
        }}
      >
        <Image source={InstagramLogo} style={styles.instagramLogo} />

        <View style={styles.box}>
          <TextInput
            placeholder="Username, email or mobile number"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.textInput}
          />

          <TouchableOpacity
            style={{ ...styles.roundedButton, backgroundColor: "#0063E1" }}
          >
            <Text style={{ ...styles.buttonText, color: "#fff" }}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.box}>
        <TouchableOpacity style={styles.roundedButton}>
          <Text style={{ ...styles.buttonText, color: "#0063E1" }}>
            Create new account
          </Text>
        </TouchableOpacity>
        <Image source={MetaLogo} style={styles.metaLogo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF4FD",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: { width: "100%", display: "flex", alignItems: "center" },
  instagramLogo: {
    width: 70,
    height: 70,
  },
  metaLogo: {
    width: 70,
    resizeMode: "contain",
  },
  textInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#CCD3DC",
    width: "90%",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  roundedButton: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#0063E1",
    width: "90%",
    padding: 10,
    borderRadius: 20,
    marginBottom: 15,
    display: "flex",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
  },
  linkButton: {
    width: "90%",
    display: "flex",
    alignItems: "center",
  },
  linkText: {
    fontSize: 15,
    color: "#1D2933",
    fontWeight: "500",
  },
});
