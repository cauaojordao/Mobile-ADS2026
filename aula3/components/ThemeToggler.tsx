import React from 'react';
import { Switch, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ThemeToggler(props: { darkMode: boolean, setDarkMode: (value: boolean) => void }) {
  const { darkMode, setDarkMode } = props;
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <MaterialCommunityIcons
          name={darkMode ? "weather-night" : "weather-sunny"}
          size={24}
          color={darkMode ? "#FFF" : "#FFA500"}
        />
        <Switch
          value={darkMode}
          onValueChange={(value) => {
            setDarkMode(value);
          }}
        />
      </View>
      <Text> Modo {darkMode ? "Escuro" : "Claro"}</Text>
    </View>
  );
}