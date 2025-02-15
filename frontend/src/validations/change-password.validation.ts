import * as yup from 'yup'

export const changePasswordValidation = yup.object().shape({
  oldPassword: yup
    .string()
    .min(8, 'Password must have at least 8 characters')
    .required('Password is required'),
  newPassword: yup
    .string()
    .min(8, 'Password must have at least 8 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), ''], 'Passwords must match')
    .required('Confirm password is required'),
})
