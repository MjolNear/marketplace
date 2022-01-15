import CardLoader from "./CardLoader";

const CardListLoader = ({length = 12}) => (
    <>
        <div className="hidden md:flex md:flex-wrap">
            {[...Array(length).keys()].map((k) => {
                return (
                    <CardLoader key={k}/>
                )
            })}
        </div>
        <div className="md:hidden">
            <div className="w-full">
                <CardLoader/>
            </div>
        </div>
    </>
)

export default CardListLoader