import React from "react";

const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <div style={styles.errorBox}>
      <p>⚠️ {error}</p>
    </div>
  );
};

const styles = {
  errorBox: {
    color: "red",
    textAlign: "center",
    backgroundColor: "#ffeeee",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px auto",
    width: "80%",
    border: "1px solid red",
  },
};

export default ErrorMessage;
