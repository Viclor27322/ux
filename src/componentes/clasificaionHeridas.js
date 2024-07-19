import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Clasificacion() {
  const [formData, setFormData] = useState({
    localizacion: '',
    aspecto: '',
    zona: '',
    isquemia: '',
    infeccion: '',
    edema: '',
    neuropatia: '',
    profundidad: '',
    area: '',
    faseHerida: '',
    puntuacionTotal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes agregar la lógica para enviar los datos al backend
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Clasificación San Elian para Heridas del Pie Diabético</h2>

      <form onSubmit={handleSubmit}>
        {/* Factores Anatómicos Topográficos */}
        <div className="card mb-4">
          <div className="card-header">Factores Anatómicos Topográficos</div>
          <div className="card-body">
            <div className="form-group">
              <strong><label htmlFor="localizacion">1. Localización de la herida (marque con una X donde inicia la herida)</label></strong>
              <input type="number" className="form-control" id="localizacion" name="localizacion" value={formData.localizacion} onChange={handleChange} />
              <span>1. Leve si inició en la zona Falangica.</span><br />
              <span>2. Moderada si fue Metatarsal.</span><br />
              <span>3. Grave si fue Tarsal.</span><br />
            </div>
            <div className="form-group">
              <strong><label>2. Aspecto Topográfico</label></strong>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="aspecto" id="aspecto-dorsal" value="Dorsal" checked={formData.aspecto === 'Dorsal'} onChange={handleChange} />
                <label className="form-check-label" htmlFor="aspecto-dorsal">Dorsal</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="aspecto" id="aspecto-plantar" value="Plantar" checked={formData.aspecto === 'Plantar'} onChange={handleChange} />
                <label className="form-check-label" htmlFor="aspecto-plantar">Plantar</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="aspecto" id="aspecto-lateral" value="Lateral" checked={formData.aspecto === 'Lateral'} onChange={handleChange} />
                <label className="form-check-label" htmlFor="aspecto-lateral">Lateral</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="aspecto" id="aspecto-medial" value="Medial" checked={formData.aspecto === 'Medial'} onChange={handleChange} />
                <label className="form-check-label" htmlFor="aspecto-medial">Medial</label>
              </div>
              <span>1. Leve. Dorsal o plantar.</span><br />
              <span>2. Moderado. Lateral o medial</span><br />
              <span>3. Grave. Dos o más aspectos.</span><br />
            </div>
            <div className="form-group">
              <strong><label>3. Zona anatómica</label></strong>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="zona" id="zona-falangica" value="Falangica" checked={formData.zona === 'Falangica'} onChange={handleChange} />
                <label className="form-check-label" htmlFor="zona-falangica">Falángica</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="zona" id="zona-metatarsal" value="Metatarsal" checked={formData.zona === 'Metatarsal'} onChange={handleChange} />
                <label className="form-check-label" htmlFor="zona-metatarsal">Metatarsal</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="zona" id="zona-tarsal" value="Tarsal" checked={formData.zona === 'Tarsal'} onChange={handleChange} />
                <label className="form-check-label" htmlFor="zona-tarsal">Tarsal</label>
              </div>
              <span>1. Leve. Una</span><br />
              <span>2. Moderada. Dos</span><br />
              <span>3. Grave. Todo el pie. (Herida múltiples)</span><br />
            </div>
          </div>
        </div>

        {/* Factores Agravantes */}
        <div className="card mb-4">
          <div className="card-header">Factores Agravantes</div>
          <div className="card-body">
            <div className="form-group">
              <strong><label htmlFor="isquemia">4. Isquemia (perfusión)</label></strong>
              <input type="number" className="form-control" id="isquemia" name="isquemia" value={formData.isquemia} onChange={handleChange} />
              <span>0 /SIN</span><br />
              <span>1 /LEVE </span><br />
              <span>2 /MODERADA</span><br />
              <span>3 /GRAVE</span><br />
            </div>
            <div className="form-group">
              <strong><label htmlFor="infeccion">5. Infección</label></strong>
              <input type="number" className="form-control" id="infeccion" name="infeccion" value={formData.infeccion} onChange={handleChange} />
              <span>0. sin síntomas ni signos de infección</span><br />
              <span>1. Leve. Eritema 0.5- 2 cm, Induración, color, dolor, y descarga purulenta.</span><br />
              <span>2. Moderada. Eritema mayor a 2 cm, absceso, necrosis, fasceitis, osteomielitis y/o artritis</span><br />
              <span>3. Grave. Respuesta inflamatoria y/o Hiper-hipoglucemia grave o difícil control secundaria a la sepsis.</span><br />
            </div>
            <div className="form-group">
              <strong><label htmlFor="edema">6. Edema</label></strong>
              <input type="number" className="form-control" id="edema" name="edema" value={formData.edema} onChange={handleChange} />
              <span>0. Sin edema.</span><br />
              <span>1. Leve. Localización al área perilesional</span><br />
              <span>2. Moderado. Unilateral y/o ascendente todo el pie.</span><br />
              <span>3. Grave. Bilateral secundario a enfermedad sistémica</span><br />
            </div>
            <div className="form-group">
              <strong><label htmlFor="neuropatia">7. Neuropatía</label></strong>
              <input type="number" className="form-control" id="neuropatia" name="neuropatia" value={formData.neuropatia} onChange={handleChange} />
              <span>0. Sin neuropatía</span><br />
              <span>1. Leve o Inicial. Disminución sensibilidad con el monofilamento de SW de 10 gr en 2/3 sitios y vibratoria con diapasón de 128Hz en el hallux.</span><br />
              <span>2. Moderada o Avanzada. Ausencia de sensibilidad: monofilamento y vibratorio.</span><br />
              <span>3. Grave. Neuro-osteo-artropatia diabética (NOAD) o Charcot.</span><br />
            </div>
          </div>
        </div>

        {/* Factores de Afección Tisular de la Herida */}
        <div className="card mb-4">
          <div className="card-header">Factores de afección tisular de la herida</div>
          <div className="card-body">
            <div className="form-group">
              <strong><label htmlFor="profundidad">8. Profundidad</label></strong>
              <input type="number" className="form-control" id="profundidad" name="profundidad" value={formData.profundidad} onChange={handleChange} />
              <span>1. Leve. Superficial (Involucro epidermis)</span><br />
              <span>2. Moderada. Penetrante (Dermis y tej subcutáneo)</span><br />
              <span>3. Grave. Compromiso músculo, tendón, hueso.</span><br />
            </div>
            <div className="form-group">
              <strong><label htmlFor="area">9. Área</label></strong>
              <input type="number" className="form-control" id="area" name="area" value={formData.area} onChange={handleChange} />
              <span>1. Leve. menor 10 cm2</span><br />
              <span>2. Moderada. 10-40 cm2</span><br />
              <span>3. Grave. mayor 40 cm2</span><br />
            </div>
            <div className="form-group">
              <strong><label htmlFor="faseHerida">10. Fase de la herida</label></strong>
              <input type="number" className="form-control" id="faseHerida" name="faseHerida" value={formData.faseHerida} onChange={handleChange} />
              <span>1. Leve. Proliferativa</span><br />
              <span>2. Moderada. Inflamatoria.</span><br />
              <span>3. Grave. Crónica, o no progresiva.</span><br />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
}
