import { HeaderBackground } from "@react-navigation/stack";
import React, { useState, Component ,useEffect,useContext} from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Image,
  Animated,
  ScrollView,
  Dimensions
} from "react-native";
import styled from "styled-components";
import moment from 'moment'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


import { UserContext} from "../../context/UserContext"
import {FirebaseContext} from "../../context/FirebaseContext"
import { firestore } from "firebase";
import "firebase/firestore";
import firebases from "firebase";



export default HomeScreen = ({ navigation }) => {
  const [modalOrder, setmodalOrder] = useState(false);

  let onEndReachedCalledDuringMomentum = false;

  const [OrderQuantity,setOrderQuantity] = useState(); 
  const [isLoading, setIsLoading] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);
  const [product, setProduct] = useState([])
  
  const [productName1, setProductName1] = useState()
  const [ user,setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);
  const Firebase = useContext(FirebaseContext);
  const uid = Firebase.getCurrentUser().uid;
 
  // const productRef =  firestore().collection('product')


  useEffect(() =>{
    getProduct();
  }, []);

  const getProduct = async () => {
    setIsLoading(true);
    // const snapshot = await firestore().collection('product').get()
    const snapshot = await firestore().collection('product').where('productName','!=', 'EIEI' ).get()
    // const snapshot = await productRef.where('productName', '!=', 'EIEI').get();
    if(!snapshot.empty){
      let newProduct = [];

      setLastDoc(snapshot.docs[snapshot.docs.length -1]);

      for (let i = 0; i < snapshot.docs.length; i++){
        newProduct.push(snapshot.docs[i].data());
      }

      setProduct(newProduct);
    }else{
      setLastDoc(null);
    }
    setIsLoading(false)
  }

  /* 
        !   มี Error อยู่ [Unhandled promise rejection: FirebaseError: Function Query.startAfter() requires a valid first argument, but it was undefined.]
        !   กำลังพยายามหาวิธีเเก้อยู่
       **/
  
  const getMore = async () => {
    if(lastDoc){
      setIsMoreLoading(false);

      setTimeout(async() => {
        // let snapshot = await productRef.startAfter(lastDoc.data().id).limit(3).get();
          // let snapshot = await firestore().collection('product').startAfter(lastDoc.data().id).limit(3).get();
          let snapshot = await firestore().collection('product').where('productName','!=', 'EIEI').startAfter(lastDoc.data().id).limit(3).get()
        if(!snapshot.empty){
          let newProduct = product;

          setLastDoc(snapshot.docs[snapshot.docs.length -1 ]);

          for(let i = 0; i< snapshot.docs.length; i++){
            newProduct.push(snapshot.docs[i].data());
          }

          setProduct(newProduct);
          if(snapshot.docs.length < 3) setLastDoc(null);
        } else{
          setLastDoc(null);
        }

        setIsMoreLoading(false);
      }, 1000);
    }

    onEndReachedCalledDuringMomentum = true;
  }

  const onRefresh = () =>{
    setTimeout(() => {
      getProduct();
    },1000);
  }


  const renderFooter = () => {
    if (!isMoreLoading) return true;
  


  return(
    <ActivityIndicator
    size='large'
    color={'##D83E64'}
    style={{ marginBottom: 10}}
    />
  )
 }
/* 

*/

 const AddOrder = async (PosterId,productName1,ProductPhotoUrl,productDetail,defaultQuantity) => {
  const uid = Firebase.getCurrentUser().uid;
  const UserId = await Firebase.getUserInfo(user.uid);
   let orderQuantity = OrderQuantity
   let posterId = PosterId
   let orderDetail = productDetail
   let orderProductPhotoUrl = ProductPhotoUrl
   let ordername = productName1
   let UserCreateOrder = uid
   let Buyer = UserId
   var date = moment().utcOffset("+7").format('DD-MMM-YYYY HH:mm');
   try{
     firestore().collection('order').add({
      orderQuantity,
      orderDetail,
      orderProductPhotoUrl,
      ordername,
      date,
      Buyer,
      UserCreateOrder,
      posterId
     })
     console.log("Create Order = " + ordername +" ---"+ orderQuantity)
    //  updateQuantity(defaultQuantity,productName1)
     alert("Order making successfully")
   }catch(error){
     console.log("Error @ create order = " + error )
     alert("There something worng while trying to make your order Errorcode= " + error )
   }
 }

 /* 
 ! ค้องเเก้ให้สามารถ อัปเดต product quantity ให้ได้
 */

