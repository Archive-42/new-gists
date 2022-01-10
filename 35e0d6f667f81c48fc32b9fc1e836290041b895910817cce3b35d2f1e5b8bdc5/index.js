var SignupForm = forms.Form.extend({
  username: forms.CharField(),
  email: forms.EmailField(),
  password: forms.CharField({widget: forms.PasswordInput}),
  confirmPassword: forms.CharField({widget: forms.PasswordInput}),
  acceptTerms: forms.BooleanField({required: true})
})
