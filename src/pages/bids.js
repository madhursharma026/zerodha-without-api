import styles from '@/components/Bids/Bids.module.css'
import IPOCard from '@/components/Bids/IPOCard'
import IPOTable from '@/components/Bids/IPOTable'
import Tabs from '@/components/Tabs/Tabs'
import { Col } from 'react-bootstrap'

export default function Bids() {
  const ipoData = Array.from({ length: 20 }).map((_, index) => ({
    id: index,
    instrument: 'XXXX',
    description: 'XXXXX XXXXX XXXXX XXXXX',
    dateFrom: 'XX',
    dateTo: 'XX',
    monthFrom: 'XXX',
    monthTo: 'XXX',
    priceRange: '000 - 000',
    minAmount: '0000',
    qty: '00',
  }))

  return (
    <Col
      className={`px-4 py-3 rightSidebarScrollContainer ${styles.rightSidebarContainer} h-100`}
    >
      <div className={styles.rightColumn}>
        <Tabs
          tabsName={['IPO', 'Govt. securities', 'Auctions']}
          activeTab={'IPO'}
        />

        <p className="fs-5 pt-3">IPOs ({ipoData.length})</p>

        {/* Desktop Table */}
        <div className="d-none d-md-block">
          <IPOTable data={ipoData} />
        </div>

        {/* Mobile Cards */}
        <div className="d-block d-md-none">
          {ipoData.map((item) => (
            <IPOCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Col>
  )
}
