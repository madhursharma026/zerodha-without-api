// import { usePrices } from '@/contexts/PriceContext'
import { useState } from 'react'
import { Col } from 'react-bootstrap'
import BuySellCard from '../BuySellCard/BuySellCard'
import styles from './LeftSidebar.module.css'
import SearchBar from './SearchBar'
import TokenList from './TokenList'

export default function LeftSidebar() {
  // const { data, loading } = usePrices()
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [popupData, setPopupData] = useState(null)
  const [popupType, setPopupType] = useState(null)
  const [loading, setLoading] = useState(false)

  // Load saved tokens
  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem('priceListOrder') || '[]')
  //   if (saved.length > 0) {
  //     setItems(
  //       saved
  //         .map((id) => data.find((token) => token.name === id))
  //         .filter(Boolean)
  //     )
  //   }
  // }, [data])

  // const saveItems = useCallback((list) => {
  //   setItems(list)
  //   localStorage.setItem(
  //     'priceListOrder',
  //     JSON.stringify(list.map((i) => i.name))
  //   )
  // }, [])

  // const handleAddToken = (name) => {
  //   const token = data.find((t) => t.name.toLowerCase() === name.toLowerCase())
  //   if (token && !items.some((i) => i.name === token.name))
  //     saveItems([...items, token])
  // }

  // const handleDeleteToken = (name) =>
  //   saveItems(items.filter((i) => i.name !== name))

  // const filteredItems = useMemo(() => {
  //   return search.trim()
  //     ? data.filter(
  //         (item) =>
  //           item.name.toLowerCase().includes(search.toLowerCase()) &&
  //           !items.some((i) => i.name === item.name)
  //       )
  //     : []
  // }, [data, items, search])

  return (
    <Col
      className={`${styles.leftColumn} ${styles.leftColumnDisplay} pt-3 px-3`}
    >
      <SearchBar search={search} setSearch={setSearch} />

      {/* {search && (
        <SearchResults
          filteredItems={filteredItems}
          onBuy={(coin) => {
            setPopupData(coin)
            setPopupType('buy')
          }}
          onSell={(coin) => {
            setPopupData(coin)
            setPopupType('sell')
          }}
          onAdd={(name) => {
            handleAddToken(name)
            setSearch('')
          }}
          clearSearch={() => setSearch('')}
        />
      )} */}

      <div className={styles.scrollContainer}>
        <div className={`${styles.headerRow} fw-bold smallFontSize px-3 py-2`}>
          <span>Your Tokens ({items.length})</span>
        </div>

        {loading ? (
          <div className="text-center p-2">Loading...</div>
        ) : items.length === 0 ? (
          <div className="text-center p-2">No tokens added yet.</div>
        ) : (
          <TokenList
            items={items}
            setItems={saveItems}
            onBuy={(coin) => {
              setPopupData(coin)
              setPopupType('buy')
            }}
            onSell={(coin) => {
              setPopupData(coin)
              setPopupType('sell')
            }}
            onDelete={handleDeleteToken}
          />
        )}
      </div>

      {popupData && (
        // <BuySellCard
        //   type={popupType}
        //   item={popupData}
        //   onClose={() => setPopupData(null)}
        // />
        <BuySellCard
          type={popupType}
          item={data.find((t) => t.name === popupData?.name)} // keeps price live
          onClose={() => setPopupData(null)}
        />
      )}
    </Col>
  )
}
