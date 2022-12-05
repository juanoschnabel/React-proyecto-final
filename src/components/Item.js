import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="mt-5">
      <div className="col-12 ms-5">
        <span>
          <Link to={`/item/${props.id}`}>
            <h3 className="fs-4">{props.name}</h3>
          </Link>
        </span>{" "}
        <Link to={`/item/${props.id}`}>
          <img className="img rounded-start" src={props.img}></img>
        </Link>
        <ul className="list-group">
          <span className="badge bg-success rounded-pill fs-5">
            ${props.price} por Unidad
          </span>
        </ul>
      </div>
    </div>
  );
};
export default Item;
