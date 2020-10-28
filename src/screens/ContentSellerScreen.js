import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from '@expo/vector-icons'; 
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default ContentSellerScreen = () => {
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView>
        <View style={prop.container}>
          <View style={component.cardproductdetail}>
            <View style={prop.rowcontent}>
              <View style={component.picproduct}></View>
              <View style={prop.textcol}>
                <Text style={text.title}>NEW DELICIOUS CUPCAKE</Text>
                <Text style={text.detail}>
                  I like to make cupcakes I hope you'll enjoy it and it's no
                  peanuts. Ingredients 1. flour 2. wiping cream 3. candy
                </Text>
              </View>
            </View>
            <View style={prop.rowcontent}>
              <View>
                <Text>order 20/40</Text>
                <Text>delivery on 11 Aug 2020</Text>
                <Text>delivery time 11.00-12.00</Text>
              </View>
              <View>
                <Text style={text.textPrice}>45 ฿</Text>
                <Text>per 1 price</Text>
              </View>
            </View>
            <View style={{alignItems: 'center', marginTop: 18, }}>
              <TouchableOpacity style={{width: 110, height: 30, backgroundColor: '#D85C5C', alignItems:'center', justifyContent: 'center', borderRadius: 20}}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>Close Post</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={prop.containercontect}>
            {/* card contect 1 */}
            <TouchableOpacity style={component.contectcard}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={component.piccontect}></View>
                <Text>SARA BAR</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>4 order</Text>
                <View><Ionicons name="ios-chatboxes" size={36} color="gray" style={{marginLeft: 20}}/></View>
              </View>
            </TouchableOpacity>

            {/* card contect 2 */}
            <TouchableOpacity style={component.contectcard}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={component.piccontect}></View>
                <Text>PLAITHEP POLRATA</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>4 order</Text>
                <View><Ionicons name="ios-chatboxes" size={36} color="gray" style={{marginLeft: 20}}/></View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
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
