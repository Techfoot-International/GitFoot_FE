import "./Container.css"

function Container(props){
    return <div className="Container">
   {props.component}
    </div>
}

export default Container;