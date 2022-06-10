import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Pic from "../../assets/p1.png";

const PostCard = ({ item }) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.item}>
      {/* Small Box */}
      <View
        style={{
          flex: 1,
          backgroundColor: item.foreColor,
          position: "absolute",
          width: 100,
          height: "60%",
        }}
      >
        {/* <Text> Box</Text> */}
      </View>

      {/* Content Outer container */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          position: "absolute",
          margin: 10,
          padding: 5,
          width: "95%",
        }}
      >
        {/* Image Text Container */}
        <View style={{ flexDirection: "row" }}>
          {/* Image */}
          <View style={{ backgroundColor: item.foreColor, flex: 1 }}>
            <Image source={item.image} style={{ width: 100, height: 100 }} />
          </View>

          {/* Content */}
          <View
            style={{
              backgroundColor: "#fff",
              flex: 2,
              paddingHorizontal: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigate("BlogDetails", { item })}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {item.title}
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 14, color: "#666" }}>{item.authur}</Text>
              <Text style={{ fontSize: 14, color: "#888" }}>
                {item.readTime}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  item: {
    minHeight: 150,
    backgroundColor: "#fff",
    elevation: 2,
    marginVertical: 10,
  },
});
