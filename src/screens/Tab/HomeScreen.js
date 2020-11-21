import { HeaderBackground } from "@react-navigation/stack";
import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableHighlightBase,
  ImageBackground
} from "react-native";
import styled from "styled-components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { AntDesign } from '@expo/vector-icons';

export default HomeScreen = ({ navigation }) => {
  const [modalOrder, setmodalOrder] = useState(false);

  const imagebackground = { uri: "https://i.pinimg.com/564x/e1/c8/ce/e1c8cef9422e6b0d7b83fb806fa6cbd7.jpg" };


  return (
    <ImageBackground source={imagebackground} style={component.image}>
      <KeyboardAwareScrollView>
        <SafeAreaView>
          <View style={prop.conntentComponent}>
            <View style={prop.profileComponent}>
              <View style={prop.profiledisplay}>
                <View style={component.picprofile}></View>
                <View style={prop.textprofiledisplay}>
                  <Text style={prop.textprofiletitle}>Puminan Picroh</Text>
                  <Text style={prop.textprofiledetail}>i am new</Text>
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


{/* content 1 */}
            <View style={{ width: '100%' }}>
              <Modal
                animationType="none"
                transparent={true}
                visible={modalOrder}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}
              >
                <View style={prop.centermodalview}>
                  <View style={component.modalview}>

                    <View style={prop.cardheader}>
                      <View style={prop.profilecardheader}>
                        <View style={component.picprofilecontent}></View>
                        <Text style={prop.textcardheader}>
                          Plaithep Polratanapibol
                      </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setmodalOrder(!modalOrder);
                        }}
                      >
                        <AntDesign name="closecircleo" size={20} color="gray" />
                      </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", width: '90%', marginTop: 2, marginBottom: 1, justifyContent: 'flex-end' }}>
                      <View style={{ backgroundColor: 'gray', paddingLeft: 8, paddingRight: 8, borderRadius: 16, marginLeft: 4, marginRight: 3 }}>
                        <Text style={{ color: 'white', fontSize: 13 }}>kathu</Text>
                      </View>
                      <View style={{ backgroundColor: 'gray', paddingLeft: 8, paddingRight: 8, borderRadius: 16, marginLeft: 4, marginRight: 3 }}>
                        <Text style={{ color: 'white', fontSize: 13 }}>kathu</Text>
                      </View>
                      <View style={{ backgroundColor: 'gray', paddingLeft: 8, paddingRight: 8, borderRadius: 16, marginLeft: 4, marginRight: 3 }}>
                        <Text style={{ color: 'white', fontSize: 13 }}>kathu</Text>
                      </View>
                    </View>

                    <View style={component.picturecontent}></View>

                    <View style={prop.cardtext}>

                      <Text style={prop.cardtitle}>New Delicaious Cupcake</Text>
                      <Text style={prop.carddetail}>
                        I like to make cupcakes I hope you'll enjoy it and it's no
                        peanuts. Ingredients 1. flour 2. wiping cream 3. candy
                      </Text>

                      <View style={prop.secondrowtext}>
                        <View style={prop.rowtext}>
                          <Text style={prop.cardsemititle}>delivery on: </Text>
                          <Text style={prop.carddetail}>11 Aug 2020</Text>
                        </View>
                        <View style={prop.rowtext}>
                          <Text style={prop.cardsemititle}>order: </Text>
                          <Text style={prop.carddetail}>14/20</Text>
                        </View>
                      </View>

                      <View style={prop.secondrowtext}>

                        <View style={prop.rowtext}>
                          <Text style={prop.cardsemititle}>delivery time: </Text>
                          <Text style={prop.carddetail}>11.00 - 14.00</Text>
                        </View>

                        <Text style={prop.cardPrice}>45 ฿</Text>

                      </View>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ marginRight: 15 }}>
                        <TextInput keyboardType="numeric" style={{
                          borderWidth: 0.5,
                          borderColor: "gray",
                          borderRadius: 3,
                          width: 75,
                          color: "gray",
                          textAlign: 'center'
                        }} />
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setmodalOrder(!modalOrder);
                        }}
                      >
                        <View>
                          <Text style={{ color: "#2E8B57", fontWeight: '700', fontSize: 19 }}>
                            order
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity
                onPress={() => {
                  setmodalOrder(!modalOrder);
                }}
              >
                <View style={prop.displaycontent}>
                  {/* content 1 */}
                  <View style={component.cardcontent}>

                    <View style={prop.cardheader}>
                      <View style={prop.profilecardheader}>
                        <View style={component.picprofilecontent}></View>
                        <Text style={prop.textcardheader}>
                          Plaithep Polratanapibol
                      </Text>
                      </View>
                    </View>

                    <View style={component.picturecontent}></View>

                    <View style={prop.cardtext}>

                      <Text style={prop.cardtitle}>New Delicaious Cupcake</Text>


                      <View style={prop.secondrowtext}>
                        <View style={prop.rowtext}>
                          <Text style={prop.cardsemititle}>delivery on: </Text>
                          <Text style={prop.carddetail}>11 Aug 2020</Text>
                        </View>
                        <View style={prop.rowtext}>
                          <Text style={prop.cardsemititle}>order: </Text>
                          <Text style={prop.carddetail}>14/20</Text>
                        </View>
                      </View>

                      <View style={prop.secondrowtext}>
                        <View style={prop.rowtext}>
                          <Text style={prop.cardsemititle}>delivery time: </Text>
                          <Text style={prop.carddetail}>11.00 - 14.00</Text>
                        </View>
                        <View style={prop.rowtext}>
                          <Text style={prop.cardPrice}>45 ฿</Text>
                        </View>
                      </View>
                    </View>

                  </View>

                </View>
              </TouchableOpacity>
            </View>


