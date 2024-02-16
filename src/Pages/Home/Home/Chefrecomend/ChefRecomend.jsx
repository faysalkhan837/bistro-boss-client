import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";


const ChefRecomend = () => {

    const [recomends, setRecomends] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const offers = data.filter(offerData => offerData.category === "offered")
                setRecomends(offers);
            })
    }, [])
    return (
       <div>
        <SectionTitle
        subHeading={"Should try"}
        heading={"chef recomends"}
        ></SectionTitle>
         <div className="flex space-x-4 my-4">
            {
                recomends.map(recomend =>
                    <div key={recomend._id} className="card w-1/4 card-compact bg-base-100 shadow-xl">
                        <figure><img src={recomend.image} alt="Shoes" /></figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">{recomend.name}!</h2>
                            <p>{recomend.recipe}</p>
                            <div className="card-actions justify-center">
                            <button className="btn btn-outline bg-slate-300 text-yellow-500 border-0 border-b-4">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
       </div>
    );
};

export default ChefRecomend;