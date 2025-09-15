import Table from 'react-bootstrap/Table'
import styles from './Holdings.module.css'

export default function HoldingsTable({ data }) {
  return (
    <Table className={`d-none d-lg-table ${styles.tableStyle}`} hover>
      <thead>
        <tr className="mediumFontSize">
          {[
            'Instrument',
            'Qty.',
            'Avg. cost',
            'LTP',
            'Invested',
            'Cur. val',
            'P&L',
            'Net chg.',
            'Day chg.',
          ].map((h) => (
            <th key={h} className={`${styles.textColor} fw-normal`}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="mediumFontSize">
            <td>{item.instrument}</td>
            <td>{item.qty}</td>
            <td>{item.avgCost}</td>
            <td>{item.ltp}</td>
            <td>{item.invested}</td>
            <td>{item.currentVal}</td>
            <td className={item.pnlColor}>{item.pnl}</td>
            <td className={item.netChgColor}>{item.netChg}</td>
            <td className={item.dayChgColor}>{item.dayChg}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
