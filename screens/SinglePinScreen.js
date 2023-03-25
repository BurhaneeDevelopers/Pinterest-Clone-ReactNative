import { View, ScrollView, Text, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const SinglePinScreen = () => {
  return (
    <ScrollView>
      <View className="">
        <Image
          source={require("../assets/img-3.jpg")}
          resizeMode="cover"
          className="w-full h-96 rounded-b-3xl"
        />
        <Text className="absolute text-white p-2 rounded-full m-2">
          <Ionicons name="chevron-back" size={30} color="white" />
        </Text>
        <Text className="absolute text-white bg-gray-100 p-2 rounded-full m-2 bottom-0 right-0">
          <MaterialCommunityIcons
            name="magnify-expand"
            size={24}
            color="black"
          />
        </Text>
      </View>

      <View className="m-5 flex flex-row justify-between">
        <View className="flex flex-row">
          <Image
            source={require("../assets/img-1.jpg")}
            className="w-14 h-14 rounded-full"
          />
          <View className="justify-center mx-2">
            <Text className="font-semibold text-lg">Taheri Deveopers</Text>
            <Text className="">375k Followers</Text>
          </View>
        </View>
        <View className="justify-center">
          <Text className="p-2 px-3 bg-red-200 rounded-full">Follow</Text>
        </View>
      </View>

      <View className="">
        <Text className="text-3xl font-semibold text-center w-1/2 mx-auto">
          Breakfast Evening PFP
        </Text>
        <View className="flex flex-row mx-auto">
          <Text className="text-red-500 mr-1">
            <Feather name="download" size={20} />
          </Text>
          <Text className="text-center">1m downloads</Text>
        </View>
      </View>

      <View className="flex flex-row my-5 justify-around">
        <Pressable className="bg-gray-300 rounded-full py-2 w-32 ">
          <Text className="text-center ">View Taheri</Text>
        </Pressable>
        <Pressable className="bg-red-500 rounded-full py-2 w-32 ">
          <Text className="text-center text-white font-semibold">Save Pin</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default SinglePinScreen;
