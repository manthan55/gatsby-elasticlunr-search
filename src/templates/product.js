import React from "react"

const Product = (data) => {
    
    return (

        <div>
            <h1>{data.pageContext.productName}</h1>
            <p>{data.pageContext.productDescription}</p>
            <img src={data.pageContext.image} alt={data.pageContext.productName} />
        </div>
    )
}

export default Product