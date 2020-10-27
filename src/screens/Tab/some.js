import { HeaderBackground } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default HomeScreen = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView>
        
        {/* Content1 */}
        <View style={styles.content}>
          <ContentContainer>
            <View style={styles.rowDirectionAround}>

              <TouchableOpacity style={styles.rowDirectionAround}>
                <ProfilePicContent></ProfilePicContent>
                <View style={styles.profileText}><Text>Puminan</Text></View>
              </TouchableOpacity>

              <View style={styles.profilePic}>
                <View style={styles.hashtage}>
                  <Tag><Text style={styles.texthashtage}>#sweet</Text></Tag>
                  <Tag><Text style={styles.texthashtage}>#kathu</Text></Tag>
                </View>
              </View>


              <View style={styles.profilePic}>
                <ProfileStatus></ProfileStatus>
              </View>

            </View>

            <View style={styles.contentPicture}>
              <ContentPicture></ContentPicture>
            </View>

            <View style={styles.contnentText}>
              <View>
                <View>
                  <Text style={styles.textTitle}>NEW DELICIOUS CUPCAKE</Text>
                </View>

                <View>
                  <Text style={styles.textDetail}>I like to make cupcakes I hope you'll enjoy it and it's no peanuts. Ingredients 1. flour 2. wiping cream 3. candy</Text>
                </View>

                <View style={styles.rowDirectionBetween}>
                  <View>
                    <Text style={styles.textBoldDetail}>delivery on <Text style={styles.textDetail}>11 Aug 2020</Text></Text>
                  </View>
                  <View>
                    <Text style={styles.textBoldDetail}>order <Text style={styles.textDetail}>20/40</Text></Text>
                  </View>
                </View>

                <View style={styles.rowDirectionBetween}>
                  <View>
                    <Text style={styles.textBoldDetail}>delivery time <Text style={styles.textDetail}>11.00 am - 12.00 am</Text></Text>
                  </View>
                  <View>
                    <Text style={styles.textPrice}>45<Text style={styles.textPrice}> ฿</Text></Text>
                  </View>
                </View>

              </View>
            </View>

            <TouchableOpacity style={styles.confirmButton}>
              <OrderButton style={styles.componentConfirmButton}>
                <Text style={styles.textConfirmButton}>ORDER</Text>
              </OrderButton>
            </TouchableOpacity>
          </ContentContainer>
        </View>

      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const Container = styled.View`
  flex: 1;
`;

const FeedContainer = styled.View`
  transform: rotate(90deg);
  text-shadow-offset: 10px 5px;
  font-variant: small-caps;
  margin: 5px 7px 2px;
  background-color: papayawhip;
`;

const StatusBar = styled.StatusBar``;



const ContentContainer = styled.View`
  padding: 14px;
  padding-top: 16px;
  padding-bottom: 0px;
  width: 335px;
  border-radius: 20px;
  border: 1px #707070;
  background-color: white;
`;

const ProfilePicContent = styled.View`
  background-color: #e1e2e6;
  width: 45px;
  height: 45px;
  border-radius: 50px
`;

const ProfileStatus = styled.View`
  background-color: #EFD779;
  width: 20px;
  height: 20px;
  border-radius: 50px
`;

const ContentPicture = styled.View`
  background-color: #e1e2e6;
  height: 150px;
  width: 300px;
`;

const OrderButton = styled.View`
  border: 1px #707070;
  height: 25px;
  width: 80px;
  border-radius: 30px;
  background-color: white;
`;

const styles = StyleSheet.create({
  rowDirectionAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rowDirectionBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colDirection: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  profilePic: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileText: {
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  content: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contentPicture: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contnentText: {
    paddingLeft: 17,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textTitle: {
    fontWeight: 'bold',
    color: '#707070',
  },
  textDetail: {
    textAlign: 'justify',
    color: '#707070',
    fontWeight: '100',
  },
  textBoldDetail: {
    fontWeight: 'bold',
    color: '#707070',
  },
  textPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E37272',
  },
  confirmButton: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  componentConfirmButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: -17,
  },
  textConfirmButton: {
    fontWeight: 'bold',
    color: '#707070',
  },
});