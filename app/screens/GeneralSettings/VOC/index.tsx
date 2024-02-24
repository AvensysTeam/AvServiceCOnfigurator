import Layout from "../../../components/Layout"
import VOCComponent from "../../../components/screens/GeneralSettings/VOC"

const VOCScreen = ({navigation}: any) => {
    return (
        <Layout type="base">
            <VOCComponent navigation={navigation} />
        </Layout>
    )
}

export default VOCScreen