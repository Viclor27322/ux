/* import React, { useState } from "react";

export default function Difusion() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Agregar nueva información</h1>
      <div className="row border p-5">
        <div className="col-md-8">
          <textarea
            value={text}
            onChange={handleTextChange}
            rows={8} // Aumenta la cantidad de filas del textarea para más separación
            className="form-control"
            placeholder="Ingresa tu información aquí"
          ></textarea>
        </div>
        <div className="col-md-4">
          {image && <img src={image} alt="Imagen" className="img-fluid" />}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="form-control mt-2"
          />
          <button className="btn btn-primary mt-2 d-block mx-auto">
            Subir Imagen
          </button>
        </div>
      </div>
    </div>
  );
}

 */
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Estilo del editor

export default function Difusion() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Agregar nueva información</h1>
      <div className="row">
        <div className="col-md-8">
          <ReactQuill
            value={text}
            onChange={handleTextChange}
            theme="snow" // Estilo del editor
          />
        </div>
        <div className="col-md-4">
          {image && <img src={image} alt="Imagen" className="img-fluid" />}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="form-control mt-2"
          />
          <button className="btn btn-primary mt-2 d-block mx-auto">
            Subir Imagen
          </button>
        </div>
      </div>
    </div>
  );
}
