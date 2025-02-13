import { Layout, Image} from 'antd';
import SideMenu from "./components/SideMenu";
import AppRoutes from './components/AppRoutes';

const {Sider, Content, Footer} = Layout;

function App() {
  return (
      <Layout>
        <Sider style={{height: "100vh", backgroundColor: "white"}}>
          <Image src="https://logodix.com/logo/431265.png" preview={false}/>
          <SideMenu />
        </Sider>
        <Layout>
          <Content>
            <AppRoutes />
          </Content>
          <Footer style={{textAlign: 'center'}}>
            Uber Eats Restaurant Dashboard - Est. 2022
          </Footer>
        </Layout>
      </Layout>
      // 
  );
}

export default App;