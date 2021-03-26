import validationMessages from 'vee-validate/dist/locale/es'

const messages = {
  form: {
    validation: {
      messages: {
        ...validationMessages.messages,
        required: 'El campo es obligatorio',
        confirmed: 'Las contraseñas no coinciden'
      },
    },
  },
  recoveryPassword: {
    doesNotExist: 'No hay un usuario activo asociado a esta dirección de correo o la contraseña no puede ser cambiada'
  }
}

export default messages
