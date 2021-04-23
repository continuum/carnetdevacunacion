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
        ></div>
      </nav>

      <section class="hero">
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
            <p class="title">Bienvenido Carnet de Vacunación Digital</p>
            <p class="subtitle"></p>
          </div>
        </div>
      </section>

      <!-- Form -->
      <section class="hero has-background-link-light">
        <div class="hero-body">
          <p class="title">Paso 1</p>
          <p class="subtitle">
            Ingresa en el siguiente formulario la información requerida. <br />
            Esto nos permitirá corroborar la información hasta la fecha de tu
            mascota.
          </p>
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
      </section>
      <section class="hero has-background-success-light">
        <div class="hero-body">
          <p class="title">Paso 2</p>
          <p class="subtitle">
            Nos pondremos en contacto con la Clinica Veterinaria y Veterinario
            para confirmar
          </p>
          <div class="columns">
            <div class="column is-three-fifths is-offset-one-fifth"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import i18n from "@/plugins/i18n";
import Logo from "@/components/svg/Logo.vue";

export default {
  name: "Home",
  components: { Logo },
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
