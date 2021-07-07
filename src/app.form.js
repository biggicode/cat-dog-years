import * as yup from 'yup'

export const initialValuesAll = {
  humanYears: 1
};

export const validationSchemaAll = yup.object().shape({
  humanYears: yup.number().min(1).max(30).required()
});

