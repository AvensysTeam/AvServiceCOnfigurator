import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        gap: 20
    },
    header: {
        marginLeft: 'auto',
    },
    general_settings: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    project_ref: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    unit_name: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    general_settings_panel: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 10,
        width: '60%'
    },
    formgroup: {
        marginTop: 100,
        gap: 15
    },
    form: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    label: {
        width: 150
    },
    footer: {
        alignItems: 'flex-end'
    }
})