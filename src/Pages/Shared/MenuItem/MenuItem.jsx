

const MenuItem = ({item}) => {
    const {name, image, recipe, price} = item;
    return (
        <div className="flex gap-2">
            <img className="w-[100px]" style={{borderRadius:'0 200px 200px 200px',borderColor:'red',borderWidth:"5px"}} src={image} alt="" />
            <div>
                <h3 className="text-2xl uppercase">{name}--------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;