import React, { useContext, useState } from "react";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { firestore } from "firebase";
import { StyleSheet, TextInput, View, Text, Platform, Picker, ImageBackground, TouchableOpacity, Image, Modal, Alert } from "react-native";
import styled from "styled-components";
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


import DropDownPicker from 'react-native-dropdown-picker';

export default CreatePostScreen = () => {

  const bio = "i am new";
  const [modalBio, setmodalBio] = useState(false);

  const price = 1;
  const quantity = 1;
  const [modalPrice, setmodalPrice] = useState(false);
  const [modalQuantity, setmodalQuantity] = useState(false);

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


          <View style={styles.detailcontainer}>
            <TextInput
              style={styles.detailfield}
              autoCapitalize="sentences"
              placeholder="detail"
              numberOfLines={6}
              multiline={true}
              onChangeText={ProductDetail => setProductDetail(ProductDetail)}
              value={ProductDetail}
            />
          </View>

          {/* location */}
          <View style={styles.locationContainer}>
            <View style={{ marginBottom: 6 }}>
              <Text style={styles.locationTitle}>Location</Text>
            </View>
          </View>
          <View style={{ width: '75%' }}>
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
          </View>
          <View style={{ width: '75%' }}>
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

          {/* Price */}
          <View style={styles.locationContainer}>
            <Text style={styles.locationTitle}>Price</Text>
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="none"
              transparent={true}
              visible={modalPrice}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <View style={{ width: '100%' }}>
                    <Text style={styles.label}>price</Text>
                  </View>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.textinput}
                    placeholder={'number'}
                  ></TextInput>
                  <View style={styles.rowbutton}>
                    <TouchableOpacity
                      onPress={() => {
                        setmodalPrice(!modalPrice);
                      }}
                    >
                      <Text style={{ color: "green", fontWeight: "bold" }}>
                        Save
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setmodalPrice(!modalPrice);
                      }}
                    >
                      <Text style={{ color: "red", fontWeight: "bold" }}>
                        Cancle
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            <TouchableOpacity
              style={styles.cardModal}
              onPress={() => {
                setmodalPrice(!modalPrice);
              }}
            >
              <View>
                <Text style={styles.textinformation}>{price} Baht per 1 piece</Text>
              </View>
            </TouchableOpacity>
          </View>


          {/* Quantity */}
          <View style={styles.locationContainer}>
            <Text style={styles.locationTitle}>Quantity</Text>
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="none"
              transparent={true}
              visible={modalQuantity}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <View style={{ width: '100%' }}>
                    <Text style={styles.label}>Quantity</Text>
                  </View>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.textinput}
                    placeholder={'number'}
                  ></TextInput>
                  <View style={styles.rowbutton}>
                    <TouchableOpacity
                      onPress={() => {
                        setmodalQuantity(!modalQuantity);
                      }}
                    >
                      <Text style={{ color: "green", fontWeight: "bold" }}>
                        Save
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setmodalQuantity(!modalQuantity);
                      }}
                    >
                      <Text style={{ color: "red", fontWeight: "bold" }}>
                        Cancle
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            <TouchableOpacity
              style={styles.cardModal}
              onPress={() => {
                setmodalQuantity(!modalQuantity);
              }}
            >
              <View>
                <Text style={styles.textinformation}>{quantity} piece(s)</Text>
              </View>
            </TouchableOpacity>
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
    marginBottom: 24,
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
  detailcontainer: {
    marginTop: 40,
    width: '75%',
    backgroundColor: '#FFFFFFD0',
    borderRadius: 10
  },
  detailfield: {
    textAlignVertical: 'top',
    padding: 20,
    color: '#707070',
    fontStyle: 'italic',
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
    height: 30,
    width: '98%',
    textAlignVertical: 'top',
    padding: 6,
    borderRadius: 5,
    color: '#707070',
    fontStyle: 'italic',
    backgroundColor: '#FFFFFFD0',
  },
  textInputprice: {
    height: 30,
    width: '100%',
    textAlignVertical: 'top',
    padding: 6,
    borderRadius: 5,
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
  },
  label: {
    flexDirection: 'row',
    color: '#707070',
    fontWeight: 'bold'
  },
  textinformation: {
    color: "gray",
  },
  textinput: {
    marginBottom: 20,
    padding: 2,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    width: '90%',
    color: "gray",
  },
  modalView: {
    width: '65%',
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardModal: {
    width: '75%',
    backgroundColor: "#FFFFFFD0",
    borderRadius: 5,
    padding: 10,
  },
  centeredView: {
    paddingTop: 3,
    alignItems: "center",
    width: '100%'
  },
  centeredModalView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#707070B0",
  },
  rowbutton: {
    width: 170,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: "#ffffff",
  size: "small",
}))``;