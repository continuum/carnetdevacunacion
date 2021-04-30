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
            <p class="title has-text-centered has-text-link">¡Bienvenido!</p>
            <p class="title has-text-centered has-text-link is-size-3">
              CARNET DE VACUNACIÓN DIGITAL
            </p>
            <p class="subtitle">
              Inicio del proceso de digitalización el carnet de tu mascota.
            </p>
          </div>
        </div>
      </section>

      <!-- Form -->
      <section class="hero has-background-primary-light">
        <div class="hero-body container">
          <p class="title">Paso 1</p>
          <p class="subtitle">
            Ingresa en el siguiente formulario la información requerida por cada
            mascota. <br />
            Esto nos permitirá corroborar la información registrada hasta la
            fecha de hoy.
          </p>
          <div class="columns">
            <div class="column">
              <div
                class="typeform-widget"
                data-url="https://form.typeform.com/to/UBZYzyqb?typeform-medium=embed-snippet"
                style="width: 100%; height: 600px"
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section class="hero has-background-success-light">
        <div class="hero-body container">
          <p class="title has-text-white">Paso 2</p>
          <p class="subtitle has-text-white">
            Nos pondremos en contacto con la Clínica Veterinaria y Veterinario/a
            ingresado para confirmar los datos.
          </p>
          <br />
          <div class="card">
            <div class="card-content">
              <div class="content">
                <p class="has-text-centered is-uppercase">
                  Te recordamos que este proceso de confirmación puede demorar
                  aproximadamente 72 horas.
                </p>
                <p
                  class="has-text-centered has-text-link has-text-weight-medium"
                >
                  Si luego de contratar nuestro servicio consideras que no es lo
                  deseado, te devolveremos el 100% de lo contratado.
                </p>
                <p class="has-text-centered">Si tienes alguna duda contáctanos a:
                  <a :href="'mailto:hola@carnetdevacunacion.cl'">hola@carnetdevacunacion.cl</a>  
                </p>                

              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-three-fifths is-offset-one-fifth"></div>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Carnet de Vacunación </strong>
            <a href=https://carnetdevacunacion.cl/>2021</a>. Todos los derechos reservados | Chile.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import i18n from "@/plugins/i18n";

export default {
  name: "Home",
  computed: {
    message: function () {
      return this.$t("hello");
    },
  },
  data() {
    return {
      languages: [
        {
          flag: "us",
          language: "en",
          title: "English",
        },
        {
          flag: "es",
          language: "es",
          title: "Español",
        },
      ],
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
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
