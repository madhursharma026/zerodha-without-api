// components/Homepage/Home.jsx
import Greeting from '@/components/Homepage/Greeting'
import HoldingsSection from '@/components/Homepage/HoldingsSection'
import styles from '@/components/Homepage/Home.module.css'
import MarginSection from '@/components/Homepage/MarginSection/MarginSection'
import MarketOverview from '@/components/Homepage/MarketOverview'
import { Col } from 'react-bootstrap'

export default function Home() {
  return (
    <Col
      className={`px-4 py-3 rightSidebarScrollContainer ${styles.rightSidebarContainer}`}
    >
      <div className={styles.rightColumn}>
        <Greeting />

        <MarginSection />

        <HoldingsSection />

        <MarketOverview />
      </div>
    </Col>
  )
}
