function Stats({textColor, h4, p, darkMode}) {
    return (
        <div>
        <h4 className={`text-4xl font-bold mb-2 ${textColor}`}>{h4} </h4>
        <p className={`${darkMode ? textColor   : "text-gray-600"} `}>{p} </p>
      </div>
    )
}

export default Stats
