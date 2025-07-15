import colors from "@/constants/colors.constants";
import { addEllipsis, hexToRGBA } from "@/utility/string.utility";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { ICategory } from "../../../types/home.types";
import homeStyles from "../home.styles";

const Category = ({ item }: { item: ICategory }) => {
  return (
    <Pressable style={homeStyles.categoryPressable}>
      <View style={homeStyles.categoryView}>
        <Image
          source={item.url}
          style={[
            homeStyles.categoryImage,
            { tintColor: hexToRGBA({ hex: colors.secondary, alpha: 0.5 }) },
          ]}
        />
        <Text style={{ textAlign: "center" }}>
          {addEllipsis({ string: item?.title, length: 8 })}
        </Text>
      </View>
    </Pressable>
  );
};

export default Category;
