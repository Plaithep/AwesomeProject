import React, { useContext, useState } from "react";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import { StyleSheet, TextInput, View, Text, Platform, Picker } from "react-native";
import styled from "styled-components";
import { Ionicons } from '@expo/vector-icons';


export default CreatePostScreen = () => {

    const [productImage, setProductImage] = useState();
    const [selectedOrder, setSelectedOrder] = useState();
    const [selectedPrice, setSelectedPrice] = useState();

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
                <Picker
                    selectedValue={selectedOrder}
                    style={styles.pickers}
                    onValueChange={(itemValue, itemIndex) => setSelectedOrder(itemValue)}
                >
                    <Picker.Item label="Location" value="java" />
                    <Picker.Item label="Location1" value="java1" />
                    <Picker.Item label="Location2" value="java2" />
                    <Picker.Item label="Location3" value="java3" />
                    <Picker.Item label="Location4" value="java4" />
                </Picker>
            </LocationContainer>

            <CatagoryContainer>
                <CatagoryTitle>Catagory</CatagoryTitle>
                <Picker
                    selectedValue={selectedPrice}
                    style={styles.pickers}
                    onValueChange={(itemValue, itemIndex) => setSelectedPrice(itemValue)}
                >
                    <Picker.Item label="Price" value="java" />
                    <Picker.Item label="Price1" value="java1" />
                    <Picker.Item label="Price2" value="java2" />
                    <Picker.Item label="Price3" value="java3" />
                    <Picker.Item label="Price4" value="java4" />
                </Picker>
            </CatagoryContainer>

            <OrderandPriceContainer>
                <LayoutCol
                    style={styles.layoutcols}
                >
                    <OrderTitle>Order</OrderTitle>
                    <PriceTitle>Price</PriceTitle>
                </LayoutCol>
                <LayoutCol
                    style={styles.layoutcols}
                >
                    <OrderField />
                    <PriceField />
                </LayoutCol>
            </OrderandPriceContainer>

            <ComfirmButton>
                    <Text>Confirm</Text>
            </ComfirmButton>

            {/* <View>
                <TextInput
                    placeholder='TOPIC'
                    style={styles.topictitleInput}
                />
            </View> */}
        </Container>

    );
};

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
    width: 300px;
    margin-top: 30px;
`;

const LayoutCol = styled.View`

`;

const OrderTitle = styled.Text`
    text-align: left;
    color: #707070;
    font-weight: bold;
`;

const PriceTitle = styled.Text`
    text-align: left;
    color: #707070;
    font-weight: bold;
`;

const OrderField = styled.TextInput`
    border-color: #8e93a1;
    border-width: 0.5px;
    height: 30px;
    width: 120px;
    text-align-vertical: top;
    padding: 6px;
    border-radius: 2px;
    color: #707070;
    font-style: italic;
`;

const PriceField = styled.TextInput`
    border-color: #8e93a1;
    border-width: 0.5px;
    height: 30px;
    width: 120px;
    text-align-vertical: top;
    padding: 6px;
    border-radius: 2px;
    color: #707070;
    font-style: italic;
`;

const ComfirmButton = styled.TouchableOpacity`
  margin: 34px;
  marginTop: 20px;
  marginBottom: 6px;
  height: 32px;
  width: 120px;
  align-items:center;
  justify-content: center;
  border: 0.5px #707070;
  border-radius: 30px
`;

const styles = StyleSheet.create({
    pickers: {
        width: 300,
        height: 30,
    },
    layoutcols: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
});