import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import "../api";
import { api } from "../api";
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
    <View style={{ gap: 10 }}>
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
