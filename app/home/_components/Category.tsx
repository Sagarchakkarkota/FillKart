import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { ICategory } from "../../../types/home.types";
import homeStyles from "../home.styles";

const Category = ({ item }: { item: ICategory }) => {
  return (
    <Pressable style={homeStyles.categoryPressable}>
      <View style={homeStyles.categoryView}>
        <Image source={item.url} style={homeStyles.categoryImage} />
        <Text style={{ textAlign: "center" }}>{item.title}</Text>
      </View>
    </Pressable>
  );
};

export default Category;
