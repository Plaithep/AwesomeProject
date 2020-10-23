import { HeaderBackground } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import styled from "styled-components";

export default HomeScreen = () => {
  return (
    <SafeAreaView>
      <Container>
        <FeedContainer>
          <StatusBar barStyle="dark-content" />
        </FeedContainer>
      </Container>

      <ProfileContainer style={styles.rowDirection}>

        <View style={styles.rowDirection}>
          <ProfilePic></ProfilePic>
          <View style={{padding: 15}}>
            <Text>Puminan Picroh</Text>
            <Text>new normal</Text>
          </View>
        </View>


        <View style={styles.colDirection}>
          <View style={styles.rowDirection}>
            <SettingIconPic></SettingIconPic>
            <Text style={{transform: [{rotate:'270deg'}], fontSize:10}}>setting</Text>
          </View>

          <View style={styles.rowDirection}>
            <ProfileIconPic></ProfileIconPic>
            <Text style={{transform: [{rotate:'270deg'}], fontSize:10}}>profile</Text>
          </View>
        </View>

        
      </ProfileContainer>

      <View style={styles.search}><Search  placeholder="search"></Search></View>

      <ContentContainer>
      
      </ContentContainer>
    </SafeAreaView>
  );
};

const Container = styled.View`
  flex: 1;
`;

const FeedContainer = styled.View`
  transform: rotate(90deg);
  text-shadow-offset: 10px 5px;
  font-variant: small-caps;
  margin: 5px 7px 2px;
  background-color: papayawhip;
`;

const StatusBar = styled.StatusBar``;

const ProfileContainer = styled.View`
  height: 120px;
  padding: 10px;
  padding-top: 30px;
`;

const ContentContainer = styled.View`
  flex: 1;
`;

const ProfilePic = styled.View`
  background-color: #e1e2e6;
  width: 70px;
  height: 70px;
  border-radius: 50px
`;

const SettingIconPic = styled.View`
  background-color: #4F7595;
  width: 30px;
  height: 30px;
  border-radius: 50px;
`;

const ProfileIconPic = styled.View`
  background-color: #4D7B6B;
  width: 30px;
  height: 30px;
  border-radius: 50px
`;

const Search = styled.TextInput`
    height: 30px;
    width: 300px;
    align-items:center;
    justify-content: center;
    border-radius: 30px
    background-color: #e1e2e6;
    color: #707070;
    padding-left: 20px;
`;

const styles = StyleSheet.create({
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  colDirection: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  search: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});