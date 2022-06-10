import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import PostCard from "../components/PostCard";
import { posts } from "./posts";

const BlogList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard item={item} />}
      />
    </View>
  );
};

export default BlogList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
