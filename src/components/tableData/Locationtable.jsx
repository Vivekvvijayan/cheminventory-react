import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'
import { BiExport } from 'react-icons/bi'
import { BsFillPencilFill } from 'react-icons/bs'

function Locationtable() {
  return (
 

<div class="relative overflow-x-auto w-[65%] mr-4">
        <div className="table-head dark:bg-[#4e5659] w-100 p-2">
            <p class="font-display text-white text-sm">Containers</p>
        </div>
    <table class="w-[100%] text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 border-b dark:border-gray-700 bg-gray-50 dark:bg-[#2d3133] dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 border-r dark:border-gray-700">
                    Name
                </th>
                <th scope="col" class="px-6 py-3 border-r dark:border-gray-700">
                    Size
                </th>
                <th scope="col" class="px-6 py-3 border-r dark:border-gray-700">
                    Location
                </th>
                <th scope="col" class="px-2 py-3 border-r dark:border-gray-700">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
          

            <tr class="bg-white border-b dark:bg-[#2d3133] dark:border-gray-700">
                <th scope="row" class="px-6 py-3 border-r dark:border-gray-700 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Methane
                </th>
                <td class="px-6 py-3 border-r dark:border-gray-700">
                    10g
                </td>
                <td class="px-6 py-3 border-r dark:border-gray-700">
                    Fridge
                </td>
                <td class="px-1 py-3 border-r dark:border-gray-700">
                <div className="action-container flex justify-center items-center">
                  <span class="p-2 cursor-pointer hover:bg-gray-600">
                    {" "}
                    <BsFillPencilFill />{" "}
                  </span>
                  <span class="p-2 bg-red-400 cursor-pointer ml-2">
                    <AiTwotoneDelete color='white'/>
                  </span>
                </div>
                </td>
            </tr>
           
          
        </tbody>
     
    </table>
</div>

  )
}

export default Locationtable