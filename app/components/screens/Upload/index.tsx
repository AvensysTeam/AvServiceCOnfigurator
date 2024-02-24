import { View } from "react-native"
import { useApp } from "../../../providers/AppProvider"
import Feather from 'react-native-vector-icons/Feather'
import { styles } from "./styles"
import BackButton from "../../../shared/core/ui/BackButton"
import RoomStatus from '../../../shared/static/RoomStatus.json'

const UploadComponent = ({navigation}: any) => {

    const {roomNumber, roomList} = useApp()

    const handleBack = () => {
        navigation.navigate("ROOMLIST", {from: "Upload"})
    }

    const SuccessUpload = () => (
        <View style={styles.success}>
            <Feather name="upload-cloud" size={30} />
        </View>
    )

    const FailedUpload = () => (
        <View style={styles.failed}>
            <Feather name="upload-cloud" size={30} />
        </View>
    )

    return (
        <View style={styles.container}>
            {
                roomList[roomNumber].status == RoomStatus.COMPLETED || roomList[roomNumber].status == RoomStatus.IGNORED ?
                <SuccessUpload /> : <FailedUpload />
            }
            <View style={styles.footer}>
                <BackButton confirmed={false} handleBack={handleBack} />
            </View>
        </View>
    )
}

export default UploadComponent