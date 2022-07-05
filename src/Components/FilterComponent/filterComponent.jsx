import React from "react";
import "./filter.css"
const FilterComponent = ({ name, array }) => {
    return (
        <div className="FilterComponent">
            <div>{name}</div>
            <select>
                {array.map(item => {
                    return <option key={item} value={item}>{item}</option>
                })}
            </select>
        </div>
    )
}
export { FilterComponent };