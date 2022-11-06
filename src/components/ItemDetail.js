import ItemCount from "./ItemCount";
const ItemDetail = ({ item }) => {
  return (
    <>
      <img src={item.img}></img>
      <h1>{item.name}</h1>
      <h3>${item.price}</h3>
      <h5>Stock:{item.stock}</h5>
      <ItemCount />
    </>
  );
};
export default ItemDetail;
