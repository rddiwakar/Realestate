import { Card } from "./card"
const CardsWrapper = ({array})=>{
    return(
        <div>
            {array.map(item => {
                return <Card detail={item}  />
            })}
        </div>
    )
}
export {CardsWrapper}