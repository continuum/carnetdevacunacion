import { required, email, confirmed, min, max, length } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';
import { rutValidator } from "vue-dni";
import i18n from '@/languages';

extend('required', {
  ...required,
  message: i18n.t('(*) Requerido'),
})

extend('email', {
  ...email,
  message: (_, values) => i18n.t('form.validation.messages.email', values),
})

extend("confirmed", {
  ...confirmed,
  message: (_, values) => i18n.t('form.validation.messages.confirmed', values),
});

extend("min",{
  ...min,
  message: i18n.t('form.validation.messages.min'),
})

extend("max",{
  ...max,
  message: i18n.t('form.validation.messages.max'),
})

extend("length",{
  ...length,
  message: i18n.t('form.validation.messages.length'),
})

// TODO: Exclude 0 without activate validation on form load
extend('positive-money', {
  validate(value) {
    value = typeof value === "string" ? parseInt(value.replace("$ ", "").replaceAll(".", "")) : value;
    return value >= 0;
  },
  message: "El monto ingresado no es válido."
});

extend("rut", {
  validate: rutValidator,
  message: "El rut ingresado no es válido."
  }
);
