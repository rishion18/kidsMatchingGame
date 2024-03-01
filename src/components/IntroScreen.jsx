import bgImg from '../images/background.png'
import mon1 from '../images/monkey1.png'
import txt from '../images/txt.png'
import back from '../images/back.png'
import yes from '../images/yes.png'
import progressBarDis from '../images/progressBarDis.png'
import bananaDis from '../images/bananaDis.png'
import instxt1 from '../images/instxt1.png'
import { useNavigate } from 'react-router-dom'

const IntroScreen = () => {

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
                onClick={() => {navigate('/instruction')}}
                src={yes} 
                alt='yes' 
                className='absolute w-[200px] h-auto left-1/2 transform translate-x-[120px] translate-y-[525px]' // Adjust the translate-y value as needed
            />
            <div className='absolute w-[370px] left-1/2 transform translate-x-[50px] translate-y-[70px]'>
              <div className='relative'>
                    <img 
                        src={txt} 
                        alt='txt'
                        className='relative'  // Adjust the translate-y value as needed
                    />
                    <img src={instxt1} alt='wel' className='absolute w-[250px] transform translate-x-[50px] -translate-y-[140px]'/>

               </div>  
            </div> 
            <img 
                src={back}
                onClick={() => {navigate('/next')}} 
                alt='next' 
                className='absolute w-[100px] h-auto left-1/2 transform -translate-x-[450px] translate-y-8 ' // Adjust the translate-y value as needed
            />
            <img 
                src={progressBarDis}
                alt='progressBarDis' 
                className='absolute w-[500px] h-auto left-1/2 transform -translate-x-[280px] translate-y-6 ' // Adjust the translate-y value as needed
            />
            <img 
                src={bananaDis}
                alt='bananaDis' 
                className='absolute w-[100px] h-auto transform translate-x-[200px] translate-y-[5px] ' // Adjust the translate-y value as needed
            />          
        </div>
    )
}

export default IntroScreen;
