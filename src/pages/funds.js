import styles from '@/components/Funds/Funds.module.css'
import FundsSection from '@/components/Funds/FundsSection'
import { Col } from 'react-bootstrap'
import { CiDroplet } from 'react-icons/ci'
import { IoPieChartOutline } from 'react-icons/io5'

export default function Funds() {
  const equityItems = [
    { label: 'Available margin', value: '00.00' },
    { label: 'Used margin', value: '0.00' },
    { label: 'Available cash', value: '00.00' },
  ]

  const equityDetails = [
    { label: 'Opening balance', value: '00.00' },
    { label: 'Payin', value: '0.00' },
    { label: 'Payout', value: '0.00' },
    { label: 'SPAN', value: '0.00' },
    { label: 'Delivery margin', value: '0.00' },
    { label: 'Exposure', value: '0.00' },
    { label: 'Options premium', value: '0.00' },
    { label: 'Collateral (Liquid funds)', value: '0.00' },
    { label: 'Collateral (Equity)', value: '0.00' },
    { label: 'Total collateral', value: '0.00' },
  ]

  const commodityItems = [
    { label: 'Available margin', value: '0.00' },
    { label: 'Used margin', value: '0.00' },
    { label: 'Available cash', value: '0.00' },
  ]

  const commodityDetails = [
    { label: 'Opening balance', value: '0.00' },
    { label: 'Payin', value: '0.00' },
    { label: 'Payout', value: '0.00' },
    { label: 'SPAN', value: '0.00' },
    { label: 'Delivery margin', value: '0.00' },
    { label: 'Exposure', value: '0.00' },
    { label: 'Options premium', value: '0.00' },
  ]

  return (
    <Col
      className={`px-4 py-3 rightSidebarScrollContainer ${styles.rightSidebarContainer} h-100`}
    >
      <div className={styles.rightColumn}>
        <div className="row">
          <FundsSection
            icon={IoPieChartOutline}
            title="Equity"
            items={equityItems}
            details={equityDetails}
          />
          <FundsSection
            icon={CiDroplet}
            title="Commodity"
            items={commodityItems}
            details={commodityDetails}
          />
        </div>
      </div>
    </Col>
  )
}
