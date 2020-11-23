import React, { useState ,useContext,useEffect} from 'react';
import { StyleSheet, TextInput, View, Text ,ActivityIndicator} from "react-native";
import { GiftedChat,Bubble ,Send} from 'react-native-gifted-chat';
import { FontAwesome5 } from '@expo/vector-icons';
import { firestore } from "firebase";
import { FirebaseContext } from "../../context/FirebaseContext";
export default function RoomScreen({route}) {

  const {BuyerNames,BuyerUris,SellerNames,SellerUris,roomIDs} = route.params;
  const Firebase = useContext(FirebaseContext);
  const uid = Firebase.getCurrentUser().uid;
  const UserInfo = Firebase.getUserInfo(uid);
  const [messages, setMessages] = useState()


  function renderBubble(props) {
    return (
      // Step 3: return the component
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: '#6646ee'
          }
        }}
        textStyle={{
          right: {
            color: '#fff'
          }
        }}
      />
    );
  }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#6646ee' />
      </View>
    );
  }


  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  async function handleSend(messages){
    const text = messages[0].text;

    firestore()
      .collection('THREADS')
      .doc(roomIDs)
      .collection('MESSAGES')
      .add({
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: uid ,
        }
      });

      await firestore()
    .collection('THREADS')
    .doc(roomIDs)
    .set(
      {
        latestMessage: {
          text,
          createdAt: new Date().getTime()
        }
      },
      { merge: true }
    );


    

  }

  useEffect(() => {
    const messagesListener = firestore()
      .collection('THREADS')
      .doc(roomIDs)
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const messages = querySnapshot.docs.map(doc => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: '',
            createdAt: new Date().getTime(),
            ...firebaseData
          };

          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.email
            };
          }

          return data;
        });

        setMessages(messages);
      });

    return () => messagesListener();
  }, []);


  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{_id:uid }}
      renderBubble={renderBubble}
      showUserAvatar
      alwaysShowSend
      scrollToBottom
      renderLoading={renderLoading}
    />
  );
}

const styles = StyleSheet.create({
  // rest remains same
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});