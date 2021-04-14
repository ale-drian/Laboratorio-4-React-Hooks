const Button = ({text, handle}) => {
    return (
      <button className="px-6 py-2 mr-3 my-3 bg-red-700 text-white font-medium text-xl rounded-md hover:bg-red-500" onClick={handle}>{text}</button>
    )
  }
  
  export default Button;