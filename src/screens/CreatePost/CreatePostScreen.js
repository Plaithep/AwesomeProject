import React, { useContext, useState } from "react";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { firestore } from "firebase";
import { StyleSheet, TextInput, View, Text, Platform, Picker } from "react-native";
import styled from "styled-components";
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default CreatePostScreen = () => {
    const [productImage, setProductImage] = useState();
    const [selectedOrder, setSelectedOrder] = useState();
    const [selectedPrice, setSelectedPrice] = useState();

    //----------------------------------------------
    const db = firestore();
    const [ProductName, setProductName] = useState();
    const [ProductType, setProductType] = useState();
    const [ProductDetail, setProductDetail] = useState();
    const [ProductQuantity, setProductQuantity] = useState();
    const [ProductPhoto, setProductPhoto] = useState();
    const [ProductPrice , setProductPrice] = useState();
    const [loading, setLoading] = useState(false);


    const addProductName = async () => {
        setLoading(true);
        const user = firebase.getCurrentUser();
        const UserId = await firebase.getUserId(user.uid);
       
         let productName = ProductName
         let productType = ProductType
         let productDetail = ProductDetail
         let productQuantity = ProductQuantity
         let productPrice = ProductPrice
         let defaultQuantity = 1 
         let PosterId = UserId
         let ProductPhotoUrl = ProductPhoto
      
        try{
          ProductPhotoUrl = await uploadProductImage(ProductPhoto); 
         firestore().collection('product').add({
           productName,
           productType,
           productDetail,
           productQuantity,
           productPrice,
           defaultQuantity,
           ProductPhotoUrl,
           PosterId,
         })
         console.log("@AddProductName Upload done", productName)
         console.log("@User That Upload id =", UserId )
        }catch(error){
          console.log("Error @AddProductName", error);
        }finally{
          setLoading(false);
        }
       };



  /**
   * ! Pick up Product Image 
   */


  const getPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      return status;
    }
  };

 const addProductPhoto = async () => {
  const status = await getPermission();

  if (status !== "granted") {
    alert("We need permission to access your camera roll");
    return;
  }
  pickImage();
};

const pickImage = async () => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.cancelled) {
      setProductPhoto(result.uri);
    }
  } catch (error) {
    console.log("Error @pickImage:", error);
  }
  
};


const uploadProductImage = async (uri) => {
  try {
    const photo = await getBlob(uri);
    


 

    db.collection('product').get().then((snapshot) => {
      snapshot.docs.forEach(doc =>{
        console.log(doc.data())
      })
    })

      
  /**
   * ! งงมาก ว่าทำไมมัน work คือ สามารถ Link product url ให้ตรงกันได้โดยที่ fix ค่า doc อันอื่นไว้
   */
    const imageRef =  firebases.storage().ref("ProductPhotos").child(ProductName);
    await imageRef.put(photo);

    const url = await imageRef.getDownloadURL();

    await db.collection("product").doc("0qgiZ6TpnZFCi1qFTXiq").update({
      ProductPhotoUrl: url,
    });

    

    return url;
  } catch (error) {
    console.log("Error @uploadProductPhoto: ", error);
  }
};

