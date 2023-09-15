/* eslint-disable react/jsx-key */
import Detail from "../Detail/Detail";

const Details = ({details}) => {

    return (
        <div className="lg:w-[700px] h-full bg-[#f7f7f7] shadow-xl rounded-xl p-5">
            <h1 className="text-xl font-semibold">Course Name</h1>
           
           {details.map(detail=><Detail
           
            key={detail.id}
            detail={detail}
           >


           </Detail>)}
           
            
        </div>
    );
};

export default Details;