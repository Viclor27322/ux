import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EvaluacionSitematizada() {
  const [formValues, setFormValues] = useState({
    tiempo: "",
    Hiperglicemia: "",
    edad: "",
    Hipertension: "",
    Hipertrigliceridemia: "",
    Hipercolesterolemia: "",
    Hiperuricemia: "",
    Retinopatia: "",
    Nefropatia: "",
    Tabaquismo: "",

    Deformidad: "",
    Neuropatia: "",
    Presion: "",
    Hiperqueratosis: "",
    Enfermedad: "",
    Traumatismos: "",
    acostumbra_caminar_descalzo: "",
    Completas: "",
    Simetricas: "",
    Trofismo: "",
    atrofia: "",

    Amputacion_d: "",
    Amputacion_transtibialismo_d: "",
    Amputacion_transtibial_d: "",
    Amputacion_total_d: "",
    Amputacion_parcial_d: "",
    Amputacion_i: "",
    Amputacion_transtibialismo_i: "",
    Amputacion_transtibial_i: "",
    Amputacion_total_i: "",
    Amputacion_parcial_i: "",

    Pie_plano_d: "",
    Pie_valgo_d: "",
    Pie_cavo_d: "",
    Hallux_valgo_d: "",
    Dedos_en_garra_d: "",
    Juanetillo_d: "",
    Supra_ductos_d: "",
    Infra_ductos_d: "",
    Deformidad_por_artropatia_de_Charcot_d: "",
    Pie_plano_i: "",
    Pie_valgo_i: "",
    Pie_cavo_i: "",
    Hallux_valgo_i: "",
    Dedos_en_garra_i: "",
    Juanetillo_i: "",
    Supra_ductos_i: "",
    Infra_ductos_i: "",
    Deformidad_por_artropatia_de_Charcot_i: "",

    Edema_d: "",
    Edema_blando_d: "",
    Edema_duro_d: "",
    Edema_frio_d: "",
    Edema_caliente_d: "",
    Edema_i: "",
    Edema_blando_i: "",
    Edema_duro_i: "",
    Edema_frio_i: "",
    Edema_caliente_i: "",

    Eritema_d: "",
    Palidez_d: "",
    Coloracion_ocre_d: "",
    Hiperpigmentacion_plantar_d: "",
    Piel_Seca_d: "",
    Descamacion_d: "",
    Localizacion_descamacion_d: "",
    Eritema_i: "",
    Palidez_i: "",
    Coloracion_ocre_i: "",
    Hiperpigmentacion_plantar_i: "",
    Piel_Seca_i: "",
    Descamacion_i: "",
    Localizacion_descamacion_i: "",
    Ausencia_vello_d: '',
    Ausencia_vello_i: '',
    Hipotermia_d: '',
    Hipertermia_d: '',
    Hipotermia_i: '',
    Hipertermia_i: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado con los siguientes valores:");
    console.log(formValues);
    // Aquí puedes agregar la lógica para guardar los datos en una API o base de datos
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [id]: value,
    }));
  };
  return (
    <div className="container mt-5">
      <h2 className="text-center">Formato de evaluacion sistematizada de los pies en pacientes con diabetes</h2>
      <form onSubmit={handleSubmit}>
        {/* Factores de Descripción de la Herida */}
        <div className="card">
          <div className="card-header">Factores de Descripción de la Herida</div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <h6>Generales</h6>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="tiempo" className="form-label">Tiempo de evolución de la diabetes en años</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tiempo"
                    name="tiempo"
                    value={formValues.tiempo || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="Hiperglicemia" className="form-label">Hiperglicemia sostenida</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Hiperglicemia"
                    name="Hiperglicemia"
                    value={formValues.Hiperglicemia || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="edad" className="form-label">Edad del paciente</label>
                  <input
                    type="text"
                    className="form-control"
                    id="edad"
                    name="edad"
                    value={formValues.edad || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="Hipertension" className="form-label">Hipertensión arterial sistemática</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Hipertension"
                    name="Hipertension"
                    value={formValues.Hipertension || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="Hipertrigliceridemia" className="form-label">Hipertrigliceridemia</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Hipertrigliceridemia"
                    name="Hipertrigliceridemia"
                    value={formValues.Hipertrigliceridemia || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="Hipercolesterolemia" className="form-label">Hipercolesterolemia</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Hipercolesterolemia"
                    name="Hipercolesterolemia"
                    value={formValues.Hipercolesterolemia || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="Hiperuricemia" className="form-label">Hiperuricemia</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Hiperuricemia"
                    name="Hiperuricemia"
                    value={formValues.Hiperuricemia || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="Retinopatia" className="form-label">Retinopatía</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Retinopatia"
                    name="Retinopatia"
                    value={formValues.Retinopatia || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="Nefropatia" className="form-label">Nefropatía</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Nefropatia"
                    name="Nefropatia"
                    value={formValues.Nefropatia || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="Tabaquismo" className="form-label">Tabaquismo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Tabaquismo"
                    name="Tabaquismo"
                    value={formValues.Tabaquismo || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
              </div>
              <div className="col-6">
                <h6>Locales</h6>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="Deformidad" className="form-label">Deformidad del pie (previa o adquirida)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Deformidad"
                    name="Deformidad"
                    value={formValues.Deformidad || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="Neuropatia" className="form-label">Neuropatía</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Neuropatia"
                    name="Neuropatia"
                    value={formValues.Neuropatia || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="Presion" className="form-label">Presión plantar elevada</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Presion"
                    name="Presion"
                    value={formValues.Presion || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="Hiperqueratosis" className="form-label">Hiperqueratosis</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Hiperqueratosis"
                    name="Hiperqueratosis"
                    value={formValues.Hiperqueratosis || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="Enfermedad" className="form-label">Enfermedad vascular periférica</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Enfermedad"
                    name="Enfermedad"
                    value={formValues.Enfermedad || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="Traumatismos" className="form-label">Traumatismos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Traumatismos"
                    name="Traumatismos"
                    value={formValues.Traumatismos || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <label htmlFor="acostumbra_caminar_descalzo" className="form-label">Acostumbra caminar descalzo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="acostumbra_caminar_descalzo"
                    name="acostumbra_caminar_descalzo"
                    value={formValues.acostumbra_caminar_descalzo || ''}
                    onChange={handleChange}
                    style={{ maxWidth: '300px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Extremidades inferiores</div>
          <div className="card-body">
            <div className="row">
              <div className="col-3">
                <div className="form-group">
                  <label htmlFor="Completas">Completas</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Completas"
                    name="Completas"
                    value={formValues.Completas}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <label htmlFor="Simetricas">Simétricas</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Simetricas"
                    name="Simetricas"
                    value={formValues.Simetricas}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <label htmlFor="Trofismo">Trofismo conservado</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Trofismo"
                    name="Trofismo"
                    value={formValues.Trofismo}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <label htmlFor="Atrofia">Atrofia</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Atrofia"
                    name="Atrofia"
                    value={formValues.Atrofia}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Amputacion</div>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <h6>Procedimiento</h6>
                <div className="form-group mb-3">
                  <label htmlFor="Amputacion">Amputacion</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Amputacion">Amputacion transfemoral</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Amputacion">Amputacion transtibial</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Amputacion">Amputacion total del pie</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Amputacion">Amputacion parcial del pie</label>
                </div>
              </div>
              <div className="col-4">
                <h6>Pie Derecho</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Amputacion_d"
                    name="Amputacion_d"
                    value={formValues.Amputacion_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Amputacion_transtibialismo_d"
                    name="Amputacion_transtibialismo_d"
                    value={formValues.Amputacion_transtibialismo_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Amputacion_transtibial_d"
                    name="Amputacion_transtibial_d"
                    value={formValues.Amputacion_transtibial_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Amputacion_total_d"
                    name="Amputacion_total_d"
                    value={formValues.Amputacion_total_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Amputacion_parcial_d"
                    name="Amputacion_parcial_d"
                    value={formValues.Amputacion_parcial_d}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <h6>Pie Izquierdo</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Amputacion_i"
                    name="Amputacion_i"
                    value={formValues.Amputacion_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Amputacion_transtibialismo_i"
                    name="Amputacion_transtibialismo_i"
                    value={formValues.Amputacion_transtibialismo_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Amputacion_transtibial_i"
                    name="Amputacion_transtibial_i"
                    value={formValues.Amputacion_transtibial_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Amputacion_total_i"
                    name="Amputacion_total_i"
                    value={formValues.Amputacion_total_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Amputacion_parcial_i"
                    name="Amputacion_parcial_i"
                    value={formValues.Amputacion_parcial_i}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Forma del pie</div>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <h6>Alteración</h6>
                <div className="form-group mb-3">
                  <label htmlFor="Pie_plano">Pie plano</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Pie_valgo">Pie valgo</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Pie_cavo">Pie cavo</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Hallux_valgo">Hallux valgo</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Dedos_en_garra">Dedos en garra</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Juanetillo">Juanetillo</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Supra_ductos">Supra ductos</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Infra_ductos">Infra ductos</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Deformidad_por_artropatia_de_Charcot">Deformidad por artropatía de Charcot</label>
                </div>
              </div>
              <div className="col-4">
                <h6>Pie Derecho</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Pie_plano_d"
                    name="Pie_plano_d"
                    value={formValues.Pie_plano_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Pie_valgo_d"
                    name="Pie_valgo_d"
                    value={formValues.Pie_valgo_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Pie_cavo_d"
                    name="Pie_cavo_d"
                    value={formValues.Pie_cavo_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Hallux_valgo_d"
                    name="Hallux_valgo_d"
                    value={formValues.Hallux_valgo_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Dedos_en_garra_d"
                    name="Dedos_en_garra_d"
                    value={formValues.Dedos_en_garra_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Juanetillo_d"
                    name="Juanetillo_d"
                    value={formValues.Juanetillo_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Supra_ductos_d"
                    name="Supra_ductos_d"
                    value={formValues.Supra_ductos_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Infra_ductos_d"
                    name="Infra_ductos_d"
                    value={formValues.Infra_ductos_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Deformidad_por_artropatia_de_Charcot_d"
                    name="Deformidad_por_artropatia_de_Charcot_d"
                    value={formValues.Deformidad_por_artropatia_de_Charcot_d}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <h6>Pie Izquierdo</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Pie_plano_i"
                    name="Pie_plano_i"
                    value={formValues.Pie_plano_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Pie_valgo_i"
                    name="Pie_valgo_i"
                    value={formValues.Pie_valgo_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Pie_cavo_i"
                    name="Pie_cavo_i"
                    value={formValues.Pie_cavo_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Hallux_valgo_i"
                    name="Hallux_valgo_i"
                    value={formValues.Hallux_valgo_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Dedos_en_garra_i"
                    name="Dedos_en_garra_i"
                    value={formValues.Dedos_en_garra_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Juanetillo_i"
                    name="Juanetillo_i"
                    value={formValues.Juanetillo_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Supra_ductos_i"
                    name="Supra_ductos_i"
                    value={formValues.Supra_ductos_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Infra_ductos_i"
                    name="Infra_ductos_i"
                    value={formValues.Infra_ductos_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Deformidad_por_artropatia_de_Charcot_i"
                    name="Deformidad_por_artropatia_de_Charcot_i"
                    value={formValues.Deformidad_por_artropatia_de_Charcot_i}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Edema del pie</div>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <h6>Alteración</h6>
                <div className="form-group mb-3">
                  <label htmlFor="Edema">Edema</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Edema_blando">Edema blando</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Edema_duro">Edema duro</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Edema_frio">Edema frío</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Edema_caliente">Edema caliente</label>
                </div>
              </div>
              <div className="col-4">
                <h6>Pie Derecho</h6>
                <div className="form-group">
                  <input type="text" className="form-control" id="Edema_d" name="Edema_d" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="Edema_blando_d" name="Edema_blando_d" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="Edema_duro_d" name="Edema_duro_d" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="Edema_frio_d" name="Edema_frio_d" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="Edema_caliente_d" name="Edema_caliente_d" />
                </div>
              </div>
              <div className="col-4">
                <h6>Pie Izquierdo</h6>
                <div className="form-group">
                  <input type="text" className="form-control" id="Edema_i" name="Edema_i" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="Edema_blando_i" name="Edema_blando_i" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="Edema_duro_i" name="Edema_duro_i" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="Edema_frio_i" name="Edema_frio_i" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="Edema_caliente_i" name="Edema_caliente_i" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Piel y anexos</div>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <h6>Alteración</h6>
                <div className="form-group mb-3">
                  <label htmlFor="Eritema">Eritema</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Palidez">Palidez</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Coloracion_ocre">Coloración ocre</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Hiperpigmentacion_plantar">Hiperpigmentación plantar</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Piel_Seca">Piel seca</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Descamacion">Descamación</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Localizacion_descamacion">Localización de la descamación</label>
                </div>
              </div>
              <div className="col-4">
                <h6>Pie Derecho</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Eritema_d"
                    name="Eritema_d"
                    value={formValues.Eritema_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Palidez_d"
                    name="Palidez_d"
                    value={formValues.Palidez_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Coloracion_ocre_d"
                    name="Coloracion_ocre_d"
                    value={formValues.Coloracion_ocre_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Hiperpigmentacion_plantar_d"
                    name="Hiperpigmentacion_plantar_d"
                    value={formValues.Hiperpigmentacion_plantar_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Piel_Seca_d"
                    name="Piel_Seca_d"
                    value={formValues.Piel_Seca_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Descamacion_d"
                    name="Descamacion_d"
                    value={formValues.Descamacion_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Localizacion_descamacion_d"
                    name="Localizacion_descamacion_d"
                    value={formValues.Localizacion_descamacion_d}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <h6>Pie Izquierdo</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Eritema_i"
                    name="Eritema_i"
                    value={formValues.Eritema_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Palidez_i"
                    name="Palidez_i"
                    value={formValues.Palidez_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Coloracion_ocre_i"
                    name="Coloracion_ocre_i"
                    value={formValues.Coloracion_ocre_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Hiperpigmentacion_plantar_i"
                    name="Hiperpigmentacion_plantar_i"
                    value={formValues.Hiperpigmentacion_plantar_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Piel_Seca_i"
                    name="Piel_Seca_i"
                    value={formValues.Piel_Seca_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Descamacion_i"
                    name="Descamacion_i"
                    value={formValues.Descamacion_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Localizacion_descamacion_i"
                    name="Localizacion_descamacion_i"
                    value={formValues.Localizacion_descamacion_i}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Piel y anexos</div>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <h6>Alteración</h6>
                <div className="form-group mb-3">
                  <label htmlFor="Eritema">Eritema</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Palidez">Palidez</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Coloracion_ocre">Coloración ocre</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Hiperpigmentacion_plantar">Hiperpigmentación plantar</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Piel_Seca">Piel seca</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Descamacion">Descamación</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Localizacion_descamacion">Localización de la descamación</label>
                </div>
              </div>
              <div className="col-4">
                <h6>Pie Derecho</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Eritema_d"
                    name="Eritema_d"
                    value={formValues.Eritema_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Palidez_d"
                    name="Palidez_d"
                    value={formValues.Palidez_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Coloracion_ocre_d"
                    name="Coloracion_ocre_d"
                    value={formValues.Coloracion_ocre_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Hiperpigmentacion_plantar_d"
                    name="Hiperpigmentacion_plantar_d"
                    value={formValues.Hiperpigmentacion_plantar_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Piel_Seca_d"
                    name="Piel_Seca_d"
                    value={formValues.Piel_Seca_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Descamacion_d"
                    name="Descamacion_d"
                    value={formValues.Descamacion_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Localizacion_descamacion_d"
                    name="Localizacion_descamacion_d"
                    value={formValues.Localizacion_descamacion_d}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <h6>Pie Izquierdo</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Eritema_i"
                    name="Eritema_i"
                    value={formValues.Eritema_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Palidez_i"
                    name="Palidez_i"
                    value={formValues.Palidez_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Coloracion_ocre_i"
                    name="Coloracion_ocre_i"
                    value={formValues.Coloracion_ocre_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Hiperpigmentacion_plantar_i"
                    name="Hiperpigmentacion_plantar_i"
                    value={formValues.Hiperpigmentacion_plantar_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Piel_Seca_i"
                    name="Piel_Seca_i"
                    value={formValues.Piel_Seca_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Descamacion_i"
                    name="Descamacion_i"
                    value={formValues.Descamacion_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Localizacion_descamacion_i"
                    name="Localizacion_descamacion_i"
                    value={formValues.Localizacion_descamacion_i}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Temperatura</div>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <h6>Alteración</h6>
                <div className="form-group mb-3">
                  <label htmlFor="Hipotermia">Hipotermia</label>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="Hipertermia">Hipertermia</label>
                </div>
              </div>
              <div className="col-4">
                <h6>Pie Derecho</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Hipotermia_d"
                    name="Hipotermia_d"
                    value={formValues.Hipotermia_d}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Hipertermia_d"
                    name="Hipertermia_d"
                    value={formValues.Hipertermia_d}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <h6>Pie Izquierdo</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Hipotermia_i"
                    name="Hipotermia_i"
                    value={formValues.Hipotermia_i}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Hipertermia_i"
                    name="Hipertermia_i"
                    value={formValues.Hipertermia_i}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  )
}


