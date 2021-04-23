<template>
  <div class="dashboard">
    <div class="">
      <section class="hero container">
        <div class="hero-body">
          <div
            class="container is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
          >
            <figure class="image is-128x128">
              <img
                class="is-rounded"
                src="@/assets/perro-en-revision-veterinaria.jpg"
              />
            </figure>
            <p class="title has-text-centered has-text-link">
              ¡Bienvenido!<br />
              CARNET DE VACUNACIÓN DIGITAL
            </p>
            <p class="subtitle"></p>
          </div>
        </div>
      </section>

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
                      <th class="has-text-primary has-text-centered">Vacuna</th>
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
</template>

<script>
export default {
  name: "Header",
};
</script>

