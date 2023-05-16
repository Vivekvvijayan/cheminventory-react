import { useState } from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import axios from "../../axios/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
  const [containerName, setContainerName] = useState("");
  const [containerLocation, setContainerLocation] = useState("Store");
  const [containerSize, setContainerSize] = useState(null);
  const [containerType, setContainerType] = useState("Organic");
  const [supplier, setSupplier] = useState("");
  const [unit, setUnit] = useState("g");
  const [chemicalName, setChemicalName] = useState("");
  const [expiryDate, setExpiryDate] = useState(0);
  const [loader, setLoader] = useState(false);

  const addContainer = async () => {
    if (
      containerName === "" ||
      containerLocation === "" ||
      containerSize === "" ||
      containerType === "" ||
      supplier === "" ||
      expiryDate === ""
    ) {
      return toast("Please fill blanks!", {
        theme: "dark",
      });
    }
    try {
      setLoader(true);
      
      axios({
        method: "POST",
        url: "/add",
        headers: {
          "x-access-token": localStorage.getItem("_token"),
        },
        data: {
          type: containerType,
          name: containerName,
          size: containerSize,
          chemicalName: chemicalName,
          unit: unit,
          location: containerLocation,
          supplier: supplier,
          expiry: expiryDate,
        },
      })
        .then((res) => {
          setLoader(false);
          setContainerName("");
          setContainerLocation("");
          setSupplier("");
          setContainerSize('');
          setChemicalName("");
          setExpiryDate(null);
          return toast("Container added successfully", { theme: "dark" });
        })
        .catch((err) => {
          setLoader(false);
          if (err?.response?.status === 403)
            return toast("Container already exist!", { theme: "dark" });
          return toast("Error on adding", {
            theme: "dark",
          });
        });
    } catch (err) {
      setLoader(false);
      return toast("Something went wrong!", {
        theme: "dark",
      });
    }
  };

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
              onChange={(event) =>
                setContainerName(
                  event.target.value.charAt(0).toUpperCase() +
                    event.target.value.slice(1).toLowerCase()
                )
              }
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
              onChange={(event) =>
                setChemicalName(
                  event.target.value.charAt(0).toUpperCase() +
                    event.target.value.slice(1).toLowerCase()
                )
              }
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
              onChange={(event) => setContainerSize(event.target.value)}
              value={containerSize}
              minLength={1}
            />
          </div>
          <select
            id="countries"
            class="bg-[#4e5659] border font-display mt-2 border-gray-300 text-gray-900 text-xs w-[200px] p-2 dark:bg-[#4e5659] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="g" selected>
              g
            </option>
            <option value="kg">kg</option>
            <option value="mL">mL</option>
            <option value="L">L</option>
          </select>
        </div>

        <span class="flex justify-between mt-2">
          <select
            id="countries"
            class="bg-[#4e5659] border mt-2 font-display border-gray-300 text-gray-900 text-xs   block w-[200px] p-2 dark:bg-[#4e5659] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            onChange={(event) => setContainerLocation(event.target.value)}
            value={containerLocation}
          >
            <option value="Store" selected>
              Store
            </option>
            <option value="Fridge">Fridge</option>
          </select>

          <select
            id="countries"
            class="bg-[#4e5659] font-display border mt-2 border-gray-300 text-gray-900 text-xs   block w-[200px] p-2 dark:bg-[#4e5659] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            onChange={(event) => setContainerType(event.target.value)}
            value={containerType}
          >
            <option value="Organic" selected>
              Organic
            </option>
            <option value="Solvent">Solvents</option>
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
            onChange={(event) =>
              setSupplier(
                event.target.value.charAt(0).toUpperCase() +
                  event.target.value.slice(1).toLowerCase()
              )
            }
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
            onChange={(event) => setExpiryDate(event.target.value)}
            value={expiryDate}
          />
        </div>
        <button
          disabled={loader}
         
          type="submit"
          class="px-5 font-display text-xs py-2 mb-2 bg-[#536066] flex items-center justify-center text-white mt-3 float-right"
          onClick={addContainer}
        >
          {loader ? (
            <div role="status">
              <svg
                aria-hidden="true"
                class="inline w-4 h-4 mr-2 animate-spin text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            "Add"
          )}
        </button>
      </div>
    </div>
  );
}

export default Add;
