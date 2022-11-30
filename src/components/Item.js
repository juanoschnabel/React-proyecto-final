import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src={props.img} alt="..." />
        </div>
        <div className="col-md-6">
          <Link to={`/item/${props.id}`} className="fs-4">
            {props.name}
          </Link>
          <br></br>
          <br></br>
          <p className="fs-5">${props.price}</p>
        </div>
      </div>
    </div>
  );
};
export default Item;
