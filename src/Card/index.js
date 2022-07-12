import './style.css'

const Card = (props)=>{
  return(
    <li className='user-li'>
    <img src={props.user.picture.large} alt={props.user.name.first} />
    <div className='user-info'>
      <h4>
        {props.user.name.first} {props.user.name.last}
      </h4>
      <p>
        {props.user.location.city}, {props.user.location.country}
      </p>
    </div>
  </li>
  )
}
export default Card;