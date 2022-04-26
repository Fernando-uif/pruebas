export default  () => {

    const salida = 
    `
    <!DOCTYPE html>
    <html lang="es">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <title>Datos</title>
    
        <link rel="shortcut icon" href="./assets/Icono (1).svg">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="./css/style.css">
    
    </head>
    
    <body>
        <footer class="footer_content">
            <div class="Flex_Content">
                <div class="Grid_Item_Container_1">
                    <div class="Flex_item_requeriment_1">
                        <h1 class="item__title-1">Datos del beneficiario preferente</h1>
                    </div>
                    <div class="Flex_Boton">
                        <button type="botton" data-bs-toggle='modal' data-bs-target="#modal_Nuevo_Beneficiario"
                            class="btn btn-light" id="boton_Beneficiario"> Nuevo Beneficiario Preferente <svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-person-plus" viewBox="0 0 16 16">
                                <path
                                    d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd"
                                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg></button>
                        <div id="referencia_Boton">
                            <button id="Icono_Agregar" data-bs-toggle='modal'
                                data-bs-target="#modal_Nuevo_Beneficiario_Icon" class="btn btn-light"> <svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-person-plus" viewBox="0 0 16 16">
                                    <path
                                        d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    <path fill-rule="evenodd"
                                        d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                </svg></button>
                        </div>
                    </div>
                    <div class="Flex_item_requeriment_2">
                        <div id="Item_Datos_Del_Seguro_1">
                            <label for="Verificacion">Verifica los datos del beneficiario preferente</label>
                        </div>
                        <div id="Item_Datos_Del_Seguro_2">
                            <select name="cmbAsegurado" id="beneficiario_option" class="form-select beneficiario">
                                <option value="" default selected>Selecciona una opción</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="Tabla_2_Datos_Del_Seguro">
                    <div class="Flex_Item_Container_2">
                        <h1 class="item__title-2">Datos Del Seguro</h1>
                    </div>
                    <div class="Flex_Item_Container_3">
                        <label for="informacion" id="label_Informacion">Llena correctamente la siguiente información con los
                            datos del solicitante</label>
                        <select name="cmbTipo_Mercancia" class="form-select beneficiario" id="opciones_Datos_Seguro">
                            <option value="" default selected>Selecciona una opción</option>
                        </select>
                    </div>
                    <div id="Cuadro_Texto">
                        <label for="informacion">Que esta trasportando. 0/150</label>
                        <textarea name="txtDescripcion" id="caja_texto_transporte" cols="30" rows="10" maxlength="150"
                            class="beneficiario" value=""></textarea>
                    </div>
                    <div class="Grid_Datos_Seguro_2">
                        <div id="Datos_Seguro_Item_1">
                            <label for="Tipo_De_Envio">Tipo De Envio</label>
                            <select name="cmbTipo_Envio" id="tipoEnvio" class="form-select beneficiario">
                                <option value="" default selected>Seleccione una opción</option>
                            </select>
                        </div>
                        <div id="Datos_Seguro_Item_2">
                        </div>
                        <div id="Datos_Seguro_Item_3">
                            <label for="pais_de_origen">País de Origen</label>
                            <select id="Pais_Origen" name="cmbPais_Origen" class="form-select beneficiario">
                                <option value="">Selecciona una opción</option>
                            </select>
                        </div>
                        <div id="Datos_Seguro_Item_4">
                            <label for="ciudad_origen" id="Datos_Label_4">Ciudad de Origen</label>
                            <input type="text" name="txtCiudad_Origen" class="form-control" id="descCiudadOrigen">
                        </div>
                        <div id="Datos_Seguro_Item_5">
                            <label for="">País de Destino</label>
                            <select id="Pais_Destino" name="cmbPais_Destino" class="form-select beneficiario">
                                <option value="">Selecciona una opción</option>
                            </select>
                        </div>
                        <div id="Datos_Seguro_Item_6">
                            <label for="Datos_Seguro_Item_6" id="Datos_Label_6">Ciudad de Destino</label>
                            <input type="text" name="txtCiudad_Destino" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="Documentacion_Grid">
                    <div id="contenedorTitulo">
                        <h1 id="titulo_documentacion">Documentación </h1>
                    </div>
                    <div id="Espacio_Vacio">
                    </div>
                    <div id="Documento_Item_1">
                        <label for="Documento">Documento 1</label>
                        <select name="cmbDocumento1" id="seleccion_documento_1" class="form-select documento1">
                            <option value="" default select>Selecciona una opción</option>
                         
                        </select>
                    </div>
                    <div id="Documento_Item_2">
                        <label for="referencia">Referencia</label>
                        <input id="referencia_1" type="text" class="form-control referencia1" name="txtReferencia1"
                            value="">
                    </div>
                    <div id="Documento_Item_3">
                        <label for="Documento">Documento 2 </label>
                        <select name="cmbDocumento2" id="seleccion_documento_2" class="form-select  documento2">
                            <option value="" default select>Selecciona una opción</option>
                           
                        </select>
                    </div>
                    <div id="Documento_Item_4">
                        <label for="referencia">Referencia</label>
                        <input name="txtReferencia2" id="referencia_2" type="text" class="form-control referencia2"
                            value="">
                    </div>
                </div>
                <div class="flex_checkbox">
                    <form action="">
                        <div class="parrafo">
                            <p id="parrafo_1"><input name="txtBienes" type="checkbox" id="checkbox_1" value=""
                                    class="form-check-input beneficiarioCheck2" required> Declaro no estar asegurando
                                ninguna mercancía / bien asegurado que se encuentre dentro de los siguientes bienes
                                excluidos: *
                                <a href="#parrafo_1" onclick="verMas('mas');" id="mas">...leer mas</a>
                            </p>
                            <p id="desplegar" style="display:none;">
                                Maquinaria y equipo con antigüedad de más de 10 años / *Maquinaria o bienes que rebasen o
                                excedan las dimensiones del vehículo que la traslada a lo largo-ancho-alto / * Autobuses,
                                automóviles, camiones y tracto camiones, motocicletas remolcados, y/o que viajen en madrinas
                                o bajo su propio impulso / * Armas de fuego, cartuchos, municiones, estopines y similares /
                                * Bienes reconstruidos / * Algodón en rama o en hueso o en pacas o en otras presentaciones /
                                * Borra / *Aparatos, equipo o dispositivos, fijos o montados en el medio de transporte / *
                                Bienes de desperdicio y mercancía dañada, desperdicio plástico y Plástico pet / * Efectivo,
                                cheques, vales, pagares y/o cualquier documento bancario o intercambiable / * Equipos
                                especiales que se encuentren instalados en vehículos tales como: radios, teléfonos, aparatos
                                médicos, aparatos de medicina, aparatos(científicos) / * Dinamita, estopines y explosivos en
                                general, gases, sustancias o materiales inflamables y/o explosivos, y/o corrosivos de
                                naturaleza peligrosa, petróleo y combustibles, sustancias acidas, sustancias radioactivas,
                                combustibles de cualquier tipo, cualquier tipo de carga clasificada como 'peligrosa' de
                                acuerdo a los estándares internacionales de carga / * Azúcar, café en grano, canela / *
                                Tabaco en rama / * Harina de pescado / * Huevo para consumo y/o incubación / * Pedrería sin
                                montar, metales y piedras preciosas, muestrarios de cualquier clase, joyería y relojería
                                fina, objetos personales, metales preciosos en cualquier presentación (oro, plata, cobre,
                                aluminio, platino, bronce y similares), muestrarios de joyería, antigüedades y obras de
                                arte, pieles finas de ornato o artículos de ornato de pieles finas / * Tarjetas de crédito,
                                tarjetas telefónicas, boletos de sorteos y otros similares con valor nominal, tarjetas de
                                crédito y/o debito. / * Tubos y estructuras de concreto / * Varilla / * Cascos de yates y
                                cualquier embarcación remolcados / * Cascos de aeronaves / * Sangre y semen / * Cualquier
                                tipo de bien prohibido por la legislación federal vigente / * Animales vivos tales como
                                caballos, animales de compañía y cualquier animal de competencia o 'pura sangre' ...
                                <a href="#parrafo_1" onclick="verMas('menos');" id="menos">leer menos</a>
                            </p>
                        </div>
                        <div class="item_parrafo_2">
                            <p id="parrafo_2">
                                <input data-beneficiario="checkB2" type="checkbox" name="txtDVerdad" id="checkbox_2" value=""
                                    class="form-check-input beneficiarioCheck" required> Declaro bajo protesta de decir la
                                verdad, que los datos proporcionados concuerdan fielmente con la realidad y que no se
                                presenta siniestro alguno a la fecha.
                            </p>
                        </div>
                    </form>
                </div>
                <p id="texto_boton_emitir">
                    <button type="submit" class="btn btn-light" id="Boton_Emitir">Continuar</button>
                </p>
            </div>
        </footer>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"></script>
        <script src="./datosBeneficiario/js/verMas.js"></script>
        <script src="./datosBeneficiario/dist/datosBundle.js"></script>
    </body>
    
    </html>
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = salida;
    return divElement;
}

