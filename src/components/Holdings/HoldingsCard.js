import { Card } from 'react-bootstrap'
import HoldingField from './HoldingField'
import styles from './Holdings.module.css'

export default function HoldingsCard({ item }) {
  return (
    <Card className={`mt-3 d-block d-lg-none ${styles.cardStyle}`}>
      <Card.Body>
        <span>Instrument</span>
        <p className="fw-normal">{item.instrument}</p>

        <div className="row">
          {item.fields.map((field, i) => (
            <HoldingField key={i} {...field} />
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}