//  const updateQuantity = async (defaultQuantity,productName1) =>{
//    let number =  OrderQuantity + defaultQuantity
//    try{
//    const pew = await firestore().collection('product').where('productName', '==', productName1).get()
//    console.log(pew)
//    }catch(error){
//      console.log("Error @ update Quantity " + error)
//    }
//  }



       {/* user feed below */}

       /* 
        ! Add data เพิ่มเข้าไปด้วย delivery date & time
       **/
      const renderList = ({ PosterId,profilePhotoUrl,username,ProductPhotoUrl,defaultQuantity,productCatagory,productDetail,productLocation,productName,productPrice,productQuantity,productTime,productDate}) =>{  
        return (
          <View style={prop.displaycontent}>
            {/* content 1 */}
            <View style={component.cardcontent}>
              <View style={prop.cardheader}>
                <View style={prop.profilecardheader}>
                  <Image style={component.picprofilecontent} source={{uri:PosterId.profilePhotoUrl}}/>
                  <Text style={prop.textcardheader}>
                    {PosterId.username}
                  </Text>
                </View>
                <View style={component.leveluser}></View>
              </View>

              <Image style={component.picturecontent} source={{ uri: ProductPhotoUrl }} />

              <View style={prop.cardtext}>
                <Text style={prop.cardtitle}>{productName}</Text>
                <Text style={prop.carddetail}>
                  {productDetail}
                </Text>

                <View style={prop.secondrowtext}>
                  <View style={prop.rowtext}>
                    <Text style={prop.cardsemititle}>delivery on: </Text>
                    <Text style={prop.carddetail}>{productDate}</Text>
                  </View>
                  <View style={prop.rowtext}>
                    <Text style={prop.cardsemititle}>order: </Text>
                    <Text style={prop.carddetail}>{defaultQuantity}/{productQuantity}</Text>
                  </View>
                </View>

                <View style={prop.secondrowtext}>
                  <View style={prop.rowtext}>
                    <Text style={prop.cardsemititle}>delivery time: </Text>
                    <Text style={prop.carddetail}>{productTime}</Text>
                  </View>
                  <View style={prop.rowtext}>
                    <Text style={prop.cardPrice}>{productPrice}฿</Text>
                  </View>
                </View>
              </View>

              <View>
                <Modal
                  animationType="none"
                  transparent={true}
                  visible={modalOrder}
                  onRequestClose={() => {
                  alert("Modal has been closed.");
                  }}
                >
                  <View style={prop.centermodalview}>
                    <View style={component.modalview}>
                      <Text>How much do you wamt</Text>
                      <TextInput
                        placeholder="Ex 3"
                        keyboardType="numeric"
                        onChangeText={(OrderQuantity) => setOrderQuantity(OrderQuantity)}
                        value={OrderQuantity}
                      ></TextInput>
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            setmodalOrder(!modalOrder), console.log("--------"),console.log(productName1)
                            AddOrder(PosterId,productName1,ProductPhotoUrl,productDetail,defaultQuantity )
                          }}
                        >
                          <Text style={{ color: "green", fontWeight: "bold" }}>
                            Confirm
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() =>{
                            setmodalOrder(!modalOrder)
                          }}
                        >
                        <Text style={{ color: "red", fontWeight: "bold" }}>
                            Cancel
                          </Text>
                          </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity
                  style={component.orderbutton}
                  onPress={() => {
                    setmodalOrder(!modalOrder);
                    setProductName1(productName)
                    
                  }}
                >
                  <View>
                    <Text style={component.textinformation}>Order</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
  );
                }


  const getHeader = () =>{
    return( 
    <SafeAreaView>
      <View style={prop.conntentComponent}>
        <View style={prop.profileComponent}>
          <View style={prop.profiledisplay}>
            <Image style={component.picprofile} source ={{uri : user.profilePhotoUrl}} />
            <View style={prop.textprofiledisplay}>
              <Text style={prop.textprofiletitle}>{user.username}</Text>
              <Text style={prop.textprofiledetail}>{user.bio}</Text>
            </View>
          </View>

          <View style={prop.colcenterbutoon}>
            <TouchableOpacity
              style={prop.rowbutton}
              onPress={() => navigation.navigate("Profile")}
            >
              <View style={component.profilebutton}></View>
              <Text style={prop.textbutton}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={prop.rowbutton}
              onPress={() => navigation.navigate("Seller")}
            >
              <View style={component.sellerbutton}></View>
              <Text style={prop.textbutton}>Seller </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={prop.searchbar}>
          <TextInput
            style={component.searchbar}
            placeholder="search"
          ></TextInput>
        </View>
        </View>
        </SafeAreaView>
)
  }

    
  return(
    <SafeAreaView>
      <FlatList data={product}
      renderItem={({item}) => renderList(item)}
      keyExtractor={(item, index) => String(index,item)}
          ListFooterComponent={renderFooter}
          refreshControl={
              <RefreshControl
                  refreshing={isLoading}
                  onRefresh={onRefresh}    
              />
          }
          initialNumToRender={3}
          onEndReachedThreshold={0.1}
          onMomentumScrollBegin = {() => {onEndReachedCalledDuringMomentum = false;}}
          // onEndReached = {() => {
          //     if (!onEndReachedCalledDuringMomentum && !isMoreLoading) {
          //       getMore();
                
          //     }
          //  }
          // }
          ListHeaderComponent={getHeader}
      />
    </SafeAreaView>
  )
};

