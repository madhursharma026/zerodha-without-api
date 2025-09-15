// components/Order/OrdersHeader.jsx
export default function OrdersHeader({ title, count }) {
  return (
    <p className="fs-5 pt-3">
      {title} ({count})
    </p>
  )
}
