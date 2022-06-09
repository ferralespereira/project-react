import React, {useState} from 'react'

export const FirstComponent = () => {

    const [name, setName] = useState("Javier");

    let items = [
        "item0",
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
    ]

    const changeName = (new_name) => {
        setName(new_name); 
    }

  return (
    <div>
        FirstComponent
        <p>Mi name is: <strong className={ name.length <= 4 ? 'green' : 'red'}>{name}</strong></p>
        
        <input type="text" onChange={ e => changeName(e.target.value)} placeholder="Change Name"></input>

        <button onClick={ e => changeName("lola")}>click here to change name to Lola</button>

        <ul>
            {
                items.map( (item, index) => {
                    return (<li key={index}>
                        {item}
                    </li>)
                })
            }
        </ul>
    </div>
  )
}
