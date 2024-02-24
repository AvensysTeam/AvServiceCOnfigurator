import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        gap: 10
    },
    room_qty: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    scrollview_container: {
        maxHeight: Dimensions.get("window").height - 100
    },
    room_container: {
        marginVertical: 20,
        gap: 10
    }
})