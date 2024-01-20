import {useSelector , useDispatch} from "react-redux"
import { add, minus ,addNumber } from "./slices/Counter"
import { useState } from "react"
import { addToView } from "./slices/Table"
import { fetchProducts } from "./slices/Product"

function App() {
 
  const [data , setData] = useState(0)
  const count = useSelector((state)=>{ return state.count })

  const meta = [
    {
      name  : "iphone" ,
      status : "available" ,
      price : 568
    } ,
    {
      name  : "samsung" ,
      status : "available" ,
      price : 879
    } ,
    {
      name  : "nothing" ,
      status : "available" ,
      price : 678
    } ,
    {
      name  : "rabbit" ,
      status : "not-available" ,
      price : 999
    } ,
  ]

  const view = useSelector(state => state.table.tableView)

  const dispatch = useDispatch()

  return (
    <>

        <button onClick={ ()=>{ dispatch(fetchProducts()) }}>fetchData</button>

        <table border={2}>
          {
            meta.map((item , index)=>{
              return <tr key={index}>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td>{item.price}</td>
                <td> <button onClick={ ()=>{ dispatch(addToView(item)) } }>show </button>  </td>
              </tr>
            })
          }
        </table>

        <div>
          <h1>{view?.name}</h1>
          <p>{view?.status}</p>
          <p>{view?.price}</p>

        </div>
    </>
  )
}

export default App
