import bgImg from '../images/background.png'
import mon1 from '../images/monkey1.png'
import txt from '../images/txt.png'
import next from '../images/next.png'
import back from '../images/back.png'
import instxt from '../images/instxt.png'
import { useNavigate } from 'react-router-dom'

const Next = () => {

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
                src={next} 
                onClick={() => {navigate('/intro')}}
                alt='next' 
                className='absolute w-[200px] h-auto left-1/2 transform translate-x-[120px] translate-y-[525px]' // Adjust the translate-y value as needed
            />
            <div className='absolute w-[370px] left-1/2 transform translate-x-[50px] translate-y-[70px]'>
              <div className='relative'>
                    <img 
                        src={txt} 
                        alt='txt'
                        className='relative'  // Adjust the translate-y value as needed
                    />
                    <img src={instxt} alt='wel' className='absolute w-[250px] transform translate-x-[50px] -translate-y-[140px]'/>

               </div>  
            </div> 
            <img 
                src={back}
                onClick={() => {navigate('/')}} 
                alt='next' 
                className='absolute w-[100px] h-auto left-1/2 transform -translate-x-[450px] translate-y-8 ' // Adjust the translate-y value as needed
            />           
        </div>
    )
}

export default Next;
