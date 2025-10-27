import { Button, Form } from "react-bootstrap";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function MediaForm({ onNext, onPrev }: { onNext: any, onPrev: any }) {
  const validationSchema = Yup.object().shape({
    hasPrototype: Yup.string().required("Please select an option"),
    description: Yup.string().when("hasPrototype", {
      is: "yes",
      then: (schema) => schema.required("Description is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    video: Yup.mixed().when("hasPrototype", {
      is: "yes",
      then: (schema) =>
        schema
          .required("Video is required")
          .test(
            "fileType",
            "Only video files are allowed",
            (value: any) => !value || value.type.startsWith("video/")
          ),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const initialValues = {
    hasPrototype: "",
    description: "",
    video: null,
  };

  const handleSubmit = (values: any, { setSubmitting }: { setSubmitting: any }) => {
    onNext({ valid: true, values });
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isSubmitting }: {values: any, setFieldValue: any, isSubmitting: any}) => (
        <FormikForm noValidate>
          <Form.Group className="mb-2">
            <Form.Label>Do you have a prototype? *</Form.Label>
            <Field
              as={Form.Select}
              name="hasPrototype"
              className="form-select"
              data-bs-theme="dark"
              // isInvalid={touched?.hasPrototype && errors?.hasPrototype}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Field>
            <div className="text-danger small mt-1">
              <ErrorMessage name="hasPrototype" />
            </div>
          </Form.Group>

          {values.hasPrototype === "yes" && (
            <>
              <Form.Group className="mb-2">
                <Form.Label>Description *</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  rows={2}
                  className="form-control"
                  data-bs-theme="dark"
                  onChange={(event) =>
                    setFieldValue("description", event.target.value)
                  }
                  // isInvalid={touched?.description && errors?.description}
                />
                <div className="text-danger small mt-1">
                  <ErrorMessage name="description" />
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Prototype Video *</Form.Label>
                <Form.Control
                  type="file"
                  name="video"
                  accept="video/*"
                  data-bs-theme="dark"
                  // isInvalid={touched.video && !!errors.video}
                  onChange={(e: any) => {
                    setFieldValue("video", e.currentTarget.files[0]);
                  }}
                />
                <div className="text-danger small mt-1">
                  <ErrorMessage name="video" />
                </div>
              </Form.Group>
            </>
          )}

          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="secondary"
              onClick={onPrev}
              type="button"
              className="form-btn"
            >
              Previous
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="form-btn"
              disabled={isSubmitting}
            >
              Next
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
}
