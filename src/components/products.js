
import { noutbook } from '../constants'

const Products = () => {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          
          {noutbook.map(item => (
            <div className="col" key={item.img}>
            <div className="card">
              <img src={item.img} className="card-img-top" height={'300px'} alt="..." />
              <div className="card-body" style={{minHeight:"200px"}}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{item.info}</p>
                <p className="card-text"><small className="text-body-secondary">{item.updateAt}</small></p>
              </div>
            </div>
          </div>
          ))}
  
        </div>
      </div>
    </div>
  )
}

export default Products