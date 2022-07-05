import React from "react";

const FilterComponent = ({name,array}) => {
    console.log(array)
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <select>
                    {array.map(item => {
                        return <option key={item} value={item}>{item}</option>
                    })}
                </select>
            </div>
        </div>
    )
}
export  {FilterComponent};