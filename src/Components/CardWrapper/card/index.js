import "./index.css"
import {FiHeart as HeartIcon} from "react-icons/fi"
const Card = ({detail})=>{
    const {price,url,name,location} = detail;
    return (
        <div className="Card">
            <img src={url} alt={name} />
            <div className="card-detail">
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div><span>${price}</span>/month</div>
                    <HeartIcon color="red" size="20px"/>
                </div>
                <h2>{name}</h2>
                <p style={{color:"grey"}}>L-42,Lajpat Nagar,{location}</p>
                <h3>India</h3>
            </div>
        </div>
    )
}   
export {Card}   