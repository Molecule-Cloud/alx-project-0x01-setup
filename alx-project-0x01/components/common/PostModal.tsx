import { PostData, PostModalProps } from "@/interfaces"
import { useState } from "react"

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit } ) => { 
    const [post, setPost] = useState<PostData>({
        userId: 1,
        title: "",
        body: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPost((prevPost) => ({ ...prevPost, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(post);
        onClose();
    }
    return (
        <>
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white rouded lg p-8 shadow-lg w-full max-x-md">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="userId" className="block text-gray-700 font-md mb-2">
                                User ID
                            </label>
                            <input type="number" id="userId" name="userId" value={post.userId} onChange={handleChange}
                                className=" w-full  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder" placeholder="Enter post title"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="body" className="block text-gray-700 font-medium mb-2">
                                Body
                            </label>
                            <textarea name="body" id="body" value="{post.body}" onChange={handleChange} rows={4} placeholder="Enter post content"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </textarea>
                        </div>
                        <div className="flex justify-between items-center">
                            <button type="button" onClick={onClose}
                             className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outine-none">
                                Cancel
                            </button>
                            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                                Add Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};


export default PostModal;