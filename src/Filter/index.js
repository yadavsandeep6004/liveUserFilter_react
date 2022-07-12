import './style.css';

const Filter = (props)=>{
  return(
    <header className='header'>
    <h4 className='title'>Live User Filter</h4>
    <small className='subtitle'>Search by name and/or location</small>
    <input type='text' placeholder='Search' onChange={props.onChange} />
  </header>
  )
}

export default Filter;