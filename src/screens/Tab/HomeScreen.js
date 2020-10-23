import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import styled from "styled-components";

export default HomeScreen = () => {
  return (
    <SafeAreaView>
      <Container>
        <FeedContainer>
          <StatusBar barStyle="dark-content" />
          <View></View>
        </FeedContainer>
      </Container>
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
