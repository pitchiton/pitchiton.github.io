import { Form, Button } from "react-bootstrap";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function ContactForm({ onNext, onPrev }: { onNext: any, onPrev: any }) {
  // ✅ Validation Schema
  const validationSchema = Yup.object().shape({
    primaryContact: Yup.string()
      .required("Primary Contact is required")
      .min(8, "Enter a valid phone number"),
    secondaryContact: Yup.string().nullable(),
    primaryEmail: Yup.string()
      .email("Invalid email format")
      .required("Primary Email is required"),
    secondaryEmail: Yup.string().email("Invalid email format").nullable(),
  });

  // ✅ Initial Values
  const initialValues = {
    primaryContact: "",
    secondaryContact: "",
    primaryEmail: "",
    secondaryEmail: "",
  };

  const handleSubmit = (values: any, { setSubmitting }: { setSubmitting: (submitting: boolean) => void }) => {
    setSubmitting(true);
    onNext({ valid: true, values });
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }: {values: any, setFieldValue: any}) => (
        <FormikForm>
          {/* Primary Contact */}
          <Form.Group className="mb-3">
            <Form.Label>Primary Contact *</Form.Label>
            <PhoneInput
              country="in"
              onlyCountries={["in", "us", "gb", "au", "ae", "ca"]}
              value={values.primaryContact}
              onChange={(phone) => setFieldValue("primaryContact", phone)}
              inputProps={{
                name: "primaryContact",
                autoFocus: true,
              }}
              containerClass="w-100"
              inputClass="form-control phone-input"
              data-bs-theme="dark"
              // isInvalid={touched.primaryContact && !!errors.primaryContact}
            />
            <div className="text-danger small">
              <ErrorMessage name="primaryContact" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Secondary Contact</Form.Label>
            <PhoneInput
              country="in"
              onlyCountries={["in", "us", "gb", "au", "ae", "ca"]}
              value={values.secondaryContact}
              onChange={(phone) => setFieldValue("secondaryContact", phone)}
              inputProps={{ name: "secondaryContact" }}
              containerClass="w-100"
              inputClass="form-control phone-input"
              data-bs-theme="dark"
            />
            <div className="text-danger small">
              <ErrorMessage name="secondaryContact" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Primary Email *</Form.Label>
            <Field
              as={Form.Control}
              type="email"
              name="primaryEmail"
              data-bs-theme="dark"
              // isInvalid={touched.primaryEmail && !!errors.primaryEmail}
            />
            <div className="text-danger small">
              <ErrorMessage name="primaryEmail" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Secondary Email</Form.Label>
            <Field
              as={Form.Control}
              type="email"
              name="secondaryEmail"
              data-bs-theme="dark"
            />
            <div className="text-danger small">
              <ErrorMessage name="secondaryEmail" />
            </div>
          </Form.Group>
          <div className="d-flex flex-column flex-sm-row justify-content-between mt-3 gap-2">
            <Button
              variant="secondary"
              onClick={onPrev}
              type="button"
              className="form-btn"
            >
              Previous
            </Button>
            <Button type="submit" variant="primary" className="form-btn">
              Next
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
}
