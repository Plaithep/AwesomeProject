import React, { useContext, useState } from "react";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { firestore } from "firebase";
import { StyleSheet, TextInput, View, Text, Platform, Picker, ImageBackground, TouchableOpacity, Image } from "react-native";
import styled from "styled-components";
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


import DropDownPicker from 'react-native-dropdown-picker';

export default CreatePostScreen = () => {

  const imagebackground = { uri: "https://i.pinimg.com/564x/36/ae/1c/36ae1c8441c61dc2e6268f8077f0dd19.jpg" };

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
  const [ProductPrice, setProductPrice] = useState();
  //----------------------------------------------
  const [Location, setLocation] = useState();

  const [loading, setLoading] = useState(false);

  const state = {
    location: 'Kathu',
    catagory: 'Homemade Food'
  }

  // ที่รักงับ อันนี้เขาเข้าใจแค่นี้น้าาา แงงง
  const setState = () => {

  }


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

    try {
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
      console.log("@User That Upload id =", UserId)
    } catch (error) {
      console.log("Error @AddProductName", error);
    } finally {
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
        snapshot.docs.forEach(doc => {
          console.log(doc.data())
        })
      })


      /**
       * ! งงมาก ว่าทำไมมัน work คือ สามารถ Link product url ให้ตรงกันได้โดยที่ fix ค่า doc อันอื่นไว้
       */
      const imageRef = firebases.storage().ref("ProductPhotos").child(ProductName);
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
    <ImageBackground source={imagebackground} style={styles.image}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>


          <TextInput   // ใส่ชื่อ product
            autoCapitalize="characters"
            placeholder="Product Name"
            onChangeText={(ProductName) => setProductName(ProductName)}
            value={ProductName}
            style={styles.titleField}
          />


          <TouchableOpacity onPress={addProductPhoto} style={styles.imgaeContainer}>
            {ProductPhoto ? (
              <Image style={{ flex: 1 }} source={{ uri: ProductPhoto }} />
            ) : (
                <View style={styles.defautProductImage}>
                  <Ionicons
                    name="md-photos"
                    size={57}
                    color="black" />
                </View>
              )}
          </TouchableOpacity>


          <TextInput
            style={styles.dataField}
            autoCapitalize="sentences"
            placeholder="detail"
            multiline={true}
            onChangeText={ProductDetail => setProductDetail(ProductDetail)}
            value={ProductDetail}
          />

          {/* location */}
          <View style={styles.locationContainer}>
            <View style={{ marginBottom: 6 }}>
              <Text style={styles.locationTitle}>Location</Text>
            </View>
            <DropDownPicker
              items={[
                { label: 'Kathu', value: 'Kathu', hidden: true },
                { label: 'Talang', value: 'Talang' },
                { label: 'Maung', value: 'Maung' },
              ]}

              multiple={true}
              multipleText={"%d location(s) have been selected."}
              min={0}
              max={10}

              defaultValue={state.location}
              containerStyle={{ height: 40 }}
              style={{ backgroundColor: '#FFFFFFD0' }}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              dropDownStyle={{ backgroundColor: '#FFFFFF' }}
              onChangeItem={item => setState({
                location: item
              })}
            />
          </View>

          {/* catagory */}
          <View style={styles.locationContainer}>
            <View style={{ marginBottom: 6 }}>
              <Text style={styles.locationTitle}>Catagory</Text>
            </View>

            <DropDownPicker
              items={[
                { label: 'Homemade Food', value: 'Homemade Food', hidden: true },
                { label: 'Handmade Product', value: 'Handmade Product' }
              ]}

              defaultValue={state.catagory}
              containerStyle={{ height: 40 }}
              style={{ backgroundColor: '#FFFFFFD0' }}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              dropDownStyle={{ backgroundColor: '#FFFFFF' }}
              onChangeItem={item => setState({
                location: item
              })}
            />
          </View>

          {/* date */}
          <View style={styles.locationContainer}>
            <View style={{ marginBottom: 6 }}>
              <Text style={styles.locationTitle}>Date</Text>
            </View>

          </View>


          {/* time */}
          <View style={styles.locationContainer}>
            <View style={{ marginBottom: 6 }}>
              <Text style={styles.locationTitle}>Time</Text>
            </View>

          </View>


          {/* quantity and price */}
          <View style={styles.locationContainer}>
            <View style={{ flexDirection: 'row', width: '100%' }}>
              <View style={{ width: '50%' }}>
                <View style={{ marginBottom: 6 }}>
                  <Text style={styles.locationTitle}>Quantity</Text>
                </View>
                <TextInput style={styles.textInputQuantity} keyboardType="numeric" onChangeText={(ProductQuantity) => setProductQuantity(ProductQuantity.trim())} />
              </View>

              <View style={{ width: '50%' }}>
                <View style={{ marginBottom: 6 }}>
                  <Text style={styles.locationTitle} >Price</Text>
                </View>
                <TextInput style={styles.textInputprice} keyboardType="numeric" onChangeText={(ProductPrice) => setProductPrice(ProductPrice.trim())} />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.confirmButton} onPress={addProductName} disabled={loading}>
            {loading ? (
              <Loading />
            ) : (
                <Text style={{ color: "white", fontWeight: '700', fontSize: 15 }}>Confirm</Text>
              )}

          </TouchableOpacity>

          {/* <View>
                <TextInput
                    placeholder='TOPIC'
                    style={styles.topictitleInput}
                />
            </View> */}
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  pickers: {
    width: 300,
    height: 30,
  },
  layoutcols: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    alignItems: 'center',
    marginTop: 30,
    flex: 1,
    marginBottom: 24
  },
  titleField: {
    borderBottomColor: '#8e93a1',
    borderBottomWidth: 1,
    height: 30,
    width: 200,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#707070',
    marginBottom: 20,
  },
  imgaeContainer: {
    backgroundColor: '#FFFFFFD0',
    width: 200,
    height: 160,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 16,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#707070',
    borderStyle: 'dashed'
  },
  defautProductImage: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  dataField: {
    borderColor: '#8e93a1',
    borderWidth: 0.5,
    height: 120,
    width: '75%',
    textAlignVertical: 'top',
    padding: 6,
    color: '#707070',
    fontStyle: 'italic',
    marginTop: 40,
    backgroundColor: '#FFFFFFE0'
  },
  locationContainer: {
    width: '75%',
    marginTop: 30,
  },
  locationTitle: {
    textAlign: 'left',
    color: '#707070',
    fontWeight: 'bold',
  },
  textInputQuantity: {
    borderColor: '#8e93a1',
    borderWidth: 0.5,
    height: 30,
    width: '98%',
    textAlignVertical: 'top',
    padding: 6,
    borderRadius: 2,
    color: '#707070',
    fontStyle: 'italic',
    backgroundColor: '#FFFFFFD0',
  },
  textInputprice: {
    borderColor: '#8e93a1',
    borderWidth: 0.5,
    height: 30,
    width: '100%',
    textAlignVertical: 'top',
    padding: 6,
    borderRadius: 2,
    color: '#707070',
    fontStyle: 'italic',
    backgroundColor: '#FFFFFFD0',
  },
  confirmButton: {
    margin: 34,
    marginTop: 20,
    marginBottom: 6,
    height: 32,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#707070',
    borderRadius: 30,
    backgroundColor: 'gray'
  }
});

const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: "#ffffff",
  size: "small",
}))``;