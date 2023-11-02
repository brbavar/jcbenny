const Found = () => {
  return (
    <body id='found'>
      <div className='card'>
        <h3>Found a religion</h3>
        <form>
          <label for='functions'>What good is this religion?</label>
          <select name='functions' id='functions'>
            <option>Promotes social cohesion</option>
            <option>Promotes individual happiness or satisfaction</option>
            <option>Other</option>
          </select>
        </form>
      </div>
    </body>
  );
};

export default Found;
