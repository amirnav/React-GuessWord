import React , { Component, createRef }from 'react';
import PureCompo from './PureComponent';
import Fcomponent from './Fcomponent';

class ParentCompo extends Component {
    
    constructor(){
        super()

        this.componentRef = createRef();
    }    

    handleChangeCompoName = ()=>{
        this.componentRef.current.handleChangeName();
    }

    render(){
        return(
            <div>
                {/* ساخت کامپوننت تابعی */}
                {/* <Fcomponent/>  */}
                {/* ساخت کامپوننت کلاسی */}
                <PureCompo ref={this.componentRef}/>
                <button className="btn btn-info" onClick={this.handleChangeCompoName} >test</button>
            </div>
        )
    }
}

export default ParentCompo;