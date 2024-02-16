// import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Components/Hooks/UseMenu";

const Popularmenu = () => {
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(items => items.category === "popular")
    //             setMenu(popularItem)
    //         })
    // }, [])

    const [menu] = UseMenu()
    const popular = menu.filter(items => items.category === "popular");
    return (
        <section className="mb-10">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"from our menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
           <div className="text-center mt-5">
           <button className="btn btn-outline bg-slate-300 border-0 border-b-4">View full menu</button>
           </div>
        </section>
    );
};

export default Popularmenu;