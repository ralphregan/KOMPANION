import { useEffect, useState } from "react";

export function useLocalStorageState (initaialValue, key){
    const [value, setValue] = useState(function() {

        const stroredValue = localStorage.getItem(key)
        return stroredValue?  JSON.parse(stroredValue) : initaialValue
    })

    useEffect(function(){
        localStorage.setItem(key, JSON.stringify(value))
    },[value,key])
    return [value, setValue]
}