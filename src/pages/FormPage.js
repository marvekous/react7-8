import React from 'react'
import { useState } from 'react'
const Conculete = () => {
    const [one, setOne] = useState("")
    const [two, setTwo] = useState("")

    return (
        <div>
            <input onChange={(e) => {
                setOne(e.target.value)
            }} type="number" />
            <input type="number" onChange={(e) => {
                setTwo(e.target.value)
            }} />
            <button onClick={() => {

                if (one == 0 || two == 0) {
                    alert("заполните поля")
                }
                else {

                    alert(+one + +two)
                }
            }}>+</button>
            <button onClick={() => {

                if (one == 0 || two == 0) {
                    alert("заполните поля")
                }
                else {

                    alert(+one - +two)
                }
            }}>-</button>
            <button onClick={() => {

                if (one == 0 || two == 0) {
                    alert("заполните поля")
                }
                else {

                    alert(+one * +two)
                }
            }}>*</button>
            <button onClick={() => {

                if (one == 0 || two == 0) {
                    alert("заполните поля")
                }
                else {

                    alert(+one / +two)
                }
            }}>/</button></div>
    )
}

export default Conculete