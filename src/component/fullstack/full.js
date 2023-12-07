import Box from '../boxcontent/content';
import './full.css';
const Fullstack = (props) =>{
    const Full = props;
    console.log('list:',Full);
    return(
        <div>
            <h1 className='padding'>Full Stack Development</h1>
            <br />
            <h3 className='padding'>Are you a curious geek with an unstoppable urge to develop? Then, your Full Stack Development knack would be sun-glazed with an innovative and informative piece of knowledge that comes from Top industrialists and Appreneurs!</h3>
            <br />
            <h3 className='padding'>The GUVI Blog’s Full Stack Development category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!</h3>
            <hr></hr>
            <div className='box'>
              {props.Full.map((full, index) => 
               <Box  full={full} key={index} />
              )};
            </div>
        </div>
    )
};

export default Fullstack;