const prop = StyleSheet.create({
  conntentComponent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  profileComponent: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  colcenterbutoon: {
    flexDirection: "column",
  },
  textprofile: {},
  rowbutton: {
    flexDirection: "row",
    marginTop: 6,
    marginBottom: 6,
    position: "relative",
    left: "20%",
  },
  textbutton: {
    transform: [
      {
        rotate: "270deg",
      },
    ],
    fontSize: 12,
  },
  profiledisplay: {
    flexDirection: "row",
  },
  textprofiledisplay: {
    marginLeft: "6%",
    flexDirection: "column",
    justifyContent: "center",
  },
  searchbar: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  displaycontent: {
    marginTop: 20,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  cardheader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
  },
  textcardheader: {
    paddingLeft: 12,
    fontSize: 14,
    fontWeight: "bold",
    color: "#707070",
  },
  textprofiletitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#707070",
  },
  textprofiledetail: {
    fontSize: 13,
    color: "#707070",
  },
  profilecardheader: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardtext: {
    width: "90%",
  },
  cardtitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#707070",
    marginTop: 4,
  },
  carddetail: {
    fontSize: 13,
    color: "#707070",
    textAlign: "justify",
  },
  cardsemititle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#707070",
  },
  rowtext: {
    flexDirection: "row",
  },
  secondrowtext: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#e37272",
  },
  centermodalview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#707070B0",
  },
});

const component = StyleSheet.create({
  picprofile: {
    backgroundColor: "#e1e2e6",
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  profilebutton: {
    backgroundColor: "#4D7B6B",
    width: 36,
    height: 36,
    borderRadius: 50,
  },
  sellerbutton: {
    backgroundColor: "#4F7595",
    width: 36,
    height: 36,
    borderRadius: 50,
  },
  searchbar: {
    width: "80%",
    height: 30,
    backgroundColor: "#e1e2e6",
    borderRadius: 30,
    color: "#707070",
    textAlign: "center",
  },
  cardcontent: {
    flexDirection: "column",
    alignItems: "center",
    width: "78%",
    backgroundColor: "white",
    padding: 14,
    paddingTop: 16,
    paddingBottom: 0,
    borderWidth: 1,
    borderColor: "#707070",
    borderRadius: 20,
    marginBottom: 25,
  },
  picprofilecontent: {
    width: 45,
    height: 45,
    backgroundColor: "#e1e2e6",
    borderRadius: 100,
  },
  leveluser: {
    width: 22,
    height: 22,
    backgroundColor: "#efd779",
    borderRadius: 100,
  },
  picturecontent: {
    marginTop: 10,
    width: "90%",
    height: 150,
    backgroundColor: "#e1e2e6",
  },
  modalview: {
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  orderbutton: {
    width: 90,
    height: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#707070",
    borderRadius: 30,

    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
    bottom: -12,
  },
});