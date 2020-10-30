import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styled from "styled-components";

export default CreatePollScreen = () => {

    return (
        <KeyboardAwareScrollView>
       <Container>
           <TitleContainer>
                <TitleField
                    autoCapitalize="none"
                    placeholder="Title"
                />
            </TitleContainer>

            <DetailContainer>
                <DetailField
                    autoCapitalize="none"
                    placeholder="detail"
                />
            </DetailContainer>

            <OptionContainer>
                <OptionTitle>Option</OptionTitle>
                <OptionBox>
                    <Option placeholder="option1"></Option>
                    <Option placeholder="option2"></Option>
                    <Text>more option</Text>
                </OptionBox>
            </OptionContainer>

            <ComfirmButton>
                    <Text>Confirm</Text>
            </ComfirmButton>
       </Container>
       </KeyboardAwareScrollView>
    );
};

const Container = styled.View`
    align-items: center;
    margin-top: 64px;
    flex: 1;
`;

const TitleContainer = styled.View`
  margin-bottom: 20px;
`;

const TitleField = styled.TextInput`
     border-bottom-color: #8e93a1;
     border-bottom-width: 1px;
     height: 30px;
     width: 200px;
     text-align: center;
     font-weight: bold;
     font-size: 18px;
     color: #707070;
`;

const DetailContainer = styled.View`
    margin-top: 40px;
`;

const DetailField = styled.TextInput`
    border-color: #8e93a1;
    border-width: 0.5px;
    height: 120px;
    width: 300px;
    text-align-vertical: top;
    padding: 6px;
    color: #707070;
    font-style: italic;
`;

const OptionContainer = styled.View`
    width: 300px;
    margin-top: 30px;
`;

const OptionTitle = styled.Text`
    text-align: left;
    color: #707070;
    font-weight: bold;
`;

const OptionBox = styled.View`
    height: 120px;
    width: 300px;
    align-items:center;
    justify-content: space-around;
    padding: 6px;
    color: #707070;
    border-radius: 0.1px
    align-self: center;
    margin-top: 16px;
    overflow: hidden;
    border: 0.5px #8e93a1 dashed
`;

const Option = styled.TextInput`
    text-align: center;
    height: 25px;
    width: 120px;
    align-items:center;
    justify-content: center;
    border: 0.5px #707070;
    border-radius: 30px
`;

const ComfirmButton = styled.TouchableOpacity`
  margin: 34px;
  marginTop: 20px;
  marginBottom: 6px;
  height: 32px;
  width: 120px;
  align-items:center;
  justify-content: center;
  border: 0.5px #707070;
  border-radius: 30px;
`;