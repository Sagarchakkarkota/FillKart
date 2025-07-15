import colors from "@/constants/colors.constants";
import Searchbar from "@/uiComponents/Searchbar/Searchbar";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, View } from "react-native";
import { navbarStyles } from "./Navbar.styles";

const Navbar = () => {
  return (
    <View style={navbarStyles.view}>
      <View style={navbarStyles.searchbarView}>
        <Searchbar onSearch={(value) => {}} />
      </View>
      <Pressable
        onPress={() => {
          console.log("hit");
        }}
      >
        <Ionicons name="scan-outline" size={28} color={colors.gray} />
      </Pressable>
    </View>
  );
};

export default Navbar;
