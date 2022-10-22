import "../css/ItemListContainer.css";
const ItemListContainer = (greeting) => {
  return (
    <>
      <div>
        <p className="ItemListContainer">{greeting.text}</p>
      </div>
    </>
  );
};
export default ItemListContainer;
