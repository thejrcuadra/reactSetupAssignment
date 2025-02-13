import {Card, Table, Tag} from 'antd';
import ordersHistory from '../../assets/data/dashboard/orders-history.json';

const OrdersHistory = () => {
    const tableColumns = [
        {
            title: 'Order ID',
            dataIndex: 'orderID',
            key: 'orderID'
        },
        {
            title: 'Delivery Address',
            dataIndex: 'deliveryAddress',
            key: 'deliveryAddress'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `$${price} USD`,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => <Tag color={status === 'Delivered' ? 'green' : 'red'}>{status}</Tag>
        }
    ];

    return (
        <Card title={'Orders History'} style={{margin: 20}}>
            <Table
                dataSource={ordersHistory}
                columns={tableColumns}
                rowKey="orderID"
            />
        </Card>
    )
};

export default OrdersHistory;