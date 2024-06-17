import "./visasIssued__ConsultingVisaPage.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useTranslation } from "react-i18next";

export default function VisasIssued__ConsultingVisaPage() {
  const { t } = useTranslation();

  return (
    <section className="visasIssuedConsultingVisaPage">
      <BlockContainer>
        <span>{t("visaPage__VisasIssued__Title")}</span>
        <div>
          <VisasIssuedConsultingVisaPageItem
            text={t("visaPage__VisasIssued__Date1")}
            third={t("visaPage__VisasIssued__Item1")}
            sec={t("visaPage__VisasIssued__Item2")}
            first={t("visaPage__VisasIssued__Item3")}
          />
          <VisasIssuedConsultingVisaPageItem
            text={t("visaPage__VisasIssued__Date2")}
            third={t("visaPage__VisasIssued__Item4")}
            sec={t("visaPage__VisasIssued__Item5")}
            first={t("visaPage__VisasIssued__Item6")}
          />
          <VisasIssuedConsultingVisaPageItem
            text={t("visaPage__VisasIssued__Date3")}
            third={t("visaPage__VisasIssued__Item7")}
            sec={t("visaPage__VisasIssued__Item8")}
            first={t("visaPage__VisasIssued__Item9")}
          />
        </div>
      </BlockContainer>
      <BlockContainer></BlockContainer>
    </section>
  );
}

function VisasIssuedConsultingVisaPageItem({ text, first, sec, third }) {
  return (
    <div className="visasIssuedConsultingVisaPage__item">
      <span>{text}</span>
      <div className="">
        <div className="visasIssuedConsultingVisaPage__itemAdvantage">
          {first}
        </div>
        <div className="visasIssuedConsultingVisaPage__itemAdvantage">
          {sec}
        </div>
        <div className="visasIssuedConsultingVisaPage__itemAdvantage">
          {third}
        </div>
      </div>
    </div>
  );
}
