import colors from "@/constants/colors.constants";
import useDebounce from "@/hooks/useDebounce";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { searchbarStyles } from "./Searchbar.styles";
const Searchbar = ({ onSearch }: { onSearch: (arg: string) => void }) => {
  const [query, setQuery] = useState("");
  const { debounceQuery } = useDebounce({ query });
  useEffect(() => {
    onSearch(debounceQuery);
  }, []);
  return (
    <View style={searchbarStyles.viewInput}>
      <Pressable
        onPress={() => {
          console.log("hit");
        }}
      >
        <Ionicons name="search-outline" size={28} color={colors.gray} />
      </Pressable>
      <TextInput
        value={query}
        placeholder="Search for Products"
        onChangeText={setQuery}
        style={searchbarStyles.input}
      />
      <Pressable
        onPress={() => {
          console.log("hit");
        }}
      >
        <Ionicons name="camera-outline" size={28} color={colors.gray} />
      </Pressable>
    </View>
  );
};

export default Searchbar;
