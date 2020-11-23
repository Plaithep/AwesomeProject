import React, { Component, useState,useEffect,useContext } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
  Image,
  ImageBackground
} from "react-native";
import styled from "styled-components";

import { UserContext} from "../context/UserContext"
import {FirebaseContext} from "../context/FirebaseContext"
import { firestore } from "firebase";
import "firebase/firestore";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default SellerScreen = ({navigation}) => {

    const imagebackground = { uri: "https://i.pinimg.com/564x/36/ae/1c/36ae1c8441c61dc2e6268f8077f0dd19.jpg" };

    const [isMoreLoading, setIsMoreLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [lastDoc,setLastDoc] = useState(null);
    const [History, setHistory] = useState([])
     
    const [ user,setUser] = useContext(UserContext);
    const Firebase = useContext(FirebaseContext);
    const uid = Firebase.getCurrentUser().uid;

    useEffect(() =>{
        getHistory();
    },[])

    const onRefresh = () =>{
        setTimeout(() => {
            getHistory();
        },1000)
    }

    const getHistory = async () => {
        setIsLoading(true);
        const snapshot = await firestore().collection('product').where('Posterdata','==', uid).get()
        if(!snapshot.empty){
            let newHistory = [];

            setLastDoc(snapshot.docs[snapshot.docs.length -1]);

            for(let i = 0; i < snapshot.docs.length; i++){
                newHistory.push(snapshot.docs[i].data())
            }
            setHistory(newHistory);
        
        }else{
            setLastDoc(null)
        }setIsLoading(false)
    }

  
    const renderList = ({PosterId, username,defaultQuantity,productName,productQuantity,productDate,productDetail,productPrice,ProductPhotoUrl,productTime}) =>{
    return (
        <View>
          <View>
            <View style={{ alignItems: "center", paddingTop: 20 }}>
              <View style={{ width: "80%", alignItems: "flex-end" }}>
                <Text>History</Text>
              </View>
              <TouchableOpacity style={component.cardcontent} onPress={() => {navigation.navigate('ContentSeller',{
                  productName: productName,
                  PosterId : PosterId,
                  productDetail: productDetail,
                  productDate: productDate,
                  defaultQuantity: defaultQuantity,
                  productQuantity: productQuantity,
                  productPrice: productPrice,
                  ProductPhotoUrl: ProductPhotoUrl,
                  productTime : productTime
                  })}}>
                <View style={component.levelcard}></View>
                <View style={prop.textcardcontent}>
                  <Text style={text.titleproduct}>{productName}</Text>
                  <Text style={text.detailproduct}>
                    delivery on {productDate}
                  </Text>
                  <Text style={text.detailproduct}>order {defaultQuantity}/{productQuantity}</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </View>
  );
  }



  return(
    <ImageBackground source={imagebackground} style={component.image}>
    <SafeAreaView>
     <View style={prop.profilecontent}>
            <View>
              <Image style={component.profilepic} source={{uri: user.profilePhotoUrl}}/>
            </View>
            <View style={prop.textprofile}>
              <Text style={text.profiletitle}>{user.username}</Text>
              <Text style={text.profiledetail}>{user.bio}</Text>
            </View>
          </View>
    <FlatList data={History}
    renderItem={({item}) => renderList(item)}
    keyExtractor={(item,index) => String(index,item)}
    refreshControl={
        <RefreshControl 
        refreshing={isLoading}
        onRefresh={onRefresh}
        />
    }
    />
</SafeAreaView>
</ImageBackground>
  )
};

const prop = StyleSheet.create({
  profilecontent: {
    paddingTop: 30,
    flexDirection: "column",
    alignItems: "center",
  },
  textprofile: {
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  textcardcontent: {
    marginLeft: 14,
  },
});

const component = StyleSheet.create({
  profilepic: {
    width: 120,
    height: 120,
    backgroundColor: "gray",
    borderRadius: 100,
  },
  cardcontent: {
    flexDirection: "row",
    marginTop: 10,
    padding: "3%",
    width: "80%",
    backgroundColor: "white",
    borderRadius: 14,
  },
  cardhistorycontent: {
    flexDirection: "row",
    marginTop: 10,
    padding: "3%",
    width: "80%",
    backgroundColor: "#777777",
    borderRadius: 14,
  },
  levelcard: {
    width: 20,
    height: 20,
    backgroundColor: "#efd779",
    borderRadius: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});

const text = StyleSheet.create({
  profiletitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profiledetail: {
    fontSize: 14,
  },
  titleproduct: {
    fontSize: 16,
    fontWeight: "bold",
  },
  titlehistoryproduct: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  detailproduct: {
    fontSize: 14,
  },
  detailhistoryproduct: {
    fontSize: 14,
    color: "white",
  },
});




//   return (
//     <KeyboardAwareScrollView>
//       <SafeAreaView>
//         <View>
//           <View style={prop.profilecontent}>
//             <View>
//               <View style={component.profilepic}></View>
//             </View>
//             <View style={prop.textprofile}>
//               <Text style={text.profiletitle}>PUMINAN PICROH</Text>
//               <Text style={text.profiledetail}>i am new</Text>
//             </View>
//           </View>

//           <View>
//             <View style={{ alignItems: "center", paddingTop: 20 }}>
//               <View style={{ width: "80%", alignItems: "flex-end" }}>
//                 <Text>new post</Text>
//               </View>
//               <TouchableOpacity style={component.cardcontent} onPress={() => navigation.navigate("ContentSeller")}>
//                 <View style={component.levelcard}></View>
//                 <View style={prop.textcardcontent}>
//                   <Text style={text.titleproduct}>NEW DELICIOUS CUPCAKE</Text>
//                   <Text style={text.detailproduct}>
//                     delivery on 11 Aug 2020
//                   </Text>
//                   <Text style={text.detailproduct}>order 20/40</Text>
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity style={component.cardcontent}>
//                 <View style={component.levelcard}></View>
//                 <View style={prop.textcardcontent}>
//                   <Text style={text.titleproduct}>
//                     WHAT IS YOUR FAVOURITE CAKE?
//                   </Text>
//                   <Text style={text.detailproduct}>delivery on 2 Aug 2020</Text>
//                   <Text style={text.detailproduct}>order 38/40</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>

//             <View style={{ alignItems: "center", paddingTop: 20 }}>
//               <View style={{ width: "80%", alignItems: "flex-end" }}>
//                 <Text>history</Text>
//               </View>
//               <TouchableOpacity style={component.cardhistorycontent}>
//                 <View style={component.levelcard}></View>
//                 <View style={prop.textcardcontent}>
//                   <Text style={text.titlehistoryproduct}>
//                     OLD DELICIOUS CUPCAKE
//                   </Text>
//                   <Text style={text.detailhistoryproduct}>
//                     delivery on 11 Sep 2020
//                   </Text>
//                   <Text style={text.detailhistoryproduct}>order 40/40</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </SafeAreaView>
//     </KeyboardAwareScrollView>
//   );