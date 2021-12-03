// import { ToggleButton } from '@mui/material';
// import { buttonGroupClasses } from '@mui/material';
import React, { useState, useEffect, } from 'react'
import InventoryList from '../components/InventoryList'

let productaData = localStorage.getItem(('inventory') ? JSON.parse(localStorage.getItem('inventory')) : []);
const Example = () => {
    const [count,setCount] = useState(0);
    const [userName, setUsername] = useState('Hi this is Mike');
    const [timer, setTimer] = useState(0);
    const [isActive, setisActive] = useState(false);
    //For the product information
    const [productName, setProductName]= useState('');
    const [productAmount, setProductAmount] =  useState('');
    const [producTotalAmount, setProductTotalAmount] = useState(productaData);

    const handleproductName = (e) => {
        setProductName(e.target.value);
    };
    const handleproductAmount = (e) => {
        setProductAmount(e.target.value);
    };

    const handleProductSubmit = (e) => {
        e.preventDefault();
        if (productAmount !== '' && productAmount > 0) {
            const product = {productName, productAmount};
            setProductTotalAmount([...producTotalAmount, product])
    }
    else {
        alert('Invalid product name or amount');
    }
    setProductName('');
    setProductAmount(0);

    }
    const handleProductDelete = () => {
        setProductTotalAmount([]);
    }
    
    // ToggleButton=() => {
    //     setisActive(!isActive);
    // }
    function ToggleButton() {
        setisActive(!isActive);
    }
    function Reset () {
        setisActive(false);
        setTimer(0);
    }

    useEffect(()=>{
        localStorage.setItem('inventory',JSON.stringify(producTotalAmount));
    },[producTotalAmount]);
//         document.['product'].reset();

//         let interval = 0;
//         if(isActive ) {
//             interval = setInterval(()=>setTimer(timer=>timer+1), 1000);
//         }
//         else if(!isActive && timer!==0) {
//             clearInterval(interval); //will reset time to zero
//         }
//         return ()=>clearInterval(interval);
//     }, [isActive, timer]);
// }, [producTotalAmount];

    return (
        <div align='center' sx={{padding:'20px'}}>
            <h1>Product Information</h1>
        <form name = "product" onSubmit={handleProductSubmit}>
            <label for="product">Product</label><br />
            <input type="text" name="product" id="product" value={productName} onChange={handleproductName}></input><br />
            <label for="amount">Amount</label><br />
            <input type="number" name="amount" id="amount" value={productAmount} onChange={handleproductAmount}></input><br /><br />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleProductDelete}>Delete</button>
        </form>
        <InventoryList producTotalAmount = {producTotalAmount} />
        <h4>Total {producTotalAmount.reduce((accumulator, currentvalue)=> 
        (accumulator += parseFloat(currentvalue.productAmount)),0)}</h4>
    

        <h2>{userName}</h2>
        <input type="text" value={userName} onChange={(event) =>setUsername(event.target.value)}></input>
        <p>You click {count} times</p>
        <button onClick={() => setCount(count+1)}>
            Click Me
        </button>
            
            <div>
                <p>This is the timer</p>
                {timer}<br />
                <button onClick={ToggleButton} >{!isActive?'Start':'Pause'}</button>
                <button onClick={Reset}>Reset</button>

            </div>
        </div>
    )
}

export default Example
