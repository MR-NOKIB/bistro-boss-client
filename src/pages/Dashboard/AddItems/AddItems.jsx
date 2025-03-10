import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imagebb and then get an url
        const imageFile = { image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        });
        if(res.data.success){
            // now send the menu item data to the server with the image url;
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            };
            // 
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                reset();
                // show success popup
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        };
        console.log('with image url',res.data);
    };

    return (
        <div>
            <SectionTitle
                heading="Add An Item"
                subHeading="What's New"
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset my-6">
                        <legend className="fieldset-legend">Recipe Name *</legend>
                        <input
                            type="text"
                            className="input w-full"
                            {...register("name", { required: true })}
                            placeholder="Recipe Name" />
                    </fieldset>
                    <div className='flex gap-6'>
                        {/* category */}
                        <fieldset className="fieldset my-6 w-full">
                            <legend className="fieldset-legend">Category *</legend>
                            <select {...register("category", { required: true })} defaultValue="Pick a color" className="select w-full">
                                <option disabled={true}>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </fieldset>
                        {/* Price */}
                        <fieldset className="fieldset my-6 w-full">
                            <legend className="fieldset-legend">Price *</legend>
                            <input
                                type="number"
                                className="input w-full"
                                {...register("price", { required: true })}
                                placeholder="price" />
                        </fieldset>
                    </div>
                    {/* recipe Details */}
                    <div className=''>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Recipe Details</legend>
                            <textarea {...register("recipe", { required: true })} className="textarea h-24 w-full" placeholder="Bio"></textarea>
                        </fieldset>
                    </div>

                    <div className='my-6'>
                        <input {...register("image", { required: true })} type="file" className="file-input" />
                    </div>
                    <button className='btn '>
                        Add Item <FaUtensils className='ml-3'></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;