import Button from "../../../../components/UI/Button";
import "./additionalPrice__ConsultingServicesPage.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useTranslation } from "react-i18next";
export default function AdditionalPrice__ConsultingServicesPage() {
  const { t } = useTranslation();

  return (
    <section className="additionalPriceConsultingServicesPage">
      <AdditionalPriceConsultingServicesPageItem__orange
        title={t("ConsultingServicesPage__AdditionalPrice__Title3")}
        price="8 000"
        typeofact={[
          t("ConsultingServicesPage__AdditionalPrice__Typeofact1"),
          t("ConsultingServicesPage__AdditionalPrice__Typeofact2"),
          t("ConsultingServicesPage__AdditionalPrice__Typeofact3"),
          t("ConsultingServicesPage__AdditionalPrice__Typeofact4"),
        ]}
        opport={[
          t("ConsultingServicesPage__AdditionalPrice__Opport1"),
          t("ConsultingServicesPage__AdditionalPrice__Opport2"),
        ]}
      />
      <AdditionalPriceConsultingServicesPageItem price="10 000">
        {t("ConsultingServicesPage__AdditionalPrice__Descr1")} <br />
        {t("ConsultingServicesPage__AdditionalPrice__Descr2")} <br />
        {t("ConsultingServicesPage__AdditionalPrice__Descr3")} <br />
        {t("ConsultingServicesPage__AdditionalPrice__Descr4")}
      </AdditionalPriceConsultingServicesPageItem>
      <AdditionalPriceConsultingServicesPageItem__orange
        title={t("ConsultingServicesPage__AdditionalPrice__Title4")}
        price="8 000"
        typeofact={[
          t("ConsultingServicesPage__AdditionalPrice__Typeofact5"),
          t("ConsultingServicesPage__AdditionalPrice__Typeofact6"),
          t("ConsultingServicesPage__AdditionalPrice__Typeofact1"),
        ]}
        opport={[
          t("ConsultingServicesPage__AdditionalPrice__Opport1"),
          t("ConsultingServicesPage__AdditionalPrice__Opport3"),
        ]}
      />
      <AdditionalPriceConsultingServicesPageItem price="300 000">
        {t("ConsultingServicesPage__AdditionalPrice__Descr5")} <br /> <br />
      </AdditionalPriceConsultingServicesPageItem>
      <AdditionalPriceConsultingServicesPageItem__orange
        title={t("ConsultingServicesPage__AdditionalPrice__Title5")}
        price="8 000"
        typeofact={[
          t("ConsultingServicesPage__AdditionalPrice__Typeofact1"),
          t("ConsultingServicesPage__AdditionalPrice__Typeofact2"),
          t("ConsultingServicesPage__AdditionalPrice__Typeofact3"),
        ]}
        opport={[
          t("ConsultingServicesPage__AdditionalPrice__Opport1"),
          t("ConsultingServicesPage__AdditionalPrice__Opport4"),
        ]}
      />
      <AdditionalPriceConsultingServicesPageItem price="100 000">
        {t("ConsultingServicesPage__AdditionalPrice__Descr8")} <br /> <br />
        {t("ConsultingServicesPage__AdditionalPrice__Descr9")}
      </AdditionalPriceConsultingServicesPageItem>
    </section>
  );
}

function AdditionalPriceConsultingServicesPageItem__orange({
  title,
  price,
  typeofact,
  opport,
}) {
  const { t } = useTranslation();

  return (
    <BlockContainer className="blockContainer--orange">
      <span className="additionalPriceConsultingServicesPageItem__buttonBox">
        <Button>
          {title}
          {/* <img
            src="/assets/ConsultingServicePage/newPageIcon.svg"
            alt="newPageIcon"
            width={32}
            height={32}
          /> */}
        </Button>
        <span>
          <span>
            {t("ConsultingServicesPage__AdditionalPrice__Cost")} ${price}
          </span>
          <img
            src="/assets/ConsultingServicePage/questionIcon.svg"
            alt="questionIcon"
            width={24}
            height={24}
          />
        </span>
      </span>
      <span className="additionalPriceConsultingServicesPageItem__activities">
        {t("ConsultingServicesPage__AdditionalPrice__Types")}
        <span>
          {typeofact.map((item) => (
            <div>
              <img
                src="/assets/ConsultingServicePage/opporChecked.svg"
                alt="opporChecked"
                height={24}
                width={24}
              />
              {item}
            </div>
          ))}
        </span>
      </span>
      <span className="additionalPriceConsultingServicesPageItem__opportunities">
        {t("ConsultingServicesPage__AdditionalPrice__Opportunities")}
        <span>
          {opport.map((item) => (
            <div>
              <img
                src="/assets/ConsultingServicePage/opporChecked.svg"
                alt="opporChecked"
                height={24}
                width={24}
              />
              {item}
            </div>
          ))}
        </span>
      </span>
      <span className="additionalPriceConsultingServicesPageItem__getHelp">
        <img
          src="/assets/ConsultingServicePage/helpArrow.svg"
          alt="newPageIcon"
          width={24}
          height={24}
        />
        {t("ConsultingServicesPage__AdditionalPrice__GetHelpBtn")}
      </span>
    </BlockContainer>
  );
}
function AdditionalPriceConsultingServicesPageItem({ price, children }) {
  const { t } = useTranslation();

  return (
    <BlockContainer>
      <span className="additionalPriceConsultingServicesPageItem__top">
        {t("ConsultingServicesPage__AdditionalPrice__Title1")}
      </span>
      <span className="additionalPriceConsultingServicesPageItem__price">
        {t("ConsultingServicesPage__AdditionalPrice__from")} {price}{" "}
        {t("ConsultingServicesPage__ServicePrice__Aed")}
      </span>
      <h3 className="additionalPriceConsultingServicesPageItem__title">
        {t("ConsultingServicesPage__AdditionalPrice__Title2")}
      </h3>
      <p className="additionalPriceConsultingServicesPageItem__text">
        {children}
      </p>
    </BlockContainer>
  );
}
