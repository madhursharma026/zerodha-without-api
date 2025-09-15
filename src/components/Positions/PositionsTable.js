import { Table } from 'react-bootstrap'
import PositionRow from './PositionRow'
import styles from './Positions.module.css'

export default function PositionsTable({ data }) {
  return (
    <Table className={`d-none d-lg-table ${styles.tableStyle}`} hover>
      <thead>
        <tr className="mediumFontSize">
          <th className={`${styles.textColor} fw-normal`}>#</th>
          <th className={`${styles.textColor} fw-normal`}>Product</th>
          <th className={`${styles.textColor} fw-normal`}>Instrument</th>
          <th className={`${styles.textColor} fw-normal`}>Qty.</th>
          <th className={`${styles.textColor} fw-normal`}>Avg</th>
          <th className={`${styles.textColor} fw-normal`}>LTP</th>
          <th className={`${styles.textColor} fw-normal`}>P&L</th>
          <th className={`${styles.textColor} fw-normal`}>Chg.</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <PositionRow key={item.id} item={item} />
        ))}
      </tbody>
    </Table>
  )
}
