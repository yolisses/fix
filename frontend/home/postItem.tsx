import { Image, Text, View } from "react-native";
import { Post } from "../types";

type Props = {
  post: Post;
};

export function PostItem({ post }: Props) {
  return (
    <View>
      <Image
        style={{ width: "100%", aspectRatio: 3 / 2 }}
        source={{
          uri: `https://picsum.photos/seed/${post.id}/1080/720`,
        }}
      />
      <Text style={{ fontSize: 20 }}>{post.title}</Text>
    </View>
  );
}
