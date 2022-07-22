import { ObjectID } from "bson"
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik"

import { Family } from "@/models/Family"
import { Submmit } from "../Submmit"
import { Guest } from "@/models/Guest"
import { Loading } from "../Loading"

import styles from './index.module.scss'
import { formSchema } from "./formSchema"
import { useState } from "react"

type GuestCardProps = Family & { edit : boolean, add?: boolean }

export const GuestCard = ({ guests, _id, family_name, edit, add }: GuestCardProps) => {

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
      
      await fetch('http://localhost:3000/api/edit',
      {
        method: 'POST',
        body: JSON.stringify(values) 
      })

    }}
    >
      {({ values, isSubmitting, errors }) => (
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
            />
            <ErrorMessage name="family_name"/>
            </> 
          : <h1>{ family_name }</h1> }
      
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
                        Add</button>
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