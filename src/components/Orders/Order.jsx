import { BiExport } from "react-icons/bi";

function Order() {
  return (
    <div class="relative overflow-x-auto w-[90%]">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-[#4e5659] dark:text-gray-400">
          <th scope="col" class="px-3 py-1 text-xs text-white font-display">
            Current Orders
          </th>
          <th scope="col" class="px-6 py-1"></th>
          <th scope="col" class="px-6 py-1"></th>
          <th scope="col" class="px-6 py-1">
            <input
              type="text"
              placeholder="Filter orders"
              class="bg-[#25292b] w-25 p-2 outline-none text-white"
            />
          </th>
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
                No
            </th>
 
            <th scope="col" class="px-6 py-3 text-white text-xs font-display">
                Container name
            </th>
            <th scope="col" class="px-6 py-3 text-white text-xs font-display">
                Size
            </th>
            <th scope="col" class="px-6 py-3 text-white text-xs font-display">
                Ordered Date
            </th> 
            <th scope="col" class="px-6 py-3 text-white text-xs font-display">
               Prize
            </th> 
            <th scope="col" class="px-6 py-3 text-white text-xs font-display">
                Status
            </th> 
        </thead>
        <tbody class="dark:bg-[#2d3133]">
          <tr class="bg-white border-b dark:bg-[#2d3133] dark:border-gray-700">
            <th
              scope="ro"
              class="px-6 py-4 font-bold dark:text-gray-300 text-xs font-display"
            >
            1
            </th>
            <th
              scope="row"
              class="px-6 py-3 font-bold dark:text-gray-300 text-xs font-display"
            >
              Methane
            </th>
            <td class="px-6 py4 text-xs dark:text-gray-300">20g</td>
            <td class="px-6 py-4 text-xs dark:text-gray-300 font-display">2023-05-02 07:17:16</td>
            <td class="px-6 py-4 text-xs dark:text-gray-300 font-display">$2999</td>
            <td class="px-6 py-4 text-xs dark:text-gray-300 font-display">Delivered</td>
          </tr>
         
     
       
     
         
      
        </tbody>
      </table>
    </div>
  );
}

export default Order;
