import Button from "./Button"

const Alert = ({type, message, onClickHandler}) => {
  return (
    <div className={`alert alert-${type}`}>
      <p>{message}</p>
      <Button type={type} text={"Dismiss"} onClickHandler={onClickHandler}/>
    </div>
  )
}

export default Alert