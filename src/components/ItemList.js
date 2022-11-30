import Item from "./Item";
const ItemList = ({ items }) => {
  return (
    <>
      <div className="col-md-10">
        {items.map((item) => (
          <Item
            img={item.img}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};
export default ItemList;
