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
} from "react-native";
import styled from "styled-components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default HomeScreen = ({ navigation }) => {
  const [modalOrder, setmodalOrder] = useState(false);

  return (
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
                <View style={component.leveluser}></View>
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
                  <View style={prop.rowtext}>
                    <Text style={prop.cardPrice}>45 ฿</Text>
                  </View>
                </View>
              </View>

              <View>
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
                      <Text>How much do you wamt</Text>
                      <TextInput
                        placeholder="number"
                        keyboardType="numeric"
                      ></TextInput>
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            setmodalOrder(!modalOrder);
                          }}
                        >
                          <Text style={{ color: "green", fontWeight: "bold" }}>
                            Confirm
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
                  }}
                >
                  <View>
                    <Text style={component.textinformation}>Order</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
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
