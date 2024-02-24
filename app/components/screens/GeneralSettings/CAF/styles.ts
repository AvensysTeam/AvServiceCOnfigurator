import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get("window").height * 0.9,
  },
  body: {
    width: 200,
    height: 250,
    marginTop: 20
  },
  item_group: {
    position: 'absolute',
    top: 43,
    left: 32,
    gap: 9.5
  },
  item: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rounded: {
    borderWidth: 1,
    borderRadius: 30,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: -50
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  }
})