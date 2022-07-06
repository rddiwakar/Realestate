import { Card } from "./card";
import './cardwrapper.css'
const CardsWrapper = ({array})=>{
    return(
        <div className="CardWrapper">
            {
                array.length ? 
                array.map(item => {
                    return <Card detail={item} key={item.id}  />
                }):
                <div>
                    <h3>Properties are not found</h3>
                    <p>Please select Different filter </p>
                </div>
            }
        </div>
    )
}
export {CardsWrapper}