import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Fontisto, Feather } from "@expo/vector-icons";
import Pic from "../../assets/p1.png";

const BlogDetails = ({ route }) => {
  let { item } = route.params;
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          backgroundColor: item.foreColor,
          position: "absolute",
          width: 200,
          height: 200,
        }}
      >
        {/* <Text> Box</Text> */}
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          margin: 10,
          padding: 7,
          width: "95%",
          top: 20,
          justifyContent: "center",
        }}
      >
        <View>
          <View
            style={{
              backgroundColor: item.foreColor,
              justifyContent: "center",
              flexDirection: "row",
              padding: 20,
            }}
          >
            <Image source={item.image} style={{ width: 200, height: 200 }} />
          </View>
          <View
            style={{
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              {item.title}
            </Text>

            <View
              style={{
                flexDirection: "row",
                // justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 14, color: "#666", marginRight: 20 }}>
                {item.authur}
              </Text>
              <Text style={{ fontSize: 14, color: "#888" }}>
                {item.readTime}
              </Text>
            </View>

            <View>
              <Text style={{ fontSize: 18, color: "#666", marginVertical: 15 }}>
                {item.body}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default BlogDetails;

const styles = StyleSheet.create({
  item: {
    // flex: 1,
  },
});
