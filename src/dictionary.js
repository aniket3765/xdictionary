import { useState } from "react"

export default () => {
    const [defination, SetDefination] = useState();
    const [text, setText] = useState()
    const dictionary =
        [

            { word: "React", meaning: "A JavaScript library for building user interfaces." },

            { word: "Component", meaning: "A reusable building block in React." },

            { word: "State", meaning: "An object that stores data for a component." }

        ]

    const find = () => {

    let result = dictionary.find(i => (text).toLowerCase() == (i.word).toLowerCase())

    if(result) SetDefination(result.meaning)
        else 
        SetDefination('Word not found in the dictionary.')
    }

    return <div>
        <h1>
            Dictionary App
        </h1>
    <input type="text" onChange={(e) =>setText(e.target.value) }/>
    <button onClick={find}>Search</button>
    <h3>Definition:</h3> <p>{defination}</p>
    </div>
}