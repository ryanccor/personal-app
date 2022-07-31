import { ObjectID } from "bson"
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik"

import { Family } from "@/models/Family"
import { Guest } from "@/models/Guest"
import { useNewFamily, useStore } from "@/util/state"

import { Submmit } from "../Submmit"
import { Loading } from "../Loading"
import { formSchema } from "./formSchema"

import styles from './index.module.scss'

type GuestCardProps = Family & { edit? : boolean, add?: boolean }

export const GuestCard = ({ guests, _id, family_name, edit, add }: GuestCardProps) => {
  const state = useStore()
  const setNewFamily = useNewFamily((state) => state.new)
  
  return (
    <div>

    <Formik
      validationSchema={
        formSchema
      }
      initialValues={{
        _id,
        family_name,
        guests: [...guests]
      }}
    
      onSubmit={async (values) =>  {
      
      await fetch('/api/edit',
      {
        method: 'POST',
        body: JSON.stringify(values) 
      }).then(() => {
        if (add) {
          state.inc(values)
          setNewFamily()
        }
      })

    }}
    >
      {({ values, isSubmitting, errors, setSubmitting }) => (
        <Form>
        { isSubmitting 
        ? <Loading/>
        : <div className={styles.wrapper}>
          { edit 
          ? <>
            <Field 
            type="text" 
            className={ styles.familyName } 
            name="family_name"
            onMouseDown={(e)=>{
              if(e.currentTarget.value == 'Nome da Familia'){
                e.currentTarget.value = ''
              }
            }}
            />
            <ErrorMessage name="family_name"/>
            </> 
          : <h1>{ family_name }</h1> }
          
          { edit &&
            !add 
            && 
            <div className={ styles.removeBtn }>
              <button 
                type="button"
                onClick={
                  async (e) => {
                    setSubmitting(true)
                    const response = await fetch('/api/remove',{
                      method: 'POST',
                      body: JSON.stringify({
                        _id: values._id
                      })
                    }).then(() => {
                      state.del(values._id)
                      setSubmitting(false)
                    })
                    .catch((error) => errors.family_name = error)
                  }
                }
                >
              Remover
            </button>
          </div>
}      
          <div className={styles.guestList}>
      
          <FieldArray name="guests">
            {({remove,push}) => (
              <div className={styles.family}>
              {
                  values.guests.length > 0 && values.guests.map((guest, index) => {

                  return (
                    <div key={guest._id.toString()}>
                      <div className={styles.round}>
                        
                        { edit 
                        ? <>
                          <Field 
                          className={ styles.name } 
                          type="text" 
                          name={`guests.${index}.name`} 
                          onMouseDown={
                            (e) => {
                              if (e.currentTarget.value == 'Digite o nome do convidado'){
                                e.currentTarget.value = ''
                              }}
                            }/>
                          </>
                        : <p className={ styles.name }>{ guest.name }</p> }
                        
                        <Field component="select" name={`guests.${index}.confirmed`} id="confirm">
                          <option value="true">Sim</option>
                          <option value="false">Não</option>
                        </Field>
                      
                      { edit
                       ? <div className={ styles.remove }>
                            <button type="button" onClick={(e) => { 
                            e.preventDefault()
                            remove(index)}}>
                              X
                            </button>
                          </div>
                        : null
                          }

                      </div>
                      <ErrorMessage name={`guests.${index}.name`} />
                    </div>
                  )
                })
              }
                { edit
                  ? <div className={styles.add}>
                      <button type="button" onClick={e =>
                        push({
                          _id: new ObjectID(),
                          name: "Digite o nome do convidado",
                          confirmed: false
                        } as Guest)
                      }>
                        Mais um convidado</button>
                  </div>
                  : ''
                  }
              </div>
              )
             }
          </FieldArray>
          
          </div>
          <Submmit />
        </div>}
        </Form>
      )
      }
    </Formik>
    </div>
  )
}