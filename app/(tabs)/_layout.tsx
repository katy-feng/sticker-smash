import { Tabs } from "expo-router";

// Expo Router is a file-based routing framework for React Native and web apps.
// It manages navigations between screens.

// A Stack or Stack Navigator is the foundation for navigating between different screens in an app.
// Expo Router provides a 'Stack' component to create a navigation stack to add new routes.

// The Link component is a React component that renders a <Text> with a given href property
// It will be used to navigate from the /index route to the /about route.

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(tabs)" options={{ headerShown: false }} />
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="about" options={{ title: "About" }} />
    </Tabs>
  );
}
