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

import ContentSellerScreen from "../screens/ContentSellerScreen";
import PollSellerScreen from "../screens/PollSellerScreen";

import AdminScreen from "../screens/Admin/AdminScreen";
import AdminAccessScreen from "../screens/Admin/AdminAccessScreen";

export default MainStackScreens = () => {
  const MainStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: false,
    style: {
      height: 60,
      backgroundColor: "#222222",
      paddingBottom: 10,
      paddingTop: 6,
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
      <MainStack.Screen name="Message" component={MessageStack} />
      <MainStack.Screen name="Post" component={PostStack} />
      <MainStack.Screen name="Home" component={HomeStack} />
      <MainStack.Screen name="Notification" component={NotiStack} />
      <MainStack.Screen name="Others" component={OtherStack} />
    </MainStack.Navigator>
  );
};

/**
 *  TODO: ต้องเพิ่ม Stack สำหรับ ทุกๆหน้าเเละเรียกใช้งานในทุกๆ Tab
 *
 */

const MessageScreenStack = createStackNavigator();
function MessageStack () {
  return (
    <MessageScreenStack.Navigator hearderMode="none">
      <MessageScreenStack.Screen name="Message" component={MessageScreen} />
    </MessageScreenStack.Navigator>
  );
}

const PostScreenStack = createStackNavigator();
function PostStack() {
  return (
    <PostScreenStack.Navigator hearderMode="none">
      <PostScreenStack.Screen name="Post" component={PostScreen} />
      <PostScreenStack.Screen name="CreatePost" component={CreatePostScreen} />
      <PostScreenStack.Screen name="CreatePoll" component={CreatePollScreen} />
    </PostScreenStack.Navigator>
  );
}

const OtherScreenStack = createStackNavigator();
function OtherStack() {
  return (
    <OtherScreenStack.Navigator hearderMode="none">
      <OtherScreenStack.Screen name="Other" component={OthersScreen} />
      <OtherScreenStack.Screen name="Profile" component={ProfileScreen} />
      <OtherScreenStack.Screen name="Seller" component={ConSellStack} />
      <OtherScreenStack.Screen name="History" component={HistoryScreen} />
      <OtherScreenStack.Screen name="Admin" component={AdminStack}/>
    </OtherScreenStack.Navigator>
  );
}

const HomeScreenStack = createStackNavigator();
function HomeStack() {
  return (
    <HomeScreenStack.Navigator hearderMode="none">
      <HomeScreenStack.Screen name="Home" component={HomeScreen} />
      <HomeScreenStack.Screen name="Profile" component={ProfileScreen} />
      <HomeScreenStack.Screen name="Seller" component={ConSellStack} />
    </HomeScreenStack.Navigator>
  );
}

const notiScreenStack = createStackNavigator();
function NotiStack() {
  return (
    <notiScreenStack.Navigator hearderMode="none">
      <notiScreenStack.Screen
        name="Notification"
        component={NotificationScreen}
      />
    </notiScreenStack.Navigator>
  );
}

const ContentSellerScreenStack = createStackNavigator();
function ConSellStack() {
  return (
    <ContentSellerScreenStack.Navigator hearderMode="none">
      <ContentSellerScreenStack.Screen name="Seller" component={SellerScreen} />
      <ContentSellerScreenStack.Screen
        name="ContentSeller"
        component={ContentSellerScreen}
      />
      <ContentSellerScreenStack.Screen
        name="PollSeller"
        component={PollSellerScreen}
      />
    </ContentSellerScreenStack.Navigator>
  );
}

const AdminScreenStack = createStackNavigator();
function AdminStack() {
  return (
    <AdminScreenStack.Navigator  hearderMode="none">
      <AdminScreenStack.Screen name="Admin" component={AdminScreen} />
      <AdminScreenStack.Screen
        name="AdminAccess"
        component={AdminAccessScreen}
      />
    </AdminScreenStack.Navigator>
  );
}