{/* content 2 */}
            <View style={{ width: '100%' }}>
              <Modal
                animationType="none"
                transparent={true}
                visible={modalOrder}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}
              >
                <View style={prop.centermodalview}>
                  <View style={component.modalview}>

                    <View style={prop.cardheader}>
                      <View style={prop.profilecardheader}>
                        <View style={component.picprofilecontent}></View>
                        <Text style={prop.textcardheader}>
                          Plaithep Polratanapibol
                      </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setmodalOrder(!modalOrder);
                        }}
                      >
                        <AntDesign name="closecircleo" size={20} color="gray" />
                      </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", width: '90%', marginTop: 2, marginBottom: 1, justifyContent: 'flex-end' }}>
                      <View style={{ backgroundColor: 'gray', paddingLeft: 8, paddingRight: 8, borderRadius: 16, marginLeft: 4, marginRight: 3 }}>
                        <Text style={{ color: 'white', fontSize: 13 }}>kathu</Text>
                      </View>
                      <View style={{ backgroundColor: 'gray', paddingLeft: 8, paddingRight: 8, borderRadius: 16, marginLeft: 4, marginRight: 3 }}>
                        <Text style={{ color: 'white', fontSize: 13 }}>kathu</Text>
                      </View>
                      <View style={{ backgroundColor: 'gray', paddingLeft: 8, paddingRight: 8, borderRadius: 16, marginLeft: 4, marginRight: 3 }}>
                        <Text style={{ color: 'white', fontSize: 13 }}>kathu</Text>
                      </View>
                    </View>

                    <View style={component.picturecontent}></View>

                    <View style={prop.cardtext}>

                      <Text style={prop.cardtitle}>New Delicaious Cupcake</Text>
                      <Text style={prop.carddetail}>
                        I like to make cupcakes I hope you'll enjoy it and it's no
                        peanuts. Ingredients 1. flour 2. wiping cream 3. candy
                      </Text>

                      <View style={prop.secondrowtext}>
                        <View style={prop.rowtext}>
                          <Text style={prop.cardsemititle}>delivery on: </Text>
                          <Text style={prop.carddetail}>11 Aug 2020</Text>
                        </View>
                        <View style={prop.rowtext}>
                          <Text style={prop.cardsemititle}>order: </Text>
                          <Text style={prop.carddetail}>14/20</Text>
                        </View>
                      </View>

                      <View style={prop.secondrowtext}>

                        <View style={prop.rowtext}>
                          <Text style={prop.cardsemititle}>delivery time: </Text>
                          <Text style={prop.carddetail}>11.00 - 14.00</Text>
                        </View>

                        <Text style={prop.cardPrice}>45 ฿</Text>

                      </View>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View style={{ marginRight: 15 }}>
                        <TextInput keyboardType="numeric" style={{
                          borderWidth: 0.5,
                          borderColor: "gray",
                          borderRadius: 3,
                          width: 75,
                          color: "gray",
                          textAlign: 'center'
                        }} />
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setmodalOrder(!modalOrder);
                        }}
                      >
                        <View>
                          <Text style={{ color: "#2E8B57", fontWeight: '700', fontSize: 19 }}>
                            order
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity
                onPress={() => {
                  setmodalOrder(!modalOrder);
                }}
              >
                <View style={prop.displaycontent}>
                  {/* content 1 */}
                  <View style={component.cardcontent}>

                    <View style={prop.cardheader}>
                      <View style={prop.profilecardheader}>
                        <View style={component.picprofilecontent}></View>
                        <Text style={prop.textcardheader}>
                          Plaithep Polratanapibol
                      </Text>
                      </View>
                    </View>

                    <View style={component.picturecontent}></View>

                    <View style={prop.cardtext}>

                      <Text style={prop.cardtitle}>New Delicaious Cupcake</Text>


                      <View style={prop.secondrowtext}>
                        <View style={prop.rowtext}>
                          <Text style={prop.cardsemititle}>delivery on: </Text>
                          <Text style={prop.carddetail}>11 Aug 2020</Text>
                        </View>
                        <View style={prop.rowtext}>
                          <Text style={prop.cardsemititle}>order: </Text>
                          <Text style={prop.carddetail}>14/20</Text>
                        </View>
                      </View>

                      <View style={prop.secondrowtext}>
                        <View style={prop.rowtext}>
                          <Text style={prop.cardsemititle}>delivery time: </Text>
                          <Text style={prop.carddetail}>11.00 - 14.00</Text>
                        </View>
                        <View style={prop.rowtext}>
                          <Text style={prop.cardPrice}>45 ฿</Text>
                        </View>
                      </View>
                    </View>

                  </View>

                </View>
              </TouchableOpacity>
            </View>



          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

const prop = StyleSheet.create({
  conntentComponent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  profileComponent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 35,
    paddingRight: 35,
    backgroundColor: 'white'
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
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  displaycontent: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  cardheader: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 2
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
    marginTop: 6
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
    marginTop: 1
  },
  secondrowtext: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardPrice: {
    fontSize: 25,
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
    width: "76%",
    backgroundColor: "white",
    padding: 14,
    paddingTop: 16,
    paddingBottom: 10,
    borderRadius: 20,
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
    flexDirection: "column",
    width: '85%',
    padding: 20,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
    borderRadius: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
