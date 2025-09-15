import SectionCard from '@/components/Funds/SectionCard'
import SectionHeader from '@/components/Funds/SectionHeader'

export default function FundsSection({ icon, title, items, details }) {
  return (
    <div className="col-md-6 pt-4">
      <SectionHeader icon={icon} title={title} />
      <SectionCard items={items} details={details} />
    </div>
  )
}
