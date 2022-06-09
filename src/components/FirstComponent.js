import React from 'react'

export const FirstComponent = () => {

    let name = "Javier";
    let items = [
        "item0",
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
    ]

  return (
    <div>
        FirstComponent
        <p>Mi name is: {name}</p>

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
