import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        gap: 50
    },
    rounded: {
        borderWidth: 1,
        borderRadius: 30,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        position: 'relative',
        marginTop: 30,
        width: 150,
        height: 300,
        // borderWidth: 1,
        // borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftOutput: {
        position: 'absolute',
        width: 20,
        height: 10,
        backgroundColor: 'blue',
        left: 20,
        bottom: 0
    },
    rightOutput: {
        position: 'absolute',
        width: 20,
        height: 10,
        backgroundColor: 'blue',
        right: 20,
        bottom: 0
    },
    downLeft: {
        position: 'absolute',
        left: 3,
        bottom: -28
    },
    downRight: {
        position: 'absolute',
        right: 3,
        bottom: -28
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto'
    }
})