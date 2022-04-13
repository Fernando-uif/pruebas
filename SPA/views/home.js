export default () => {
  const view = `

  <body>
      <section class="lds-spinner-container hidden" id="spinner__container">
          <div class="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </section>
      <div class="logos_header_grid">
          <div id="header-logo">
              <img src="./assets/serverpack.png" alt="Logotipo_1" id="server_pack_image">
          </div>
          <div id="header-logo_2">
              <p id="imagen_logotipo">
                  <img src="./assets/Safe Trans-01.svg" alt="logotipo_2" id="logotipo_2">
              </p>
          </div>
      </div>
      <div id="header_line"></div>
  
      <section class="sesion">
          <input type="checkbox" disabled class="pestana__input">
          <div class="pestana">
              <div class="pestana__usuario"> </div>
              <div class="pestana__contenido">
                  <div class="pestana__contenido-nombre" id="nombre__Usuario"></div>
                  <div id="btn__menu" class="pestana__contenido-menu">
                      <img src="../assets/home.png" alt=""> Menu
                  </div>
                  <div id="btn__emision" class="pestana__contenido-Emision"><img src="../assets/emitirSeguro-nav.png"
                          alt="Emitir">Emisión
                  </div>
                  <div id="btn__bitacora" class="pestana__contenido-Bitacora"><img src="./assets/bitacora-nav.png" alt="">
                      Bitácora</div>
                  <div id="btn__usuarios" class="pestana__contenido-Usuarios"> <img src="./assets/usuarios-nav.png"
                          alt=""> Usuarios</div>
                  <div class="pestana__contenido-Salir" id="btn__salida"> <img src="./assets/exit-nav.png" alt=""> Salir
                  </div>
              </div>
          </div>
  
          <div id="caja_Usuario" class="caja">
              <div class="caja__container">
                  <img src="./assets/user.png" id="icono_Usuario" class="caja__container-icono" alt="user">
              </div>
          </div>
      </section>
      <div id="contenedor_login">
          <div class="Master_container">
              <div class="container_2" id="main_container">
                  <div id="Logotipo_Central">
                      <p>
                          <img src="./assets/serverpack.png" alt="logotipo" id="imagen_logo">
                      </p>
                  </div>
                  <div class="container__card-login">
                      <section class="login__card-usuario">
                          <!-- <div id="requeriments-container"></div> -->
                          <div class="login__container-inicio">
                              <div class="login__element login--1">
                                  <span class="login__element-title">
                                      Iniciar sesión
                                  </span>
                              </div>
                              <div class="login__element login--2">
                                  <p id="texto-usuario">
                                      <label for="user" class="form-label" id="text_user"><svg
                                              xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                              fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                              <path
                                                  d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                          </svg> Usuario</label>
                                  <div id="inputIcon">
                                      <input name="nombre" type="text" value="" id="user" autocomplete="off"
                                          class="form form-control">
                                  </div>
                                  </p>
                              </div>
                              <div class="login__element login--3">
                                  <div id="requeriment-container-2 password">
                                      <p id="texto-contrasena">
                                          <label for="child_password" class="form-label" id="text_contrasena"><svg
                                                  xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                  fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                                  <path
                                                      d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                              </svg> Contraseña</label>
                                      <div id="inputPassword">
                                          <input name="pass" type="password" value="" id="child_password"
                                              class="form form-control">
                                      </div>
                                      </p>
                                  </div>
                              </div>
                              <div class="login__element login--4">
  
                                  <div type="submit" value="Acceso" class="btn btn-light" id="button_accesar">
                                      Accesar
                                  </div>
                              </div>
                          </div>
                          <div class="card__container-2">
  
                          </div>
                      </section>
                  </div>
              </div>
  
          </div>
      </div>
  
      <footer class="footer__contenedor">
          <div id="linea_footer"></div>
          <div id="footer">
              <div id="imagen_cuadro">
                  <div id="Vacio"></div>
                  <div id="imagen_pie_pagina" class="container__imagen_position-1">
                      <img src="./assets/LOGO  gpobituaj -01.svg" alt="Logotipo" id="imagen_1">
                  </div>
                  <div id="imagen_pie_pagina" class="container__imagen_position-2">
                      <img src="./assets/Development Services_Mesa de trabajo 1.svg" alt="Logotipo" id="imagen_2">
                  </div>
                  <div id="imagen_pie_pagina" class="container__imagen_position-3">
                      <img src="./assets/logo_click.svg" alt="Logotipo" id="imagen_3" class="img-fluid">
                  </div>
              </div>
              <div id="footer_item_2">
                  <div id="Espaciado">
                      <p> Copyright &copy; by Development Services. </p>
                  </div>
              </div>
          </div>
      </footer>
      <style>
          :root {
              --color-generico-boton: #F89B01;
              --color-generico-boton-2: #F8C601;
              --color-Fuente: #F8C601;
              --color-Secundario: #F89B01;
              --color-Terciario: #FB9C01;
          }
      </style>
      <script src="./dist/appBundle.js"></script>
      <noscript>Se requiere JavaScript Habilitado</noscript>

    `;

    const divElement = document.createElement('div');
    console.log(divElement);
    divElement.innerHTML = view;
    console.log(divElement);
  return divElement;
};
