// import React from 'react'

const InventoryList = (producTotalAmount) => {
    return (
        <div>
            {producTotalAmount.map(item =>
                <p>{item.productName} = {item.productAmount}</p>
                )}
        </div>
    )
}

export default InventoryList
