import React, { useState } from 'react'
import { ChildA } from './ChildContext'

export const a = React.createContext()



function ParentContext() {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)



    console.log('parentcontext')
    return (
        <div>
            <button onClick={() => setCount(count + 1)} >click count</button>
            <button onClick={() => setNumber(number + 2)} >click number</button>

            <a.Provider value={{ count: count, number: number }}>
                <ChildA></ChildA>
            </a.Provider>
        </div>
    )
}

export default ParentContext
