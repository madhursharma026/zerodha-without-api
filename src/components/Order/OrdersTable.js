// components/Order/OrdersTable.jsx
import { Table } from 'react-bootstrap'
import styles from './Orders.module.css'

const COLUMNS = [
  'Time',
  'Type',
  'Instrument',
  'Product',
  'Qty.',
  'LTP',
  'Price',
  'Status',
]

export default function OrdersTable({ data }) {
  return (
    <Table className={`d-none d-lg-table ${styles.tableStyle}`} hover>
      <thead>
        <tr className="mediumFontSize">
          {COLUMNS.map((col) => (
            <th key={col} className={`${styles.textColor} fw-normal`}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="mediumFontSize">
            <td>{item.Time}</td>
            <td>
              <span className={`px-2 py-1 ${styles.tag}`}>{item.Type}</span>
            </td>
            <td>{item.Instrument}</td>
            <td>{item.Product}</td>
            <td>{item.Qty}</td>
            <td>{item.LTP}</td>
            <td>{item.Price}</td>
            <td>
              <span className={`px-2 py-1 ${styles.tag}`}>{item.Status}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
