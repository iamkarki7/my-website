import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from '../components/Particle';
import pdf from "../assets/cv.pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = "Karki_Sanjay_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container fluid className="resume-section">
      <Particle />

      <Row className="justify-content-center" style={{ padding: "20px 0" }}>
        <Button variant="primary" onClick={handleDownload} style={{ maxWidth: "250px" }}>
          <AiOutlineDownload style={{ marginRight: "8px" }} />
          Download CV
        </Button>
      </Row>

      <Row className="justify-content-center" style={{ padding: "20px 0", display: "flex", justifyContent: "center" }}>
        <Document file={pdf}>
          <Page 
            pageNumber={1} 
            scale={width > 786 ? 1.7 : 0.6} 
            onClick={handleDownload} // Trigger download when clicked
          />
        </Document>
      </Row>

      <Row className="justify-content-center" style={{ padding: "20px 0" }}>
        <Button variant="primary" onClick={handleDownload} style={{ maxWidth: "250px" }}>
          <AiOutlineDownload style={{ marginRight: "8px" }} />
          Download CV
        </Button>
      </Row>
    </Container>
  );
};

export default Resume;
