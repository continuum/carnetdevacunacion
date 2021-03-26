<template>
  <div class="dashboard">
    <div class="container">
      <nav class="navbar mb-6" role="navigation" aria-label="main navigation">
        <div class="navbar-brand ml-3">
          <a class="navbar-item logo" href="#">
            <Logo />
          </a>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          class="navbar-item navbar-end has-dropdown is-hoverable mr-3 is-hidden-mobile"
        >
          <a class="navbar is-flex is-flex-direction-row">
            <span
              class="is-flex is-flex-direction-column is-align-items-flex-end is-justify-content-center"
            >
              <span class="is-size-7 is-uppercase has-text-weight-light"></span>
              <p class="name">hola@correo.cl</p>
              <div class="navbar-dropdown is-right is-boxed">
                <a class="navbar-item"> Salir </a>
              </div>
            </span>
          </a>
        </div>
      </nav>
      <!-- Form -->
      <div class="pet-form">
        <h3 class="is-size-4 has-text-weight-semibold">
          Ingresa la información de tu mascota
        </h3>
        <div class="columns">
          <div class="column is-three-fifths is-offset-one-fifth">
            <div
              class="typeform-widget"
              data-url="https://form.typeform.com/to/UBZYzyqb?typeform-medium=embed-snippet"
              style="width: 100%; height: 550px"
            ></div>
          </div>
        </div>
      </div>
      <!-- Datos mascotas -->
      <div class="info-mascotas my-6">
        <h3 class="is-size-4 has-text-weight-semibold mb-4">
          Detalle Mascotas
        </h3>
        <!-- Elemento a replicar por mascota 
        si es 1 mascota la class "column" lleva la clase:is-three-fifths is-offset-one-fifth
        Si son más mascotas se borra -->
        <div class="columns">
          <div class="column is-three-fifths is-offset-one-fifth">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <p class="title is-size-4 mb-0">Catón</p>
                  <p>
                    Nº de Chip
                    <a class="has-text-primary" href="#">900115000803757</a>
                  </p>
                </div>
                <div class="content my-5">
                  <table class="table">
                    <thead>
                      <tr>
                        <th class="has-text-primary has-text-centered">
                          Vacuna
                        </th>
                        <th class="has-text-primary has-text-centered">
                          Aplicación
                        </th>
                        <th class="has-text-primary has-text-centered">
                          Próxima
                        </th>
                        <th class="has-text-primary">Respaldo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Séxtuple u Óctuple</th>
                        <td class="has-text-centered">01/03/2021</td>
                        <td class="has-text-centered">01/08/2021</td>
                        <td class="has-text-centered">
                          <div class="image is-96x96">
                            <img
                              class="has-text-centered"
                              src="https://bulma.io/images/placeholders/128x128.png"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Séxtuple u Óctuple</th>
                        <td class="has-text-centered">01/03/2021</td>
                        <td class="has-text-centered">01/08/2021</td>
                        <td class="has-text-centered">
                          <div class="image is-96x96">
                            <img
                              class="has-text-centered"
                              src="https://bulma.io/images/placeholders/128x128.png"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Editar</a>
                <a href="#" class="card-footer-item">Eliminar</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/svg/Logo.vue";

export default {
  name: "Header",
  components: { Logo },
};

(function () {
  var qs,
    js,
    q,
    s,
    d = document,
    gi = d.getElementById,
    ce = d.createElement,
    gt = d.getElementsByTagName,
    id = "typef_orm",
    b = "https://embed.typeform.com/";
  if (!gi.call(d, id)) {
    js = ce.call(d, "script");
    js.id = id;
    js.src = b + "embed.js";
    q = gt.call(d, "script")[0];
    q.parentNode.insertBefore(js, q);
  }
  console.log(qs, s);
})();
</script>

