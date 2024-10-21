import { useReducer } from "react";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CarContext } from "./store";
function App() {
  const cartReducer = useReducer((state,action)=>{
    const carList = [...state.carList]
    console.log('carList',carList)
    //先取得當前購物車目標的索引
    const  index = carList.findIndex((item)=>item.id ===action.payload.id)
    console.log('index',index,carList[index])
    console.log(action)
    switch (action.type) {
      case 'ADD_TO_CARD':
        if(index === -1 ) {
          // 尚未加到購物車
          carList.push(action.payload)
        }else{
          // 當前購物車的項目與加入項目一樣的時候
          carList[index].quantity += action.payload.quantity
        }            
        return {
          ...state,
          carList,
          // 先將金額 * 品項數量 再去做累加
          total:calculateTotalPride(carList)
        }
      case 'CHANGE_CAR_QUANTITY':
        carList[index].quantity = action.payload.quantity
        return {
          ...state,
          carList,
          // 先將金額 * 品項數量 再去做累加
          total:calculateTotalPride(carList)
        }

      case 'REMOVE_CAR' : 
        carList.splice(index,1)
        return {
          ...state,
          carList,
          // 先將金額 * 品項數量 再去做累加
          total:calculateTotalPride(carList)
        }
      default:
        return state
    }
  },{
    carList:[]
  })
  return (  
    <CarContext.Provider value={cartReducer}>
      <NavBar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <Products />
          </div>
          <div className="col-md-5">
            <Cart />
          </div>
        </div>
      </div>

    </CarContext.Provider>
  );

  function calculateTotalPride(carList) {
    return carList.map((item) => item.quantity * item.price)
      .reduce((a, b) => a + b, 0);
  }
}

export default App;
