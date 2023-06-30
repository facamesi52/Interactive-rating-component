import React from "react";

const Structure = ({ cambiaNota, calificacion }) => {
  const saluda = () => {
    alert(` gracias por su calificacion ${calificacion}`);
  };
  return (
    <div className="container">
      <div className="container__text">
        <h2>*</h2>
        <br />
        <h1>How did we do?</h1>
        <br />
        <p>
          Please let us know how we did with your support request.All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <br />
      <div className="container__note">
        <div>
          <button onClick={() => cambiaNota(1)}>1</button>
        </div>
        <div>
          <button onClick={() => cambiaNota(2)}>2</button>
        </div>
        <div>
          <button onClick={() => cambiaNota(3)}>3</button>
        </div>
        <div>
          <button onClick={() => cambiaNota(4)}>4</button>
        </div>
        <div>
          <button onClick={() => cambiaNota(5)}>5</button>
        </div>
      </div>
      <br />
      <div className="container__button">
        <button onClick={saluda}>Submit</button>
      </div>
    </div>
  );
};

export default Structure;
