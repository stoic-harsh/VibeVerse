import './loader.css';

export default function loader(){
    return <div className="loader" style={{'--width': '15vw'}}>
        <div style={{"--i":"1"}} />
        <div style={{"--i":"2"}} />
        <div style={{"--i":"3"}} />
        <div style={{"--i":"4"}} />
        <div style={{"--i":"5"}} />
        <div style={{"--i":"6"}} />
        <div style={{"--i":"7"}} />
        <div style={{"--i":"8"}} />
        <div style={{"--i":"9"}} />
        <div style={{'--i':'10'}}/>
        <div style={{'--i':'11'}}/>
        <div style={{'--i':'12'}}/>
    </div>;
}