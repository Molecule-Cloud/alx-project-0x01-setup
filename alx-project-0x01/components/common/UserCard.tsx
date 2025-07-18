import { UserProps } from "@/interfaces"


const UserCard: React.FC <UserProps>= ({
    id, name, username, email, phone, website, address, company
}) => {
    return (

        <div className="max-w-xl ax-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadowduration-300">
            <div className="flex flex-row items-center justify-between mb-3">
                <img
                src={`https://i.pravatar.cc/150?u=${id}`}  // Using user ID
                alt="Avatar"
                className="w-24 h-24 rounded-full"
                />
                <h2 className="text-lg font-semibold">{id}</h2>
            </div>
            <div>
                    <div className = "flex flec-row items-center gap-4 mb-4 justify-between">
                        <p className="text-gray-600">{name}</p>
                        <p className="text-gray-500">@{username}</p>
                    </div>
                    <p className="text-gray-500">{email}</p>
                    <p className="text-gray-500">{phone}</p>
                    <p className="text-gray-500">{website}</p>
                    <p className="text-gray-500">{address.street}, {address.city}, {address.zipcode}</p>
                    <p className="text-gray-500">{company.name}</p>
                    <p className="text-gray-500">{company.catchPhrase}</p>
                    <p className="text-gray-500">{company.bs}</p>
            </div>
        </div>         
    )
}


export default UserCard;