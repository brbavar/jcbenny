const Item = (props) => {
  return (
    <div>
      <img src={props.src} alt='' width='200px' height='200px' />
      <h2>{props.price}</h2>
    </div>
  );
};

export default Item;
