import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './comInput';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useParams,useNavigate } from 'react-router-dom';

export default function Clasificacion() {
  const { IdPaciente } = useParams();
  const [paciente, setPaciente] = useState(null);
  const [localizacion, cambiarLocalizacion] = useState({ campo: '', valido: null });
  const [aspecto, cambiarAspecto] = useState({ campo: '', valido: null });
  const [zona, cambiarzona] = useState({ campo: '', valido: null });
  const [isquemia, cambiarisquemia] = useState({ campo: '', valido: null });
  const [infeccion, cambiarinfeccion] = useState({ campo: '', valido: null });
  const [edema, cambiaredema] = useState({ campo: '', valido: null });
  const [neuropatia, cambiarneuropatia] = useState({ campo: '', valido: null });
  const [profundidad, cambiarprofundidad] = useState({ campo: '', valido: null });
  const [area, cambiararea] = useState({ campo: '', valido: null });
  const [faseHerida, cambiarfaseHerida] = useState({ campo: '', valido: null });
  const [formData, setFormData] = useState({
    aspecto_topologio: [],
    zona_anatomica: [],
  });
  const history = useNavigate();
  useEffect(() => {
    const fetchPaciente = async () => {
        try {
            const response = await fetch(`https://rest-api2-three.vercel.app/api/pacientes/${IdPaciente}`);
            if (!response.ok) {
                throw new Error('Paciente no encontrado');
            }
            const data = await response.json();
            setPaciente(data);
        } catch (error) {
          history('/*');
        }
    };

    fetchPaciente();
}, [IdPaciente]);


  const handleChange = (e) => {

    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => {
        const newValues = prevData[name].includes(value)
          ? prevData[name].filter((v) => v !== value)
          : [...prevData[name], value];
        return {
          ...prevData,
          [name]: newValues
        };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  const expresiones = {
    valor: /^[1-3]$/,
    factores: /^[0-3]$/
  };
  const onChange = () => {
  };
  const generatePDF = () => {
    const input = document.getElementById('form-container');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();

      // Calcular el número de páginas necesarias
      const imgWidth = 210; // Ancho en mm (A4 width)
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const pageHeight = 295; // Alto en mm (A4 height)
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      const nombreArchivo = `${paciente.Nombre}_${paciente.ApellidoP}_${paciente.ApellidoM}_${new Date().toISOString().slice(0, 10)}.pdf`;
      pdf.save(nombreArchivo);
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      localizacion.valido === "false" ||
      aspecto.valido === "false" ||
      zona.valido === "false" ||
      isquemia.valido === "false" ||
      infeccion.valido === "false" ||
      edema.valido === "false" ||
      neuropatia.valido === "false" ||
      profundidad.valido === "false" ||
      area.valido === "false" ||
      faseHerida.valido === "false"
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Asegúrate de proporcionar correctamente todos los campos requeridos',
      });
      return;
    }
    const data = {
      id_paciente: IdPaciente, 
      localizacion_inicial: localizacion.campo,
      aspecto_topografico: aspecto.campo,
      registrar_aspecto: formData.aspecto_topologio.join(', '), 
      numero_zonas_afectadas: zona.campo,
      registrar_zonas: formData.zona_anatomica.join(', '),
      isquemia: isquemia.campo,
      infeccion: infeccion.campo,
      edema: edema.campo,
      neuropatia: neuropatia.campo,
      profundidad: profundidad.campo,
      area: area.campo,
      fase_cicatrizacion: faseHerida.campo,
    };
    console.log(data);
    try {
      const response = await fetch('https://rest-api2-three.vercel.app/api/clasificacion_heridas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
  
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Registro agregado exitosamente',
      });
      console.log('Success:', responseData);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un problema al enviar los datos',
      });
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mt-5" id="form-container">
      <h2 className="text-center">Clasificación San Elian para Heridas del Pie Diabético</h2>
      {paciente ? (
                <div className="card mb-4">
                    <div className="card-header">
                        Ficha de Identificación
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6 mb-2">
                                <strong>Nombre:</strong> {paciente.Nombre} {paciente.ApellidoP} {paciente.ApellidoM}
                            </div>
                            <div className="col-6 mb-2">
                                <strong>Correo:</strong> {paciente.Correo}
                            </div>
                            <div className="col-6 mb-2">
                                <strong>Teléfono:</strong> {paciente.Telefono}
                            </div>
                            <div className="col-6">
                                <strong>Fecha de Nacimiento:</strong> {new Date(paciente.fechaNacimiento).toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No se encontraron detalles para este paciente.</p>
            )}
      <form onSubmit={handleSubmit}>
        {/* Factores Anatómicos Topográficos */}
        <div className="card mb-4">
          <div className="card-header">Factores Anatómicos Topográficos</div>
          <div className="card-body">
            <div className="form-group">
              <Input
                estado={localizacion}
                cambiarEstado={cambiarLocalizacion}
                tipo="number"
                label="1. Localización de la herida"
                placeholder="Ingresa el valor"
                name="localizacion"
                leyendaError="El valor debe ser válido"
                expresionRegular={expresiones.valor}
                onChange={onChange}
              />
              <span>1. Leve si inició en la zona Falangica.</span><br />
              <span>2. Moderada si fue Metatarsal.</span><br />
              <span>3. Grave si fue Tarsal.</span><br />
            </div>
            <div className="form-group">
              <Input
                estado={aspecto}
                cambiarEstado={cambiarAspecto}
                tipo="number"
                label="2. Aspecto Topográfico"
                placeholder="Ingresa el valor"
                name="aspecto"
                leyendaError="El valor debe ser válido"
                expresionRegular={expresiones.valor}
                onChange={onChange}
              />
              <div className="d-flex">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="aspecto_topologio" id="aspecto-dorsal" value="Dorsal" checked={formData.aspecto_topologio.includes('Dorsal')} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="aspecto-dorsal">Dorsal</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="aspecto_topologio" id="aspecto-plantar" value="Plantar" checked={formData.aspecto_topologio.includes('Plantar')} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="aspecto-plantar">Plantar</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="aspecto_topologio" id="aspecto-lateral" value="Lateral" checked={formData.aspecto_topologio.includes('Lateral')} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="aspecto-lateral">Lateral</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="aspecto_topologio" id="aspecto-medial" value="Medial" checked={formData.aspecto_topologio.includes('Medial')} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="aspecto-medial">Medial</label>
                </div>
              </div>

              <span>1. Leve. Dorsal o plantar.</span><br />
              <span>2. Moderado. Lateral o medial</span><br />
              <span>3. Grave. Dos o más aspectos.</span><br />
            </div>
            <div className="form-group">
              <Input
                estado={zona}
                cambiarEstado={cambiarzona}
                tipo="number"
                label="3. Zona anatómica"
                placeholder="Ingresa el valor"
                name="zona"
                leyendaError="El valor debe ser válido"
                expresionRegular={expresiones.valor}
                onChange={onChange}
              />
              <div className="d-flex">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="zona_anatomica" id="zona-falangica" value="Falangica" checked={formData.zona_anatomica.includes('Falangica')} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="zona-falangica">Falángica</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="zona_anatomica" id="zona-metatarsal" value="Metatarsal" checked={formData.zona_anatomica.includes('Metatarsal')} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="zona-metatarsal">Metatarsal</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="zona_anatomica" id="zona-tarsal" value="Tarsal" checked={formData.zona_anatomica.includes('Tarsal')} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="zona-tarsal">Tarsal</label>
                </div>
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
              <Input
                estado={isquemia}
                cambiarEstado={cambiarisquemia}
                tipo="number"
                label="4. Isquemia (perfusión)"
                placeholder="Ingresa el valor"
                name="isquemia"
                leyendaError="El valor debe ser válido"
                expresionRegular={expresiones.factores}
                onChange={onChange}
              />
              <span>0 /SIN</span><br />
              <span>1 /LEVE </span><br />
              <span>2 /MODERADA</span><br />
              <span>3 /GRAVE</span><br />
            </div>
            <div className="form-group">
              <Input
                estado={infeccion}
                cambiarEstado={cambiarinfeccion}
                tipo="number"
                label="5. Infección"
                placeholder="Ingresa el valor"
                name="infeccion"
                leyendaError="El valor debe ser válido"
                expresionRegular={expresiones.factores}
                onChange={onChange}
              />
              <span>0. sin síntomas ni signos de infección</span><br />
              <span>1. Leve. Eritema 0.5- 2 cm, Induración, color, dolor, y descarga purulenta.</span><br />
              <span>2. Moderada. Eritema mayor a 2 cm, absceso, necrosis, fasceitis, osteomielitis y/o artritis</span><br />
              <span>3. Grave. Respuesta inflamatoria y/o Hiper-hipoglucemia grave o difícil control secundaria a la sepsis.</span><br />
            </div>
            <div className="form-group">
              <Input
                estado={edema}
                cambiarEstado={cambiaredema}
                tipo="number"
                label="6. Edema"
                placeholder="Ingresa el valor"
                name="edema"
                leyendaError="El valor debe ser válido"
                expresionRegular={expresiones.factores}
                onChange={onChange}
              />
              <span>0. Sin edema.</span><br />
              <span>1. Leve. Localización al área perilesional</span><br />
              <span>2. Moderado. Unilateral y/o ascendente todo el pie.</span><br />
              <span>3. Grave. Bilateral secundario a enfermedad sistémica</span><br />
            </div>
            <div className="form-group">
              <Input
                estado={neuropatia}
                cambiarEstado={cambiarneuropatia}
                tipo="number"
                label="7. Neuropatía"
                placeholder="Ingresa el valor"
                name="neuropatia"
                leyendaError="El valor debe ser válido"
                expresionRegular={expresiones.factores}
                onChange={onChange}
              />
              <span>0. Sin pérdida de la sensibilidad.</span><br />
              <span>1. Leve o Inicial. Disminución sensibilidad con el monofilamento de SW de 10 gr en 2/3 sitios y vibratoria con diapasón de 128Hz en el hallux.</span><br />
              <span>2. Moderada o Avanzada. Ausencia de sensibilidad: monofilamento y vibratorio.</span><br />
              <span>3. Grave. Neuro-osteo-artropatia diabética (NOAD) o Charcot.</span><br />
            </div>
          </div>
        </div>

        {/* Factores de Descripción de la Herida */}
        <div className="card mb-4">
          <div className="card-header">Factores de Descripción de la Herida</div>
          <div className="card-body">
            <div className="form-group">
              <Input
                estado={profundidad}
                cambiarEstado={cambiarprofundidad}
                tipo="number"
                label="8. Profundidad de la herida"
                placeholder="Ingresa el valor"
                name="profundidad"
                leyendaError="El valor debe ser válido"
                expresionRegular={expresiones.valor}
                onChange={onChange}
              />
              <span>1. Leve o superficial. Ulcera que afecta el espesor de la piel.</span><br />
              <span>2. Moderada o parcial. Afecta toda la piel, fascias, tendones, músculos y probable afección asea superficial, sin osteomelitis.</span><br />
              <span>3. Grave o total. Afección de todos los planos que incluyen hueso y articulación</span><br />
            </div>
            <div className="form-group">
              <Input
                estado={area}
                cambiarEstado={cambiararea}
                tipo="number"
                label="9. Área de la herida"
                placeholder="Ingresa el valor"
                name="area"
                leyendaError="El valor debe ser válido"
                expresionRegular={expresiones.valor}
                onChange={onChange}
              />
              <span>1. Leve. Menor de 5cm²</span><br />
              <span>2. Moderado. Entre 5cm²- 10cm²</span><br />
              <span>3. Grave. Mayor de 10 cm²</span><br />
            </div>
            <div className="form-group">
              <Input
                estado={faseHerida}
                cambiarEstado={cambiarfaseHerida}
                tipo="number"
                label="10. Fase de la herida"
                placeholder="Ingresa el valor"
                name="faseHerida"
                leyendaError="El valor debe ser válido"
                expresionRegular={expresiones.valor}
                onChange={onChange}
              />
              <span>1. Leve. Granulación o Reepitelización</span><br />
              <span>2. Moderado. Fibroplasia</span><br />
              <span>3. Grave. Necrosis</span><br />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Guardar</button>
        <button type="button" className="btn btn-secondary" onClick={generatePDF}>Generar PDF</button>
      </form>

      
    </div>
  );
}
