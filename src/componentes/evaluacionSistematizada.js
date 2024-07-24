import React from "react";

export default function evaluacionSitematizada(){
    return(
        <div>
        <h2 className="text-center">Formato de evaluacion sistematizada de los pies en pacientes con diabetes</h2>
        <form>
          {/* Factores de Descripción de la Herida */}
          <div className="card">
            <div className="card-header">Factores de Descripción de la Herida</div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <h6>Generales</h6>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="tiempo" className="form-label">Tiempo de evolución de la diabetes en años</label>
                    <input type="text" className="form-control" id="tiempo" name="tiempo" style={{ maxWidth: '300px' }} />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="Hiperglicemia" className="form-label">Hiperglicemia sostenida</label>
                    <input type="text" className="form-control" id="Hiperglicemia" name="Hiperglicemia" style={{ maxWidth: '300px' }} />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="edad" className="form-label">Edad del paciente</label>
                    <input type="text" className="form-control" id="edad" name="edad" style={{ maxWidth: '300px' }} />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="Hipertension" className="form-label">Hipertensión arterial sistemática</label>
                    <input type="text" className="form-control" id="Hipertension" name="Hipertension" style={{ maxWidth: '300px' }} />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="Hipertrigliceridemia" className="form-label">Hipertrigliceridemia</label>
                    <input type="text" className="form-control" id="Hipertrigliceridemia" name="Hipertrigliceridemia" style={{ maxWidth: '300px' }} />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="Hipercolesterolemia" className="form-label">Hipercolesterolemia</label>
                    <input type="text" className="form-control" id="Hipercolesterolemia" name="Hipercolesterolemia" style={{ maxWidth: '300px' }} />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="Hiperuricemia" className="form-label">Hiperuricemia</label>
                    <input type="text" className="form-control" id="Hiperuricemia" name="Hiperuricemia" style={{ maxWidth: '300px' }} />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="Retinopatia" className="form-label">Retinopatía</label>
                    <input type="text" className="form-control" id="Retinopatia" name="Retinopatia" style={{ maxWidth: '300px' }} />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="Nefropatia" className="form-label">Nefropatía</label>
                    <input type="text" className="form-control" id="Nefropatia" name="Nefropatia" style={{ maxWidth: '300px' }} />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="Tabaquismo" className="form-label">Tabaquismo</label>
                    <input type="text" className="form-control" id="Tabaquismo" name="Tabaquismo" style={{ maxWidth: '300px' }} />
                  </div>
                </div>
                <div className="col-6">
                  <h6>Locales</h6>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="Deformidad" className="form-label">Deformidad del pie (previa o adquirida)</label>
                    <input type="text" className="form-control" id="Deformidad" name="Deformidad" style={{ maxWidth: '300px' }} />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="Neuropatia" className="form-label">Neuropatía</label>
                    <input type="text" className="form-control" id="Neuropatia" name="Neuropatia" style={{ maxWidth: '300px' }} />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="Presion" className="form-label">Presión plantar elevada</label>
                    <input type="text" className="form-control" id="Presion" name="Presion" style={{ maxWidth: '300px' }} />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="Hiperqueratosis" className="form-label">Hiperqueratosis</label>
                    <input type="text" className="form-control" id="Hiperqueratosis" name="Hiperqueratosis" style={{ maxWidth: '300px' }} />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="Enfermedad" className="form-label">Enfermedad vascular periférica</label>
                    <input type="text" className="form-control" id="Enfermedad" name="Enfermedad" style={{ maxWidth: '300px' }} />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="Traumatismos" className="form-label">Traumatismos</label>
                    <input type="text" className="form-control" id="Traumatismos" name="Traumatismos" style={{ maxWidth: '300px' }} />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="caminar" className="form-label">Acostumbra caminar descalzo</label>
                    <input type="text" className="form-control" id="caminar" name="caminar" style={{ maxWidth: '300px' }} />
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
                    <input type="text" className="form-control" id="Completas" name="Completas" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-group">
                    <label htmlFor="Simetricas">Simetricas</label>
                    <input type="text" className="form-control" id="Simetricas" name="Simetricas" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-group">
                    <label htmlFor="Trofismo">Trofismo conservado</label>
                    <input type="text" className="form-control" id="Trofismo" name="Trofismo" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-group">
                    <label htmlFor="infeccion">Atrofia</label>
                    <input type="text" className="form-control" id="Trofismo" name="Trofismo" />
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
                    <input type="text" className="form-control" id="Amputacion_d" name="Amputacion_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Amputacion_transtibialismo_d" name="Amputacion_transtibialismo_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Amputacion_transtibial_d" name="Amputacion_transtibial_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Amputacion_total_d" name="Amputacion_total_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Amputacion_parcial_d" name="Amputacion_parcial_d" />
                  </div>
                </div>
                <div className="col-4">
                  <h6>Pie Izquierdo</h6>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Amputacion_i" name="Amputacion_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Amputacion_transtibialismo_i" name="Amputacion_transtibialismo_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Amputacion_transtibial_i" name="Amputacion_transtibial_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Amputacion_total_i" name="Amputacion_total_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Amputacion_parcial_i" name="Amputacion_parcial_i" />
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
                    <input type="text" className="form-control" id="Pie_plano_d" name="Pie_plano_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Pie_valgo_d" name="Pie_valgo_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Pie_cavo_d" name="Pie_cavo_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Hallux_valgo_d" name="Hallux_valgo_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Dedos_en_garra_d" name="Dedos_en_garra_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Juanetillo_d" name="Juanetillo_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Supra_ductos_d" name="Supra_ductos_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Infra_ductos_d" name="Infra_ductos_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Deformidad_por_artropatia_de_Charcot_d" name="Deformidad_por_artropatia_de_Charcot_d" />
                  </div>
                </div>
                <div className="col-4">
                  <h6>Pie Izquierdo</h6>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Pie_plano_i" name="Pie_plano_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Pie_valgo_i" name="Pie_valgo_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Pie_cavo_i" name="Pie_cavo_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Hallux_valgo_i" name="Hallux_valgo_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Dedos_en_garra_i" name="Dedos_en_garra_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Juanetillo_i" name="Juanetillo_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Supra_ductos_i" name="Supra_ductos_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Infra_ductos_i" name="Infra_ductos_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Deformidad_por_artropatia_de_Charcot_i" name="Deformidad_por_artropatia_de_Charcot_i" />
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
                    <input type="text" className="form-control" id="Eritema_d" name="Eritema_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Palidez_d" name="Palidez_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Coloracion_ocre_d" name="Coloracion_ocre_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Hiperpigmentacion_plantar_d" name="Hiperpigmentacion_plantar_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Piel_Seca_d" name="Piel_Seca_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Descamacion_d" name="Descamacion_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Localizacion_descamacion_d" name="Localizacion_descamacion_d" />
                  </div>
                </div>
                <div className="col-4">
                  <h6>Pie Izquierdo</h6>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Eritema_i" name="Eritema_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Palidez_i" name="Palidez_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Coloracion_ocre_i" name="Coloracion_ocre_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Hiperpigmentacion_plantar_i" name="Hiperpigmentacion_plantar_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Piel_Seca_i" name="Piel_Seca_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Descamacion_i" name="Descamacion_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Localizacion_descamacion_i" name="Localizacion_descamacion_i" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Vello corporal</div>
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <h6>Alteración</h6>
                  <div className="form-group mb-3">
                    <label htmlFor="Ausencia">Ausencia de vello</label>
                  </div>
                </div>
                <div className="col-4">
                  <h6>Pie Derecho</h6>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Ausencia_vello_d" name="Ausencia_vello_d" />
                  </div>
                </div>
                <div className="col-4">
                  <h6>Pie Izquierdo</h6>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Ausencia_vello_i" name="Ausencia_vello_i" />
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
                    <input type="text" className="form-control" id="Hipotermia_d" name="Hipotermia_d" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Hipertermia_d" name="Hipertermia_d" />
                  </div>
                </div>
                <div className="col-4">
                  <h6>Pie Izquierdo</h6>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Hipotermia_i" name="Hipotermia_i" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="Hipertermia_i" name="Hipertermia_i" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
}


