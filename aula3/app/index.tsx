import ThemeToggler from "@/components/ThemeToggler";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Notification from "@/components/Notification";

export default function Index() {

  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ThemeToggler darkMode={darkMode} setDarkMode={setDarkMode} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%", padding: 16 }}>
        <Text>Lista de notícias...</Text>
        {[...Array(20)].map((_, i) => (
          <Notification key={i} title={`Notícia ${i + 1}`} description="Descrição da notícia" time="Agora" iconName="bell-outline" />
        ))}
      </ScrollView>
    </View>
  );
}

const lightTheme = {
  background: "#fff",
  text: "#000",
};

const darkTheme = {
  background: "#121212",
  text: "#fff",
};