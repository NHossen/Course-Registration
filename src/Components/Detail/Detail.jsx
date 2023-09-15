

const Detail = ({detail}) => {//recive from deatils
    //console.log("detail",detail);
    const {Course_title}=detail;

    //console.log(Course_title)

    return (
        <div>    
             {/* dynamicaly added list item titel */}
             
                <li key={detail.id} className="">{Course_title}</li>
            
        </div>
    );
};

export default Detail;