import React, { useContext } from 'react';
import { a } from './ParentContext'






export function ChildA() {
    console.log('childa')
    return (
        <div>
            <h1>Child A</h1>
            <ChildB></ChildB>
        </div>
    )
}




export function ChildB() {
    console.log('child b')
    return (
        <div>
            <h1>Child B</h1>
            <ChildC></ChildC>
        </div>
    )
}




export function ChildC() {

    const c = useContext(a)

    console.log('child c')
    return (
        <div>
            <h1>Child C</h1>
            <h3>count-{c.count}</h3>
            <h3>number-{c.number}</h3>
        </div>
    )
}




