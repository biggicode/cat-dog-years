import './App.css';
import React, { useState } from 'react'
import * as S from './styles'
import { Formik, Form, Field } from 'formik'
import { initialValues, initialValuesAll, validationSchema, validationSchemaAll } from './app.form';
import { humanYearsCatYearsDogYears } from './util';

function App() {

  const [years, setYears] = useState([])

  const onSubmit = (values) => setYears(humanYearsCatYearsDogYears(values.humanYears))

  return (
    <S.StyledApp>
      <Formik
      initialValues={initialValuesAll}
      validationSchema={validationSchemaAll}
      onSubmit={onSubmit}
      >
        {({ isValid }) => (
          <Form>
            <h1>This app transforms human years in cat and dog years</h1>
            <Field name="humanYears" id="humanYears">
              {({ field, meta}) => (
                <div>
                <p>Enter humanYears:</p>
                <input type="text" {...field} />
                {meta.touched && meta.error && <div>error: {meta.error}</div>}
              </div>
              )}
            </Field>
            <br />
            <button type="submit" disabled={!isValid}>Calculate dog and cat years!</button>
          </Form>
        )}
      </Formik>
      <h2>{years[1] && `Your cat in cat years has: ${years[1]} years!`}</h2>
      <h2>{years[2] && `Your dog in dog years has: ${years[2]} years!`}</h2>
    </S.StyledApp>

  );
}

export default App;
