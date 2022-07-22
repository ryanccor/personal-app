import * as yup from 'yup'

export const formSchema = yup.object().shape(
  {
    family_name: yup.string().required('Favor preencher o nome da familia'),
    guests: yup.array().of(
      yup.object().shape(
        {
          name: yup.string().required('Favor preencher o nome do convidado')
        }
      ).strict()
      .required()
    )
  }
)