const getBlob = async (uri) => {
  return await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      resolve(xhr.response);
    };

    xhr.onerror = () => {
      reject(new TypeError("NetWork request failed"));
    };

    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
};



    return (
        <KeyboardAwareScrollView>
        <Container>

            <TitleContainer>
                <TitleField   // ใส่ชื่อ product
                    autoCapitalize="none"
                    placeholder="Product Name"
                    onChangeText={(ProductName) => setProductName(ProductName)}
                     value={ProductName}
                />
            </TitleContainer>

            <ProductImageContainer onPress={addProductPhoto}  >
                {ProductPhoto ? (
                    <ProductImage source={{ uri: ProductPhoto }} />
                ) : (
                        <DefaultProductImage>
                            <Ionicons
                                name="md-photos"
                                size={57}
                                color="black" />
                        </DefaultProductImage>
                    )}
            </ProductImageContainer>

            <DetailContainer>
                <DetailField
                    autoCapitalize="none"
                    placeholder="detail"
                    multiline={true}
                    onChangeText={ProductDetail => setProductDetail(ProductDetail)}
                    value={ProductDetail}
                />
            </DetailContainer>

            {/* <LocationContainer>
                <LocationTitle>Location</LocationTitle>
                <Picker
                    selectedValue={selectedOrder}
                    style={styles.pickers}
                    onValueChange={(itemValue, itemIndex) => setSelectedOrder(itemValue)}
                >
                    <Picker.Item label="Location" value="java" />
                    <Picker.Item label="Location1" value="java1" />
                    <Picker.Item label="Location2" value="java2" />
                    <Picker.Item label="Location3" value="java3" />
                    <Picker.Item label="Location4" value="java4" />
                </Picker>
            </LocationContainer> */}

            {/* <CatagoryContainer>
                <CatagoryTitle>Catagory</CatagoryTitle>
                <Picker
                    selectedValue={selectedPrice}
                    style={styles.pickers}
                    onValueChange={(itemValue, itemIndex) => setSelectedPrice(itemValue)}
                >
                    <Picker.Item label="Price" value="java" />
                    <Picker.Item label="Price1" value="java1" />
                    <Picker.Item label="Price2" value="java2" />
                    <Picker.Item label="Price3" value="java3" />
                    <Picker.Item label="Price4" value="java4" />
                </Picker>
            </CatagoryContainer> */}

            <OrderandPriceContainer>
                <LayoutCol
                    style={styles.layoutcols}
                >
                    <OrderTitle>Quantity</OrderTitle>
                    <PriceTitle >Price</PriceTitle>
                </LayoutCol>
                <LayoutCol
                    style={styles.layoutcols}
                >
                    <OrderField  keyboardType="numeric" onChangeText={(ProductQuantity) => setProductQuantity(ProductQuantity.trim())}/>
                    <PriceField   keyboardType="numeric" onChangeText={(ProductPrice) => setProductPrice(ProductPrice.trim())}/>
                </LayoutCol>
            </OrderandPriceContainer>

            <ComfirmButton onPress={addProductName} disabled={loading}>
                {loading ? (
                    <Loading />
                ) : (
                    <Text>Confirm</Text>
                )}

            </ComfirmButton>

            {/* <View>
                <TextInput
                    placeholder='TOPIC'
                    style={styles.topictitleInput}
                />
            </View> */}
        </Container>
        </KeyboardAwareScrollView>

    );
};

const Container = styled.View`
    align-items: center;
    margin-top: 64px;
    flex: 1;
`;

const ProductImageContainer = styled.TouchableOpacity`
     background-color: #e1e2e6;
     width: 200px;
     height: 160px;
     border-radius: 12px
     align-self: center;
     margin-top: 16px;
     overflow: hidden;
     border: 2px #707070 dashed;
`;

const DefaultProductImage = styled.View`
     align-items: center;
     justify-content: center;
     flex: 1;
`;

const ProductImage = styled.Image`
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

const LocationContainer = styled.View`
    width: 300px;
    margin-top: 30px;
`;

const LocationTitle = styled.Text`
    text-align: left;
    color: #707070;
    font-weight: bold;
`;

const CatagoryContainer = styled.View`
    width: 300px;
    margin-top: 30px;
`;

const CatagoryTitle = styled.Text`
    text-align: left;
    color: #707070;
    font-weight: bold;
`;

const OrderandPriceContainer = styled.View`
    width: 300px;
    margin-top: 30px;
`;

const LayoutCol = styled.View`

`;

const OrderTitle = styled.Text`
    text-align: left;
    color: #707070;
    font-weight: bold;
`;

const PriceTitle = styled.Text`
    text-align: left;
    color: #707070;
    font-weight: bold;
`;

const OrderField = styled.TextInput`
    border-color: #8e93a1;
    border-width: 0.5px;
    height: 30px;
    width: 120px;
    text-align-vertical: top;
    padding: 6px;
    border-radius: 2px;
    color: #707070;
    font-style: italic;
`;

const PriceField = styled.TextInput`
    border-color: #8e93a1;
    border-width: 0.5px;
    height: 30px;
    width: 120px;
    text-align-vertical: top;
    padding: 6px;
    border-radius: 2px;
    color: #707070;
    font-style: italic;
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
  border-radius: 30px
`;

const styles = StyleSheet.create({
    pickers: {
        width: 300,
        height: 30,
    },
    layoutcols: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
});

const Loading = styled.ActivityIndicator.attrs((props) => ({
    color: "#ffffff",
    size: "small",
  }))``;