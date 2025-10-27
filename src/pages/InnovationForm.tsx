import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const InnovationForm = ({ onNext, onPrev }: { onNext: any, onPrev: any }) => {
  const [filePreviews, setFilePreviews] = useState([]);

  // ✅ Validation Schema
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Project Title is required"),
    category: Yup.string().required("Category is required"),
    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),
    presentation: Yup.string().nullable(),
    document: Yup.array()
      .min(1, "Please upload at least one document")
      .required("Required"),
  });

  const initialValues = {
    title: "",
    category: "",
    description: "",
    presentation: "",
    document: [],
  };

  const handleFileChange = (event: any, setFieldValue: any) => {
    const files = Array.from(event.currentTarget.files);
    setFilePreviews(files as any);
    setFieldValue("document", files);
  };

  const handleRemoveFile = (index: number, values: any, setFieldValue: any) => {
    const updatedFiles = values.document.filter((_: any, i: number) => i !== index);
    setFilePreviews(updatedFiles);
    setFieldValue("document", updatedFiles);
  };

  const handleSubmit = (values: any, { setSubmitting }: { setSubmitting: any }) => {
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
          <Form.Group className="mb-2">
            <Form.Label>Project Title *</Form.Label>
            <Field
              as={Form.Control}
              name="title"
              data-bs-theme="dark"
              // isInvalid={touched.title && !!errors.title}
            />
            <div className="text-danger small">
              <ErrorMessage name="title" />
            </div>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Category *</Form.Label>
            <Field
              as={Form.Select}
              name="category"
              data-bs-theme="dark"
              // isInvalid={touched.category && !!errors.category}
            >
              <option value="">Select Category</option>
              <option>Health</option>
              <option>Education</option>
              <option>Technology</option>
              <option>Environment</option>
            </Field>
            <div className="text-danger small">
              <ErrorMessage name="category" />
            </div>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Description *</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              rows={3}
              data-bs-theme="dark"
              onChange={(event) =>
                setFieldValue("description", event.target.value)
              }
              // isInvalid={touched.description && !!errors.description}
            />
            <div className="text-danger small">
              <ErrorMessage name="description" />
            </div>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Where Presented Before</Form.Label>
            <Form.Control
              name="presentation"
              as="textarea"
              rows={2}
              data-bs-theme="dark"
              onChange={(event) =>
                setFieldValue("presentation", event.target.value)
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload Project Documents (PDF/Word) *</Form.Label>
            <Form.Control
              type="file"
              multiple
              name="document"
              accept=".pdf,.doc,.docx"
              data-bs-theme="dark"
              onChange={(event) => handleFileChange(event, setFieldValue)}
            />
            <div className="text-danger small">
              <ErrorMessage name="document" />
            </div>

            {/* File preview list */}
            {filePreviews.length > 0 && (
              <ul className="mt-2 list-group">
                {filePreviews.map((file: any, index: number) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span>{file.name}</span>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() =>
                        handleRemoveFile(index, values, setFieldValue)
                      }
                    >
                      ✕
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </Form.Group>
          {/* <Form.Group className="mb-3">
            <Form.Label>Upload Project Documents (PDF/Word) *</Form.Label>
            <Form.Control
              type="file"
              name="document"
              accept=".pdf,.doc,.docx"
              data-bs-theme="dark"
              multiple
              onChange={(event) =>
                setFieldValue("document", Array.from(event.currentTarget.files))
              }
            />
            <div className="text-danger small">
              <ErrorMessage name="document" />
            </div>
          </Form.Group> */}

          <div className="d-flex justify-content-between mt-3">
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
};

export default InnovationForm;
