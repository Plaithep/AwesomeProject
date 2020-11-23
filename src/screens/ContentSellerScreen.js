import React, { Component,useState,useEffect,useContext  } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Image
} from "react-native";

import { Ionicons } from '@expo/vector-icons'; 
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import moment, { months } from 'moment'
import { firestore } from "firebase";
import firebases from "firebase";
import { FirebaseContext } from "../context/FirebaseContext";
import { UserContext} from "../context/UserContext"

export default ContentSellerScreen = ({navigation,route}) => {
    // const productName = props.navigation.getParam("productName")
    const {productName,PosterId,productDetail,productDate,productTime,defaultQuantity,productQuantity,productPrice,ProductPhotoUrl} = route.params;
    const [ user,setUser] = useContext(UserContext);
    
    const [isMoreLoading, setIsMoreLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [lastDoc,setLastDoc] = useState(null);
    const [Buyer, setBuyer] = useState([])
    const Firebase = useContext(FirebaseContext);
    const uid = Firebase.getCurrentUser().uid;
  const onRefresh = () =>{
    setTimeout(() => {
     getBuyerData();
    },1000)
  }
  
  useEffect(() =>{
    getBuyerData();
  },[])


    const AddChatRoom = async (Buyer,UserCreateOrder) =>{
      const uid = Firebase.getCurrentUser().uid;
      const UserId = await Firebase.getUserInfo(user.uid);
      const Checkroom1 = await CheckRoom1(UserCreateOrder,uid)
      console.log(Checkroom1 + "This is return Value")
      let ID = Checkroom1
    if(Checkroom1 != null){
        console.log("room already created")
        let ID = Checkroom1
        firestore().collection('THREADS').doc(Checkroom1).update({
          roomID : ID
        })
        navigation.navigate('Message',{
          RoomID : Checkroom1
        });
      }else{
        console.log("create room")
        firestore()
        .collection('THREADS')
        .add({
           
          BuyerName : Buyer.username,
          BuyerId : UserCreateOrder,
          BuyerUri : Buyer.profilePhotoUrl,
          SellerName :  UserId.username,
          SellerUri : UserId.profilePhotoUrl,
          SellerId : uid,
        })
        // navigation.navigate('Message',{
        //   RoomID : Checkroom1
        // });
      }
    }

       const CheckRoom1 = async (UserCreateOrder,uid) =>{
          try{
            let id = null
            const snapshot =  firestore().collection("THREADS")
            .where('BuyerId' ,'==',UserCreateOrder)
            .where('SellerId', '==', uid)
             const Data = await snapshot.get()
       
             Data.docs.every((doc) =>{
               console.log(doc.id + " THIS is DOC.ID" + " >>>>" + doc.data().BuyerId)
               id = doc.id
             })
              return id
           }catch(error){
             console.log("Error @ CheckRoom1  " + error)
           }

  
           }
        
    

      

    const  getBuyerData = async () =>{
        setIsLoading(true);
        const snapshot = await firestore().collection('order').where("ordername", "==", productName).orderBy('date', 'desc').get();
        if(!snapshot.empty){
          let newBuyerData = [];

          setLastDoc(snapshot.docs[snapshot.docs.length -1]);
          for(let i = 0; i < snapshot.docs.length; i++){
            newBuyerData.push(snapshot.docs[i].data())
        }
        setBuyer(newBuyerData);
    
        }else{
        setLastDoc(null)
         }setIsLoading(false)
        
    }
    
      const renderList = ({Buyer,username, orderQuantity,profilePhotoUrl,UserCreateOrder}) =>{
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView>
        <View style={prop.container}>
         
          <View style={prop.containercontect}>
            {/* card contect 1 */}
            <TouchableOpacity style={component.contectcard}
             onPress={() =>{ AddChatRoom(Buyer,UserCreateOrder)}}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image style={component.piccontect} source={{uri:Buyer.profilePhotoUrl}} ></Image>
                <Text>{Buyer.username}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>{orderQuantity}</Text>
                <View><Ionicons name="ios-chatboxes" size={36} color="gray" style={{marginLeft: 20}}/></View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
      
  );
  }
  const getHeader = () =>{
    return(
      <View style={component.cardproductdetail}>
      <View style={prop.rowcontent}>
        <Image style={component.picproduct} source={{uri : ProductPhotoUrl}} />
        <View style={prop.textcol}>
          <Text style={text.title}>{productName}</Text>
          <Text style={text.detail}>
            {productDetail}
          </Text>
        </View>
      </View>
      <View style={prop.rowcontent}>
        <View>
          <Text>order {defaultQuantity}/{productQuantity}</Text>
          <Text>delivery on {productDate}</Text>
          <Text>delivery time {productTime}</Text>
        </View>
        <View>
          <Text style={text.textPrice}>{productPrice} ฿</Text>
          <Text>per 1 price</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 18, }}>
        <TouchableOpacity style={{width: 110, height: 30, backgroundColor: '#D85C5C', alignItems:'center', justifyContent: 'center', borderRadius: 20}}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>Close Post</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }

  return(
    <SafeAreaView>
      <FlatList data={Buyer}
        renderItem={({item}) => renderList(item)}
        keyExtractor={(item,index) => String(index,item)}
        refreshControl={
            <RefreshControl 
            refreshing={isLoading}
            onRefresh={onRefresh}
            />
         }
         ListHeaderComponent={getHeader}
         />
         
    </SafeAreaView>
  )
};

const prop = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  rowcontent: {
    marginTop: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textcol: {
    width: "45%",
  },
  containercontect: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
});

const component = StyleSheet.create({
  cardproductdetail: {
    marginTop: 20,
    padding: 25,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  picproduct: {
    width: "50%",
    height: 160,
    backgroundColor: "gray",
  },
  contectcard: {
    padding: 12,
    paddingLeft: 15,
    paddingRight: 15,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  piccontect: {
    width: 47,
    height: 47,
    borderRadius: 50,
    backgroundColor: "gray",
    marginRight: 12,
  },
});

const text = StyleSheet.create ({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  detail: {
    fontSize: 14,
    color: "black",
  },
  textPrice: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#e37272",
  }
})