import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  categoryPressable: {},
  categoryView: {
    width: 90,
    height: 80,
    padding: 4,
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
  },
  categoryImage: {
    width: "60%",
    height: "50%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  flatListView: {},
});
export default homeStyles;
