import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

const Pins = (props) => {
  const { image, title } = props.pin;
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  return (
    <View className="my-5">
      <View className="flex px-3">
        <Image
          source={{
            uri: image,
          }}
          className="rounded-xl w-full"
          style={[{ aspectRatio: ratio }]}
        />
        <Text className="ml-2 mt-1">{title}</Text>
      </View>
    </View>
  );
};

export default Pins;
