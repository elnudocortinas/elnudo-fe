import { Field, ErrorMessage } from 'formik'

const FormInput = ({ type, name, placeholder }) => {
  return (
    <fieldset className='flex items-center gap-2'>
      <Field 
        className="w-full p-3 border-secondary border-2 text-white bg-[transparent]" 
        type={type} 
        name={name} 
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component="span" className='text-primary font-[.55rem]' />
    </fieldset>
  )
}

export default FormInput