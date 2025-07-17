import { PostProps } from "@/interfaces"


const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
    return (
        <>
            <div className = " max-w-xl ax-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadowduration-300">
                <div className="mb-4">
                    <h2 className="text-2xl font-semi-bold text-gray-800"> {title} </h2>
                </div>
                <p className="text-gray-600">{body}</p>
                <div className="mt-4 flex-center justify-between text-sm text-gray-500"></div>
                <span>User ID: {userId} </span>
                <span>Post ID: {id} </span>
            </div>
        </>
    )
}

export default PostCard; 