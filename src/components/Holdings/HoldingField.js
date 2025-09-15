export default function HoldingField({ label, value, color }) {
  return (
    <div className="col-6 col-sm-4 col-md-3">
      <span>{label}</span>
      <p className={`fw-normal ${color || ''}`}>{value}</p>
    </div>
  )
}
