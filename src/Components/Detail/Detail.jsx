

const Detail = ({detail}) => {
    const {Course_title}=detail;

    return (
        <div>
           
            
             {/* dynamicaly added list item titel */}
             <ol className="list-decimal ml-4">
                <li>{Course_title}</li>
             </ol>
             <p className="border-b-2 my-2"></p>
            <p>Total Credit Hour : 13</p>
        </div>
    );
};

export default Detail;