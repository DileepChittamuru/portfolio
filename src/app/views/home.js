import {  useState, useMemo } from "react";
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
                        <div className="col-sm-4 form-group">
                            <input type="text" id="name" className="form-control" value={name} placeholder="Name" onChange={(event) => setName(event.target.value)}/>
                        </div>
                        <div className="col-sm-3 form-group">
                        <input type="Number" id="weight" className="form-control"  placeholder="Weight" value={weight} onChange={(event) => setWeight(event.target.value)}/>
                        </div>
                        <div className="col-sm-3 form-group">
                    
                        <input type="Number" id="Price" className="form-control" defaultValue='100' placeholder="Price" value={price} onChange={(event) => setPrice(event.target.value)}/>
                        </div>
                        <div className="col-sm-2 form-group">
                        <button type="button" className="btn btn-primary" onClick={() => add()}>&nbsp;Add&nbsp;</button>
                        </div>
                    </div>
                
                </form>
                {list.length > 0 && <Products items={list}/>}
                {/* <div style={{'marginRight': '6rem'}}> Total Amount
                    { list.length > 0  && <p className="text-right font-weight-bold">{total}</p>}            
                </div> */}
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div className="row d-flex">
                <div className="d-flex justify-content-center col-sm-6"> Total Items: &nbsp;  { list.length > 0  && <p className="font-weight-bold">{list.length}</p>} </div>
                <div className="d-flex justify-content-center col-sm-6"> Total Amount: &nbsp;  { list.length > 0  && <p className="font-weight-bold">{total}</p>} </div>
                </div>
            </div>
        </div>
    </div>
}