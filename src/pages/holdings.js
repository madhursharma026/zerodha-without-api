import { SAMPLE_HOLDINGS } from '@/components/Holdings/constants'
import HeaderActions from '@/components/Holdings/HeaderActions'
import styles from '@/components/Holdings/Holdings.module.css'
import HoldingsCard from '@/components/Holdings/HoldingsCard'
import HoldingsTable from '@/components/Holdings/HoldingsTable'
import PortfolioMetrics from '@/components/Holdings/PortfolioMetrics'
import ProgressSection from '@/components/Holdings/ProgressSection'
import Tabs from '@/components/Tabs/Tabs'
import { Col } from 'react-bootstrap'

export default function Holdings() {
  return (
    <Col className={`px-4 py-3 ${styles.rightSidebarContainer} h-100`}>
      <div className={styles.rightColumn}>
        {/* Tabs */}
        <Tabs tabsName={['All', 'Equity', 'Mutual funds']} activeTab="Equity" />

        {/* Header Section */}
        <HeaderActions />

        <hr className={styles.divider} />

        {/* Portfolio Metrics */}
        <PortfolioMetrics />

        <hr className={styles.divider} />

        {/* Holdings Table (desktop) */}
        <HoldingsTable data={SAMPLE_HOLDINGS} />

        {/* Holdings Card (mobile) */}
        {SAMPLE_HOLDINGS.map((item) => (
          <HoldingsCard key={item.id} item={item} />
        ))}

        {/* Progress Section */}
        <ProgressSection />
      </div>
    </Col>
  )
}
