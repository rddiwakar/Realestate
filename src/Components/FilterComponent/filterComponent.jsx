import React from "react";
import "./filter.css"
const FilterComponent = ({title, name, array,value,handleChange }) => {
    return (
        <div className="FilterComponent">
            <div>{title}</div>
            <select name={name} value ={value} onChange={(event)=>handleChange(event)} >
                {array.map(item => {
                    return (
                    <option key={item} value={item} >
                        {item}
                    </option>
                    )
                })}
            </select>
        </div>
    )
}
export { FilterComponent };