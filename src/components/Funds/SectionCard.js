import styles from './Funds.module.css'

export default function SectionCard({ items, details }) {
  return (
    <div className={`card rounded-0 ${styles.cardDetails}`}>
      <div className="card-body fs-5">
        {items.map((item) => (
          <div className={styles.itemRow} key={`${item.label}-${item.value}`}>
            <span className={styles.textColor}>{item.label}</span>
            <span
              className={`${
                parseFloat(item.value) < 0 ? styles.negative : ''
              } fs-4 ${styles.textColor}`}
            >
              {item.value}
            </span>
          </div>
        ))}

        {details?.length > 0 && <hr className="my-3" />}

        {details.map((item) => (
          <div className={styles.itemRow} key={`${item.label}-${item.value}`}>
            <span className={styles.textColor}>{item.label}</span>
            <span className={styles.textColor}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
