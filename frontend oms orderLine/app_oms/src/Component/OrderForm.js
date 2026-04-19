import React,{useState} from "react";

function OrderForm(){
    const [item,setItem]=useState("");
    const [price,setPrice]=useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const orderPayload={
            status:"CREATED",
            orderLines:[
                {
                    item:item,
                    price:Number(price)
                }
            ]
        };
        console.log("Sending JSON: ",orderPayload);
        try {
            const response=await fetch("http://localhost:8080/order",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(orderPayload)
            });
            if(response.ok){
                alert("Order created successfully");
                setItem("");
                setPrice("");
            }else{
                alert("Error creating order")
            }
        } catch (error) {
            
            console.error("Error:", error);
            alert("Backend not reachable");

        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Item</label>
                <input type="text"value={item} 
                    onChange={(e) => setItem(e.target.value)} required />
            </div>
            <div>
            <label>Price</label>
            <input type="number" value={price} onChange={(e)=>
                setPrice(e.target.value)
            }required/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
export default OrderForm;