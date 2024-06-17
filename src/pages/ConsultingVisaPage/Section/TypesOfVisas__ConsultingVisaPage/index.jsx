import "./typesOfVisas__ConsultingVisaPage.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useTranslation } from "react-i18next";
export default function TypesOfVisas__ConsultingVisaPage() {
  const { t } = useTranslation();

  return (
    <section className="typesOfVisasConsultingVisaPage">
      <h2>{t("visaPage__TypesOfVisas__Title")}</h2>
      <div className="typesOfVisasConsultingVisaPage__content">
        <TypesOfVisasConsultingVisaPageItem
          category="1"
          title={t("visaPage__TypesOfVisas__SubTitle1")}
          conditions={[
            t("visaPage__TypesOfVisas__Item1"),
            t("visaPage__TypesOfVisas__Item2"),
            t("visaPage__TypesOfVisas__Item3"),
            t("visaPage__TypesOfVisas__Item4"),
          ]}
          or
        />
        <BlockContainer>
          <div className="typesOfVisasConsultingVisaPage__itemRight">
            <div className="typesOfVisasConsultingVisaPage__itemRightTop">
              <div>{t("visaPage__TypesOfVisas__Btn")}</div>
              <div>
                <h3>{t("visaPage__TypesOfVisas__Requirements")}</h3>
                <p>
                  {t("visaPage__TypesOfVisas__SubDescr1")}
                  <br />
                  {t("visaPage__TypesOfVisas__SubDescr2")}
                </p>
              </div>
            </div>
            <div className="typesOfVisasConsultingVisaPage__itemRightBottom">
              <span className="typesOfVisasConsultingVisaPage__itemRightBottomOrangeText">
                13,000 {t("ConsultingServicesPage__ServicePrice__Aed")}
                <span className="typesOfVisasConsultingVisaPage__itemRightBottomGreyText">
                  {t("visaPage__TypesOfVisas__Turnkey")}
                </span>
              </span>
              <span className="typesOfVisasConsultingVisaPage__itemRightBottomStrongText">
                $1 500
                <span className="typesOfVisasConsultingVisaPage__itemRightBottomGreyText">
                  {t("visaPage__TypesOfVisas__Renewal")}
                </span>
              </span>
              <span>
                <span className="typesOfVisasConsultingVisaPage__itemRightBottomStrongText">
                  7-10
                  <span className="typesOfVisasConsultingVisaPage__itemRightBottomGreyText">
                    {t("visaPage__TypesOfVisas__BussDays")}
                  </span>
                </span>
                <span className="typesOfVisasConsultingVisaPage__itemRightBottomGreyText">
                  {t("visaPage__TypesOfVisas__Receipt")}
                </span>
              </span>
            </div>
          </div>
        </BlockContainer>
        <TypesOfVisasConsultingVisaPageItem
          category="1"
          title={t("visaPage__TypesOfVisas__SubTitle2")}
          conditions={[
            t("visaPage__TypesOfVisas__Item5"),
            t("visaPage__TypesOfVisas__Item6"),
            t("visaPage__TypesOfVisas__Item7"),
            t("visaPage__TypesOfVisas__Item8"),
          ]}
          or
        />
        <BlockContainer>
          <div className="typesOfVisasConsultingVisaPage__itemRight">
            <div className="typesOfVisasConsultingVisaPage__itemRightTop">
              <div>{t("visaPage__TypesOfVisas__Btn")}</div>
              <div>
                <h3>{t("visaPage__TypesOfVisas__Requirements")}</h3>
                <p>
                  {t("visaPage__TypesOfVisas__SubDescr1")}
                  <br />
                  {t("visaPage__TypesOfVisas__SubDescr2")}
                </p>
              </div>
            </div>
            <div className="typesOfVisasConsultingVisaPage__itemRightBottom">
              <span className="typesOfVisasConsultingVisaPage__itemRightBottomOrangeText">
                10,000 {t("ConsultingServicesPage__ServicePrice__Aed")}
                <span className="typesOfVisasConsultingVisaPage__itemRightBottomGreyText">
                  {t("visaPage__TypesOfVisas__Turnkey")}
                </span>
              </span>
              <span>
                <span className="typesOfVisasConsultingVisaPage__itemRightBottomStrongText">
                  7-10
                  <span className="typesOfVisasConsultingVisaPage__itemRightBottomGreyText">
                    {t("visaPage__TypesOfVisas__BussDays")}
                  </span>
                </span>
                <span className="typesOfVisasConsultingVisaPage__itemRightBottomGreyText">
                  {t("visaPage__TypesOfVisas__Receipt")}
                </span>
              </span>
            </div>
          </div>
        </BlockContainer>
        <TypesOfVisasConsultingVisaPageItem
          category="2"
          title={t("visaPage__TypesOfVisas__SubTitle3")}
          conditions={[
            t("visaPage__TypesOfVisas__Item9"),
            t("visaPage__TypesOfVisas__Item10"),
            t("visaPage__TypesOfVisas__Item11"),
          ]}
        />
        <BlockContainer>
          <div className="typesOfVisasConsultingVisaPage__itemRight">
            <div className="typesOfVisasConsultingVisaPage__itemRightTop">
              <div>{t("visaPage__TypesOfVisas__Btn")}</div>
            </div>
            <div className="typesOfVisasConsultingVisaPage__itemRightBottom">
              <span className="typesOfVisasConsultingVisaPage__itemRightBottomOrangeText">
                7,000 {t("ConsultingServicesPage__ServicePrice__Aed")}
                <span className="typesOfVisasConsultingVisaPage__itemRightBottomGreyText">
                  {t("visaPage__TypesOfVisas__Turnkey")}
                </span>
              </span>
              <span className="typesOfVisasConsultingVisaPage__itemRightBottomStrongText">
                2 {t("visaPage__TypesOfVisas__Years")}
                <span className="typesOfVisasConsultingVisaPage__itemRightBottomGreyText">
                  {t("visaPage__TypesOfVisas__Renewal")}
                </span>
              </span>
              <span>
                <span className="typesOfVisasConsultingVisaPage__itemRightBottomStrongText">
                  7-10
                  <span className="typesOfVisasConsultingVisaPage__itemRightBottomGreyText">
                    {t("visaPage__TypesOfVisas__BussDays")}
                  </span>
                </span>
                <span className="typesOfVisasConsultingVisaPage__itemRightBottomGreyText">
                  {t("visaPage__TypesOfVisas__Receipt")}
                </span>
              </span>
            </div>
          </div>
        </BlockContainer>
        <TypesOfVisasConsultingVisaPageItem
          category="3"
          title={t("visaPage__TypesOfVisas__SubTitle3")}
          conditions={[
            t("visaPage__TypesOfVisas__Item9"),
            t("visaPage__TypesOfVisas__Item10"),
            t("visaPage__TypesOfVisas__Item11"),
          ]}
        />
        <BlockContainer>
          <div className="typesOfVisasConsultingVisaPage__itemRight">
            <div className="typesOfVisasConsultingVisaPage__itemRightTop">
              <div>{t("visaPage__TypesOfVisas__Btn")}</div>
            </div>
            <div className="typesOfVisasConsultingVisaPage__itemRightBottom">
              <span className="typesOfVisasConsultingVisaPage__itemRightBottomOrangeText">
                $2 500
                <span className="typesOfVisasConsultingVisaPage__itemRightBottomGreyText">
                  {t("visaPage__TypesOfVisas__Turnkey")}
                </span>
              </span>
              <span className="typesOfVisasConsultingVisaPage__itemRightBottomStrongText">
                $1 000
                <span className="typesOfVisasConsultingVisaPage__itemRightBottomGreyText">
                  {t("visaPage__TypesOfVisas__Renewal")}
                </span>
              </span>
              <span>
                <span className="typesOfVisasConsultingVisaPage__itemRightBottomStrongText">
                  4 {t("visaPage__TypesOfVisas__Weeks")}
                  <span className="typesOfVisasConsultingVisaPage__itemRightBottomGreyText"></span>
                </span>
                <span className="typesOfVisasConsultingVisaPage__itemRightBottomGreyText">
                  {t("visaPage__TypesOfVisas__Receipt")}
                </span>
              </span>
            </div>
          </div>
        </BlockContainer>
      </div>
    </section>
  );
}

function TypesOfVisasConsultingVisaPageItem({
  title,
  category,
  conditions,
  or,
}) {
  const { t } = useTranslation();

  return (
    <BlockContainer className="blockContainer--visas">
      <span>
        {t("visaPage__TypesOfVisas__Category")} {category} <span>{title}</span>
      </span>
      <span>
        <span>{t("visaPage__TypesOfVisas__SubTitle4")}</span>
        <div>
          {conditions.map((item, index) => (
            <div key={index}>
              <img
                src="/assets/Global/checkbox.svg"
                alt="checkbox"
                width={18}
                height={18}
              />{" "}
              {item}
            </div>
          ))}
        </div>
        {or && (
          <div className="typesOfVisasConsultingVisaPage__itemOr">
            <div>
              <hr />
              {t("visaPage__TypesOfVisas__Or")}
              <hr />
            </div>
            <div>{t("visaPage__TypesOfVisas__Descr")}</div>
          </div>
        )}
      </span>
    </BlockContainer>
  );
}
