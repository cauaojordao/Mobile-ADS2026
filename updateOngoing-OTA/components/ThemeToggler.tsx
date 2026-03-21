import { View, Switch, ScrollView, Text } from 'react-native';
import { useState } from 'react';

export default function ThemeToggler() {
  const [modoNoturno, setModoNoturno] = useState(false);
  return (
    <ScrollView>
      <Switch value={modoNoturno} onValueChange={setModoNoturno} />
      <Text>Lista de notícias...</Text>
    </ScrollView>
  );
}