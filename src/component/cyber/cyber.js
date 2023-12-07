import './cyber.css';
import Cyike from '../cybercontent/cybercontent';
const Cyber = (props) =>{
    const Cyber = props;
    console.log('lists:',Cyber);
    return(
     <div>
        <h1 className="padding">Cyber Security</h1>
        <br />
        <hr></hr>
        <div className='box'>
              {props.Cyber.map((cyber, index) => 
               <Cyike  cyber={cyber} key={index} />
              )};
            </div>

     </div>
    )
};

export default Cyber;