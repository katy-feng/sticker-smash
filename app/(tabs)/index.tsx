import ImageViewer from '@/components/ImageViewer';
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

// The @ is a path alias for importing custom components/modules instead of relative paths
const placeHolderImage = require('@/assets/images/background-image.png')

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={placeHolderImage} />
      </View>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  imageContainer: {
    flex: 1,
  },
});
