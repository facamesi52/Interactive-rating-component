import React from "react";

const States = ({ calificacion }) => {
  return (
    <div className="footer">
      El valor de tu calificacion es {calificacion + ", gracias"}
    </div>
  );
};

export default States;
