import bgImg from '../images/background.png'
import play from '../images/play.png'
import back from '../images/back.png'
import progressBarDis from '../images/progressBarDis.png'
import bananaDis from '../images/bananaDis.png'
import reactangle from '../images/rectangle.png'
import one from '../images/one.png'
import grSemi from '../images/greenSemi.png'
import orSemi from '../images/orSemi.png'
import two from '../images/two.png'
import thr from '../images/thr.png'
import cardPink from '../images/cardPink.png'
import cardApple from '../images/cardApple.png'
import selPink from '../images/selPink.png'
import hasImg from '../images/hasImg.png'
import selBlue from '../images/selBlue.png'
import selMatch from '../images/selMatch.png'
import has2 from '../images/has2.png'
import has31 from '../images/has31.png'
import has32 from '../images/has32.png'
import both from '../images/both.png'
import cardBlue from '../images/cardBlue.png'
import arrow1 from '../images/arrow1.png'
import { useNavigate } from 'react-router-dom'

const InstructionScreen = () => {

const navigate = useNavigate();

    return(
        <div className="w-screen h-screen flex justify-center relative">
            <img 
                src={bgImg}
                alt="bg-img"
                className='w-auto h-full'
            />
            <img 
                src={play}
                onClick={() => {navigate('/activityScreen')}} 
                alt='play' 
                className='absolute w-[200px] h-auto left-1/2 transform translate-x-[120px] translate-y-[525px]' // Adjust the translate-y value as needed
            />
            <img 
                src={back}
                onClick={() => {navigate('/intro')}} 
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
            <img 
                src={arrow1}
                alt='bananaDis' 
                className='absolute w-[500px] h-auto transform translate-x-[10px] translate-y-[200px] ' // Adjust the translate-y value as needed
            />            
            <div className='grid grid-cols-3 gap-[100px] absolute transform translate-y-[200px]'>
                <div className='relative'>    
                    <img src={reactangle} alt='rectangle' className='w-[230px]'/>
                    <img src={one} alt='one' 
                        className='w-[50px] absolute transform -translate-y-[120px]'/>
                    <img src={cardPink} alt='one' 
                        className='w-[130px] absolute transform -translate-y-[250px] translate-x-[40px]'/>
                    <img src={cardApple} alt='one' 
                        className='w-[110px] absolute transform -translate-y-[240px] translate-x-[90px] rotate-12'/>
                    <img src={selPink} alt='one' 
                        className='w-[110px] absolute transform -translate-y-[90px] translate-x-[70px]'/>
                    <img src={hasImg} alt='one' 
                        className='w-[110px] absolute transform -translate-y-[25px] translate-x-[70px]'/>                                                         
                </div>
                <div className='relative'>    
                    <img src={reactangle} alt='rectangle' className='w-[230px]'/>
                    <img src={grSemi} alt='grSemi' 
                        className='w-[50px] absolute transform -translate-y-[120px]'/>
                    <img src={two} alt='two' 
                        className='w-[40px] absolute transform -translate-y-[108px] translate-x-[4px]'/>
                    <img src={cardBlue} alt='one' 
                        className='w-[130px] absolute transform -translate-y-[250px] translate-x-[55px]'/>
                    <img src={selBlue} alt='one' 
                        className='w-[110px] absolute transform -translate-y-[90px] translate-x-[70px]'/>
                    <img src={has2} alt='one' 
                        className='w-[110px] absolute transform -translate-y-[25px] translate-x-[70px]'/>                                                           
                </div>
                <div className='relative'>    
                    <img src={reactangle} alt='rectangle' className='w-[230px]'/>
                    <img src={orSemi} alt='orSemi' 
                        className='w-[50px] absolute transform -translate-y-[120px]'/>
                    <img src={thr} alt='thr' 
                        className='w-[40px] absolute transform -translate-y-[108px] translate-x-[4px]'/>
                    <img src={both} alt='one' 
                        className='w-[200px] absolute transform -translate-y-[250px] translate-x-[25px]'/>
                    <img src={has31} alt='one' 
                        className='w-[110px] absolute transform -translate-y-[90px] translate-x-[70px]'/>
                    <img src={selMatch} alt='one' 
                        className='w-[130px] absolute transform -translate-y-[70px] translate-x-[60px]'/>
                    <img src={has32} alt='one' 
                        className='w-[120px] absolute transform -translate-y-[40px] translate-x-[70px]'/>                                                                                                     
                </div>
            </div>          
        </div>
    )
}

export default InstructionScreen;
