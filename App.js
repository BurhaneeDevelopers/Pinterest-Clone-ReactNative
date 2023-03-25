import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

// SCREENS
import HomeScreen from "./screens/HomeScreen";
import PinScreen from "./screens/PinScreen";
import SinglePinScreen from "./screens/SinglePinScreen";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            // tabBarStyle: {
            //   display: "none",
            // },
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="SinglePin"
          component={SinglePinScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="plus" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Pin"
          component={PinScreen}
          options={{
            title: "Pins",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="appstore1" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
