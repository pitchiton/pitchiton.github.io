import  { useState } from "react";
import { Container, Row, Col,  ProgressBar } from "react-bootstrap";
import ApplicationForm from "./ApplicationForm";
import ContactForm from "./ContactForm";
import InnovationForm from "./InnovationForm";
import MediaForm from "./MediaForm";
import DeclarationForm from "./DeclarationForm";

function CreateApplication() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const totalSteps = 5;

  const handleNext = (sectionData: any) => {
    if (!sectionData.valid) return;
    setFormData({ ...formData, ...sectionData.values });
    console.log({ formData });
    setStep(step + 1);
  };

  const handlePrev = () => setStep(step - 1);

  const handleSubmit = async (sectionData: any) => {
    if (!sectionData.valid) return;
    const finalData = { ...formData, ...sectionData.values };
    console.log("✅ Submitted Data:", finalData);
    // alert("Form submitted successfully!");


    const formdata = new FormData();
    formdata.append("applicantType", finalData.applicantType);
    formdata.append("applicants", JSON.stringify(finalData.applicants));
    formdata.append("category", finalData.category);
    formdata.append("description", finalData.description);
    formdata.append("document", finalData.document);
    formdata.append("hasprototype", finalData.hasPrototype);
    formdata.append("title", finalData.title);
    formdata.append("presentation", finalData.presentation);
    formdata.append("primarycontact",finalData.primaryContact);
    formdata.append("secondarycontact",finalData.secondaryContact);
    formdata.append("primaryemail",finalData.primaryEmail);
    formdata.append("secondaryemail",finalData.secondaryEmail);
    formdata.append("signature",finalData.signature);

    const response = await fetch(`http://127.0.0.1:3000/application `, {
      method: "POST",
      body: formdata,
    });
    console.log(response);

    if (response.ok) {
      alert("Application submitted successfully!");
    } else {
      alert("Failed to submit application!");
    }

  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ApplicationForm onNext={handleNext as any} formData={formData as any} />;
      case 2:
        return <ContactForm onNext={handleNext as any} onPrev={handlePrev} />;
      case 3:
        return <InnovationForm onNext={handleNext as any} onPrev={handlePrev} />;
      case 4:
        return <MediaForm onNext={handleNext as any} onPrev={handlePrev} />;
      case 5:
        return <DeclarationForm onSubmit={handleSubmit as any} onPrev={handlePrev} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ProgressBar
        now={(step / totalSteps) * 100}
        className="custom-progress-bar"
      />
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div className="p-4 m-4">
              <h1 className="text-center fw-bold mb-4" data-aos="zoom-in">
                Innovation Application Form ({step}/{totalSteps})
              </h1>
              {renderStep()}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateApplication;
