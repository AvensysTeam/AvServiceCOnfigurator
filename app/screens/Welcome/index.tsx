import Layout from "../../components/Layout"
import WelcomeComponent from "../../components/screens/Welcome";
import _Button from '../../shared/core/ui/Button';

const WelcomeScreen = ({ navigation }: any) => {

  return (
    <Layout type="base">
      <WelcomeComponent navigation={navigation} />
    </Layout>
  )
}

export default WelcomeScreen