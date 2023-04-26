import {Button} from '../UI'
import {laptop1} from '../assets'

const Main = () => {
  return (
    <div className="container py-4">

    <div className="d-flex flex-row p-5 mb-4 bg-light rounded-3">
      <div className=" py-5">
        <h1 className=" fw-bold me-3">Apple Trade In
          Get credit toward a new MacBook Pro.
        </h1>
        <p className="col-md-8 fs-4 ">
          Just trade in your eligible computer for credit toward a new one or recycle it for free. It’s good for you and the planet.*
        </p>
        <Button title={'More..'} bgColor={'btn-primary w-25 '}/>
      </div>
      <img src={laptop1} alt='MainImage' width={'550px'} classNameName='shadow rounded'/>
    </div>

    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 text-bg-dark rounded-3">
          <h2>Change the background</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button className="btn btn-outline-light" type="button">Example button</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border rounded-3">
          <h2>Add borders</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button className="btn btn-outline-secondary" type="button">Example button</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Main