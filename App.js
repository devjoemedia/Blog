import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import BlogList from "./src/screens/BlogList";
import BlogDetails from "./src/screens/BlogDetails";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./src/components/Tabs";
import { AntDesign, Fontisto, Feather, Entypo } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="BlogList"
          component={Tabs}
          options={{ headerTitle: () => <HomeHeader /> }}
        />

        <Stack.Screen
          name="BlogDetails"
          component={BlogDetails}
          options={{
            headerTitle: () => null,
            headerLeft: () => <DetailsHeaderLeft />,
            headerRight: () => <DetailsHeaderRight />,
            // header: (props) => <DetailsHeader />,
          }}
          // options={{ headerTitle: () => <DetailsHeader /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1 }}>
        <Fontisto name="nav-icon-grid-a" size={24} color="black" />
      </View>
      <View style={{ flex: 3 }}>
        <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}>
          Discover
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end", flexDirection: "row" }}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          // style={{ flex: 1, alignSelf: "flex-end" }}
        />
      </View>
    </View>
  );
};

const DetailsHeaderLeft = () => {
  const { navigate } = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => navigate("BlogList")}
      >
        <Entypo name="chevron-left" size={24} color="black" />
        <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}>
          Beauty
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const DetailsHeaderRight = () => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <AntDesign name="sharealt" size={24} color="black" />
      <Feather
        name="headphones"
        size={24}
        color="black"
        style={{ marginHorizontal: 15 }}
      />
      <AntDesign name="hearto" size={24} color="black" />
    </View>
  );
};
