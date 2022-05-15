import { ObjectId, ObjectID } from "bson"
import { Formik, Form, Field, FieldArray } from "formik"

import { Family } from "@/models/Family"
import { Submmit } from "../Submmit"
import styles from './index.module.scss'
import { Add } from "../Add"
import { Guest } from "@/models/Guest"

type GuestCardProps = Family & { edit : boolean}

export const GuestCard = ({ guests, _id, family_name, edit }: GuestCardProps) => {
  return (
    <div>

    <Formik
      initialValues={{
        _id,
        family_name,
        guests: [...guests]
      }}
    onSubmit={async (values) =>  {
      
      await fetch('http://localhost:3000/api/edit',
      {method: 'POST',
        body: JSON.stringify(values) 
      })

      
    }}
    >
      {({ values, isSubmitting }) => (
        <Form>
        { isSubmitting 
        ? <h2>Carregando...</h2>
        : <div className={styles.wrapper}>
      
          { edit 
          ? <Field 
            type="text" 
            className={ styles.familyName } 
            name="family_name"
            /> 
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
                        ? <Field 
                          className={ styles.name } 
                          type="text" 
                          name={`guests.${index}.name`} 
                          onMouseDown={
                            (e) => {
                              if (e.currentTarget.value == 'Digite o nome do convidado...'){
                                e.currentTarget.value = ''
                              }}
                            }/> 
                        : <p className={ styles.name }>{ guest.name }</p> }
                        
                        <Field component="select" name={`guests.${index}.confirmed`} id="confirm">
                          <option value="true">Sim</option>
                          <option value="false">Não</option>
                        </Field>
                      
                      { edit
                       ? <div className={ styles.remove }>
                            <button type="button" onClick={(e) => { 
                            e.preventDefault()
                            remove(index)}}>X</button>
                          </div>
                        : ''
                          }

                      </div>
                    </div>
                  )
                })
              }
                { edit
                  ? <div className={styles.add}>
                      <button type="button" onClick={e =>
                        push({
                          _id: new ObjectID(),
                          name: "Digite o nome do convidado...",
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