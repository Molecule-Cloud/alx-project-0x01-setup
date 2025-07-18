import { UserModalProps, UserData } from "@/interfaces";
import { FormEvent, useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [post, setPost] = useState<UserData> ({
        id: 1,
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: "",
        }
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setPost((prevPost) => ({ ...prevPost, [name]: value}))
 
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(post)
        onClose();
    }

    return (
        <div className = "fixed inset-0 bg-gray-900 bg-opacity-50 flex justify items-center">
            <div className=" bg-white rounded-lg p-8 shadow-lg w-full max-x-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800"> Add New User </h2>
                <form action="submit" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="UserName" className="block text-gray-700 font-md mb-2">
                            User ID
                        </label>
                        <input type="number" id="userId" name="userName" value={post.id} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                            Title
                        </label>
                        <input type="text" id="title" name="title" value={post.name} onChange={handleChange} placeholder="enter username" 
                            className ="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className ="mb-4">
                        <label htmlFor="body" className="block text-gray-700 font-medium mb-2">
                            Body
                        </label>
                        <textarea id="body" name="body" value={post.username} onChange={handleChange} placeholder="enter email"
                            className ="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                            Add User
                        </button>
                        <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-700 px-6 py-2 transition">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserModal;


