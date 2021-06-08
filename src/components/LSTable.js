export default function LSTable({ c }) {
  return (
    <table>
      <thead>
        <tr>
          {c.header.map((h, i) => {
            return <th key={i}>{h[0][1]}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {c.groups[0].map((rows, i) => {
          return (
            <tr key={i}>
              {rows.map((r, i) => {
                return <td key={i}>{r[0][1]}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
