import React, { useState } from "react";

function MovieForm() {
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((newMovie) => console.log(newMovie));
        } else {
          response.json().then((errorData) => setErrors(errorData.errors));
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields here... */}

      {errors.length > 0 && (
        <ul style={{ color: "red" }}>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <button type="submit">Add Movie</button>
    </form>
  );
}

export default MovieForm;