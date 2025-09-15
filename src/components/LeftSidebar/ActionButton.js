import { Button } from 'react-bootstrap'
import styles from './LeftSidebar.module.css'

export default function ActionButton({
  icon,
  variant = 'secondary',
  onClick,
  extraClass = '',
}) {
  return (
    <Button
      variant={variant}
      className={`${styles.actionBtn} ${extraClass}`}
      onClick={onClick}
    >
      {icon}
    </Button>
  )
}
