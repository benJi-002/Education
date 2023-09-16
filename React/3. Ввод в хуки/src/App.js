import { useState, useEffect, useCallback, useMemo} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `Slide ${this.state.slide}`
//     }

//     componentDidUpdate() {
//         document.title = `Slide ${this.state.slide}`
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }

const countTotal = (num) => {
    console.log('counting...');
    return num;
}

const Slider = (props) => {

    const [slide, setSlide] = useState(1);
    const [autoplay, setAutoplay] = useState(false);

    const getSomeImages = useCallback(() => {
        console.log('fetching')
        return [
            'https://cdn.xxl.thumbs.canstockphoto.ru/%D1%83%D0%BF%D1%83%D1%89%D0%B5%D0%BD%D0%B8%D0%B5-%D1%82%D1%80%D0%B0%D0%B2%D0%B0-%D0%BD%D0%B5%D0%B1%D0%BE-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F-%D1%84%D1%83%D1%82%D0%B0%D0%B6_csp5943380.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIzsA1X-lmWxaG7EB9OgI6UwgPrxSOKIm3nMvRnKOaZzmMYLMXa2iElwFmd88v4OWL60&usqp=CAU'
        ]
    }, []);

    useEffect(() => {
        document.title = `Slide ${slide}`;

    }, [slide]); 
    // вызовется только если изменилась переменная slide

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }
    
    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay);
    }

    const total = useMemo(() => {
        return countTotal(slide);
    }, [slide]);

    const style = useMemo(() => ({
        color: slide > 4 ? 'red' : 'black'
    }), [slide])

    useEffect(() => {
        console.log('styles!');
    }, [style])
            
    return (
        <Container>
            <div className="slider w-50 m-auto">



                <Slide getSomeImages={getSomeImages}/>

                <div style={style} className="text-center mt-5">
                    Total slides: {total}
                </div>
                <div className="text-center mt-5">
                    Active slide {slide} 
                    <br/>
                    {autoplay ? 'auto' : null} 
                </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => toggleAutoplay()}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (
        <>
            {images.map((url, i) => <img 
                                        key={i} 
                                        className="d-block w-100" 
                                        src={url} 
                                        alt="slide" 
                                    />)}
        </>
    )
}

function App() {

    const [slider, setSlider] = useState(true);

    return (
        <>
            <button onClick={() => setSlider(false)}>Delete slider</button>
            {slider ? <Slider/> : null}
        </>
    );
}

export default App;
