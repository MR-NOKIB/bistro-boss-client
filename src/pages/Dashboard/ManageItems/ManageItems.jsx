import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import { TbEdit } from "react-icons/tb";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    const handleDeleteItem = async (item) => {
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
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted`,
                        icon: "success"
                    });
                    console.log(res.data)
                }
            }
        });
    }
    return (
        <div>
            <SectionTitle
                heading="Manage All Items"
                subHeading="Hurry Up"
            ></SectionTitle>

            <div>
                <div className='my-4'>
                    <h2 className='text-4xl'>Total Items:{menu.length}</h2>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td className='avatar'>
                                        <div className='mask h-[75px] w-[75px]'>
                                            <img className='' src={item.image} alt="" />
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td className=''>{item.price}</td>

                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button
                                                className="rounded px-2 py-2 bg-[#D1A054] hover:bg-[#f2cb92da]"
                                            >
                                                <TbEdit className='text-xl' />
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost btn-lg"
                                        >
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;