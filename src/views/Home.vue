<template>
  <div class="home">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <div class="mt-5">
            <a class="logo" href="#">
              <Logo />
            </a>
          </div>
          <div class="card mt-6">
            <div class="card-content">
              <div class="content">
                <p class="title is-4">Ingresa</p>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="email"
                      placeholder="ejemplo@correo.com"
                      value=""
                    />
                  </div>
                  <p class="help">This email is invalid</p>
                </div>
                <div class="field">
                  <div class="control">
                    <button class="button is-primary is-fullwidth">
                      Ingresar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
</script>
