// Carousel.tsx
import { carouselImages } from "@/constants/carouselImages.constants";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { ICarouselImages } from "../../types/home.types";

const { width } = Dimensions.get("window");

const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const duration = 2000;
  const carouselInterVal = 5000;
  const totalCycleTime = duration + carouselInterVal;
  useEffect(() => {
    setPercentage(0);
    let count = 0;
    const interval = setInterval(() => {
      count += 1;

      if (count > 100) {
        clearInterval(interval);
        setPercentage(0);
        return;
      }

      setPercentage(count);
    }, totalCycleTime / 100);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <View>
      <Carousel
        autoPlay
        autoPlayInterval={2000}
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
        scrollAnimationDuration={duration}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }: { item: ICarouselImages }) => (
          <Image source={item.url} style={styles.image} />
        )}
      />

      {/* Pagination dots */}
      <View style={styles.pagination}>
        {carouselImages.map((item: ICarouselImages, index) => {
          const activeDot = activeIndex === index;
          return (
            <View
              key={index}
              style={activeDot ? styles?.dotActive : styles.dot}
            >
              {activeDot && (
                <View
                  style={{
                    width: `${percentage}%`,
                    height: 4,
                    backgroundColor: "#000",
                    borderRadius: 30,
                  }}
                ></View>
              )}
            </View>
          );
        })}
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
    height: 4,
    width: 10,
    backgroundColor: "#ccc",
    borderRadius: 30,
    marginHorizontal: 4,
  },
  dotActive: {
    height: 4,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 4,
    backgroundColor: "#ccc",
  },
});
