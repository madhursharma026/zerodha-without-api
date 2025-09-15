import { Form, InputGroup } from 'react-bootstrap'
import { ACTION_ICONS } from './constants'
import styles from './Holdings.module.css'

export default function HeaderActions() {
  return (
    <div
      className={`d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center my-3 gap-3 ${styles.responsiveContainer}`}
    >
      {/* Left: Title + Filter */}
      <div className="d-flex align-items-center flex-wrap gap-2">
        <span className={styles.fs6Text}>Holdings (1)</span>
        <Form.Select
          className={styles.filterSelect}
          aria-label="Filter Holdings"
        >
          <option>All Equity</option>
          <option value="mft">MFT</option>
          <option value="kite">Kite Only</option>
          <option value="smallcase">Smallcase</option>
        </Form.Select>
      </div>

      {/* Right: Search + Icons */}
      <div className="d-flex align-items-center flex-wrap gap-2">
        {/* Search */}
        <InputGroup className={`${styles.searchGroup} d-sm-flex d-none`}>
          <Form.Control
            placeholder="Search"
            className={styles.searchInput}
            aria-label="Search Holdings"
          />
        </InputGroup>

        {/* Action Icons */}
        {Object.values(ACTION_ICONS).map((action) => (
          <span
            key={action.label}
            className={`d-flex align-items-center text-primary gap-1 mediumFontSize ${styles.iconLink}`}
            role="button"
            tabIndex={0}
          >
            <action.icon /> {action.label}
          </span>
        ))}
      </div>
    </div>
  )
}
