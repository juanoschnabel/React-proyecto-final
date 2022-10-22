import "../css/Notificacion.css";
const Notification = (props) => {
  return (
    <>
      <p className="notificacion rounded-circle">{props.note}</p>
    </>
  );
};
export default Notification;
