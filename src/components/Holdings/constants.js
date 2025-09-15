import { CiLock } from 'react-icons/ci'
import { FaUsers } from 'react-icons/fa'
import { LiaChartPieSolid } from 'react-icons/lia'
import { MdDownload } from 'react-icons/md'
import styles from './Holdings.module.css'

export const SAMPLE_HOLDINGS = Array.from({ length: 5 }).map((_, i) => ({
  id: i,
  instrument: 'XXXXXXXXXX',
  qty: '0000',
  avgCost: '000.00',
  ltp: '000.00',
  invested: '0,00,000.00',
  currentVal: '0,00,000.00',
  pnl: '00,000.00',
  netChg: '0.00%',
  dayChg: '0.00%',
  pnlColor: styles.textColor,
  netChgColor: styles.textColor,
  dayChgColor: styles.textColor,
  fields: [
    { label: 'Qty.', value: '0000' },
    { label: 'Avg. cost', value: '000.00' },
    { label: 'LTP', value: '000.00' },
    { label: 'Invested', value: '0,00,000.00' },
    { label: 'Cur. Val', value: '0,00,000.00' },
    { label: 'P&L', value: '00,000.00', color: styles.textColor },
    { label: 'Net Chg.', value: '0.00%', color: styles.textColor },
    { label: 'Day Chg.', value: '0.00%', color: styles.textColor },
  ],
}))

export const ACTION_ICONS = {
  auth: { label: 'Authorisation', icon: CiLock },
  family: { label: 'Family', icon: FaUsers },
  analytics: { label: 'Analytics', icon: LiaChartPieSolid },
  download: { label: 'Download', icon: MdDownload },
}
