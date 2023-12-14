import "./slider.css";
/*person images*/
import img_1 from "../assets/images/image-tanya.jpg";
import img_2 from "../assets/images/image-john.jpg";
/*icons*/
import previous from "../assets/images/icon-prev.svg"
import next from "../assets/images/icon-next.svg"
const Slider = (props) => {
    function change(){
        props.changeState(!props.state);
    }
    return(
        <section>
            {props.state?<img src={img_1}/>:<img src={img_2}/>}
            <div onClick={change}><img src={previous}/><img src={next}/></div>
        </section>
    )
}

export default Slider;