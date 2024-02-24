import { View } from "react-native"
import Layout from "../../components/Layout"
import RoomListComponent from "../../components/screens/RoomList"

const RoomListScreen = ({navigation}: any) => {
  return (
    <Layout type="base">
      <RoomListComponent navigation={navigation} />
    </Layout>
  )
}

export default RoomListScreen