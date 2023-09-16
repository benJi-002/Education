import {useState} from 'react';
import Form from './Form';
import dataContext from './context';
import '../App.css'; 

// class InputComponent extends Component {

//     static contextType = dataContext

//     render() {
//         return (
//             {/* <Consumer>
//                 {
//                     value => {
//                         return (
//                             <input 
//                                 value={value.mail} 
//                                 type="email" 
//                                 className='form-control' 
//                                 placeholder="name@example.com"
//                             />
//                         )
//                     }
//                 }
//             </Consumer> */}

//             <input 
//                 value={this.context.mail} 
//                 type="email" 
//                 className='form-control' 
//                 placeholder="name@example.com"
//             />
//         )
//     }
// }
const {Provider/* , Consumer */} = dataContext;

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail()  {
        setData({...data, mail: 'test@gmail.com'})
    }

    return (
        <Provider value={data}>
            <Form text={data.text}/>
            <button 
                onClick={() => setData({
                    mail: "name@example.com",
                    text: 'some text',
                    forceChangeMail: forceChangeMail
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;
