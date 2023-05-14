import { AiOutlineCloseSquare } from "react-icons/ai";

const SearchModal = ({ result,setModal,loading }) => {

    return (
      <div className="main-container flex w-full overflow-x-hidden absolute top-20 left-[40%]  ">
        <div className="container w-[350px] h-auto bg-[#2d3133]">
          <div className="head bg-[#4e5659] p-2 text-white font-display text-sm flex justify-between items-center">
           {
            loading ?  <span>Searching...</span> :  <span>Search Result</span>
           }
            <span onClick={() => setModal(false)}>
              <AiOutlineCloseSquare size={20} className="cursor-pointer" />
            </span>
          </div>

  {

    result != null ?  (

    <div className="data flex flex-col mb-2">
                <h3 className="text-white font-body font-extrabold text-xl p-2 text-center">{result?.name}</h3>

                <span className=" italic text-white text-sm px-2">Size : <span className="ml-2">{ result?.size }g</span> </span>
                <span className=" italic text-white text-sm px-2">Location : <span className="ml-2">{result?.location}</span> </span>
                <span className=" italic text-white text-sm px-2">Type : <span className="ml-2">{result?.type}</span> </span>
                <span className=" italic text-white text-sm px-2">Supplier : <span className="ml-2">{result?.supplier}</span> </span>
                <span className=" italic text-white text-sm px-2">Expiry date : <span className="ml-2"> {new Date(result?.expiry).toLocaleString()}</span> </span>
                <span className=" italic text-white text-sm px-2">Date added : <span className="ml-2">{new Date(result?.createdAt).toLocaleString()}</span> </span>
       
             
                
            </div> 
          ) : 
(
    <div className="alert p-3">
    <h3 className="text-white font-display font-extrabold text-3xl p-2 text-center">Sorry</h3>
    <div className="image w-full flex justify-center flex-col items-center">
        <img src="/images/not-found.png"className="w-16" alt="" />
        <span className="text-display text-white text-xl">Not found!</span>
    </div>
    </div>
)
        }
           
  
                {/* <p className=" font-display text-center pb-2 text-[#3e9475] text-sm px-2">Container available </p> */}
       
        </div>
      </div>
    );
  };
  
  export default SearchModal