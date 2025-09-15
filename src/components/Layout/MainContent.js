// components/Layout/MainContent.jsx
import styles from './Layout.module.css'

export default function MainContent({ children }) {
  return <div className={styles.mainContent}>{children}</div>
}
