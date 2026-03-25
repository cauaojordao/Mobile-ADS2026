import { View, Text, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Header from "@/components/Header";
import { Feather } from "@expo/vector-icons";

export default function Index() {
  const [name, setName] = useState("Usuário Exemplo");
  const [photo, setPhoto] = useState("https://www.placekittens.com/800/800");

  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);
  const [tempPhoto, setTempPhoto] = useState(photo);

  function startEdit() {
    setTempName(name);
    setTempPhoto(photo);
    setIsEditing(true);
  }

  function saveProfile() {
    setName(tempName.trim() || name);
    setPhoto(tempPhoto.trim() || photo);
    setIsEditing(false);
  }

  return (
    <SafeAreaView className="flex-1 justify-between bg-black">
      <Header>
        <Header.Item position="center">
          <Text className="text-2xl font-bold text-white">{isEditing ? "Editar Perfil" : "Meu Perfil"}</Text>
        </Header.Item>
        <Header.Item position="right">
          <TouchableOpacity onPress={startEdit}>
            <Feather name="edit-2" size={24} color="white" />
          </TouchableOpacity>
        </Header.Item>
      </Header>

      <View className="h-full flex-1 items-center justify-center px-4">
        <Image
          source={{ uri: isEditing ? (tempPhoto || photo) : photo }}
          className="mb-6 h-72 w-72 rounded-full border-4 border-white"
        />

        {isEditing ? (
          <KeyboardAvoidingView className="w-1/2 items-center">
            <TextInput
              value={tempName}
              onChangeText={setTempName}
              placeholder="Novo nome"
              placeholderTextColor="rgba(255,255,255,0.6)"
              className="w-full mb-6 rounded-sm bg-white/10 px-2 py-2 text-white"
            />

            <TextInput
              value={tempPhoto}
              onChangeText={setTempPhoto}
              placeholder="Nova URL da foto"
              placeholderTextColor="rgba(255,255,255,0.6)"
              className="w-full mb-6 rounded-sm bg-white/10 px-2 py-2 text-white"
            />

            <TouchableOpacity
              onPress={saveProfile}
              className="w-full rounded bg-white/20 py-3 items-center"
            >
              <Text className="text-white font-semibold">Salvar Perfil</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        ) : (
          <Text className="text-4xl font-bold text-white">{name}</Text>
        )}
      </View>
    </SafeAreaView>
  );
}