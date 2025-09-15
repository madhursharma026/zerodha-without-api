// components/Homepage/HoldingsSection.jsx
import { ProgressBar } from 'react-bootstrap'
import { IoBagHandleOutline } from 'react-icons/io5'
import styles from './Home.module.css'
import SectionHeader from './SectionHeader'

export default function HoldingsSection() {
  return (
    <>
      <div className="row g-4 py-2">
        <SectionHeader icon={IoBagHandleOutline} title="Holdings (1)" />

        <div className={`col-md-4 ${styles.borderEndOnlySm}`}>
          <span className={`fs-1 ${styles.textColor}`}>
            00.00k <span className="mediumFontSize">0.00%</span>
          </span>
        </div>

        <div className="col-md-4 px-4">
          <span className={styles.textColor}>Current value</span> &emsp; 0.00L
          <br />
          <span className={styles.textColor}>Investment</span> &emsp; 0.00L
        </div>

        <div className="col-md-9">
          <ProgressBar
            now={100}
            className="rounded-0"
            style={{ height: '50px' }}
          />
        </div>

        <h5 className={styles.textColor}>₹0,00,000.00</h5>
      </div>

      <hr className={styles.divider} />
    </>
  )
}
