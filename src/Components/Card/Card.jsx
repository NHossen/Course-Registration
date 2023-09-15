
const Card = ({data,handelPostDetails}) => {

const {Course_title,Course_description,Course_price,Credit_hours,cover_img}=data;
    return (
        <div className="">
      
        <div className="card h-[470px] bg-[#f7f7f7] shadow-xl">
            {/* Dynamic Image */}
              <figure className="px-10 pt-10">
                <img src={cover_img} alt="Shoes" className="rounded-xl" />
              </figure>
            
              <div className="card-body ">
            {/* Dynamic Title */}    
                <h2 className="card-title">{Course_title}</h2>
            {/* Dynamic Description */} 
                <p>{Course_description}</p>
            {/* Dynamic Price and Credit Hours */}
                <div className="flex ">
                   <p className="font-medium">$ Price: {Course_price}</p>
                   <div className="flex gap-2">
                   <img className="w-5" src="./Frame.svg" alt="" />
                     <p className="font-medium">
                     Credit: {Credit_hours}hr</p>
                   </div>
                   
                </div>
                <div className="card-actions">
                  {/* Button Functionality */}
                  <button onClick={()=>handelPostDetails(data)} className="btn btn-primary w-full">Select</button>
                </div>
              </div>
           </div>
                
        </div>
    );
};

export default Card;