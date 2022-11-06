import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="card-group ">
      <div className="card">
        <img className="w-25 card-img-top" src={props.img} alt="..." />
        <div className="card-body">
          <Link to={`/item/${props.id}`} className="card-title">
            {props.name}
          </Link>
          <p className="card-text">${props.price}</p>
        </div>
      </div>
    </div>
  );
};
export default Item;
