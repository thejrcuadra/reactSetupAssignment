import {Card, Descriptions, Divider, List, Button} from 'antd';
import dishes from '../../assets/data/dashboard/dishes.json';
import { useParams } from 'react-router-dom';

/* Bordered column not working as it should, does not drop the two boxes of 
Customer Adress Label and Customer Address Input onto the line below as it 
does to Lukas on the video */
// Assuimng the column aspect is not loading/working/available //

/* Danger type for Decline button not available/loading */
// Created ".ant-btn-danger" in index.css to bypass issue //

const DetailedOrder = () => {
  const {id} = useParams();
  return (
    <Card title={`Order ${id}`} style={{margin: 20}}>
    <Descriptions bordered column={{lg: 1, md: 1, sm: 1}}>
        <Descriptions.Item label='Customer'>
        Alejandro Redondo
        </Descriptions.Item>
        <Descriptions.Item label='Customer Address'>
        Calle Pancho 34, Madrid, Spain
        </Descriptions.Item>
    </Descriptions>  
    <Divider />
    <List 
        dataSource={dishes}
        renderItem={(dishItem) => (
        <List.Item>
            <div style={{fontWeight: 'bold'}}>{dishItem.name} x{dishItem.quantity}</div>
            <div>${dishItem.price}</div>
        </List.Item>
        )}
    />
    <Divider />
    <div style={styles.totalSumContainer}>
        <h2>Total:</h2>
        <h2 style={styles.totalPrice}>$42.96</h2>
    </div>
    <Divider />
    <div style={styles.buttonsContainer}>
        <Button block type='danger' size='large' style={styles.button}>
        Decline Order
        </Button>
        <Button block type='primary' size='large' style={styles.button}>
        Accept Order
        </Button>
    </div>
    <Button block type='primary' size='large'>
        Food Is Done
        </Button>
    </Card>
  )
};

const styles = {
    totalSumContainer: {
      felxDirection: 'row',
      display: 'flex'
    },
    totalPrice: {
      marginLeft: 'auto',
      fontWeight: 'bold'
    },
    buttonsContainer: {
      display: "flex",
      paddingBottom: 30
    },
    button: {
      marginRight: 20,
      marginLeft: 20
    }
  };

export default DetailedOrder;