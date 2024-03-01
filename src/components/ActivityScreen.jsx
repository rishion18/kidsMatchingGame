import bgImg from '../images/background.png'
import back from '../images/back.png'
import progressBarDis from '../images/progressBarDis.png'
import bananaDis from '../images/bananaDis.png'
import cardPink from '../images/cardPink.png'
import cardBlue from '../images/cardBlue.png'
import cardApple from '../images/cardApple.png'
import blueApple from '../images/blueApple.png'
import blueGrape from '../images/blueGrape.png'
import blueCherry from '../images/blueCherry.png'
import blueBanana from '../images/blueBanana.png'
import blueOrange from '../images/blueOrange.png'
import bluePear from '../images/bluePear.png'
import cardGrape from '../images/cardGrape.png'
import cardCherry from '../images/cardCherry.png'
import cardBanana from '../images/cardBanana.png'
import cardPear from '../images/cardPear.png'
import cardOrange from '../images/cardOrange.png'
import { useNavigate } from 'react-router-dom'
import FlipCard from './FlipCard'
import MatchCard from './MatchCard'
import AlertMatch from './AlertMatch'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Completed from './Completed'

const ActivityScreen = () => {

const navigate = useNavigate();

const{matchAlert , completed} = useSelector(state => state.Events);

const[msg , setMsg] = useState(true)

useEffect(() => {
    setTimeout(() => {
        setMsg(false)
    } , 6000)
} , [])

    return(
        <div className="w-screen h-screen flex justify-center relative">
            <img 
                src={bgImg}
                alt="bg-img"
                className={`w-auto h-full ${matchAlert || completed ? 'opacity-20':''}
`}
            />
            <img 
                src={back}
                onClick={() => {navigate('/instruction')}} 
                alt='next' 
                className={`absolute w-[100px] h-auto left-1/2 transform -translate-x-[450px] translate-y-8 ${completed?'opacity-20':''}`} 
            />
            <img 
                src={progressBarDis}
                alt='progressBarDis' 
                className={`absolute w-[500px] h-auto left-1/2 transform -translate-x-[280px] translate-y-6 ${matchAlert||completed ? 'opacity-20':''}
 `} 
            />
            <img 
                src={bananaDis}
                alt='bananaDis' 
                className={`absolute w-[100px] h-auto transform translate-x-[200px] translate-y-[5px] ${matchAlert||completed ? 'opacity-20':''}`} 
            />
            <Completed/>
            <p className={`font-bold text-appBlue text-[32px] absolute transform translate-x-0 translate-y-[120px] ${matchAlert||completed ? 'opacity-20':''} ${!msg ? 'hidden':''}`}>Memorize the images ...</p>
            <AlertMatch img1={cardPink} img2={cardBlue}/>
            <div className={`flex gap-5 absolute transform translate-y-[180px] ${matchAlert||completed ? 'opacity-20':''}`}>
                <div className='grid grid-cols-3 h-[350px] gap-2'>
                   <FlipCard val={'Pear'} front={cardPink} back={cardPear}  />
                   <FlipCard val={'Banana'} front={cardPink} back={cardBanana} />
                   <FlipCard val={'Apple'} front={cardPink} back={cardApple} />
                   <FlipCard val={'Orange'} front={cardPink} back={cardOrange} />
                   <FlipCard val={'Grape'} front={cardPink} back={cardGrape} />
                   <FlipCard val={'Cherry'} front={cardPink} back={cardCherry} />
                </div>
               <div className='grid grid-cols-3 h-[350px] gap-2'>
                  <MatchCard val={'Apple'} front={cardBlue} back={blueApple} />
                  <MatchCard val={'Orange'} front={cardBlue} back={blueOrange} />
                  <MatchCard val={'Grape'} front={cardBlue} back={blueGrape} />
                  <MatchCard val={'Cherry'} front={cardBlue} back={blueCherry} />
                  <MatchCard val={'Pear'} front={cardBlue} back={bluePear} />
                  <MatchCard val={'Banana'} front={cardBlue} back={blueBanana} />
               </div>
            </div>
         </div>
    )
}

export default ActivityScreen;

