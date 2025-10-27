import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import * as Yup from "yup";


const applicantSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().nullable(),
  dob: Yup.date().required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  pincode: Yup.number().required("Pincode is required"),
  address: Yup.string().required("Address is required"),
  profilePicture: Yup.mixed().nullable(),
});

const validationSchema = Yup.object({
  applicantType: Yup.string().required(),
  applicants: Yup.array()
    .of(applicantSchema)
    .min(1, "At least one applicant is required"),
});

export default function ApplicationForm({ onNext, formData }: { onNext: any, formData: any }) {
  const [countryid, setCountryid] = React.useState(0);
  const [stateid, setStateid] = React.useState(0);

  const initialValues = {
    applicantType: formData?.applicantType ?? "single",
    applicants:
      formData?.applicants?.length > 0
        ? formData?.applicants
        : [
            {
              firstName: "",
              lastName: "",
              dob: "",
              gender: "",
              country: "",
              state: "",
              city: "",
              address: "",
              pincode: "",
              profilePicture: null,
              profilePicturePreview: null,
            },
          ],
  };
  // const [initialValues, setInitialValues] = useState({
  //   applicantType: "single",
  //   applicants: [
  //     {
  //       firstName: "",
  //       lastName: "",
  //       dob: "",
  //       gender: "",
  //       country: "",
  //       state: "",
  //       city: "",
  //       address: "",
  //     },
  //   ],
  // });

  // useEffect(() => {
  //   setInitialValues({
  //     applicantType: formData.applicantType ?? "",
  //     applicants:
  //       formData?.applicants?.length > 0
  //         ? formData.applicants
  //         : [
  //             {
  //               firstName: "",
  //               lastName: "",
  //               dob: "",
  //               gender: "",
  //               country: "",
  //               state: "",
  //               city: "",
  //               address: "",
  //             },
  //           ],
  //   });
  // }, []);

  const handleSubmit = (values: any, { setSubmitting }: { setSubmitting: (submitting: boolean) => void }) => {
    setSubmitting(true);
    onNext({ valid: true, values });
    setSubmitting(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, setFieldValue: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setFieldValue(`applicants.${index}.profilePicture`, file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setFieldValue(`applicants.${index}.profilePicturePreview`, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeProfilePicture = (index: number, setFieldValue: any) => {
    setFieldValue(`applicants.${index}.profilePicture`, null);
    setFieldValue(`applicants.${index}.profilePicturePreview`, null);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }: { values: any, setFieldValue: any }) => (
        <Form>
          {/* Applicant Type */}
          <div className="mb-3">
            <label className="form-label">Applicant Type</label>
            <Field
              as="select"
              name="applicantType"
              className="form-select custom-form-select"
              data-bs-theme="dark"
              onChange={(e: any) => {
                const type = e.target.value;
                setFieldValue("applicantType", type);
                if (type === "single") {
                  setFieldValue("applicants", [initialValues.applicants[0]]);
                }
              }}
            >
              <option value="single">Single</option>
              <option value="group">Group</option>
            </Field>
          </div>
          <FieldArray name="applicants">
            {({ push, remove }) => (
              <>
                {values.applicants.map((_a: any, i: number) => (
                  <div
                    key={i}
                    className="p-3 mb-3 rounded bg-dark position-relative"
                  >
                    {values.applicantType === "group" &&
                      values.applicants.length > 1 && (
                        <Button
                          variant="dark"
                          size="sm"
                          className="position-absolute top-0 end-0 mt-2 me-2"
                          onClick={() => remove(i)}
                        >
                          ✕
                        </Button>
                      )}

                      {/* Profile Picture Section */}
                    <Row className="g-3 mt-0">
                      <Col xs={6}>
                        <label className="form-label">Profile Picture</label>
                        <div className="d-flex justify-content-center">
                          <div className="position-relative">
                            <input
                              type="file"
                              accept="image/*"
                              id={`profile-picture-${i}`}
                              style={{ display: 'none' }}
                              onChange={(e) => handleFileChange(e, i, setFieldValue)}
                            />
                            <div
                              onClick={() => document.getElementById(`profile-picture-${i}`)?.click()}
                              style={{
                                width: "120px",
                                height: "120px",
                                cursor: "pointer",
                                borderRadius: "10px",
                                border: "2px solid #dee2e6",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                transition: "all 0.2s ease",
                                backgroundColor: values.applicants[i].profilePicturePreview ? "transparent" : "#6c757d"
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#007bff";
                                e.currentTarget.style.transform = "scale(1.02)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "#dee2e6";
                                e.currentTarget.style.transform = "scale(1)";
                              }}
                            >
                              {values.applicants[i].profilePicturePreview ? (
                                <>
                                  <img
                                    src={values.applicants[i].profilePicturePreview}
                                    alt="Profile Preview"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                      borderRadius: "6px"
                                    }}
                                  />
                                  <Button
                                    variant="danger"
                                    size="sm"
                                    className="position-absolute top-0 end-0"
                                    style={{ 
                                      transform: "translate(50%, -50%)",
                                      width: "24px",
                                      height: "24px",
                                      padding: "1px 4px",
                                      fontSize: "12px",
                                      zIndex: 10
                                    }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      removeProfilePicture(i, setFieldValue);
                                    }}
                                  >
                                    ✕
                                  </Button>
                                </>
                              ) : (
                                <div
                                  style={{
                                    color: "#fff",
                                    fontSize: "14px",
                                    textAlign: "center",
                                    fontWeight: "500"
                                  }}
                                >
                                  Click to<br />Upload
                                </div>
                              )}
                            </div>
                            <ErrorMessage
                              name={`applicants.${i}.profilePicture`}
                              component="div"
                              className="text-danger small mt-2 text-center"
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row className="g-2">
                      <Col xs={12} sm={6}>
                        <label className="form-label">First Name</label>
                        <Field
                          name={`applicants.${i}.firstName`}
                          className={"form-control"}
                          placeholder="First Name"
                          data-bs-theme="dark"
                        />
                        <ErrorMessage
                          name={`applicants.${i}.firstName`}
                          component="div"
                          className="text-danger small"
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <label className="form-label">Last Name</label>
                        <Field
                          name={`applicants.${i}.lastName`}
                          className={"form-control"}
                          placeholder="Last Name"
                          data-bs-theme="dark"
                        />
                        <ErrorMessage
                          name={`applicants.${i}.lastName`}
                          component="div"
                          className="text-danger small"
                        />
                      </Col>
                    </Row>

                    

                    <Row className="g-2 mt-2">
                      <Col xs={12} sm={6}>
                        <label className="form-label">Date Of Birth</label>
                        <Field
                          type="date"
                          name={`applicants.${i}.dob`}
                          className={"form-control"}
                          data-bs-theme="dark"
                        />
                        <ErrorMessage
                          name={`applicants.${i}.dob`}
                          component="div"
                          className="text-danger small"
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <label className="form-label">Gender</label>
                        <Field
                          as="select"
                          name={`applicants.${i}.gender`}
                          className={"form-select custom-form-select"}
                          data-bs-theme="dark"
                        >
                          <option value="">Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                        </Field>
                        <ErrorMessage
                          name={`applicants.${i}.gender`}
                          component="div"
                          className="text-danger small"
                        />
                      </Col>
                    </Row>

                    <Row className="g-2 mt-2">
                      <Col xs={12} sm={6}>
                        <label className="form-label">Country</label>
                        <CountrySelect
                          onChange={(e: any) => {
                            setCountryid(e.id);
                            setFieldValue(`applicants.${i}.country`, e.id);
                          }}
                          value={countryid}
                          name={`applicants.${i}.country`}
                          className={"form-select"}
                          data-bs-theme="dark"
                        />
                        <ErrorMessage
                          name={`applicants.${i}.country`}
                          component="div"
                          className="text-danger small"
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <label className="form-label">State</label>
                        <StateSelect
                          countryid={countryid}
                          onChange={(e: any) => {
                            setStateid(e.id);
                            setFieldValue(`applicants.${i}.state`, e.id);
                          }}
                          value={stateid}
                          name={`applicants.${i}.state`}
                          className={"form-select"}
                          data-bs-theme="dark"
                        />
                        <ErrorMessage
                          name={`applicants.${i}.state`}
                          component="div"
                          className="text-danger small"
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <label className="form-label">City</label>
                        <CitySelect
                          countryid={countryid}
                          stateid={stateid}
                          onChange={(e: any) => {
                            setFieldValue(`applicants.${i}.city`, e.id);
                          }}
                          name={`applicants.${i}.city`}
                          placeholder="City"
                          className={"form-select"}
                          data-bs-theme="dark"
                        />
                        <ErrorMessage
                          name={`applicants.${i}.city`}
                          component="div"
                          className="text-danger small"
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <label className="form-label">Pincode</label>
                        <Field
                          name={`applicants.${i}.pincode`}
                          className={"form-control"}
                          placeholder="Pincode"
                          data-bs-theme="dark"
                        />
                        <ErrorMessage
                          name={`applicants.${i}.pincode`}
                          component="div"
                          className="text-danger small"
                        />
                      </Col>
                    </Row>
                    <Row className="g-2 mt-2">
                      <Col>
                        <label className="form-label">Address</label>
                        <Field
                          as="textarea"
                          name={`applicants.${i}.address`}
                          className={"form-control"}
                          rows={2}
                          placeholder="Address"
                          data-bs-theme="dark"
                        />
                        <ErrorMessage
                          name={`applicants.${i}.address`}
                          component="div"
                          className="text-danger small"
                        />
                      </Col>
                    </Row>
                  </div>
                ))}

                {values.applicantType === "group" && (
                  <Button
                    variant="secondary"
                    onClick={() =>
                      push({
                        firstName: "",
                        lastName: "",
                        dob: "",
                        gender: "",
                        country: "",
                        state: "",
                        city: "",
                        address: "",
                        pincode: "",
                        profilePicture: null,
                        profilePicturePreview: null,
                      })
                    }
                    className="rounded-pill"
                  >
                    + Add Applicant
                  </Button>
                )}
              </>
            )}
          </FieldArray>
          <div className="d-flex justify-content-end mt-3">
            <Button type="submit" variant="primary" className="form-btn">
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
