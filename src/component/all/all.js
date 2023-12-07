import Thing from '../allcontent/allcontent';
import './all.css';
const All = (props) => {
    const All={props};
    console.log('list:',All);
    return(
     <div>
        <h1>Full Stack Development</h1>
        <h1>Data Science</h1>
        <h1>Cyber Security</h1>
        <h1>Career</h1>
        <br />
        <hr></hr>
          <div className='box'>
              {props.All.map((all, index) => 
               <Thing  all={all} key={index} />
              )};
            </div>
     </div>
    )
};

export default All;