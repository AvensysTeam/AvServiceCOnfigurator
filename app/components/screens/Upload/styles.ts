import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    success: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'green',
        borderRadius: 50,
        marginTop: 100
    },
    failed: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'red',
        borderRadius: 50,
        marginTop: 100
    },
    footer: {
        marginTop: 'auto',
        width: '100%'
    }
})