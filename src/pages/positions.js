import PositionCard from '@/components/Positions/PositionCard'
import styles from '@/components/Positions/Positions.module.css'
import PositionsEmptyState from '@/components/Positions/PositionsEmptyState'
import PositionsHeader from '@/components/Positions/PositionsHeader'
import PositionsTable from '@/components/Positions/PositionsTable'
import { Col } from 'react-bootstrap'

export default function Positions() {
  const positionsData = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    product: 'XXXX',
    instrument: 'XXXX XXXX XXXX XXXX',
    qty: '0',
    avg: '0000.00',
    ltp: '0000.00',
    pnl: '00.00',
    chg: '0.00%',
  }))

  const hasPositions = positionsData.length > 0

  return (
    <Col
      className={`px-4 py-3 rightSidebarScrollContainer ${styles.rightSidebarContainer} h-100`}
    >
      <div className={styles.rightColumn}>
        <PositionsHeader count={positionsData.length} />

        {hasPositions ? (
          <>
            {/* Desktop Table */}
            <PositionsTable data={positionsData} />

            {/* Mobile Cards */}
            <div className="d-block d-lg-none">
              {positionsData.map((item) => (
                <PositionCard key={item.id} item={item} />
              ))}
            </div>
          </>
        ) : (
          <PositionsEmptyState />
        )}
      </div>
    </Col>
  )
}
