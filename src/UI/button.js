
const Button = ({title, bgColor}) => {
  return (
    <button 
        className={`btn btn-lg ${bgColor}`}
        type="submit"
    >
        {title}
    </button>
  )
}

export default Button