import { Route, Routes, BrowserRouter } from "react-router-dom";
import WithRedirectToPWA from "./hoc/WithRedirectToPWA";

import MainPage from "./pages/MainPage";
import Layout from "./Layout/Layout";
import ConsuiltingLayout from "./ConsultingLayout";
import DeveloperPage from "./pages/DeveloperPage";
import DeveloperMainPage from "./pages/DeveloperPage/developerMainPage";
import AboutUsPage from "./pages/AboutUsPage";
import AreaPage from "./pages/AreaPage";
import AreasPage from "./pages/AreasPage";
import PropertiesPage from "./pages/PropertiesPage";
import MapPage from "./pages/MapPage";
import AreasWithMapPage from "./pages/AreasWithMapPage";
import ProjectPage from "./pages/ProjectPage";
import ImagesPage from "./pages/ImagesPage";
import ImagesIndexPage from "./pages/ImagesPage/ImagesIndex";
import ConsultingServicesPage from "./pages/ConsultingServicesPage";
import CompanyRegistrationPage from "./pages/CompanyRegistrationPage";
import ConsultingAccountingPage from "./pages/ConsultingAccountingPage";
import TMServicesPage from "./pages/TMServicesPage";
import AccountAuditingPage from "./pages/AccountAuditingPage";
import PoweOfAttorneyPage from "./pages/PoweOfAttorneyPage";
import LocalCompanyPage from "./pages/LocalCompanyPage";
import ConsultingVisaPage from "./pages/ConsultingVisaPage";

// PWA pages
import LayoutPWA from "./Layout/LayoutPWA";
import HomePage from "./PWA/pages/HomePage";
import MapPagePWA from "./PWA/pages/MapPagePWA";
import SavedProjectsPage from "./PWA/pages/SavedProjectsPage";
import AboutAreaPage from "./PWA/pages/AboutAreaPage";
import AboutDeveloperPage from "./PWA/pages/AboutDeveloperPage";
import ProjectPropertyPage from "./PWA/pages/ProjectPropertyPage";
import AreaPropertiesPage from "./PWA/pages/AreaPropertiesPage";
import DeveloperPropertyPage from "./PWA/pages/DeveloperPropertyPage";

function App() {
  return (
    <BrowserRouter>
      <WithRedirectToPWA>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/developers" element={<DeveloperPage />} />
            <Route path="/developer/:id" element={<DeveloperMainPage />} />
            <Route path="/area/:id" element={<AreaPage />} />
            <Route path="/concierge" element={<AreasPage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/areasWithMap" element={<AreasWithMapPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/images/:id" element={<ImagesPage />} />
            <Route path="/imagesIndex/:id" element={<ImagesIndexPage />} />
            <Route path="/consulting" element={<ConsuiltingLayout />}>
              <Route path="services" element={<ConsultingServicesPage />} />
              <Route
                path="companyRegistration"
                element={<CompanyRegistrationPage />}
              />
              <Route path="accounting" element={<ConsultingAccountingPage />} />
              <Route path="tm" element={<TMServicesPage />} />
              <Route path="accountAuditing" element={<AccountAuditingPage />} />
              <Route path="poweOfAttorney" element={<PoweOfAttorneyPage />} />
              <Route path="visa" element={<ConsultingVisaPage />} />
              <Route path="localCompany" element={<LocalCompanyPage />} />
            </Route>
          </Route>
          <Route path="/phone" element={<LayoutPWA />}>
            <Route index element={<HomePage />} />
            <Route path="map" element={<MapPagePWA />} />
            <Route path="saved-projects" element={<SavedProjectsPage />} />
            <Route path="project/:id" element={<ProjectPropertyPage />} />
            <Route path="about-area/:id" element={<AboutAreaPage />} />
            <Route
              path="area-properties/:id"
              element={<AreaPropertiesPage />}
            />
            <Route
              path="about-developer/:id"
              element={<AboutDeveloperPage />}
            />
            <Route
              path="developer-properties/:id"
              element={<DeveloperPropertyPage />}
            />
          </Route>
        </Routes>
      </WithRedirectToPWA>
    </BrowserRouter>
  );
}

export default App;
