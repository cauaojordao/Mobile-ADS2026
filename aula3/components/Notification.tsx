import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function Notification(props: { title: string, description: string, time: string, iconName?: keyof typeof MaterialCommunityIcons.glyphMap }) {
    const { title, description, time, iconName } = props;
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          padding: 12,
          borderRadius: 8,
          marginBottom: 8,
        }}
      >
        <MaterialCommunityIcons
          name={iconName ?? "bell-outline"}
          size={24}
        ></MaterialCommunityIcons>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontWeight: "bold", flex: 1 }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {title}
            </Text>
            <Text style={{ fontSize: 12 }}>{time}</Text>
          </View>
          <Text>{description}</Text>
        </View>
      </View>
    );
}