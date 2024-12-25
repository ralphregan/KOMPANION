export default function NotePOP({ showNote, handleClose, setPopUp }) {
    if (!showNote) return null; // Only render if showNote is not null

   
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75" onClick={handleClose}>
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 relative">
          <button
            className="absolute top-4 right-4 text-zinc-950 hover:text-white hover:font-bold hover:scale-110 bg-red-300 hover:bg-red-400 w-12 rounded-xl "
            onClick={handleClose}
          >
            Close
          </button>
          <h2 className="text-xl font-bold mb-4">{showNote.about}</h2>
          <p className="text-gray-700 mb-4">{showNote.text}</p>
          <div className="space-x-2">
            <button className="text-blue-500 hover:underline">Edit</button>
            <button className="text-red-500 hover:underline">Delete</button>
          </div>
        </div>
      </div>
    );
  }
  
// export default function NotePOP({showNote}){
// if(!showNote) return

// return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
//             <button
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//               onClick
//             >
//               Close
//             </button>
//             <h2 className="text-xl font-bold mb-4">
//               {showNote.about}
//             </h2>
//             <p className="text-gray-700">{showNote.text}</p>
//           </div>
//           <div className="space-x-2">
//           <button className="text-blue-500 hover:underline">Edit</button>
//           <button className="text-red-500 hover:underline">Delete</button>
//         </div>
//         </div>
// )
// }