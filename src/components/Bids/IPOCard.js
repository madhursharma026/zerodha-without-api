import { Button } from 'react-bootstrap'
import styles from './Bids.module.css'

export default function IPOCard({ item }) {
  return (
    <div className={`card mb-3 p-3 shadow-sm ${styles.cardStyle}`}>
      <div className="fw-semibold">{item.instrument}</div>
      <div className={`small ${styles.textColor}`}>{item.description}</div>

      <IPODate item={item} />
      <IPOPrice item={item} />
      <IPOMinAmount item={item} />

      <div className="text-end mt-3">
        <Button variant="primary" className="rounded-1 px-3 py-1">
          Pre-apply
        </Button>
      </div>
    </div>
  )
}

function IPODate({ item }) {
  return (
    <div className="mt-2">
      <div className="text-muted">Date</div>
      <div>
        {item.dateFrom}
        <sup>th</sup> {item.monthFrom} — {item.dateTo}
        <sup>th</sup> {item.monthTo}
      </div>
    </div>
  )
}

function IPOPrice({ item }) {
  return (
    <div className="mt-2">
      <div className="text-muted">Price (₹)</div>
      <div>{item.priceRange}</div>
    </div>
  )
}

function IPOMinAmount({ item }) {
  return (
    <div className="mt-2">
      <div className="text-muted">Min. amount (₹)</div>
      <div>
        {item.minAmount}{' '}
        <span className={`small ${styles.textColor}`}>({item.qty} Qty.)</span>
      </div>
    </div>
  )
}
