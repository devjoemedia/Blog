import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Navbar = () => {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity style={[styles.iconContainer]}>
        <AntDesign name="arrowleft" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.iconContainer]}>
        <AntDesign name="shoppingcart" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  iconContainer: {
    backgroundColor: "#fff",
    padding: 10,
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
