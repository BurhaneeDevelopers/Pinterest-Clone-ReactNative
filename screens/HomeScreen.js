import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Modal,
  StatusBar,
  Pressable,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useState, useEffect } from "react";

const HomeScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = () => {
    console.log("Form submitted with value:", inputValue);
    userName = inputValue;
    setModalVisible(!modalVisible);
    // alert("Modal has been closed.");
    navigation.navigate("Pin", { userName });
  };
  return (
    <SafeAreaView className="bg-gray-800">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View className="bg-white p-5 w-64 rounded-xl mx-auto mt-10">
          <View className="items-center">
            <Text className="text-lg">Yo Gaucamaule!</Text>
            <TextInput
              placeholder="Enter Your Name"
              id="userName"
              onChangeText={handleInputChange}
              value={inputValue}
              className="border border-gray-200 rounded-lg px-5"
            />
            <Pressable
              className="rounded-xl bg-red-500 mt-2 p-2 px-5 text-white"
              // onPress={() => setModalVisible(!modalVisible)}
              onPress={handleFormSubmit}
            >
              <Text className="text-white text-md">Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <StatusBar backgroundColor="#eb5e34" />
      <View className="flex items-center justify-center h-screen">
        <Image
          source={require("../assets/Pinterest-logo.png")}
          className="w-24 h-24 bg-white rounded-full"
        />
        <Text className="text-white text-2xl font-semibold my-5">
          Welcome to Pinterest Clone
        </Text>
        <TouchableOpacity
          className="bg-red-700 p-2 px-32 rounded-full mt-4"
          // onPress={() => navigation.navigate("Pin")}
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-white text-xl">Explore Pins</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-none mt-5"
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-white text-xl">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
