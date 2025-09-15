import { Card, ProgressBar } from 'react-bootstrap'

export default function ProgressSection() {
  return (
    <>
      <Card className="mt-3 d-block d-lg-none">
        <Card.Body>
          <div className="row">
            <div className="col-sm col-6">
              <span>Invested</span>
              <p className="fw-normal">0,00,000.00</p>
            </div>
            <div className="col-sm col-6">
              <span>Total</span>
              <p className="fw-normal">0,00,000.00</p>
            </div>
            <div className="col-sm col-6">
              <span>P&L</span>
              <p className="fw-normal text-danger">-00,000.00</p>
            </div>
            <div className="col-sm col-6">
              <span>Net Chg.</span>
              <p className="fw-normal">-0.00%</p>
            </div>
            <div className="col-sm col-6">
              <span>Day Chg.</span>
              <p className="fw-normal">-0.00%</p>
            </div>
          </div>
        </Card.Body>
      </Card>

      <ProgressBar
        now={100}
        className="rounded-0 mt-4"
        style={{ height: '70px' }}
      />

      <div className="row">
        <div className="col-md-4 mt-md-0 mt-3">
          <p className="fs-4 fw-normal">₹0,00,000.00</p>
        </div>
        <div className="col-md-8 text-md-end">
          {['Current value', 'Investment value', 'P&L'].map((label, i) => (
            <span key={i} className="mx-2">
              <input type="checkbox" className="mx-1" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
