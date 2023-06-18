import { useState } from "react";

const posts = [
    { id: '1', name: 'sugar' },
    { id: '2', name: 'Salt' },
    { id: '3', name: 'Sweet' },
    { id: '4', name: 'Paste' },
];
const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const [searchresults, setSearchResults] = useState([])
    const searchHandler = (val) => {
        setSearchValue(val)
        const results = posts.filter(item => {
            return item.name.toLowerCase().includes(val.toString().toLowerCase())
        })
        if(results && searchValue.length > 0) {
            setSearchResults(results)
        } else {
            setSearchResults([])
        }
    }
    return <div>
         <form>
            <div className="row">
                <div>
                <input type="text" class="form-control" placeholder="Name" onChange={(event) => searchHandler(event.target.value)}/>
                </div>
            </div>
            
                <div className="row list-group">
                    {searchValue.length > 0 && searchresults.map((post) => (
                            <button type="button" className="list-group-item list-group-item-action" key={post.id}>{post.name}</button>
                        ))}
            
                </div>
            
        </form>
    </div>
}

export default Search;