// import React from "react";
// import { Text, View } from "react-native";

// export default PostScreen = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Home Screen</Text>
//     </View>
//   );
// };  

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Contants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components";
import { FirebaseContext } from "../context/FirebaseContext";

export default PostScreen = ({ navigation}) => {

const [ProductName, setProductName] = useState();
const [productType, setproductType] = useState();
const [detail, setdetail] = useState();
const firebase = useContext(FirebaseContext)


  return(

    <Container>
    <Main>
      <Text title semi center>
        ADD product
      </Text>
    </Main>
{/* 
    <ProfilePhotoContainer onPress={addProfilePhoto}>
      {profilePhoto ? (
        <ProfilePhoto source={{ uri: profilePhoto }} />
      ) : (
        <DefaultProfilePhoto>
          <AntDesign name="plus" size={24} color="#ffffff" />
        </DefaultProfilePhoto>
      )}
    </ProfilePhotoContainer> */}

    <Auth>
      <AuthContainer>
        <AuthTitle>Product Name</AuthTitle>
        <AuthField
          autoCapitalize="none"
          onChangeText={(ProductName) => setProductName(ProductName.trim())}
          value={username}
        />
      </AuthContainer>

      <AuthContainer>
        <AuthTitle>Product Type</AuthTitle>
        <AuthField
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          onChangeText={(productType) => setproductType(productType.trim())}
          value={email}
        />
      </AuthContainer>

      <AuthContainer>
        <AuthTitle>Password</AuthTitle>
        <AuthField
          autoCapitalize="none"
          autoCompleteType="password"
          onChangeText={(detail) => setdetail(detail.trim())}
          value={password}
        />
      </AuthContainer>
    </Auth>

    <SignUpContainer onPress={signUp} disabled={loading}>
      {loading ? (
        <Loading />
      ) : (
        <Text bold center color="#ffffff">
          Post
        </Text>
      )}
    </SignUpContainer>


    <HeaderGraphic>
      <RightCircle />
      <LeftCircle />
    </HeaderGraphic>
  </Container>
  )
};

const Container = styled.View`
  flex: 1;
`;

const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
  z-index: -100;
`;

const Main = styled.View`
  margin-top: 160px;
`;

const ProfilePhotoContainer = styled.TouchableOpacity`
  background-color: #e1e2e6;
  width:80px;
  height:80px;
  border-radius:40px
  align-self:center;
  margin-top: 16px;
  overflow: hidden;
`;

const DefaultProfilePhoto = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ProfilePhoto = styled.Image`
  flex: 1;
`;

const Auth = styled.View`
  margin: 16px 32px 32px;
`;

const AuthContainer = styled.View`
  margin-bottom: 32px;
`;

const AuthTitle = styled(Text)`
  color: #8e93a1;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 300;
`;

const AuthField = styled.TextInput`
  border-bottom-color: #8e93a1;
  border-bottom-width: 0.5px;
  height: 48px;
`;

const SignUpContainer = styled.TouchableOpacity`
  margin: 0 32px;
  height: 48px;
  align-items:center;
  justify-content: center;
  background-color: #8022d9
  border-radius:6px
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: "#ffffff",
  size: "small",
}))``;

const SignIn = styled.TouchableOpacity`
  margin-top: 16px;
`;

const RightCircle = styled.View`
  background-color: #8022d9;
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  right: -100px;
  top: -250px;
`;

const LeftCircle = styled.View`
  background-color: #23a6d5;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  left: -50px;
  top: -70px;
`;
