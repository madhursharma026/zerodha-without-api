// components/Homepage/MarginSection/MarginSection.jsx
import { CiDroplet } from 'react-icons/ci'
import { IoPieChartOutline } from 'react-icons/io5'
import styles from '../Home.module.css'
import MarginCard from '../MarginCard'

export default function MarginSection() {
  return (
    <>
      <div className="row">
        <MarginCard icon={IoPieChartOutline} title="Equity" />
        <MarginCard icon={CiDroplet} title="Commodity" />
      </div>
      <hr className={styles.divider} />
    </>
  )
}
