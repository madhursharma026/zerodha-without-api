// components/Order/Orders.jsx
import styles from '@/components/Order/Orders.module.css'
import OrdersSection from '@/components/Order/OrdersSection'
import Tabs from '@/components/Tabs/Tabs'
import { Col } from 'react-bootstrap'

export default function Orders() {
  // Mock Data (replace with API later)
  const openOrderData = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    Time: '15:23:26',
    Type: 'BUY',
    Instrument: 'XXXXXXXXXX',
    Product: 'XXX',
    Qty: '0000',
    LTP: '00.00',
    Price: '000.00',
    Status: 'OPEN',
  }))

  const executedOrderData = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    Time: '15:23:26',
    Type: 'BUY',
    Instrument: 'XXXXXXXXXX',
    Product: 'XXX',
    Qty: '0000',
    LTP: '00.00',
    Price: '000.00',
    Status: 'Complete',
  }))

  return (
    <Col
      className={`px-4 py-3 rightSidebarScrollContainer ${styles.rightSidebarContainer} h-100`}
    >
      <div className={styles.rightColumn}>
        <Tabs
          tabsName={[
            'Orders',
            'GTT',
            'Baskets',
            'SIP',
            'Alerts',
            'IPO',
            'Auctions',
          ]}
          activeTab="Orders"
        />

        <OrdersSection title="Open Orders" data={openOrderData} />
        <OrdersSection title="Executed Orders" data={executedOrderData} />
      </div>
    </Col>
  )
}
