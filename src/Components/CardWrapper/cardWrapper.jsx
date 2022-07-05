import { Card } from "./card";
import './cardwrapper.css'
const CardsWrapper = ({array})=>{
    return(
        <div className="CardWrapper">
            {array.map(item => {
                return <Card detail={item} key={item.id}  />
            })}
        </div>
    )
}
export {CardsWrapper}