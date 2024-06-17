import { useTranslation } from "react-i18next";
import ReadMore from "../../ui/ReadMore/ReadMore";

export const Description = ({ about }) => {
  const { t, i18n } = useTranslation();

  function stripHtml(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }

  const strippedEN = stripHtml(about?.EN);
  const strippedRU = stripHtml(about?.RU);
  const strippedUA = stripHtml(about?.UA);

  return (
    <div className="project-property__section main-container">
      <h2 className="project-property__second-title">Description</h2>
      {i18n.language === "en" && (
        <div className="project-property__main-text"><ReadMore text={strippedEN} /></div>
      )}
      {i18n.language === "ru" && (
        <div className="project-property__main-text"><ReadMore text={strippedRU} /></div>
      )}
      {i18n.language === "ua" && (
        <div className="project-property__main-text"><ReadMore text={strippedUA} /></div>
      )}
    </div>
  );
};
