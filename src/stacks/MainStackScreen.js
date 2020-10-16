import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import MessageScreen from "../screens/MessageScreen";
import PostScreen from "../screens/PostScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OthersScreen from "../screens/OthersScreen";
import CreatePost from "../screens/CreatePostScreen";
import CreatePoll from "../screens/CreatePollScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import CreatePollScreen from "../screens/CreatePollScreen";

export default MainStackScreens = () => {
  const MainStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: false,
    style: {
      height: 60,
      backgroundColor: "#222222",
      paddingBottom: 10,
      paddingTop: 6
    },
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let iconName = "ios-home";

      switch (route.name) {
        case "Home":
          iconName = "ios-home";
          break;
        case "Message":
          iconName = "ios-chatboxes";
          break;
        case "Notification":
          iconName = "ios-notifications";
          break;
        case "Profile":
          iconName = "ios-person";
          break;
        case "Others" :
          iconName = "ios-keypad";
          break;
        case "Post" :
          iconName = "ios-browsers";
          break;
        case "CreatePost" :
          iconName = "ios-analytics";
          break;
        case "CreatePoll" :
          iconName = "ios-apps";
          break;

        default:
          iconName = "ios-home";
      }

      // if (route.name === "Post") {
      //   return (
      //     <Ionicons
      //       name="ios-qr-scanner"
      //       size={34}
      //       color="#23a8d9"
      //       style={{
      //         shadowColor: "#23a8d9",
      //         shadowOffset: { width: 0, height: 10 },
      //         shadowRadius: 10,
      //         shadowOpacity: 0.3,
      //       }}
      //     />
      //   );
      // }

      return (
        <Ionicons
          name={iconName}
          size={28}
          color={focused ? "#ffffff" : "#999999"}
        />
      );
    },
  });

  

  return (
    <MainStack.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}
    >
      <MainStack.Screen name="Message" component={MessageScreen} />
      <MainStack.Screen name="Post" component={PostScreen} />
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Notification" component={NotificationScreen} />
      {/* <MainStack.Screen name="Profile" component={ProfileScreen} /> */}
      <MainStack.Screen name="Others" component={OthersScreen} />
      <MainStack.Screen name="CreatePost" component={CreatePostScreen} />
      <MainStack.Screen name="CreatePoll" component={CreatePollScreen} />
    </MainStack.Navigator>
  );
};
