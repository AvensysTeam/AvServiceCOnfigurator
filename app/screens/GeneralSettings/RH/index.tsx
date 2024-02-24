import Layout from "../../../components/Layout"
import RHComponent from "../../../components/screens/GeneralSettings/RH"

const RHScreen = ({navigation}: any) => {
    return (
        <Layout type="base">
            <RHComponent navigation={navigation} />
        </Layout>
    )
}

export default RHScreen