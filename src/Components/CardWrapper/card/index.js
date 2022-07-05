const Card = ({detail})=>{
    const {price,url,name,location} = detail;
    return (
        <div>
            <image src={url} alt={name} />
            <h2>{name}</h2>
            <div>{price}</div>
            <h3>{location}</h3>
        </div>
    )
}   
export {Card}   