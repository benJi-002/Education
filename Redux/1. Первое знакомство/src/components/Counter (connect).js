import { connect } from "react-redux";
import * as actions from "../actions";

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>
    )
}

// вытаскиваем свойства и помещаем их в компонент как пропсы
const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

// вытаскиваем дейсвия (методы) и помещаем их в компонент как пропсы
// НО если передаётся не функция, а объект, то можно actions передавать напрямую в connect() и она автоматически обернётся в dispatch под капотом
// const mapDispatchToProps = (dispatch) => {

//     return bindActionCreators(actions, dispatch)

// }

export default connect(mapStateToProps, actions)(Counter);