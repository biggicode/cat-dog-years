import './App.css';
import React from 'react'
import * as S from './styles'
import { Formik } from 'formik'
import * as yup from 'yup'

function App() {
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
      onSubmit={(values) => console.log(values)}
      >

      </Formik>
    </S.StyledApp>

  );
}

export default App;
