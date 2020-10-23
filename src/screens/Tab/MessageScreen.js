import React,{useState} from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { FirebaseContext } from "../../context/FirebaseContext";
import { firestore } from "firebase";


export default MessageScreen = () => {

const [Message , setMessagae] = useState();



  function AddRoom(){
    try{
    firestore().collection('ChatRoom')
    .add({
        text:"Hi",
        createAt : new Date().getHours()
    })
    
  }catch(error){
    console.log(createAt);
  }
  }


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Messge </Text>
      <ComfirmButton onPress={AddRoom}/>
    </View>
  );

};

const ComfirmButton = styled.TouchableOpacity`
  margin: 34px;
  marginTop: 20px;
  marginBottom: 6px;
  height: 32px;
  width: 120px;
  align-items:center;
  justify-content: center;
  border: 0.5px #707070;
  border-radius: 30px
`

