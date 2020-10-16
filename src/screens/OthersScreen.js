import React, { useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../context/UserContext";
import { FirebaseContext } from "../context/FirebaseContext";
import { StyleSheet } from "react-native";

import Text from "../components/Text";

export default OtherScreen = () => {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const logOut = async () => {
    const loggedOut = await firebase.logOut();

    if (loggedOut) {
      setUser((state) => ({ ...state, isLoggedIn: false }));
    }
  };
  return (
    <Container>
      <ProfilePhotoContainer>
        <ProfilePhoto
          source={
            user.ProfilePhotoUrl === "default"
              ? require("../../assets/defaultProfilePicture.jpg")
              : { uri: user.profilePhotoUrl }
          }
        />
      </ProfilePhotoContainer>

      <Text medium bold margin="16px 0 32px 0">
        {user.username}
      </Text>

      <Menu>
        <MenuProfile>
          <Text>PROFILE</Text>
        </MenuProfile>
        <MenuSeller>
          <Text>SELLER</Text>
        </MenuSeller>
        <MenuHistory>
          <Text>HISTORY</Text>
        </MenuHistory>
      </Menu>

      <Logout
        style={styles.logout}
        onPress={logOut}>
        <Text>Log out</Text>
      </Logout>
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
`;

const Menu = styled.View``;

const MenuProfile = styled.TouchableOpacity`
  width: 100px;
  padding: 10px;
  border-color: #707070;
  border-top-width: 1px;
  border-bottom-width: 1px;
  align-items: center;
  margin: 16px;
`;

const MenuSeller = styled.TouchableOpacity`
  width: 100px;
  padding: 10px;
  border-color: #707070;
  border-top-width: 1px;
  border-bottom-width: 1px;
  align-items: center;
  margin: 16px;
`;

const MenuHistory = styled.TouchableOpacity`
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
  logout: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
