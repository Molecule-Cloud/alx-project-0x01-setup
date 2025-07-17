import { Button } from '@/components/common/Button';
import { Postcard } from '@/components/common/PostCard';

export { Button } from '@/components/common/Button';

const Home: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-7xl font-thin"> Welcome Page </h1>
          <Postcard />
        <div>
            <Button
              className="mt-10"
              onClick={() => {
                alert('Button clicked!');
              }}
              >
              Click Me
            </Button>
        </div>
      </div>
    </>
  )
  
}


export default Home;