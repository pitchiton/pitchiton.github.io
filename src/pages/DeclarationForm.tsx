import { Form, Button } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function DeclarationForm({ onPrev, onSubmit }: { onPrev: any, onSubmit: any }) {
  const initialValues = {
    accepted: false,
    signature: "",
    date: new Date().toISOString().split("T")[0],
  };

  const validationSchema = Yup.object({
    accepted: Yup.boolean()
      .oneOf([true], "You must accept the Terms and Conditions")
      .required("You must accept the Terms and Conditions"),
    signature: Yup.string().required("Signature is required"),
  });

  const handleSubmit = (values: any) => {
    onSubmit({ valid: true, values });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur }: {values: any, handleChange: any, handleBlur: any}) => (
        <FormikForm>
          <div
            className="border p-3 mb-3"
            style={{ height: "120px", overflowY: "scroll" }}
          >
            <p>
              By submitting this form, you agree that all information provided
              is accurate to the best of your knowledge. Any false statements
              may result in disqualification.
            </p>
            <p>
              You also agree to our terms and conditions, including allowing us
              to contact you for further clarification regarding your project
              submission.
            </p>
          </div>

          <Form.Check
            type="checkbox"
            label="I agree to the Terms and Conditions *"
            name="accepted"
            checked={values.accepted}
            onChange={handleChange}
            onBlur={handleBlur}
            data-bs-theme="dark"
          />
          <ErrorMessage
            name="accepted"
            component="div"
            className="text-danger mt-1"
          />

          <Form.Group className="mt-3">
            <Form.Label>Digital Signature (Name) *</Form.Label>
            <Form.Control
              name="signature"
              value={values.signature}
              onChange={handleChange}
              onBlur={handleBlur}
              // isInvalid={touched.signature && errors.signature}
              data-bs-theme="dark"
            />
            <ErrorMessage
              name="signature"
              component="div"
              className="text-danger mt-1"
            />
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Date</Form.Label>
            <Field
              as={Form.Control}
              type="date"
              name="date"
              value={values.date}
              data-bs-theme="dark"
              disabled
            />
          </Form.Group>

          <div className="d-flex justify-content-between mt-4">
            <Button variant="secondary" onClick={onPrev} className="form-btn">
              Previous
            </Button>
            <Button type="submit" variant="success" className="form-btn">
              Submit
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
}
