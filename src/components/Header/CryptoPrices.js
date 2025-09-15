import styles from './Header.module.css'

const CryptoPrices = ({ btcPrice, ethPrice }) => (
  <div className={`d-flex flex-wrap gap-3 ${styles.customFlexGap}`}>
    <div className={`mediumFontSize ${styles.textColor}`}>
      BTC <br className={styles.whenWillBRCome} />
      <span className="text-danger">{btcPrice}</span>{' '}
      <span className="smallFontSize">-225.10 (-0.90%)</span>
    </div>
    <br className={styles.whenWillBRCome} />
    <div className={`mediumFontSize ${styles.textColor}`}>
      ETH <br className={styles.whenWillBRCome} />
      <span className="text-danger">{ethPrice}</span>{' '}
      <span className="smallFontSize">-721.08 (-0.88%)</span>
    </div>
  </div>
)

export default CryptoPrices
