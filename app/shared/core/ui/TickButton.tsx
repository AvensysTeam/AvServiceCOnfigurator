import { StyleSheet, TouchableOpacity } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'

interface IProps {
    confirmed: boolean
    handleConfirm: () => void
}

const TickButton = (props: IProps) => {
    return (
        <TouchableOpacity
            style={[styles.rounded, {
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: props.confirmed ? 'green' : 'white',
                borderColor: props.confirmed ? 'green' : '#808284'
            }]}
            onPress={props.handleConfirm}
        >
            <AntDesign name="check" size={24} color={props.confirmed ? 'white' : '#808284'} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    rounded: {
        borderWidth: 1,
        borderRadius: 30,
        width: 40,
        height: 40
    }
})

export default TickButton
