import React from "react";


function App() {



  return (
    <div className='container mx-auto '>
      <div className='flex flex-col md:flex-row mx-auto border my-20 bg-white shadow-2xl rounded-md'>
        <div className='flex-col w-full md:w-1/2 mx-auto bg-[antiquewhite] px-8 py-9'> 
          <img className="w-1/4 text-center mx-auto py-4 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png" alt="/" />
          <h1 className="mx-auto text-center text-4xl" >YOUR ORDER</h1>
          <div className="hover:scla box-border mx-auto shadow-2xl border-spacing-1 bg-white my-4">
            <img className="w-full h-[250px]" src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/2/a28df7f11723_1.jpg" alt="" />
            <p className="mx-auto text-center text-xs pb-1">Suedo Shopper</p>
            <p className="mx-auto text-center text-xs pb-1">Color: Light Beige</p>
            <p className="mx-auto text-center text-xs pb-1">Price: $129</p>
          </div>
          <div className="mx-auto text-center">
            <span className="mx-auto text-center justify-center px-1 ">●</span>
            <span className="mx-auto text-center justify-center px-1 ">●</span>
            <span className="mx-auto text-center justify-center px-1 ">●</span>
            <span className="mx-auto text-center justify-center px-1 ">●</span>
          </div>
          <div className="py-5 text-center">
          <h1 className="text-2xl ">TOTAL</h1>
          <h1 className="text-2xl ">$145.98</h1>
          </div>
        </div>
    
        <div className="flex flex-col mx-auto w-3/4 px-16 py-24 ">
          <h1 className="text-3xl py-4">PAY WITH CREDIT CARD</h1>
          <div className="flex flex-col"></div>
            <div className="my-4">
              <h2 className="text-md">Name of Card Holder</h2>
              <input placeholder="Name" className="border px-2 py-2 w-full" spellCheck ></input>            
            </div>
            <div className="my-2">
              <h2>Credit Card Number</h2>
              <input type="number" placeholder="Credit Card Number" className="px-2 border py-2 w-full" spellCheck ></input>            
            </div>
            <div className="my-2 flex flex-col ">
              <h2>Expiration Date</h2> 
              <input type="text" id="inputExpDate"  placeholder="MM/YY " maxLength='7' className="border py-2 w-full px-2 mr-2" spellCheck ></input>
              <h2 className="mt-2 ">CVV</h2>
              <input type="password" placeholder="CVV" className="border px-2 py-2 w-full" spellCheck ></input>  
            </div>
            <div className="my-8">
            <button className="w-full py-4 px-2 text-white text-bold bg-red-500 bg-gradient-to-r hover:text-white hover:from-[#f56363] hover:to-[#df4d4d]">PAY SECURLY</button>
            </div>
            </div>

      </div>

    </div>
  );
}

export default App;
