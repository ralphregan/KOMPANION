import { useState } from "react";
import FormCOmp from "./Form";
import Header from "../Header";
import PopUp from "./PopOut";
import JournalAndNote from "./sendFormData";
import NoteComponent from "./Note";
import NotePOP from "./NotePopOut";
import NoteAndButton from "./NoteAndButtonComponent";

export default function App3() {
    const [createNote, setCreateNote] = useState(false);
    const [createJournal, setCreateJournal] = useState(false);
    const [hideForm, setHideForm] = useState(false);
    const [hideCreateBtn, setHideCreateBtn] = useState(false);
    const [noteAndJournal, setNoteAndJournal] = useState([]);
    const [noteData, setNoteData] = useState("");
    const [showNote, setShowNote] = useState(null);
  
    function handleShowNote(note) {
      setShowNote((prev) => (prev === note ? null : note)); // Toggle the note modal
    }
  
  
    function handleSubmission(formDATA) {
      setNoteData(formDATA);
      setNoteAndJournal((prev) => [formDATA, ...prev]);
      setHideForm((prev) => !prev);
    }
  
    return (
      <div className="bg-gradient-to-b from-teal-200 to-rose-100 h-screen w-screen">
        <Header />
       
        <div className="flex p-5 ">

            <NoteAndButton setHideCreateBtn={setHideCreateBtn} showNote={showNote} handleShowNote ={handleShowNote}
            NoteComponent={NoteComponent}
            noteAndJournal={noteAndJournal} />
          
          <div> 
          <PopUp
          openPopUp={hideCreateBtn}
          closePopUp={setHideCreateBtn}
          setCreateJournal={setCreateJournal}
          setCreateNote={setCreateNote}
          setHideForm={setHideForm}
        />
          </div>
  
          {/* //Model for the PopOut */}
          <NotePOP showNote={showNote} handleClose={() => setShowNote(null)} />
  
          {hideForm  && (
            <FormCOmp
              typeOfForm={createNote ? "note" : createJournal ? "journal" : setHideForm(false) }
              onSubmit={handleSubmission}
            />
          )}
        </div>
  
        <JournalAndNote FormData={noteData} />
      </div>
    );
  }
// export default function App3(params) {
//   const [createNote, setCreateNote] = useState(false);
//   const [createJournal, setCreateJournal] = useState(false);
//   const [hideForm, setHideForm] = useState(false);
//   const [hideCreateBtn, setHideCreateBtn] = useState(false);
//   const [noteAndJournal, setNoteAndJournal] = useState([]);
//   const [noteData, setNoteData] = useState("")
//   const [showNote, setShowNote]=useState("")

//   function handleShowNote(prop){
// setShowNote(prev => (prev === prop ? null : prop))

//   }

//   function handleSubmission(formDATA) {
//     console.log(formDATA);
//     setNoteData(formDATA)
//     setNoteAndJournal((prev)=> [formDATA, ...prev]);
//     setHideForm((prev)=>!prev)
//   }


//   return (
//     <div className="bg-gradient-to-b from-teal-200 to-rose-100 h-screen w-screen">
//       <Header />
//       <PopUp
//         openPopUp={hideCreateBtn}
//         closePopUp={setHideCreateBtn}
//         setCreateJournal={setCreateJournal}
//         setCreateNote={setCreateNote}
//         setHideForm={setHideForm}
//       />
//       <div className="flex p-5 ">
//         <div className="">
//             <button 
//               onClick={() => setHideCreateBtn((prev) => !prev)}
//               className="mb-4 bg-blue-300 text-blue-500 border border-blue-400 rounded-md px-5 py-2 hover:bg-blue-100"
//             >
//               Note{" "}
//             </button>
//             <div className= {showNote? ""  :"grid grid-cols-2 w-80 gap-4 " } >

//                 {noteAndJournal && noteAndJournal.map((item, index)=>  <NoteComponent key={index} notItem={item} handleShowNote={()=> handleShowNote(item)} showNote={showNote}/> )}
           
           
//             </div>
//             <NotePOP  showNote={showNote} />
//         </div>
    
//       {hideForm && (
//         <FormCOmp
//           typeOfForm={createNote ? "note" : "journal"}
//           onSubmit={handleSubmission}
//         />
//       )}
//       <div>
      

//       {
//         showNote && <NotePOP showNote={showNote} />
//       }
//       </div>
//        </div>
//       <JournalAndNote FormData={noteData} />
//     </div>
//   );
// }
