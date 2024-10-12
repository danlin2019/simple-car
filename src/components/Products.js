import { useContext } from "react"
import ProductsData from "../assets/productsData"
import { CarContext } from "../store"

export default function Products(){
  const [state,dispatch] = useContext(CarContext)
  return(<div className="row row-cols-3 g-3">
  {ProductsData.map((product) =>{
    return(<div className="col" key={product.id}>
    <div className="card">
      <img src={product.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h6 className="card-title">
          {product.title}
          <span className="float-end">NT$ {product.price}</span>
        </h6>
        <button type="button" className="btn btn-outline-primary w-100 mt-2" onClick={()=>{
          dispatch({
            type:"ADD_TO_CARD",
            payload:{
              ...product,
              qyt:1
            }
          })
        }}>加入購物車</button>
      </div>
    </div>
  </div>)
  })}

</div>)
}