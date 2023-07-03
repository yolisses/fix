import { Link } from "expo-router";
import { Text, View } from "react-native";

export function HomeScreen() {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>welcome</Text>
      <Link href="/map">Mapa</Link>
    </View>
  );
}
