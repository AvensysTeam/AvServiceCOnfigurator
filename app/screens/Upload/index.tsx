import Layout from "../../components/Layout";
import UploadComponent from "../../components/screens/Upload";

const UploadScreen = ({navigation}: any) => {

    return (
        <Layout type="base">
            <UploadComponent navigation={navigation} />
        </Layout>
    )
}

export default UploadScreen