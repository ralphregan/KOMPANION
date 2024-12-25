function CardComponent({Op1, Op2, h3Txt, pTxt , textColor , BG , mainBg , darkMode } ) {
    return (
       
            
            <div className={`${darkMode ? BG : "bg-white"}  p-6 rounded-xl shadow-sm hover:shadow-md transition`}>
            <div className={` w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${BG}`}>
              <Op1 className={textColor} size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{h3Txt}</h3>
            <p className="text-gray-600 mb-4">{pTxt}</p>
            <button className={`font-medium flex items-center hover:gap-2 transition-all ${textColor} ` } >
              Learn More <Op2 className="ml-1" size={16} />
            </button>
          </div>
       
    )
}

export default CardComponent
