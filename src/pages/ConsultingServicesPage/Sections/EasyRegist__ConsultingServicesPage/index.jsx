import "./easyRegist__ConsultingServicesPage.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useTranslation } from "react-i18next";

export default function EasyRegist__ConsultingServicesPage() {
  const { t } = useTranslation();
  return (
    <section className="easyRegistConsultingServicesPage">
      <div className="easyRegistConsultingServicesPage__textBox">
        <h2>{t("ConsultingServicesPage__EasyRegist__Title")}</h2>
        <p>{t("ConsultingServicesPage__EasyRegist__Text")}</p>
      </div>
      <div className="easyRegistConsultingServicesPage__box">
        <EasyRegistItem
          stepCount={1}
          time="2-4 days"
          title={t("ConsultingServicesPage__EasyRegist__Item1Title")}
          text={t("ConsultingServicesPage__EasyRegist__Item1Text")}
        />
        <EasyRegistItem
          stepCount={2}
          time="7-14 days"
          title={t("ConsultingServicesPage__EasyRegist__Item2Title")}
          text={t("ConsultingServicesPage__EasyRegist__Item2Text")}
        />
        <EasyRegistItem
          stepCount={3}
          time="7-14 days"
          title={t("ConsultingServicesPage__EasyRegist__Item3Title")}
          text={t("ConsultingServicesPage__EasyRegist__Item3Text")}
        />
        <EasyRegistItem
          stepCount={4}
          time="21-28 days"
          title={t("ConsultingServicesPage__EasyRegist__Item4Title")}
          text={t("ConsultingServicesPage__EasyRegist__Item4Text")}
        />
        <EasyRegistItem
          stepCount={5}
          time="2-4 days"
          title={t("ConsultingServicesPage__EasyRegist__Item5Title")}
          text={t("ConsultingServicesPage__EasyRegist__Item5Text")}
        />
        <EasyRegistItem
          stepCount={6}
          time="7-14 days"
          title={t("ConsultingServicesPage__EasyRegist__Item6Title")}
          text={t("ConsultingServicesPage__EasyRegist__Item6Text")}
        />
      </div>
    </section>
  );
}

function EasyRegistItem({ stepCount, time, title, text }) {
  return (
    <BlockContainer>
      <span className="easyRegistItem__top">
        {stepCount}
        <span>
          {time}
          <img
            src="/assets/ConsultingServicePage/clock.svg"
            alt="clock"
            width={24}
            height={24}
          />
        </span>
      </span>
      <span className="easyRegistItem__text">
        <h3>{title}</h3>
        <p>{text}</p>
      </span>
    </BlockContainer>
  );
}
