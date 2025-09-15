export default function PositionRow({ item }) {
  return (
    <tr className="mediumFontSize">
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <span className="px-2 py-1 badge bg-light text-dark">
          {item.product}
        </span>
      </td>
      <td>{item.instrument}</td>
      <td>{item.qty}</td>
      <td>{item.avg}</td>
      <td>{item.ltp}</td>
      <td>{item.pnl}</td>
      <td>{item.chg}</td>
    </tr>
  )
}
