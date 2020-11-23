import React, { Component, useContext, useState,useEffect } from "react";
import { StyleSheet, TextInput, View,   TouchableOpacity, Text,SafeAreaView,StatusBar, Image, FlatList,RefreshControl} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components";
import { FirebaseContext } from "../../context/FirebaseContext";
import { firestore } from "firebase";

export default MessageScreen = ({ navigation,route }) => {
  
  const [isLoading,setIsLoading] = useState(false);
  const [chatData, setChatData] = useState([])
  const [lastDoc,setLastDoc] = useState(null)
  const Firebase = useContext(FirebaseContext);

  const onRefresh = () =>{
    setTimeout(() => {
      getChatData()
    },500)
  }


  useEffect(() =>{
    getChatData()
  },[])



  
  const getChatData = async () =>{
    const uid = Firebase.getCurrentUser().uid
    setIsLoading(true);
    // อย่าลืมใส่ Orderby ไว้ตอนหลัง 
    const snapshot = await firestore().collection('THREADS').where("SellerId" ,'==', uid).get();
    if(!snapshot.empty){
      let newChatData = [];

      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);

      for(let i = 0; i < snapshot.docs.length; i++){
        newChatData.push(snapshot.docs[i].data())
      }
      setChatData(newChatData)
    }else{
      setLastDoc(null)
    }setIsLoading(false)
  }




    const renderList = ({BuyerName,BuyerUri,SellerName,SellerUri,roomID,BuyerId}) =>{
 
      return(
      <SafeAreaView>
      <View style={prop.container}>
        <StatusBar 
        barStyle="dark-content"
        />
    <TouchableOpacity style={prop.chats} 
    onPress={() => {navigation.navigate('ChatScreen',{
      BuyerNames : BuyerName,
      BuyerUris : BuyerUri,
      SellerNames : SellerName,
      SellerUris : SellerUri,
      roomIDs : roomID
    }
    )}}
    >
      <Image style={prop.profilepic} source={{uri:BuyerUri}}/>
      <Text>{BuyerName}</Text>
    </TouchableOpacity>
    </View>
      </SafeAreaView>
)
    }
  return (

    <FlatList data={chatData}
    renderItem={({item}) => renderList(item)}
    keyExtractor={(item,index) => String(index,item)}
    refreshControl={
        <RefreshControl 
        refreshing={isLoading}
        onRefresh={onRefresh}
        />
     }
     />
     
  
  );

};

const prop = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: '5%',
    marginBottom: 0,
  },
  chats: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
  },
  profilepic: {
    width: 60,
    height: 60,
    backgroundColor: 'gray',
    borderRadius: 60,
    marginLeft: 10,
    marginRight: 20,
  }
})