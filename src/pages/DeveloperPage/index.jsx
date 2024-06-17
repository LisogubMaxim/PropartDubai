import SearchDev_DeveloperPage from "./Section/SearchDev_DeveloperPage";
import Company from "../../components/Company";
import TopDev__DeveloperPage from "./Section/TopDev__DeveloperPage";
import HelpForm from "../../components/HelpForm";
import WidthContainer from "../../components/UI/WidthContainer";
import HeaderSecond from "../../components/HeaderSecond";
import { useEffect } from "react";

export default function DeveloperPage() {
  useEffect(() => {
    document.title = "Developer";

    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderSecond />
      <main className="developerPage">
        <WidthContainer>
          <SearchDev_DeveloperPage />
          <Company start={0} end={20} />
          <TopDev__DeveloperPage />
          <Company start={20} end={40} />
          <HelpForm />
          <Company start={40} end={60} />
        </WidthContainer>
      </main>
    </>
  );
}
