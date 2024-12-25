



export default function NoteComponent({ notItem, handleShowNote, showNote }) {
    const date = new Date().toLocaleDateString();
    const truncatedText = notItem.text.split(" ").slice(0, 10).join(" ") + `...`;
  
    return (
      <div className="space-y-3 cursor-pointer hover:scale-110 transform duration-300  " onClick={() => handleShowNote(notItem)}>
        <div className= {`p-4  shadow-md rounded-lg ${notItem.note? 'bg-yellow-100' : 'bg-red-100' }`}>
          {/* Note Title */}
          <h3 className=" hover:text-red-400 text-lg font-semibold text-gray-900">{notItem.about}</h3>
          {/* Note Content */}
          <p className="text-gray-600 text-sm">
            { truncatedText}
          </p>
          {/* Metadata */}
          <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
            <span>Created: {date}</span>
          </div>
        </div>
      </div>
    );
  }
  
// export default function NoteComponent({notItem, handleShowNote, showNote}) {
// const [showAll, setShowAll] = useState(false)
// const date = new Date().toLocaleDateString()
// function handleClick(e) {
//     console.log(showAll)
//     console.log(notItem)
//     setShowAll((prev)=> !prev)

// }
// const expand = notItem.text.split(" ").slice(0,10).join(" ") + `...`;

//     return (
// <div className="space-y-3" onClick={handleClick}>
//     <div className="p-4 bg-yellow-100 shadow-md rounded-lg">
   
//       <h3 className="text-lg font-semibold text-gray-900">{notItem.about}</h3>
  
//       <p className="text-gray-600 text-sm line-clamp-2">
//       {showAll || showNote ? expand :  notItem.text}
//       </p>
     
//       <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
//         <span>Created: {date}</span>
       
//       </div>
//     </div>
//     </div>
//     )
    
// }