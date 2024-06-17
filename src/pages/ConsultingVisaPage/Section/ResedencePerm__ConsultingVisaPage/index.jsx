import "./resedencePerm__ConsultingVisaPage.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import Button from "../../../../components/UI/Button";
import { useTranslation } from "react-i18next";

export default function ResedencePerm__ConsultingVisaPage() {
  const { t } = useTranslation();

  return (
    <section className="resedencePermConsultingVisaPage registBusinessPoweOfAttorneyPage">
      <div className="registBusinessPoweOfAttorneyPage__top">
        <h2>{t("visaPage__ResedencePerm__Title1")}</h2>
      </div>
      <div className="registBusinessPoweOfAttorneyPage__content">
        <ResedencePermConsultingVisaPageItem
          title={t("visaPage__ResedencePerm__Title2")}
          text={t("visaPage__ResedencePerm__Descr1")}
        >
          <Button className="button--white">
            {t("visaPage__ResedencePerm__Item1")}
            <img
              src="/assets/ConsultingVisaPage/arrowRightIcon.svg"
              alt="arrowRigthIcon"
              width={24}
              height={24}
            />
          </Button>
          <Button className="button--white">
            {t("visaPage__ResedencePerm__Item2")}
            <img
              src="/assets/ConsultingVisaPage/arrowRightIcon.svg"
              alt="arrowRigthIcon"
              width={24}
              height={24}
            />
          </Button>
          <Button className="button--white">
            {t("visaPage__ResedencePerm__Item3")}
            <img
              src="/assets/ConsultingVisaPage/arrowRightIcon.svg"
              alt="arrowRigthIcon"
              width={24}
              height={24}
            />
          </Button>
        </ResedencePermConsultingVisaPageItem>
        <ResedencePermConsultingVisaPageItem
          title={t("visaPage__ResedencePerm__Title3")}
          text={t("visaPage__ResedencePerm__Descr2")}
        >
          <Button className="button--white">
            {t("visaPage__ResedencePerm__Item4")}
            <img
              src="/assets/ConsultingVisaPage/arrowRightIcon.svg"
              alt="arrowRigthIcon"
              width={24}
              height={24}
            />
          </Button>
          <Button className="button--white">
            {t("visaPage__ResedencePerm__Item5")}
            <img
              src="/assets/ConsultingVisaPage/arrowRightIcon.svg"
              alt="arrowRigthIcon"
              width={24}
              height={24}
            />
          </Button>
          <Button className="button--white">
            {t("visaPage__ResedencePerm__Item6")}
            <img
              src="/assets/ConsultingVisaPage/arrowRightIcon.svg"
              alt="arrowRigthIcon"
              width={24}
              height={24}
            />
          </Button>
        </ResedencePermConsultingVisaPageItem>
        <ResedencePermConsultingVisaPageItem
          title={t("visaPage__ResedencePerm__Title4")}
          text={t("visaPage__ResedencePerm__Descr3")}
        >
          <Button className="button--white">
            {t("visaPage__ResedencePerm__Item7")}
            <img
              src="/assets/ConsultingVisaPage/arrowRightIcon.svg"
              alt="arrowRigthIcon"
              width={24}
              height={24}
            />
          </Button>
        </ResedencePermConsultingVisaPageItem>
        <ResedencePermConsultingVisaPageItem
          title={t("visaPage__ResedencePerm__Title5")}
          text={t("visaPage__ResedencePerm__Descr4")}
        >
          <Button className="button--white">
            {t("visaPage__ResedencePerm__Item8")}
            <img
              src="/assets/ConsultingVisaPage/arrowRightIcon.svg"
              alt="arrowRigthIcon"
              width={24}
              height={24}
            />
          </Button>
          <Button className="button--white">
            {t("visaPage__ResedencePerm__Item9")}
            <img
              src="/assets/ConsultingVisaPage/arrowRightIcon.svg"
              alt="arrowRigthIcon"
              width={24}
              height={24}
            />
          </Button>
        </ResedencePermConsultingVisaPageItem>
      </div>
    </section>
  );
}
function ResedencePermConsultingVisaPageItem({ title, text, children }) {
  return (
    <BlockContainer>
      <span>
        {title} <span>{text}</span>
      </span>
      <div>{children}</div>
    </BlockContainer>
  );
}
