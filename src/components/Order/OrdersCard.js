// components/Order/OrdersCard.jsx
import { Card } from 'react-bootstrap'
import styles from './Orders.module.css'

const FIELDS = [
  'Type',
  'Instrument',
  'Product',
  'Qty',
  'LTP',
  'Price',
  'Status',
]

export default function OrdersCard({ data }) {
  return (
    <>
      {data.map((item) => (
        <Card
          key={item.id}
          className={`mt-3 d-block d-lg-none ${styles.cardStyle}`}
        >
          <Card.Body>
            <span>Time</span>
            <p className="fw-normal">{item.Time}</p>

            <div className="row">
              {FIELDS.map((field) => (
                <div key={field} className="col-6 col-sm-4 col-md-3">
                  <span>{field}</span>
                  <p className="fw-normal">{item[field]}</p>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}
