import { Link } from "react-router-dom";
import "../css/TypeStyle.css";

function TypeItem(props) {
    //console.log(props);
    return (
        <div>
            <Link to={'/typeResults/' + props.name} state={props.name}>
            
            {<button className={`${props.name}`}>{props.name}</button>}
            </Link>
        </div>
    );
}

export default TypeItem;