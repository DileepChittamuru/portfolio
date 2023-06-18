import { useMemo, useState } from "react";
import Products from "../components/Products";
let nextId = 1;
export default function Home() {
    const [list, setList] = useState([])
    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')
    const [price, setPrice] = useState('')

    let total = useMemo(() => {
       return  list.reduce((prev, curr) => prev + Number(curr?.price), 0)
    }, [list])

    const add = () => {
        setList([...list, {id: nextId++, name: name, weight: weight, price: price}])
        setName('')
        setWeight('')
        setPrice('')
    }
    return <div className="container mt-3">
        <div class="card">
        <div class="card-body">
            <form className="mb-3">
                <div className="row">
                    <div className="col-sm-6 form-group">
                  
                    <input type="text" id="name" className="form-control" value={name} placeholder="Name" onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="col-2">
                   
                    <input type="Number" id="weight" className="form-control"  placeholder="Weight" value={weight} onChange={(event) => setWeight(event.target.value)}/>
                    </div>
                    <div className="col-2">
                   
                    <input type="Number" id="Price" className="form-control" defaultValue='100' placeholder="Price" value={price} onChange={(event) => setPrice(event.target.value)}/>
                    </div>
                    <div className="col-2">
                    <button type="button" className="btn btn-primary" onClick={() => add()}>Add</button>
                    </div>
                </div>
              
            </form>
        </div>
        {list.length > 0 && <Products items={list}/>}
        {/* <div style={{'marginRight': '6rem'}}>
               
                { list.length > 0  && <p className="text-right font-weight-bold">{total}</p>}            

                

                </div> */}
        </div>
    </div>
}