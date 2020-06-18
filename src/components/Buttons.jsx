import React, {Fragment} from 'react';

const Buttons = ({id, setId}) => {

    const handleClick = e => {
        if(e.target.name === 'more'){
            setId(id+1)
        }else if(e.target.name === 'less') {
            if(id === 1) {
                setId(591)
            }else {
                setId(id-1)
            }
        }
    }

    return ( 
        <Fragment>
            <button  
                className="btnMore"
                name="more"
                onClick={handleClick}
            ><i className="fas fa-arrow-right"></i></button>
            <button  
                className="btnLess"
                name="less"
                onClick={handleClick}
            ><i className="fas fa-arrow-left"></i></button>
        </Fragment>
     );
}
 
export default Buttons;