import { useNavigate } from 'react-router-dom'
import bgImg from '../images/background.png'
import mon1 from '../images/monkey1.png'
import txt from '../images/txt.png'
import start from '../images/start.png'

const Home = () => {

  const navigate = useNavigate();

    return(
        <div className="w-screen h-screen flex justify-center relative">
            <img 
                src={bgImg}
                alt="bg-img"
                className='w-auto h-full'
            />
            <img 
                src={mon1} 
                alt='mon1' 
                className='absolute w-auto h-[450px] left-1/2 transform -translate-x-1/2 translate-y-[140px]' // Adjust the translate-y value as needed
            />
            <img 
                src={start}
                onClick={() => {navigate('/next')}} 
                alt='next' 
                className='absolute w-[200px] h-auto left-1/2 transform translate-x-[120px] translate-y-[525px]' // Adjust the translate-y value as needed
            />
            <div className='absolute w-[370px] left-1/2 transform translate-x-[50px] translate-y-[70px]'>
                <div className='relative'>
                    <img 
                        src={txt} 
                        alt='txt'
                        className='relative'
                    />
                    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold'>Welcome kiddo!</p>
                </div>
            </div>           
        </div>
    )
}

export default Home;
