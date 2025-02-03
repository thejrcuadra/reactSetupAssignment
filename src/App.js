 import DetailedOrder from "./modules/DetailedOrder";
 import Orders from "./modules/Orders";
 import {Routes, Route} from 'react-router-dom';
 import { Layout, Image} from 'antd';

 const {Sider, Content, Footer} = Layout;

function App() {
  return (
      <Layout>
        <Sider style={{height: "100vh", backgroundColor: "white"}}>
          <Image src="https://logodix.com/logo/431265.png" preview={false}/>
        </Sider>
        <Layout>
          <Content>
            <Routes>
              <Route path="" element={<Orders />} />
              <Route path="order/:id" element={<DetailedOrder />} />
            </Routes>
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
