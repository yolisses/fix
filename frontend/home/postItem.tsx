import { StyleSheet, Text, View } from "react-native";
import { Post } from "../types";

type Props = {
  post: Post;
};

export function PostItem({ post }: Props) {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>{post.title}</Text>
    </View>
  );
}
