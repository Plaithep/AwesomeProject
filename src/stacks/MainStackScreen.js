import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";


import HomeScreen from "../screens/Tab/HomeScreen";
import MessageScreen from "../screens/Tab/MessageScreen";
import PostScreen from "../screens/Tab/PostScreen";
import NotificationScreen from "../screens/Tab/NotificationScreen";
import OthersScreen from "../screens/Tab/OthersScreen";


import CreatePostScreen from "../screens/CreatePost/CreatePostScreen";
import CreatePollScreen from "../screens/CreatePost/CreatePollScreen";




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

      return (
        <Ionicons
          name={iconName}
          size={28}
          color={focused ? "#ffffff" : "#999999"}
        />
      );
    },
  });

/**
 *  TODO: เเก้ Other ให้เป็น Modal
 */
  return (
    <MainStack.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}
    >
      <MainStack.Screen name="Message" component={MessageScreen} />
      <MainStack.Screen name="Post" component={PostStack} />
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Notification" component={NotificationScreen} />
      <MainStack.Screen  name="Others"  component={OthersScreen} />
    </MainStack.Navigator>
  );
};

/**
 *  TODO: ต้องเพิ่ม Stack สำหรับ ทุกๆหน้าเเละเรียกใช้งานในทุกๆ Tab
 *  
 */
const Stack = createStackNavigator()
function PostStack(){
  return(
  <Stack.Navigator hearderMode="none">
  <Stack.Screen name="Post" component={PostScreen} />
  <Stack.Screen name="CreatePost" component={CreatePostScreen} />
  <Stack.Screen name="CreatePoll" component={CreatePollScreen} />
  </Stack.Navigator>

)
}
