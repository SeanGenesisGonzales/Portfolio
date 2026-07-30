import CertificateCard from "./Certications/CertificateCards";

import GitHubWorkshop from "../assets/Certificates/Version Control Essentials Git & GitHub Workshop.png";
import Module1_2 from "../assets/Certificates/BRIDGE Building Resilient and Inclusive Development through Global Education_Module1_2.png";
import Module3 from "../assets/Certificates/BRIDGE Building Resilient and Inclusive Development through Global Education_Module3.png"
export default function Certifications() {

  const Certificates = [
    {
      Image: GitHubWorkshop,
      Title: "CSSO Version Control Essentials Git & GitHub Workshop",
      DateAcquired: "May 20, 2025"
    },
    {
      Image: Module1_2,
      Title: "BRIDGE Building Resilient and Inclusive Development through Global Education_Module 1 & 2",
      DateAcquired: "May 20, 2025"
    },
    {
      Image: Module3,
      Title: "BRIDGE Building Resilient and Inclusive Development through Global Education_Module 3",
      DateAcquired: "May 20, 2025"
    }

    
  ];




  return (
    <div className="h-fit w-[80vw] py-[5vh] gap-[5vh] flex flex-col items-center border-y-2 border-LightMode dark:border-DarkMode">
      <p id="Certification" className="font-extrabold text-5xl   font-[garamond] text-LightMode dark:text-DarkMode">
        Certifications
      </p>

        <div className="w-[80vw] h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              Image={certificate.Image}
              Title={certificate.Title}
              DateAcquired={certificate.DateAcquired}
            />
          ))}
        </div>
      </div>
    
  );
}
