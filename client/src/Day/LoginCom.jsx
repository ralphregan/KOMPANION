function LoginCom({closePopup, children, dispatch}) {

    return (

        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50" onClick={()=>dispatch({type: "exitRegister"}) }>

        <div onClick={(e) => e.stopPropagation()} >
    
    

        {children}
   
         
        </div>
      
    </div>
    )
}

export default LoginCom
