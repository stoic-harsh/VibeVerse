import Title from '@/components/title';
import Welcome from '@/components/welcome';
import TextArea from '@/components/form.jsx';
import Response from '@/components/response';

const Home = ()=>{
    return <div className='h-screen w-screen relative bg-[#f6f7f9]'>
        <Title />
        <Welcome />
        <TextArea />
        <Response />
    </div>
}

export default Home;