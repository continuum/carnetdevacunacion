<template>
  <div class="home">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
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
                      placeholder="Email input"
                      value="hello@"
                    />
                  </div>
                  <p class="help">This email is invalid</p>
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

export default {
  name: "Home",
  components: {},
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
