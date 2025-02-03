 import DetailedOrder from "./modules/DetailedOrder";
 import Orders from "./modules/Orders";
 import {Routes, Route} from 'react-router-dom';
 import { Layout, Image} from "antd";

 const {Sider, Content, Footer} = Layout;

function App() {
  return (
      <Layout>
        <Sider style={{height: "100vh", backgroundColor: "white"}}>
        </Sider>

      </Layout>
      // <Routes>
      //   <Route path="" element={<Orders />} />
      //   <Route path="order/:id" element={<DetailedOrder />} />
      // </Routes>
  );
}

export default App;
