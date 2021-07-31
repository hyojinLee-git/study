import React ,{Component}from 'react';

const rspCoords={
    바위:'0',
    가위: '-142px',
    보: '-284px'
}
const scores={
    가위:1,
    바위:0,
    보:-1
}

class RSPClass extends Component{
    state={
        result:'',
        imgCoord:0,
        score:0,
    }
    interval;

    componentDidMount(){    //컴포넌트가 첫 렌더링된 후, 비동기 요청
        this.interval=setInterval(() => {
            const {imgCoord}=this.state;
            if(imgCoord===rspCoords.가위){
                this.setState({
                    imgCoord:rspCoords.바위
                })
            } else if(imgCoord===rspCoords.바위){
                this.setState({
                    imgCoord:rspCoords.보
                })
            }else if(imgCoord===rspCoords.보){
                this.setState({
                    imgCoord:rspCoords.가위
                })
            }
        }, 1000);
        
    }
    componentWillUnmount(){   //컴포넌트가 제거되기 직전, 비동기 요청 정리
        
    }

    render(){
        const {result, score, imgCoord}=this.state;

        return(
            <>
            
            </>
        )
    }
}