import { Formik } from 'formik';
import NumberField from './NumberField';
import { validateNumberField } from '../utils/validation';
import { checkTriangleWrapper } from '../utils/triangleType';
import { observer } from 'mobx-react';
import { useState } from 'react';
import TriangleType from './TriangleType';

const InputForm = observer(() => {
  const [result, setResult] = useState('');
  const [triangle, setTriangle] = useState({
    a:0, b:0, c:0,
  });

  return (
    <div>
      <Formik 
        initialValues={{
          sideA: 0,
          sideB: 0,
          sideC: 0
        }}
        validate={values => {
          const errors: any = {};
          errors.sideA = validateNumberField(values.sideA);
          errors.sideB = validateNumberField(values.sideB);
          errors.sideC = validateNumberField(values.sideC);
        }}
        onSubmit={(values) => {
          const typeOfTriangle = checkTriangleWrapper({
            a: values.sideA,
            b: values.sideB,
            c: values.sideC,
          });
          setResult(typeOfTriangle);
          setTriangle({
            a: values.sideA,
            b: values.sideB,
            c: values.sideC,
          })
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <NumberField 
              name="sideA"
              handleChange={handleChange}
              value={values.sideA}
              error={errors.sideA}
            />
            <NumberField 
              name="sideB"
              handleChange={handleChange}
              value={values.sideB}
              error={errors.sideB}
            />
            <NumberField 
              name="sideC"
              handleChange={handleChange}
              value={values.sideC}
              error={errors.sideC}
            />
            <button type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
      <div>
        <h2>Result: {result}</h2>
        <TriangleType result={result} />
      </div>
    </div>
  );
});

export default InputForm;
