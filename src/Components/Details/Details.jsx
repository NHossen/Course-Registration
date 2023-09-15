/* eslint-disable react/jsx-key */
import Detail from "../Detail/Detail";

const Details = ({details,totalHours,remaingHours,price}) => {
   
    return (

        <div className="lg:w-[700px] h-full bg-[#f7f7f7] shadow-xl rounded-xl p-5">
            <p className="text-[#6129e2] text-lg font-medium">Credit Hour Remaining {remaingHours}hr</p>
            <p className="border-b-2 my-2"></p>
            <h1 className="text-xl font-semibold">Course Name</h1>
            

             <ol className="list-decimal list-inside">
           {details.map(detail=><Detail
           
            key={detail.id}
            detail={detail} //Send it in detail
           ></Detail>)}
           </ol>

           <p className="border-b-2 my-2"></p>
             <p className="font-medium text-[gray]">Total Credit Hour: {totalHours}</p>
             <p className="border-b-2 my-2"></p>
             <p className="font-medium text-[gray]">Total Price: {price} USD</p>
           
            
        </div>
    );
};

export default Details;