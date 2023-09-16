const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');
 
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
 
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
 
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
 
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);}
}
 
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick() {    
        this.setState(state => ({      
            clicks: state.clicks + 1    
        }));  
    }
 
  render() {
    return (
      <div onClick={this.handleClick}>        
            <p>Количество кликов: {this.state.clicks}</p>
            <Modal>          
            <Child />
            </Modal> 

            <p>
                Откройте DevTools браузера,
                чтобы убедиться, что кнопка
                не является потомком блока div
                c обработчиком onClick.
            </p>
        </div>
    );
  }
}
 
function Child() {
    return (
        <div className="modal">
           <button>Кликните</button>    
        </div>
    );
}
 
ReactDOM.render(<Parent />, appRoot);