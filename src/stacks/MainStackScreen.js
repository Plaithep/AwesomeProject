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

import ProfileScreen from "../screens/ProfileScreen";
import SellerScreen from "../screens/SellerScreen";
import HistoryScreen from "../screens/HistoryScreen";


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
        case "Others":
          iconName = "ios-keypad";
          break;
        case "Post":
          iconName = "ios-browsers";
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
      <MainStack.Screen name="Others" component={OtherStack} />
    </MainStack.Navigator>
  );
};

/**
 *  TODO: ต้องเพิ่ม Stack สำหรับ ทุกๆหน้าเเละเรียกใช้งานในทุกๆ Tab
 *  
 */
const Stack = createStackNavigator()
function PostStack() {
  return (
    <Stack.Navigator hearderMode="none">
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      <Stack.Screen name="CreatePoll" component={CreatePollScreen} />
    </Stack.Navigator>

  )
}

const SecondStack = createStackNavigator()
function OtherStack() {
  return (
    <SecondStack.Navigator hearderMode='none'>
      <SecondStack.Screen name="Other"    component ={OthersScreen}/>
      <SecondStack.Screen name="Profile"  component ={ProfileScreen}/>
      <SecondStack.Screen name="Seller"   component ={SellerScreen}/>
      <SecondStack.Screen name="History"  component = {HistoryScreen}/>
    </SecondStack.Navigator>
  )
}
