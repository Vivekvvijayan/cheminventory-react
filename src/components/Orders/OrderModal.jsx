import { useState } from "react"
import { AiOutlineCloseSquare } from "react-icons/ai"
import { toast } from "react-toastify"
import axios from "../../axios/axios"


function OrderModal({ id,setOrderModal,setFlag,flag }) {

    const [choice,setChoice] = useState('')

const editOrder = async () => {
    try{

       if(choice === "") {
        return toast("Please select a choice",{
            theme:"dark"
        })
       }

       axios({
        method:"PUT",
        url:"/orders/update",
        headers:{
            "x-access-token":localStorage.getItem("_token")
        },
        data:{
            id:id,
            status:choice,
           
        }
       }).then(res => {
           setFlag(!flag)
            setOrderModal(false);
            return toast("Order updated" ,{
                theme:"dark"
            })
        
       }).catch(err => {
        console.log('err on updation')
       })

    }catch(err) {
        console.log('Error om updation')
    }
}

  return (
    <div className="main-container flex w-full absolute top-20 left-[40%] backdrop-blur-md">
    <div className="container w-[350px] h-[200px] bg-[#2d3133]">
      <div className="head bg-[#4e5659] p-2 text-white font-display text-sm flex justify-between items-center">
        <span>Order Update</span>
        <span onClick={() => setOrderModal(false)}>
          <AiOutlineCloseSquare size={20} className="cursor-pointer" />
        </span>
      </div>

      <p class="font-display text-left p-4 text-white">
        Please make neccessory changes.
      </p>

      <div className="Barcode ml-3">
        <label for="name" class="text-white text-xs font-display">
          Select choice :
        </label>
      </div>

      {/* radio */}

      <div class="flex justify-center mt-2">
        <div class="flex items-center mr-4">
          <input
            id="inline-radio"
            type="radio"
            value="Delivered"
            name="inline-radio-group"
            class="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => setChoice(e.target.value)}
            
            
          />
          <label
            for="inline-radio"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Delivered
          </label>
        </div>
        <div class="flex items-center mr-4">
          <input
            id="inline-2-radio"
            type="radio"
            value="Cancelled"
            name="inline-radio-group"
            class="w-3 h-3 text-white bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => setChoice(e.target.value)}
          />
          <label
            for="inline-2-radio"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Cancelled
          </label>
        </div>
       
      </div>

      {/* radio */}
      <button
       
        class="ml-4 px-5 py-1 shadow font-display text-white mr-2 mt-2 bg-red-500 rounded-sm flex items-center justify-center text-[12px] font-bold"
      onClick={editOrder}
      >
        Update
      </button>
    </div>
  </div>
  )
}

export default OrderModal