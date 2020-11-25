import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import styled from "styled-components";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default SellerScreen = ({ navigation }) => {

  const imagebackground = { uri: "https://i.pinimg.com/564x/36/ae/1c/36ae1c8441c61dc2e6268f8077f0dd19.jpg" };

  return (
    <ImageBackground source={imagebackground} style={component.image}>
      <KeyboardAwareScrollView>
        <SafeAreaView>
          <View style={{ marginBottom: 30, width: '100%' }}>
            <View style={prop.profilecontent}>
              <View>
                <View style={component.profilepic}></View>
              </View>
              <View style={prop.textprofile}>
                <Text style={text.profiletitle}>PUMINAN PICROH</Text>
                <Text style={text.profiledetail}>i am new</Text>
              </View>
            </View>


            {/* content now */}
            <View>
              <View style={{ alignItems: 'center', marginBottom: 10 }}>
                <View style={{ width: "80%", alignItems: "flex-end" }}>
                  <Text style={{
                    fontSize: 14,
                    color: "#707070",
                    fontWeight: '700'
                  }}>new post</Text>
                </View>

                {/* post 1 */}
                <TouchableOpacity style={component.cardcontent} onPress={() => navigation.navigate("ContentSeller")}>
                  <View style={component.levelcard}></View>
                  <View style={prop.textcardcontent}>
                    <Text style={text.titleproduct}>NEW DELICIOUS CUPCAKE</Text>
                    <Text style={text.detailproduct}>
                      delivery on 11 Aug 2020
                  </Text>
                    <Text style={text.detailproduct}>order 20/40</Text>
                  </View>
                </TouchableOpacity>

                {/* post 2 */}
                <TouchableOpacity style={component.cardcontent}>
                  <View style={component.levelcard}></View>
                  <View style={prop.textcardcontent}>
                    <Text style={text.titleproduct}>
                      WHAT IS YOUR FAVOURITE CAKE?
                  </Text>
                    <Text style={text.detailproduct}>delivery on 2 Aug 2020</Text>
                    <Text style={text.detailproduct}>order 38/40</Text>
                  </View>
                </TouchableOpacity>
              </View>


              {/* content history */}
              <View style={{ alignItems: "center" }}>
                <View style={{ width: "80%", alignItems: "flex-end" }}>
                  <Text style={{
                    fontSize: 14,
                    color: "#707070",
                    fontWeight: '700'
                  }}>history</Text>
                </View>

                {/* history 1 */}
                <View style={{ width: '100%', alignItems: 'center' }}>

                  <View style={component.cardhistorycontent}>
                    <View style={component.levelcard}></View>
                    <View style={prop.textcardcontent}>
                      <Text style={text.titlehistoryproduct}>
                        OLD DELICIOUS CUPCAKE
                        </Text>
                      <Text style={text.detailhistoryproduct}>
                        delivery on 11 Sep 2020
                        </Text>
                      <Text style={text.detailhistoryproduct}>order 40/40</Text>
                    </View>
                  </View>

                  {/* comment 1 */}
                  <View style={{ width: '80%', justifyContent: 'flex-end', flexDirection: 'row', marginTop: 10 }}>
                    <View style={{
                      width: '20%',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <View style={{
                        width: 60,
                        height: 60,
                        backgroundColor: 'gray',
                        borderRadius: 40,
                        padding: '3%',
                      }}>
                      </View>
                    </View>

                    <View style={{
                      flexDirection: "column",
                      width: "80%",
                      backgroundColor: "#777777",
                      borderRadius: 9,
                      padding: '3%',
                    }}>
                      <Text style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: '700'
                      }}>Jusica Rool</Text>
                      <Text style={text.detailhistoryproduct}>I really like your product, I will wait your new products</Text>
                    </View>
                  </View>

                  {/* comment 2 */}
                  <View style={{ width: '80%', justifyContent: 'flex-end', flexDirection: 'row', marginTop: 10 }}>
                    <View style={{
                      width: '20%',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <View style={{
                        width: 60,
                        height: 60,
                        backgroundColor: 'gray',
                        borderRadius: 40,
                        padding: '3%',
                      }}>
                      </View>
                    </View>

                    <View style={{
                      flexDirection: "column",
                      width: "80%",
                      backgroundColor: "#777777",
                      borderRadius: 9,
                      padding: '3%',
                    }}>
                      <Text style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: '700'
                      }}>Jusica Rool</Text>
                      <Text style={text.detailhistoryproduct}>I really like your product, I will wait your new products</Text>
                    </View>
                  </View>

                </View>



                {/* history 1 */}
                <View style={{ width: '100%', alignItems: 'center' }}>

                  <View style={component.cardhistorycontent}>
                    <View style={component.levelcard}></View>
                    <View style={prop.textcardcontent}>
                      <Text style={text.titlehistoryproduct}>
                        OLD DELICIOUS CUPCAKE
      </Text>
                      <Text style={text.detailhistoryproduct}>
                        delivery on 11 Sep 2020
      </Text>
                      <Text style={text.detailhistoryproduct}>order 40/40</Text>
                    </View>
                  </View>

                  {/* comment 1 */}
                  <View style={{ width: '80%', justifyContent: 'flex-end', flexDirection: 'row', marginTop: 10 }}>
                    <View style={{
                      width: '20%',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <View style={{
                        width: 60,
                        height: 60,
                        backgroundColor: 'gray',
                        borderRadius: 40,
                        padding: '3%',
                      }}>
                      </View>
                    </View>

                    <View style={{
                      flexDirection: "column",
                      width: "80%",
                      backgroundColor: "#777777",
                      borderRadius: 9,
                      padding: '3%',
                    }}>
                      <Text style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: '700'
                      }}>Jusica Rool</Text>
                      <Text style={text.detailhistoryproduct}>I really like your product, I will wait your new products</Text>
                    </View>
                  </View>

                </View>
              </View>


            </View>

          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
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
    justifyContent: "center",
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
