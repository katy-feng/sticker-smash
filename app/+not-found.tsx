import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

// The empty parent <></> below is a React Fragment. It groups multiple elements
// It is an invisible wrapper and is required when returning multiple top-level elements
// It is required here because JSX needs exactly one parent element and this is the light-weight way to give it one
// JSX or JavaScript XML is a syntax that lets you write UI that looks like HTML inside JavaScript.
// Under the hood, JSX becomes one function all - `React.createElement(...)`

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not found." }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to the Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
