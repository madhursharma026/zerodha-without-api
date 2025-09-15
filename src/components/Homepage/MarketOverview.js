// components/Homepage/MarketOverview.jsx
import Image from 'next/image'
import { Button } from 'react-bootstrap'
import { MdAutoGraph } from 'react-icons/md'
import styles from './Home.module.css'
import SectionHeader from './SectionHeader'

export default function MarketOverview() {
  return (
    <>
      <SectionHeader icon={MdAutoGraph} title="Market overview" />

      <div className="row align-items-center">
        {/* Chart Section */}
        <div className="col-xl-7 col-md-8">
          <Image
            src="/chart.png"
            alt="Market Chart Light"
            className={`img-fluid w-100 ${styles.imgLightChart}`}
            width={600}
            height={300}
            priority
          />
          <Image
            src="/chartDark.png"
            alt="Market Chart Dark"
            className={`img-fluid w-100 ${styles.imgDarkChart}`}
            width={600}
            height={300}
          />
        </div>

        {/* Empty State */}
        <div className="col-xl-5 col-md-4 text-center">
          <Image
            src="/artBoard.png"
            alt="Art Board"
            width={100}
            height={100}
            className={styles.artBoard}
          />
          <p className={styles.textColor}>
            You don&apos;t have any positions yet
          </p>
          <Button variant="primary">Get Started</Button>
        </div>
      </div>

      <hr className={styles.divider} />
    </>
  )
}
