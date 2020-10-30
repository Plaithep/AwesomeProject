import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import styled from "styled-components";

export default NotificationScreen = ({ navigation }) => {
  return (
    <View style={prop.container}>

      <View name='card notification' style={prop.box}>
        <View style={component.boxMessage}>
          <View style={prop.iconcol}>
            <View style={prop.icon}>
              <StatusBar style={component.statusBar}></StatusBar>
              <ProfilePic style={component.profilePic}></ProfilePic>
            </View>
          </View>

          <View style={prop.textMessage}>
            <Text style={styles.textMessage}>PLEASE Review !!! New Chocolate Cupcake</Text>
            <Text style={styles.textTime}>3 item(s) will delevery on 12 Aug 2020</Text>
          </View>
        </View>
      </View>

      <View name='card notification' style={prop.box}>
        <View style={component.boxMessage}>
          <View style={prop.iconcol}>
            <View style={prop.icon}>
              <StatusBar style={component.statusBar}></StatusBar>
              <ProfilePic style={component.profilePic}></ProfilePic>
            </View>
          </View>

          <View style={prop.textMessage}>
            <Text style={styles.textMessage}>PLEASE Review !!! New Chocolate Cupcake</Text>
            <Text style={styles.textTime}>3 item(s) will delevery on 12 Aug 2020</Text>
          </View>
        </View>
      </View>

    </View>
  );
};

const StatusBar = styled.View``;

const ProfilePic = styled.View``;

const styles = StyleSheet.create({
  textTime: {
    color: '#707070',
  },
  textMessage: {
    color: '#707070',
    fontWeight: '100',
  },
});

const component = StyleSheet.create({
  statusBar: {
    width: 15,
    height: 50,
    backgroundColor: '#F1D155',
  },
  profilePic: {
    width: 50,
    height: 50,
    backgroundColor: '#707070',
    borderRadius: 50,
    position: 'relative',
    left: -10,
  },
  boxMessage: {
    flexDirection: 'row',
    width: 350,
    padding: 10,
  }
});

const prop = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 30,
    paddingTop: 15,
  },
  leftScreen: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 5,
    paddingTop: 10,
  },
  icon: {
    flexDirection: 'row',
  },
  textMessage: {
    width: 275,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconcol: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  box: {
    paddingTop: 5,
    paddingBottom: 7,
  }
});
