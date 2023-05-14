import { useState } from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import axios from '../../axios/axios'
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'

function Add() {
  const navigate = useNavigate()
  const [containerName,setContainerName] = useState('')
  const [containerLocation,setContainerLocation] = useState('Store')
  const [containerSize,setContainerSize] = useState(null)
  const [containerType,setContainerType] = useState('Organic')
  const [supplier,setSupplier] = useState('')
  const [unit,setUnit] = useState('g')
  const [chemicalName,setChemicalName] = useState('')
  const [expiryDate,setExpiryDate] = useState(0)

const addContainer = async () => {
  if(containerName === "" ||containerLocation === "" ||containerSize ===""|| containerType === "" ||supplier === "" || expiryDate === "") {
    return toast("Please fill blanks!",{
      theme:"dark"
    })
  }
  try{

axios({
  method:"POST",
  url:'/add',
  headers:{
    'x-access-token':localStorage.getItem('_token')
  },
  data:{
    type:containerType,
    name:containerName,
    size:containerSize,
    chemicalName:chemicalName,
    unit:unit,
    location:containerLocation,
    supplier:supplier,
    expiry:expiryDate
  }
}).then(res => {
  
  console.log(containerType);
  setContainerName("")
  setContainerLocation("")
  setSupplier("")
  setContainerSize(null)
  setChemicalName('')
  setExpiryDate(null)
  return toast("Container added successfully",{theme:"dark"})
}).catch(err => {

  if(err?.response?.status === 403) return toast("Container already exist!",{ theme:"dark"})
  return toast("Error on adding",{
    theme:"dark"
  })
})
  }catch(err){
    return toast("Something went wrong!",{
      theme:"dark"
    })
  }
}


  return (  
    <div className="container  w-[600px] h-auto  bg-[#2d3133]">
      <div className="head bg-[#4e5659] p-2 text-white text-sm font-bold font-display">
        Add a Component
      </div>
      <div className="box-body mt-2  p-3">
        <div className="flex">

        <div className="name">
          <label for="name" class="text-white text-xs font-display">
            Name:
          </label>
          <input
            type="text"
            placeholder="Container Name"
            class="bg-[#25292b] w-full p-2 mt-2 outline-none font-display text-white text-xs"
            onChange={(event) =>setContainerName((event.target.value).charAt(0).toUpperCase() + (event.target.value).slice(1).toLowerCase()) }
            value={containerName}
            />
        </div>
        <div className="chemical-name ml-2">
          <label for="name" class="text-white text-xs font-display">
            Chemical name:
          </label>
          <input
            type="text"
            placeholder="Chemical Name"
            class="bg-[#25292b] w-full p-2 mt-2 outline-none font-display text-white text-xs"
            onChange={(event) =>setChemicalName((event.target.value).charAt(0).toUpperCase() + (event.target.value).slice(1).toLowerCase()) }
            value={chemicalName}
            />
        </div>
            </div>
        <div className="name flex justify-between items-center">
          <div className="box flex flex-col justify-center items-center">

          <input
            type="tel"
            placeholder="Quantity"
            class="bg-[#25292b] w-full p-2 mt-2 h-full outline-none font-display text-white text-xs"
            onChange={(event) =>setContainerSize(event.target.value) }
            value={containerSize}
            minLength={1}
            />
            </div>
         <select
            id="countries"
            class="bg-[#4e5659] border font-display mt-2 border-gray-300 text-gray-900 text-xs w-[200px] p-2 dark:bg-[#4e5659] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
value={unit}
onChange={(e) =>setUnit(e.target.value)}
          >
            <option value="g" selected>
              g
            </option>
            <option value="kg">
              kg
            </option>
            <option value="mL">
              mL
            </option>
            <option value="L">
              L
            </option>
          </select>
        </div>
       
        <span class="flex justify-between mt-2">
          <select
            id="countries"
            class="bg-[#4e5659] border mt-2 font-display border-gray-300 text-gray-900 text-xs   block w-[200px] p-2 dark:bg-[#4e5659] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            onChange={(event) =>setContainerLocation(event.target.value) }
            value={containerLocation}
          >
            <option value="Store" selected>
              Store
            </option>
            <option value="Fridge">
              Fridge
            </option>
          </select>

          <select
            id="countries"
            class="bg-[#4e5659] font-display border mt-2 border-gray-300 text-gray-900 text-xs   block w-[200px] p-2 dark:bg-[#4e5659] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            onChange={(event) =>setContainerType(event.target.value) }
            value={containerType}
          >
            <option value="Organic" selected>Organic</option>
            <option  value="Solvent">
            
              Solvents
            </option>
            <option value="Inorganic">In Organic</option>
          </select>
        </span>

        <div className="Barcode mt-2">
          <label for="name" class="text-white text-xs font-display">
            Supplier:
          </label>
          <input
            type="text"
            placeholder="Supplier Name"
            class="bg-[#25292b] w-full p-2 mt-2 outline-none text-white text-xs font-display"
            onChange={(event) =>setSupplier((event.target.value).charAt(0).toUpperCase() + (event.target.value).slice(1).toLowerCase()) }
            value={supplier} 
          />
        </div>
        <div className="Barcode">
          <label for="name" class="text-white text-xs font-display">
            Expiry Date:
          </label>
          <input
            type="Date"
            placeholder="Supplier Name"
            class="bg-[#25292b] w-full p-2 mt-2 outline-none text-white text-xs"
            onChange={(event) =>setExpiryDate(event.target.value) }
          />
        </div>
        <button
          type="submit"
          class="px-5 font-display text-xs py-2 mb-2 bg-[#536066] flex items-center justify-center text-white mt-3 float-right"
          onClick={addContainer}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Add;
