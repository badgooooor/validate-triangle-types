import { Formik } from 'formik';
import NumberField from './NumberField';
import { validateNumberField } from '../utils/validation';
import { checkTriangleWrapper } from '../utils/triangleType';

function InputForm() {
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
          console.log(values, typeOfTriangle);
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
    </div>
  );
}

export default InputForm;
