import { Col, Row } from 'react-bootstrap'
import styles from './Holdings.module.css'

export default function PortfolioMetrics() {
  const metrics = [
    { label: 'Total investment', value: '₹0,00,000', color: styles.textColor },
    { label: 'Current value', value: '₹0,00,000', color: styles.textColor },
    { label: "Day's P&L", value: '₹00,000 (-0.00%)', color: styles.textColor },
    {
      label: 'Total P&L',
      value: '₹00,000.00 (-0.00%)',
      color: styles.textColor,
    },
  ]

  return (
    <Row className="py-3 text-muted">
      {metrics.map((m, i) => (
        <Col md={3} xs={6} key={i}>
          <div className={styles.metricBox}>
            <span className={styles.label}>{m.label}</span>
            <h5 className={`${styles.value} ${m.color}`}>{m.value}</h5>
          </div>
        </Col>
      ))}
    </Row>
  )
}
