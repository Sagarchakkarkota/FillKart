import { StyleSheet } from "react-native";

export const searchbarStyles = StyleSheet.create({
  input: { flexGrow: 1 },
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 6,
    flexGrow: 1,
  },
});
