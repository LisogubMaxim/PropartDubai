import React from "react";
import BlockContainer from "../../../../components/UI/BlockContainer";
import "./accompany__LocalCompP.scss";
import { useTranslation } from "react-i18next";

const ListCheckbox = ({ children }) => {
  return (
    <li className="accompanyLCP__blocks-item">
      <img
        src="/assets/Global/checkbox.svg"
        alt="Image checkbox"
        width={18}
        height={18}
      />
      <span>{children}</span>
    </li>
  );
};

const RigthBlockCheckbox = ({ children }) => {
  return (
    <div>
      <img
        src="/assets/Global/checkbox.svg"
        alt="Image checkbox"
        width={24}
        height={24}
      />
      <span>{children}</span>
    </div>
  );
};
const index = () => {
  const { t } = useTranslation();

  return (
    <section className="accompanyLCP">
      <div className="accompanyLCP__texts">
        <h3 className="accompanyLCP__texts-title">
          {t("localCompanyPage__Accompany__Title")}
        </h3>
        <p className="accompanyLCP__texts-descr">
          {t("localCompanyPage__Accompany__Descr")}
        </p>
      </div>
      <div className="accompanyLCP__blocks">
        <div className="accompanyLCP__blocks-wrapper">
          <BlockContainer className="accompanyLCP__blocks-block">
            <span className="accompanyLCP__blocks-stage">
              {t("localCompanyPage__Accompany__Stage1")}
            </span>
            <div className="accompanyLCP__blocks-texts">
              <h4 className="accompanyLCP__blocks-title">
                {t("localCompanyPage__Accompany__TitleItem1")}
              </h4>
              <p className="accompanyLCP__blocks-descr">
                {t("localCompanyPage__Accompany__DescrItem1")}
              </p>
            </div>
          </BlockContainer>
          <BlockContainer className="accompanyLCP__blocks-block">
            <h5 className="accompanyLCP__blocks-subtitle">
              {t("localCompanyPage__Accompany__TitleItem2")}
            </h5>
            <div className="accompanyLCP__blocks-check">
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item1")}
              </RigthBlockCheckbox>
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item2")}
              </RigthBlockCheckbox>
            </div>
            <div className="accompanyLCP__blocks-bg">
              <img
                src="/assets/LocalCompanyPage/user.svg"
                alt="Image user"
                width={110}
                height={110}
              />
            </div>
          </BlockContainer>
          <BlockContainer className="accompanyLCP__blocks-block">
            <h5 className="accompanyLCP__blocks-subtitle">
              {t("localCompanyPage__Accompany__TitleItem3")}
            </h5>
            <div className="accompanyLCP__blocks-check">
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item3")}
              </RigthBlockCheckbox>
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item4")}
              </RigthBlockCheckbox>
            </div>
            <div className="accompanyLCP__blocks-bg">
              <img
                src="/assets/LocalCompanyPage/list.svg"
                alt="Image user"
                width={110}
                height={110}
              />
            </div>
          </BlockContainer>
        </div>
        <div className="accompanyLCP__blocks-wrapper">
          <BlockContainer className="accompanyLCP__blocks-block">
            <span className="accompanyLCP__blocks-stage">
              {t("localCompanyPage__Accompany__Stage2")}
            </span>
            <div className="accompanyLCP__blocks-texts">
              <h4 className="accompanyLCP__blocks-title">
                {t("localCompanyPage__Accompany__TitleItem4")}
              </h4>
              <ul className="accompanyLCP__blocks-list">
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item5")}
                </ListCheckbox>
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item6")}
                </ListCheckbox>
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item7")}
                </ListCheckbox>
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item8")}
                </ListCheckbox>
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item9")}
                </ListCheckbox>
              </ul>
            </div>
          </BlockContainer>
          <BlockContainer className="accompanyLCP__blocks-block">
            <h5 className="accompanyLCP__blocks-subtitle">
              {t("localCompanyPage__Accompany__TitleItem2")}
            </h5>
            <div className="accompanyLCP__blocks-check">
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item10")}
              </RigthBlockCheckbox>
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item11")}
              </RigthBlockCheckbox>
            </div>
            <div className="accompanyLCP__blocks-bg">
              <img
                src="/assets/LocalCompanyPage/user.svg"
                alt="Image user"
                width={110}
                height={110}
              />
            </div>
          </BlockContainer>
          <BlockContainer className="accompanyLCP__blocks-block">
            <h5 className="accompanyLCP__blocks-subtitle">
              {t("localCompanyPage__Accompany__TitleItem3")}
            </h5>
            <div className="accompanyLCP__blocks-check">
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item12")}
              </RigthBlockCheckbox>
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item13")}
              </RigthBlockCheckbox>
            </div>
            <div className="accompanyLCP__blocks-bg">
              <img
                src="/assets/LocalCompanyPage/list.svg"
                alt="Image user"
                width={110}
                height={110}
              />
            </div>
          </BlockContainer>
        </div>
        <div className="accompanyLCP__blocks-wrapper">
          <BlockContainer className="accompanyLCP__blocks-block">
            <span className="accompanyLCP__blocks-stage">
              {t("localCompanyPage__Accompany__Stage3")}
            </span>
            <div className="accompanyLCP__blocks-texts">
              <h4 className="accompanyLCP__blocks-title">
                {t("localCompanyPage__Accompany__TitleItem5")}
              </h4>
              <p className="accompanyLCP__blocks-descr">
                {t("localCompanyPage__Accompany__DescrItem2")}
              </p>
            </div>
          </BlockContainer>
          <BlockContainer className="accompanyLCP__blocks-block">
            <h5 className="accompanyLCP__blocks-subtitle">
              {t("localCompanyPage__Accompany__TitleItem2")}
            </h5>
            <div className="accompanyLCP__blocks-check">
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item14")}
              </RigthBlockCheckbox>
            </div>
            <div className="accompanyLCP__blocks-bg">
              <img
                src="/assets/LocalCompanyPage/user.svg"
                alt="Image user"
                width={110}
                height={110}
              />
            </div>
          </BlockContainer>
          <BlockContainer className="accompanyLCP__blocks-block">
            <h5 className="accompanyLCP__blocks-subtitle">
              {t("localCompanyPage__Accompany__TitleItem3")}
            </h5>
            <div className="accompanyLCP__blocks-check">
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item15")}
              </RigthBlockCheckbox>
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item16")}
              </RigthBlockCheckbox>
            </div>
            <div className="accompanyLCP__blocks-bg">
              <img
                src="/assets/LocalCompanyPage/list.svg"
                alt="Image user"
                width={110}
                height={110}
              />
            </div>
          </BlockContainer>
        </div>
        <div className="accompanyLCP__blocks-wrapper">
          <BlockContainer className="accompanyLCP__blocks-block">
            <span className="accompanyLCP__blocks-stage">
              {t("localCompanyPage__Accompany__Stage4")}
            </span>
            <div className="accompanyLCP__blocks-texts">
              <h4 className="accompanyLCP__blocks-title">
                {t("localCompanyPage__Accompany__TitleItem6")}
              </h4>
              <ul className="accompanyLCP__blocks-list">
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item17")}
                </ListCheckbox>
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item18")}
                </ListCheckbox>
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item19")}
                </ListCheckbox>
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item20")}
                </ListCheckbox>
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item21")}
                </ListCheckbox>
              </ul>
            </div>
          </BlockContainer>
          <BlockContainer className="accompanyLCP__blocks-block">
            <h5 className="accompanyLCP__blocks-subtitle">
              {t("localCompanyPage__Accompany__TitleItem2")}
            </h5>
            <div className="accompanyLCP__blocks-check">
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item22")}
              </RigthBlockCheckbox>
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item23")}
              </RigthBlockCheckbox>
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item24")}
              </RigthBlockCheckbox>
            </div>
            <div className="accompanyLCP__blocks-bg">
              <img
                src="/assets/LocalCompanyPage/user.svg"
                alt="Image user"
                width={110}
                height={110}
              />
            </div>
          </BlockContainer>
          <BlockContainer className="accompanyLCP__blocks-block">
            <h5 className="accompanyLCP__blocks-subtitle">
              {t("localCompanyPage__Accompany__TitleItem3")}
            </h5>
            <div className="accompanyLCP__blocks-check">
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item25")}
              </RigthBlockCheckbox>
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item26")}
              </RigthBlockCheckbox>
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item27")}
              </RigthBlockCheckbox>
            </div>
            <div className="accompanyLCP__blocks-bg">
              <img
                src="/assets/LocalCompanyPage/list.svg"
                alt="Image user"
                width={110}
                height={110}
              />
            </div>
          </BlockContainer>
        </div>
        <div className="accompanyLCP__blocks-wrapper">
          <BlockContainer className="accompanyLCP__blocks-block">
            <span className="accompanyLCP__blocks-stage">
              {t("localCompanyPage__Accompany__Stage5")}
            </span>
            <div className="accompanyLCP__blocks-texts">
              <h4 className="accompanyLCP__blocks-title">
                {t("localCompanyPage__Accompany__TitleItem7")}
              </h4>
              <ul className="accompanyLCP__blocks-list">
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item28")}
                </ListCheckbox>
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item29")}
                </ListCheckbox>
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item30")}
                </ListCheckbox>
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item31")}
                </ListCheckbox>
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item32")}
                </ListCheckbox>
              </ul>
            </div>
          </BlockContainer>
          <BlockContainer className="accompanyLCP__blocks-block">
            <h5 className="accompanyLCP__blocks-subtitle">
              {t("localCompanyPage__Accompany__TitleItem2")}
            </h5>
            <div className="accompanyLCP__blocks-check">
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item33")}
              </RigthBlockCheckbox>
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item34")}
              </RigthBlockCheckbox>
            </div>
            <div className="accompanyLCP__blocks-bg">
              <img
                src="/assets/LocalCompanyPage/user.svg"
                alt="Image user"
                width={110}
                height={110}
              />
            </div>
          </BlockContainer>
          <BlockContainer className="accompanyLCP__blocks-block">
            <h5 className="accompanyLCP__blocks-subtitle">
              {t("localCompanyPage__Accompany__TitleItem3")}
            </h5>
            <div className="accompanyLCP__blocks-check">
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item35")}
              </RigthBlockCheckbox>
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item36")}
              </RigthBlockCheckbox>
            </div>
            <div className="accompanyLCP__blocks-bg">
              <img
                src="/assets/LocalCompanyPage/list.svg"
                alt="Image user"
                width={110}
                height={110}
              />
            </div>
          </BlockContainer>
        </div>
        <div className="accompanyLCP__blocks-wrapper">
          <BlockContainer className="accompanyLCP__blocks-block">
            <span className="accompanyLCP__blocks-stage">
              {t("localCompanyPage__Accompany__Stage6")}
            </span>
            <div className="accompanyLCP__blocks-texts">
              <h4 className="accompanyLCP__blocks-title">
                {t("localCompanyPage__Accompany__TitleItem8")}
              </h4>
              <ul className="accompanyLCP__blocks-list">
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item37")}
                </ListCheckbox>
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item38")}
                </ListCheckbox>
                <ListCheckbox>
                  {t("localCompanyPage__Accompany__item39")}
                </ListCheckbox>
              </ul>
            </div>
          </BlockContainer>
          <BlockContainer className="accompanyLCP__blocks-block">
            <h5 className="accompanyLCP__blocks-subtitle">
              {t("localCompanyPage__Accompany__TitleItem2")}
            </h5>
            <div className="accompanyLCP__blocks-check">
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item40")}
              </RigthBlockCheckbox>
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item41")}
              </RigthBlockCheckbox>
            </div>
            <div className="accompanyLCP__blocks-bg">
              <img
                src="/assets/LocalCompanyPage/user.svg"
                alt="Image user"
                width={110}
                height={110}
              />
            </div>
          </BlockContainer>
          <BlockContainer className="accompanyLCP__blocks-block">
            <h5 className="accompanyLCP__blocks-subtitle">
              {t("localCompanyPage__Accompany__TitleItem3")}
            </h5>
            <div className="accompanyLCP__blocks-check">
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item42")}
              </RigthBlockCheckbox>
              <RigthBlockCheckbox>
                {t("localCompanyPage__Accompany__item43")}
              </RigthBlockCheckbox>
            </div>
            <div className="accompanyLCP__blocks-bg">
              <img
                src="/assets/LocalCompanyPage/list.svg"
                alt="Image user"
                width={110}
                height={110}
              />
            </div>
          </BlockContainer>
        </div>
      </div>
    </section>
  );
};

export default index;
