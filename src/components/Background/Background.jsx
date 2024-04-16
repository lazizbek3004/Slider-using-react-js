import './Background.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'

export const Background = ({heroCount}) => {
  
        if(heroCount===0){
            return(
                <div>
                    <img src={image1} alt="" className="Background" />
                </div>
                
            );
        }else if(heroCount === 1){
            return(
                <img src={image2} className="Background" alt="" />
            )
        }else if(heroCount === 2){
            return(
                <img src={image3} className="Background" alt="" />
            )
        }

    
}
