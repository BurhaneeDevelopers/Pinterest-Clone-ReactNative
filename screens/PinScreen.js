import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";
import Pins from "../components/Pins";
import { useState, useEffect } from "react";

const PinScreen = () => {
  const [value, setValue] = React.useState("");

  const [randomText, setRandomText] = useState("");
  const [textGenerated, setTextGenerated] = useState(false);

  const texts =  [
    "Urban Landscapes at Night",
    "Inspiring Sunsets Over Mountains",
    "Family Fun at the Beach",
    "Conceptual Business Illustrations",
    "Business People at Work",
    "Stunning Waterfall Landscapes",
    "Adventure Travel in the Wilderness",
    "Delicious Food and Beverages",
    "Sports and Fitness Activities",
    "Celebrations and Festive Atmospheres",
    "Dynamic City Skylines and Architecture",
    "Nature and Wildlife Close-Ups",
    "Healthy Lifestyle and Wellness",
    "Creative Art and Design Concepts",
    "Science and Technology Innovations",
  ];

  useEffect(() => {
    // Generate random text on initial render
    if (textGenerated) {
      const randomIndex = Math.floor(Math.random() * texts.length);
      setRandomText(texts[randomIndex]);
      setTextGenerated(true);
    }
  }, [textGenerated]);

  return (
    <SafeAreaView>
      <ScrollView className="">
        <View className="flex">
          {/* <SearchBar placeholder="Type Here..." className="bg-transparent"/> */}
          <SearchBar
            platform="android"
            containerStyle={{}}
            inputContainerStyle={{}}
            inputStyle={{}}
            leftIconContainerStyle={{}}
            rightIconContainerStyle={{}}
            loadingProps={{}}
            onChangeText={(newVal) => setValue(newVal)}
            onClearText={() => console.log(onClearText())}
            placeholder="Search Pin here..."
            placeholderTextColor="#888"
            round
            showCancel
            onSubmit={() => showLoading()}
            // showLoading
            cancelButtonTitle="Cancel"
            cancelButtonProps={{}}
            onCancel={() => console.log(onCancel())}
            value={value}
          />
        </View>

        <ScrollView
          className="flex flex-row mt-2"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View className="items-center flex flex-row gap-5 p-1 px-2">
            <Text className="text-2xl bg-red-500 text-white p-2 px-5 rounded-full">
              All
            </Text>
            <Text className="text-2xl">Recipe</Text>
            <Text className="text-2xl">Decor</Text>
            <Text className="text-2xl">Fashion Inspired</Text>
            <Text className="text-2xl">Technology</Text>
            <Text className="text-2xl">Anime</Text>
          </View>
        </ScrollView>

        <View className="m-5">
          <Text className="my-3">
            Howdy
            <Text className="text-red-500">
              &nbsp;{userName}&nbsp;&#128075;
            </Text>
          </Text>
          <Text className="text-5xl">
            Take A Look At Some <Text className="line-through">Famous</Text>
            &nbsp; Pins
          </Text>
        </View>

        <View className="flex-1 flex-row">
          <View className="flex-1 flex-col">
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/800/500",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/300/800",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/400/300",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/300/400",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/400/700",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/700/400",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/500/300",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/300/500",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/500/800",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/800/500",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/500/400",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/500/900",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/900/600",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/400/900",
              }}
            />
          </View>

          <View className="flex-1 flex-col">
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/400/500",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/500/600",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/600/500",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/600/900",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/800/600",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/600/300",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/300/600",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/600/400",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/400/600",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/600/500",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/500/600",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/900/500",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/600/800",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/700/500",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/600/900",
              }}
            />
            <Pins
              pin={{
                title: randomText,
                image: "https://picsum.photos/200/200",
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PinScreen;
