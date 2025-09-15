// components/Homepage/SectionHeader.jsx
import styles from './Home.module.css'

export default function SectionHeader({ icon: Icon, title }) {
  return (
    <p
      className={`fs-5 mb-0 d-flex align-items-center gap-2 ${styles.textColor}`}
    >
      <Icon className="fs-4" /> {title}
    </p>
  )
}
