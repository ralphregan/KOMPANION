export default function NoteAndButton({setHideCreateBtn, noteAndJournal, NoteComponent, handleShowNote,showNote}) {
    return(
        <div>
            <button
              onClick={() => setHideCreateBtn((prev) => !prev)}
              className="mb-4 bg-blue-300 text-blue-500 border border-blue-400 rounded-md px-5 py-2 hover:bg-blue-100"
            >
              Note{" "}
            </button>
            <div className={ "grid grid-cols-2 w-80 gap-4"}>
              {noteAndJournal.map((item, index) => (
                <NoteComponent
                  key={index}
                  notItem={item}
                  handleShowNote={handleShowNote}
                  showNote={showNote}
                />
              ))}
            </div>
            
          </div>
    )
}