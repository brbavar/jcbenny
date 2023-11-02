const Philosopher = (props) => {
  return (
    <div>
      <img src={props.src} alt='' width='200px' height='200px' />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Philosopher;
