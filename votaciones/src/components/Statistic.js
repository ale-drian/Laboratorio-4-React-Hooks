
const Statistic = ({text, value, symbol, color}) => {
    return (
        <tr>
            <th class={`border-4 border-${color}-600`}>{text}</th>
            <td class={`border-4 border-${color}-600`}>{value}{symbol?symbol:""}</td>
        </tr>
    )
  }
  
  export default Statistic;