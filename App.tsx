const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomepageCommunityTab from "./screens/HomepageCommunityTab";
import HomepageFeed from "./screens/HomepageFeed";
import HomepageDiscoverCommunities from "./screens/HomepageDiscoverCommunities";
import HomepageDiscoverHashtags from "./screens/HomepageDiscoverHashtags";
import HomepageDiscover from "./screens/HomepageDiscover";
import HomepageDiscoverOnLogin from "./screens/HomepageDiscoverOnLogin";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Montserrat_regular: require("./assets/fonts/Montserrat_regular.ttf"),
    Montserrat_medium: require("./assets/fonts/Montserrat_medium.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat_bold.ttf"),
    Manrope_light: require("./assets/fonts/Manrope_light.ttf"),
    Manrope_regular: require("./assets/fonts/Manrope_regular.ttf"),
    Manrope_semibold: require("./assets/fonts/Manrope_semibold.ttf"),
    Manrope_bold: require("./assets/fonts/Manrope_bold.ttf"),
    "SF Pro Text_semibold": require("./assets/fonts/SF_Pro_Text_semibold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomepageCommunityTab"
              component={HomepageCommunityTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomepageFeed"
              component={HomepageFeed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomepageDiscoverCommunitiesCommunity"
              component={HomepageDiscoverCommunities}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomepageDiscoverHashtags"
              component={HomepageDiscoverHashtags}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomepageDiscover"
              component={HomepageDiscover}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomepageDiscoverOnLogin"
              component={HomepageDiscoverOnLogin}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
