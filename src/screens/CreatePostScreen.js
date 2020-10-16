import React, { useContext, useState } from "react";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import { StyleSheet, TextInput, View, Text, Platform } from "react-native";
import styled from "styled-components";
import { Ionicons } from '@expo/vector-icons';


export default CreatePostScreen = () => {

    const [productImage, setProductImage] = useState();

    const getPermission = async () => {
        if (Platform.OS !== "web") {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            return status;
        }
    };

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5
            })
            if (!result.cancelled) {
                setProductImage(result.uri);
            }
        } catch (error) {
            console.log("Erroe @pickImage", error);
        }
    };

    const addProductImage = async () => {
        const status = await getPermission();

        if (status !== "granted") {
            alert("We need permission to access your camera roll");
            return;
        }
        pickImage();
    };

    return (

        <Container>

            <TitleContainer>
                <TitleField
                    autoCapitalize="none"
                    placeholder="Title"
                />
            </TitleContainer>

            <ProductImageContainer onPress={addProductImage}>
                {productImage ? (
                    <ProductImage source={{ uri: productImage }} />
                ) : (
                        <DefaultProductImage>
                            <Ionicons
                                name="md-photos"
                                size={57}
                                color="black" />
                        </DefaultProductImage>
                    )}
            </ProductImageContainer>

            <DetailContainer>
                <DetailField
                    autoCapitalize="none"
                    placeholder="detail"
                />
            </DetailContainer>

            <LocationContainer>
                <LocationTitle>Location</LocationTitle>
            </LocationContainer>

            <CatagoryContainer>
                <CatagoryTitle>Catagory</CatagoryTitle>
            </CatagoryContainer>

            <OrderandPriceContainer>

            </OrderandPriceContainer>

            {/* <View>
                <TextInput
                    placeholder='TOPIC'
                    style={styles.topictitleInput}
                />
            </View> */}
        </Container>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: "#eaeaea"
    },
    topictitleInput: {
        width: 220,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        borderBottomWidth: 2,
        borderBottomColor: '#b9c1ca',
    },
});

const Container = styled.View`
    align-items: center;
    margin-top: 64px;
    flex: 1;
`;

const ProductImageContainer = styled.TouchableOpacity`
     background-color: #e1e2e6;
     width: 200px;
      height: 160px;
     border-radius: 12px
     align-self: center;
     margin-top: 16px;
     overflow: hidden;
     border: 2px #707070 dashed;
`;

const DefaultProductImage = styled.View`
     align-items: center;
     justify-content: center;
     flex: 1;
`;

const ProductImage = styled.Image`
    flex: 1;
`;


const TitleContainer = styled.View`
  margin-bottom: 20px;
`;

const TitleField = styled.TextInput`
     border-bottom-color: #8e93a1;
     border-bottom-width: 1px;
     height: 30px;
     width: 200px;
     text-align: center;
     font-weight: bold;
     font-size: 18px;
     color: #707070;
`;

const DetailContainer = styled.View`
    margin-top: 40px;
`;

const DetailField = styled.TextInput`
    border-color: #8e93a1;
    border-width: 0.5px;
    height: 120px;
    width: 300px;
    text-align-vertical: top;
    padding: 6px;
    border-radius: 2px;
    color: #707070;
    font-style: italic;
`;

const LocationContainer = styled.View`
    width: 300px;
    margin-top: 30px;
`;

const LocationTitle = styled.Text`
    text-align: left;
    color: #707070;
    font-weight: bold;
`;

const CatagoryContainer = styled.View`
    width: 300px;
    margin-top: 30px;
`;

const CatagoryTitle = styled.Text`
    text-align: left;
    color: #707070;
    font-weight: bold;
`;

const OrderandPriceContainer = styled.View`
    
`;

