import {Card, Descriptions, Divider, List, Button} from 'antd';
import dishes from '../src/assets/data/dashboard/dishes.json'

function App() {
  return (
      <Card title={'Order Title'} style={{margin: 20}}>
        <Descriptions bordered column={{lg: 1, md: 1, sm: 1}}>
          <Descriptions.Item label='Customer'>
            Alejandro Redondo
          </Descriptions.Item>
          <Descriptions.Item label='Customer Address'>
            Calle Pancho 34, Madrid, Spain
          </Descriptions.Item>
        </Descriptions>  
        <Divider />
      </Card>
  );
}

export default App;
