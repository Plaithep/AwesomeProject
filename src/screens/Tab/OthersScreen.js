import React, { useContext, } from "react";
import styled from "styled-components";

import { UserContext } from "../../context/UserContext";
import { FirebaseContext } from "../../context/FirebaseContext";
import { StyleSheet, View } from "react-native";

import Text from "../../components/Text";

export default OtherScreen = ({navigation}) => {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const logOut = async () => {
    const loggedOut = await firebase.logOut();

    if (loggedOut) {
      setUser((state) => ({ ...state, isLoggedIn: false }));
    }
  };
  return (
    <Container style={styles.container}>
      
        <View>
          <ProfilePhotoContainer>
            <ProfilePhoto
              source={
                user.ProfilePhotoUrl === "default"
                  ? require("../../../assets/defaultProfilePicture.jpg")
                  : { uri: user.profilePhotoUrl }
              }
            />
          </ProfilePhotoContainer>

          <Text medium bold margin="16px 0 32px 0">
            {user.username} 
          </Text>
        </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Text>PROFILE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Seller")}>
              <Text>SELLER</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("History")}>
              <Text>HISTORY</Text>
            </TouchableOpacity>
        </View>

        <View>
          <Logout
            onPress={logOut}>
            <Text style={styles.logOut}>Log out</Text>
          </Logout></View>

    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  margin-top: 64px;
  flex: 1;
`;

const ProfilePhotoContainer = styled.View`
  shadow-opacity: 0.8;
  shadow-radius: 30px;
  shadow-color: #222222;
`;

const ProfilePhoto = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 64px;
  background-color: #707070;
`;


const TouchableOpacity = styled.TouchableOpacity`
  width: 100px;
  padding: 10px;
  border-color: #707070;
  border-top-width: 1px;
  border-bottom-width: 1px;
  align-items: center;
  margin: 16px;
`;

const Logout = styled.TouchableOpacity`
  margin-bottom: 32px;
`;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'space-around',
  },
  logOut: {
    color: '#E37272',
    fontWeight: 'bold',
  },
});
