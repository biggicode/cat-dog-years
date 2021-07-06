import './App.css';
import React, { useState } from 'react'
import * as S from './styles'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

function App() {

  const [years, setYears] = useState([])

  const onSubmit = (values) => {
    
    const yearsArray = [values.catYears, values.dogYears]
    const yearsAlgorithm = humanYearsCatYearsDogYears(yearsArray)
    
    console.log(yearsAlgorithm)
    setYears(yearsAlgorithm)

    console.log(values)
    console.log(years)
  }

  //Cat and dog years Algorithm

  const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = humanYears[0] * 4;
    let dogYears = humanYears[1] * 5;
    
    if ( humanYears[0] === 1) {
      catYears = catYears + 11;
    } else if ( humanYears[1] === 1) {
      dogYears = dogYears + 10;
    } else {
      catYears = catYears + 16;
      dogYears = dogYears + 14;
    }
  
    humanYears[0] = catYears;
    humanYears[1] = dogYears;
    return humanYears;
  }

  return (
    <S.StyledApp>
      <Formik
      initialValues = {{
        catYears: 0,
        dogYears: 0
      }}
      validationSchema={yup.object().shape({
        catYears: yup.number().min(1).max(25),
        dogYears: yup.number().min(1).max(30)
      })}
      onSubmit={onSubmit}
      >
        {({ isValid }) => (
          <Form>
            <h1>This app transforms human years in cat and dog years</h1>
            <Field name="catYears" id="catYears">
              {({ field, meta}) => (
                <div>
                <p>Enter catYears:</p>
                <input type="text" {...field} />
                {meta.touched && meta.error && <div>error: {meta.error}</div>}
              </div>
              )}
            </Field>
            <Field name="dogYears" id="dogYears">
              {({ field, meta}) => (
                <div>
                <p>Enter dogYears:</p>
                <input type="text" {...field} />
                {meta.touched && meta.error && <div>error: {meta.error}</div>}
              </div>
              )}
            </Field>
            <br />
            <button type="submit" disabled={!isValid}>Calculate dog and human years!</button>
          </Form>
        )}
      </Formik>
      <h2>{years[0] && `Your cat in cat years have: ${years[0]} years!`}</h2>
      <h2>{years[1] && `Your dog in dog years have: ${years[1]} years!`}</h2>
    </S.StyledApp>

  );
}

export default App;
