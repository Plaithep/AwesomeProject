import React, { Component,useContext,useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styled from "styled-components";

import moment, { months } from 'moment'
import { firestore } from "firebase";
import firebases from "firebase";
import { FirebaseContext } from "../../context/FirebaseContext";



export default CreatePollScreen = ({navigation}) => {

    const [PollTitle, setPollTitle] = useState();
    const [PollDetail, setPollDetail] = useState();
    const [PollQption1, setPollQption1] = useState();
    const [PollQption2, setPollQption2] = useState();
    // const [PollValue1, setPollValue2] = useState();
    // const [PollValue2, setPollValue2] = useState();

    //------------------------
    const [loading,setLoading] = useState(false);

    const Firebase = useContext(FirebaseContext);

    const AddPoll = async () =>{
        setLoading(true);
        console.log("create Polldasdas")
        const user = Firebase.getCurrentUser();
        const UserId = await Firebase.getUserInfo(user.uid);
        const uid = Firebase.getCurrentUser().uid;

        let pollTitle = PollTitle
        let pollDeatil = PollDetail
        let pollQption1 = PollQption1
        let pollQption2 = PollQption2
        let pollValue1 = 0
        let pollValue2 = 0
        let pollPosterId = UserId
        let pollPosrData = uid
        let postStatus =  true;
        
        try{
            firestore().collection('poll').add({
                pollTitle,
                pollDeatil,
                pollQption1,
                pollQption2,
                pollValue1,
                pollValue2,
                pollPosterId,
                pollPosrData,
                postStatus
            })
        } catch(error){
            console.log("Error @AddPoll", error)
            alert("Something went worng" , error)
        }finally{
            setLoading(false);
            navigation.navigate("Home")
        }
        
    }
    return (
        <KeyboardAwareScrollView>
       <Container>
           <TitleContainer>
                <TitleField
                    autoCapitalize="none"
                    placeholder="Title"
                    onChangeText={(PollTitle) => setPollTitle(PollTitle)}
                    value={PollTitle}
                />
            </TitleContainer>

            <DetailContainer>
                <DetailField
                    autoCapitalize="none"
                    placeholder="detail"
                    multiline={true}
                    onChangeText={(PollDetail) => setPollDetail(PollDetail)}
                    value={PollDetail} 
                />
            </DetailContainer>

            <OptionContainer>
                <OptionTitle>Option</OptionTitle>
                <OptionBox>
                    <Option placeholder="option1" 
                    onChangeText={(PollQption1) => setPollQption1(PollQption1)}
                    value={PollQption1}
                    />
                    <Option placeholder="option2"
                    onChangeText={(PollQption2) => setPollQption2(PollQption2)}
                    value={PollQption2}
                    />
                </OptionBox>
            </OptionContainer>

            <ComfirmButton onPress={AddPoll}  disabled={loading}>
                {loading ? (
                    <Loading />
                ) : (
                    <Text>Confirm</Text>
                )}
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

const Loading = styled.ActivityIndicator.attrs((props) => ({
    color: "black",
    size: "small",
  }))``;