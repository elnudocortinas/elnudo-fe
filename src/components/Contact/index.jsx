import { useStore } from '@nanostores/react'
import { lang } from '@stores/lang'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import FormInput from './FormInput'
import { sendMessage } from 'src/api/api'

const Contact = () => {
  const currentLang = useStore(lang)
  return (
    <div className="h-fit bg-[url('/images/contact.png')] p-10 text-white text-center" id='contact'>
      <div className="max-w-7xl mx-auto">
        <h3 className="text-subtitle md:text-title uppercase">{currentLang.locale.contact.title}</h3>
        <p className="text-subtitle">{currentLang.locale.contact.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className='mt-20'>
            <Formik
              initialValues={{ name: '', email: '', phone: '', body: '' }}
              enableReinitialize={true}
              validate={values => {
                const errors = {}
                if (!values.email) {
                  errors.email = currentLang.locale.contact.required
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = currentLang.locale.contact.error
                }

                if(!values.name){
                  errors.name = currentLang.locale.contact.required
                }

                if(!values.phone){
                  errors.phone = currentLang.locale.contact.required
                }
                return errors
              }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {

                const message = {
                  data: values
                }
                const result = await sendMessage(message)
                const json = await result.json()
                const { data } = await json
                if (data) {
                  window.alert(currentLang.locale.contact.submitted)
                  setSubmitting(false)
                  resetForm({values: { name: '', email: '', phone: '', body: '' }})
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form className='grid gap-5'>
                  <FormInput name="name" type="text" placeholder={currentLang.locale.contact.name} />
                  <FormInput name="email" type="email" placeholder={currentLang.locale.contact.email} />
                  <FormInput name="phone" type="tel" placeholder={currentLang.locale.contact.phone} />
                  <FormInput name="body" type="textarea" placeholder={currentLang.locale.contact.message} />
                  <button
                    className='bg-secondary text-white py-3 px-20 justify-self-end w-full md:w-fit' 
                    type="submit" 
                    disabled={isSubmitting}
                  >
                    {currentLang.locale.contact.submit}
                  </button>
                </Form>
              )}
            </Formik>   
          </div>    
        </div>
      </div>
    </div>
  )
}

export default Contact