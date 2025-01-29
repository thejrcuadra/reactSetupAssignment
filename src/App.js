import {Card, Descriptions, Divider, List, Button} from 'antd';
import dishes from '../src/assets/data/dashboard/dishes.json'

function App() {
  return (
    // Bordered column not working as it should, does not drop the two boxes of Customer Adress Label and Customer Address Input onto the line below as it does to Lukas on the video //
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
