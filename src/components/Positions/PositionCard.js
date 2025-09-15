import { Card } from 'react-bootstrap'
import styles from './Positions.module.css'

export default function PositionCard({ item }) {
  const fields = [
    { label: 'Instrument', value: item.instrument },
    { label: 'Product', value: item.product },
    { label: 'Qty', value: item.qty },
    { label: 'Avg', value: item.avg },
    { label: 'LTP', value: item.ltp },
    { label: 'P&L', value: item.pnl },
    { label: 'Chg', value: item.chg },
  ]

  return (
    <Card className={`mt-3 ${styles.cardStyle}`}>
      <Card.Body>
        <div className="row">
          {fields.map((f, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3">
              <span>{f.label}</span>
              <p className="fw-normal">{f.value}</p>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}
