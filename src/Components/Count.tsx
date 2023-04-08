import {FC, useEffect, useRef, useState} from "react";


export const Count:FC<{start:number,end:number}> = ({start,end}) => {
    const [count,setCount] = useState(start)
    let timer = useRef<any>(null)

    useEffect(() => {
        timer.current = setInterval(() => setCount(prevState => prevState+1),10)
        return () => {
            clearInterval(timer.current)
        }
    },[])

    useEffect(() => {
        if(count === end || count > end){
            clearInterval(timer.current)
        }
    },[count])

    return <span>{count}</span>
}