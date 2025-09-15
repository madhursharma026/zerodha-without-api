import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Col } from 'react-bootstrap'
import { BsTextParagraph } from 'react-icons/bs'
import { GoPlus } from 'react-icons/go'
import {
  MdDeleteOutline,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md'
import { RxDotsHorizontal, RxDragHandleDots2 } from 'react-icons/rx'
import { VscGraphLine } from 'react-icons/vsc'
import ActionButton from './ActionButton'
import styles from './LeftSidebar.module.css'

export default function TokenRow({
  item,
  isProfit,
  onBuy,
  onSell,
  onDelete,
  sortable = true,
  isSearch = false,
  onAdd,
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.name })

  const style = sortable
    ? { transform: CSS.Transform.toString(transform), transition }
    : {}

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`mediumFontSize ${styles.tokenRow}`}
    >
      <Col xs={3} className={styles.tokenName}>
        {sortable && (
          <span className={styles.dragHandle} {...listeners} {...attributes}>
            <RxDragHandleDots2 size={16} />
          </span>
        )}
        <span className={`${!sortable ? 'ps-2' : 'ps-0'}`}>{item.name}</span>
      </Col>

      <Col xs={9} className={styles.tokenValues}>
        <div className={styles.values}>
          <span className={`${styles.value} ${styles.change}`}>
            {isProfit ? `+${item.change}` : item.change}
          </span>
          <span
            className={`${styles.value} ${isProfit ? styles.up : styles.down}`}
          >
            {Math.abs(item.percent)}%{' '}
            {isProfit ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
          <span
            className={`${styles.value} ${isProfit ? styles.up : styles.down}`}
          >
            ${item.price}
          </span>
        </div>

        <div className={styles.actions}>
          {!isSearch && (
            <>
              <ActionButton
                icon="B"
                variant="primary"
                onClick={(e) => {
                  e.stopPropagation()
                  onBuy(item)
                }}
              />
              <ActionButton
                icon="S"
                variant="danger"
                onClick={(e) => {
                  e.stopPropagation()
                  onSell(item)
                }}
              />
              <ActionButton
                icon={<BsTextParagraph />}
                extraClass={styles.actionBtnBg}
              />
              <ActionButton
                icon={<VscGraphLine />}
                extraClass={styles.actionBtnBg}
              />
              {onDelete && (
                <ActionButton
                  icon={<MdDeleteOutline />}
                  extraClass={styles.actionBtnBg}
                  onClick={() => onDelete(item.name)}
                />
              )}
              {onAdd && (
                <ActionButton
                  icon={<GoPlus />}
                  extraClass={styles.actionBtnBg}
                  onClick={(e) => {
                    e.stopPropagation()
                    onAdd(item.name)
                  }}
                />
              )}
              <ActionButton
                icon={<RxDotsHorizontal />}
                extraClass={styles.actionBtnBg}
              />
            </>
          )}
        </div>
      </Col>
    </div>
  )
}
