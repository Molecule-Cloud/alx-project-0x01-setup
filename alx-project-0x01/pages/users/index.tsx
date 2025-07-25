import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps, PostData } from "@/interfaces";
import { useState } from 'react';
import PostUserModal from '@/components/common/UserModal';

interface UserPageProps {
  posts: UserProps[];
}


const Users: React.FC<UserPageProps> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [post, setPost] = useState<PostData | null>(null);
    const handleAddUser = (newUser: PostData) => {
        setUser({...newUser, id: users.length + 1});
    };

  
    return (
        <>
            <Header />
            <div className="flex flex-col h-screen p-4">

                <main className="p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold mb-4">Users</h1>
                            <button onClick={() => setModalOpen(true)} className=" bg-blue-500 text-white px-3 py-2 rounded sm">Add Uers</button>
                        </div>
                    <div className="flex justify-between flex-col w-auto"> 
                        <div className="grid grid-cols-3 gap-2">

                        {
                            posts.map((user) => (
                                // Used user.id instead of index fir key prop is a good practice
                                // as it helps React identify which items have changed, are added, or removed.
                                <UserCard
                                    {...user}
                                    key={user.id}
                                />
                            ))
                        }
                        </div>
                    </div>
                </main>
                {
                    isModalOpen && (
                        <PostUserModal
                            onClose={() => setModalOpen(false)}
                            onSubmit={handleSubmit}
                        />
                    )
                }
            </div>
        </>
    );
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const props = await response.json();

    return {
        props: {
            posts: props
        }
    }
}

export default Users;

function setUser(arg0: { id: any; userId: number; title: string; body: string; }) {
    throw new Error('Function not implemented.');
}
