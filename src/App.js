 import DetailedOrder from "./modules/DetailedOrder";
 import Orders from "./modules/Orders";
 import RestaurantMenu from "./modules/RestaurantMenu";
 import {Routes, Route} from 'react-router-dom';
 import { Layout, Image} from 'antd';
 import SideMenu from "./components/SideMenu";

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
            <Routes>
              <Route path="" element={<Orders />} />
              <Route path="order/:id" element={<DetailedOrder />} />
              <Route path="menu" element={<RestaurantMenu />} />
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
