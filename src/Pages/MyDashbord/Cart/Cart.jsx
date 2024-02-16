import { FaTrashAlt } from "react-icons/fa";
import UseCart from "../../../Components/Hooks/UseCart";
import Swal from "sweetalert2";
import UseAxiousSecure from "../../../Components/Hooks/UseAxiousSecure";


const Cart = () => {
    const [cart, refetch] = UseCart()
    const axiousSecure = UseAxiousSecure()

    const handleDelet = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // 
                axiousSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    // You can get the total price by useing *reduce* instate of *forEach*..........

    //     let totalprice = 0 ;
    //    cart.forEach(item => {
    //     totalprice = totalprice + item.price
    //    })

    const totalprice = cart.reduce((total, item) => total + item.price, 0)


    return (
        <div>
            <div className="flex justify-evenly">
                <h1 className="text-4xl">Items: {cart.length}</h1>
                <h1 className="text-4xl">Total Price:{totalprice}</h1>
                <button className="btn bg-green-400">pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{item.name}</span>
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button onClick={() => handleDelet(item._id)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;