import "./index.css"

const Card = ({detail})=>{
    const {price,url,name,location} = detail;
    return (
        <div className="Card">
            <img src={url} alt={name} />
            <div className="card-detail">
                <div><span>${price}</span>/month</div>
                <h2>{name}</h2>
                <h3>{location}</h3>
            </div>
        </div>
    )
}   
export {Card}   