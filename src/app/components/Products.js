const Products = (props) => {
    const {items} = props
    return <div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Qty / Weight</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
               
                {
                    items.map((item) => (
                    <tr key={item.id}>
                        {Object.values(item).map((val) => (
                            <td>{val}</td>
                        ))}
                    </tr>
                    ))
                }
            </tbody>
            </table>
    </div>
}
export default Products