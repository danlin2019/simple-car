import { useReducer } from "react";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CarContext } from "./store";
function App() {
  const cartReducer = useReducer((state,action)=>{
    console.log(action)
    switch (action) {
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
}

export default App;
