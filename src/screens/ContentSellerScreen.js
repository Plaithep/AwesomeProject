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
    const {productName,PosterId,productDetail,productDate,defaultQuantity,productQuantity,productPrice,ProductPhotoUrl} = route.params;
    const [ user,setUser] = useContext(UserContext);
    
    const [isMoreLoading, setIsMoreLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [lastDoc,setLastDoc] = useState(null);
    const [Buyer, setBuyer] = useState([])


  const onRefresh = () =>{
    setTimeout(() => {
     getBuyerData();
    },1000)
  }
  
  useEffect(() =>{
    getBuyerData();
  },[])

    const  getBuyerData = async () =>{
        setIsLoading(true);
        const snapshot = await firestore().collection('order').where("ordername", "==", productName).get();
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
      const renderList = ({Buyer,username, orderQuantity,profilePhotoUrl}) =>{
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView>
        <View style={prop.container}>
         
          <View style={prop.containercontect}>
            {/* card contect 1 */}
            <TouchableOpacity style={component.contectcard}>
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
          <Text>delivery time 11.00-12.00</Text>
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