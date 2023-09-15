import Card from "../Card/Card";
/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";

const Cards = ({handelPostDetails}) => {

    const [datas,setDatas]=useState([]);

    useEffect(()=>{
       fetch("./course-data.json")
       .then(res=>res.json())
       .then(data=>setDatas(data))
    },[])
   
    console.log(datas)
   
    return (
             <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:p-0 p-5">
        
                {
                    datas.map(data=> <Card 
                        key={data.id}
                        data={data}
                        handelPostDetails={handelPostDetails}

                          ></Card>)
                }
                
    
                
             </div>
    );
};

export default Cards;