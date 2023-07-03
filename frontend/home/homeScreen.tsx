import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import "../api";
import { api } from "../api";
import { Post } from "../types";
import { PostItem } from "./postItem";

export function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const res = await api.get("/posts");
    setPosts(res.data);
  }

  return (
    <View>
      <Text style={{ fontSize: 40 }}>welcome</Text>
      <Link href="/map">Mapa</Link>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostItem post={item} key={item.id}></PostItem>
        )}
      ></FlatList>
    </View>
  );
}
