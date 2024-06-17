import { useTranslation } from "react-i18next";
import BlockContainer from "../UI/BlockContainer";
import "./mainServices.scss";

export function MainServices({ children }) {
  const { t } = useTranslation();

  return (
    <section className="mainServices">
      <h2>{t("localCompanyPage__MainServices__TitleMain")}</h2>
      <div className="mainServices__content">{children}</div>
      <div className="mainServices__static">
        <MainServicesItemStatic
          title="200+"
          text={t("accountingPage__MainServices__Item1")}
          img="/assets/components/MainServices/smileIcon.svg"
          imgLarge="/assets/components/MainServices/smileOrangeIcon.svg"
        />
        <MainServicesItemStatic
          title="22"
          text={t("accountingPage__MainServices__Item2")}
          img="/assets/components/MainServices/usersIcon.svg"
          imgLarge="/assets/ConsultingAccountingPage/usersIcon.svg"
        />
        <MainServicesItemStatic
          title="30+"
          text={t("accountingPage__MainServices__Item3")}
          img="/assets/components/MainServices/boxIcon.svg"
          imgLarge="/assets/ConsultingAccountingPage/boxIcon.svg"
        />
      </div>
    </section>
  );
}
export function MainServicesItem({ title, text, img, count }) {
  return (
    <BlockContainer>
      <span className="mainServices__itemTop">
        {count}
        <img src={img} alt={img} height={24} width={24} />
      </span>
      <span className="mainServices__itemBottom">
        <span>{title}</span> {text}
      </span>
      <img src={img} alt={img} width={150} height={150} />
    </BlockContainer>
  );
}

function MainServicesItemStatic({ img, imgLarge, title, text }) {
  return (
    <BlockContainer className="blockContainer--static">
      <span>
        <img src={img} alt={img} height={24} width={24} />
        {title}
      </span>
      {text} <img src={imgLarge} alt={imgLarge} width={150} height={150} />
    </BlockContainer>
  );
}
