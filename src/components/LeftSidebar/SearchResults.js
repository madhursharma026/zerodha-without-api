import TokenRow from './TokenRow'

export default function SearchResults({
  filteredItems,
  onBuy,
  onSell,
  onAdd,
  clearSearch,
}) {
  if (!filteredItems.length) return null

  return (
    <div className="mb-3" style={{ marginTop: '-16px' }}>
      {filteredItems.map((token) => (
        <TokenRow
          key={token.name}
          item={token}
          isProfit={parseFloat(token.change) > 0}
          onBuy={onBuy}
          onSell={onSell}
          onDelete={null}
          sortable={false}
          onAdd={onAdd}
        />
      ))}
    </div>
  )
}
