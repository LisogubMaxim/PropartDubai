import Button from "../../../../components/UI/Button";
import BlockContainer from "../../../../components/UI/BlockContainer";
import "./discount__ConsultingServicesPage.scss";
import { useTranslation } from "react-i18next";

export default function Discount__ConsultingServicesPage() {
  const { t } = useTranslation();

  return (
    <section className="discountConsultingServicesPage">
      <DiscountItem text={t("ConsultingServicesPage__Discount__Descr1")}>
        <span className="discountConsultingServicesPage__itemTopText">
          {t("ConsultingServicesPage__Discount__Discount")} 5%
        </span>
      </DiscountItem>
      <DiscountItem text={t("ConsultingServicesPage__Discount__Descr2")}>
        <span className="discountConsultingServicesPage__itemTopText">
          {t("ConsultingServicesPage__Discount__Discount")} 10%
        </span>
      </DiscountItem>
      <DiscountItem text={t("ConsultingServicesPage__Discount__Descr3")}>
        <Button className="button--darkBlue">
          {t("ConsultingServicesPage__Discount__AccSupport")}
          {/* <img
            src="/assets/ConsultingServicePage/arrowInCircle.svg"
            alt="arrowInCircle"
            width={36}
            height={36}
          /> */}
        </Button>
      </DiscountItem>
    </section>
  );
}
function DiscountItem({ text, children }) {
  return (
    <BlockContainer>
      {children}
      <span className="discountConsultingServicesPage__itemBottomText">
        {text}
      </span>
    </BlockContainer>
  );
}
