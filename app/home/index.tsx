import { categoriesConstants } from "@/constants/categories.constants";
import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MyCarousel from "../_components/Carousel";
import Category from "./_components/Category";
import homeStyles from "./home.styles";

const Home = () => {
  return (
    <View>
      <MyCarousel />
      <View style={homeStyles.flatListView}>
        <FlatList
          data={categoriesConstants}
          renderItem={({ item }) => <Category item={item} />}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 4 }} />}
        />
      </View>
    </View>
  );
};

export default Home;
