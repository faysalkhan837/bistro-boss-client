import { FaEdit, FaTrashAlt } from "react-icons/fa";
import UseMenu from "../../../Components/Hooks/UseMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseAxiousSecure from "../../../Components/Hooks/UseAxiousSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu, refetch] = UseMenu();
    const axiousSecure = UseAxiousSecure();
    const handleDeletItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiousSecure.delete(`/menu/${item._id}`)
                console.log(res.data)
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }

    return (
        <div>
            <SectionTitle heading={"Manage All Items"} subHeading={"Hurry Up"}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // we take index for set the number of items.
                            menu.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
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
                                    {item.name}
                                </td>
                                <td className="text-left">{item.price}</td>
                                <td>
                                    <Link to={`/dashbord/updateItem/${item._id}`}>
                                        <button className="btn btn-ghost bg-orange-400 btn-md">
                                            <FaEdit className="text-white"></FaEdit>
                                        </button>
                                    </Link>

                                </td>
                                <td>
                                    <button onClick={() => handleDeletItem(item)} className="btn btn-ghost btn-md">
                                        <FaTrashAlt className="text-red-600 text-xl"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;