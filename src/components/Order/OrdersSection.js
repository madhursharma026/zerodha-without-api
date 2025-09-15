// components/Order/OrdersSection.jsx
import OrdersCard from './OrdersCard'
import OrdersHeader from './OrdersHeader'
import OrdersTable from './OrdersTable'

export default function OrdersSection({ title, data }) {
  return (
    <section>
      <OrdersHeader title={title} count={data.length} />
      <OrdersTable data={data} />
      <OrdersCard data={data} />
    </section>
  )
}
