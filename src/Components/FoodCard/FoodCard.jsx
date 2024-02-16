import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";

import UseAxiousSecure from "../Hooks/UseAxiousSecure";
import UseCart from "../Hooks/UseCart";


const FoodCard = ({item}) => {
    const axiousSecure = UseAxiousSecure()
    const navigate = useNavigate();
    const location = useLocation();
    const {name, image, recipe, price, _id} = item;
    const {user} = UseAuth();
    const [,refetch] = UseCart();
    const handleAddtoCart = () =>{
        if(user && user.email){
            const cartItem ={
                menuId:_id,
                email:user.email,
                name,
                image,
                price
            }
            // axios.post("http://localhost:5000/carts", cartItem)
            axiousSecure.post("/carts", cartItem)
            .then(res =>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} is added to cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   refetch cart to update the cart items counts
                      refetch()
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not logIN",
                text: "please login to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, logIn!"
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login', {state:{from:location}});
                }
              });
        }
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
        <img src={image} alt="Shoes" />
        <p className="absolute top-3 right-6 bg-slate-700 text-white px-3">{price}</p>
        </figure>
        <div className="card-body items-center">
            <h2 className="card-title">{name}!</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center">
            <button onClick={handleAddtoCart} className="btn btn-outline bg-slate-300 text-yellow-500 border-0 border-b-4">Add to Cart</button>
            </div>
        </div>
    </div>
    );
};

export default FoodCard;