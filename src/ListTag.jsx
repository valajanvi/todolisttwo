import React from 'react';
const ListTag=(props)=>{
    
    
    
    
    


    
      
             return (
             
            <>
            <div classname="divoflist">
            <i className="fa fa-times" aria-hidden="true" />
             <li><button class="btn-hero" onClick={()=>
             {  
                 props.onSelect(props.id);
             }}>⨯</button>{props.list}</li>
            </div>
            </>
             
             )
      

}
export default ListTag;