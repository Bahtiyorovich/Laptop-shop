
const Input = ({type, title, label}) => {
  return (
    <div className="form-floating">
        <input 
            type={type} 
            className="form-control mb-2" 
            id="floatingInput" 
            placeholder={title}
        />
        <label htmlFor="floatingInput">{label}</label>
    </div>
  )
}

export default Input