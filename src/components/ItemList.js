import Item from "./Item";
const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Item img={item.img} id={item.id} name={item.name} price={item.price} />
      ))}
    </>
  );
};
export default ItemList;
