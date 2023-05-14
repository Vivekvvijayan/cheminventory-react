import { useEffect } from "react";
import { useState } from "react";
import { BiExport } from "react-icons/bi";
import { MdUpdate } from "react-icons/md";
import axios from "../../axios/axios";
import { toast } from "react-toastify";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import OrderModal from "./OrderModal";
import OrderAddModal from "./OrderAddModal";


function Order() {
  const [orders, setOrders] = useState([]);
  const [ordermodal,setOrderModal] = useState(false)
  const [flag,setFlag] = useState(false)
  const [id,setId] = useState(null)
  const [addModal,setAddModal] = useState(false)

  useEffect(() => {
    axios({
      method: "GET",
      url: "/orders",
      headers: {
        "x-access-token": localStorage.getItem("_token"),
      },
    })
      .then((res) => {
        setOrders(res?.data?.response);
      })
      .catch((err) => {
        return toast("Unable to fetch orders", {
          theme: "dark",
        });
      });
  }, [flag]);



  return (
    <div class=" overflow-x-auto w-[90%]">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-[#4e5659] dark:text-gray-400">
          <th scope="col" class="px-3 py-1 text-xs text-white font-display">
            Current Orders
          </th>
          <th scope="col" class="px-6 py-1"></th>
          <th scope="col" class="px-6 py-1"></th>
          <th scope="col" class="px-6 py-1">
            <button onClick={() => {
              setAddModal(true)
            }} class="float-right px-1 py-2 shadow text-white font-medium font-display mr-2 bg-[#496d80] rounded-sm flex items-center justify-center text-[13px]">
              Add order
              <BiExport class="ml-1" />
            </button>
          </th>
          <th></th>
          <th></th>
          <th scope="col" class="px-6 py-1">
            <button class="float-right px-2 py-2 shadow text-white font-medium font-display mr-2 bg-[#496d80] rounded-sm flex items-center justify-center text-[13px]">
              Download Orderes
              <BiExport class="ml-1" />
            </button>
          </th>
        </thead>
        <thead class="dark:bg-[#2d3133] border-b dark:border-gray-700">
        

          <th scope="col" class="px-6 py-3 text-white text-xs font-display">
            Container name
          </th>
          <th scope="col" class="px-6 py-3 text-white text-xs font-display">
            Quantity(g)
          </th>
          <th scope="col" class="px-6 py-3 text-white text-xs font-display">
            Ordered Date
          </th>
          <th scope="col" class="px-6 py-3 text-white text-xs font-display">
            Prize(rs)
          </th>
          <th scope="col" class="px-6 py-3 text-white text-xs font-display">
            Status
          </th>
          <th></th> 
          <th></th> 
        </thead>
        <tbody class="dark:bg-[#2d3133]">
          {orders?.map(({ _id, name, size, createdAt, prize, status }) => {
            return (
              <tr
                class="bg-white border-b dark:bg-[#2d3133] dark:border-gray-700"
                key={_id}
              >
            
                <th
                  scope="row"
                  class="px-6 py-3 font-bold dark:text-gray-300 text-xs font-display"
                >
                  {name}
                </th>
                <td class="px-6 py4 text-xs dark:text-gray-300">{size}g</td>
                <td class="px-6 py-4 text-xs dark:text-gray-300 font-display">
                  {new Date(createdAt).toLocaleString()}
                </td>
                <td class="px-6 py-4 text-xs dark:text-gray-300 font-display">
                  {prize}
                </td>
                <td class="px-6 py-4 text-xs dark:text-gray-300 font-display">
                <span class={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded ${status === 'Pending' && 'dark:bg-blue-900'} ${status === 'Delivered' ? 'bg-green-400' : 'bg-red-500'}  dark:text-white`}>{status}</span>
                </td>
                <td class="px-6 py-4 text-xs dark:text-gray-300 font-display">
                  {" "}
                 <span class="bg-[#496d80] p-2 cursor-pointer font-display text-white" onClick={() => {
                  setOrderModal(true)
                  setId(_id)
                 }
                }>Edit</span>
                </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
{
  ordermodal  && <OrderModal id={id} setOrderModal={setOrderModal} flag={flag} setFlag={setFlag}/>
}
      
  {
    addModal && <OrderAddModal setAddModal={setAddModal} flag={flag} setFlag={setFlag}/>
  }
    </div>
  );
}

export default Order;
