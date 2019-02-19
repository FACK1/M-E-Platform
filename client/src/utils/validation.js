import Yup from 'yup'

export default function getValidationSchema(values) {
  console.log("object",Yup.object());
  console.log("value",values);
  return Yup.object().shape({
    name: Yup.string()
      .required('name is required!'),
  })
}
