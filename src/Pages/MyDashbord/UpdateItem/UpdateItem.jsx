

import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../../Components/Hooks/UseAxiosPublic";
import UseAxiousSecure from "../../../Components/Hooks/UseAxiousSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name, recipe, category, price, _id} = useLoaderData()
    
    const axiosPublic = UseAxiosPublic();
    const axiousSecure = UseAxiousSecure();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit =async (data) => {
        console.log(data)
        const imageFile = {image:data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        if(res.data.success){
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiousSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                // for empty/reset the form
                reset(); 
                // show popup 
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name}"is addaded to the menu"`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log(res.data);
    }
    return (
        <div>
            <SectionTitle subHeading='Refresh item' heading='update item'></SectionTitle>
            <div>
                <form className="bg-slate-300 p-5" onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe name*</span>
                        </div>
                        <input defaultValue={name} {...register("name", { required: true })} type="text" placeholder="Recipe name" className="input input-bordered w-full" />
                    </label>
                    <div className="flex gap-6">
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={category} {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input defaultValue={price} {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea defaultValue={recipe} {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>
                    <div className="form-control w-full my-6">
                        <input {...register("image",{required:true} )} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Update menu items 
                    </button>
                </form>
            </div>

        </div>
    );
};

export default UpdateItem;