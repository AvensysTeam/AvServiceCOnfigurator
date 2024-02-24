import Layout from "../../components/Layout"
import RoomComponent from "../../components/screens/Room"

const RoomScreen = ({navigation}: any) => {
  return (
    <Layout type="base">
      <RoomComponent navigation={navigation} />
    </Layout>
  )
}

export default RoomScreen