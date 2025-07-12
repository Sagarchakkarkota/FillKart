// Carousel.tsx
import { carouselImages } from "@/constants/carouselImages.constants";
import { ICarouselImages } from "@/types";
import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View>
      <Carousel
        autoPlay
        autoPlayInterval={5000}
        data={carouselImages}
        height={208}
        loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        width={width}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 5,
        }}
        scrollAnimationDuration={2000}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }: { item: ICarouselImages }) => (
          <Image source={item.url} style={styles.image} />
        )}
      />

      {/* Pagination dots */}
      <View style={styles.pagination}>
        {carouselImages.map((item: ICarouselImages, index) => (
          <View
            key={index}
            style={activeIndex === index ? styles?.dotActive : styles.dot}
          />
        ))}
      </View>
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: "#ccc",
    borderRadius: 20,
    marginHorizontal: 4,
  },
  dotActive: {
    height: 10,
    width: 10,
    borderRadius: 20,
    backgroundColor: "#000",
    marginHorizontal: 4,
  },
});
