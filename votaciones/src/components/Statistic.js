
const Statistic = ({text, value, symbol}) => {
    return (
      <p><b>{text}: </b>{value} {symbol?symbol:""}</p>
    )
  }
  
  export default Statistic;