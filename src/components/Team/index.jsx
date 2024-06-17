import React, { useState } from "react";
import { Link } from "react-router-dom";
// import team from "./team";
import "./team.scss";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  const team = [
    {
      image: "/assets/components/Team/alex-logachev-min.png",
      name: t("teamComp__Name1"),
      position: t("teamComp__Position1"),
      social: {
        instagram:
          "https://instagram.com/logachev_alexsandr?igshid=MzRlODBiNWFlZA==",
        telegram: "https://t.me/oleksandr_logachev",
        whatsapp: "https://wa.me/971588395135",
        facebook: "https://www.facebook.com/logachev.alexsandr?mibextid=LQQJ4d",
      },
    },
    {
      image: "/assets/components/Team/aleksei-shyian-min.png",
      name: t("teamComp__Name2"),
      position: t("teamComp__Position2"),
      social: {
        instagram:
          "https://instagram.com/dubai_oleksii_shyian?igshid=MzRlODBiNWFlZA==",
        telegram: "https://t.me/brodubai",
        whatsapp: "https://wa.me/971585952108",
        facebook: "",
      },
    },
    {
      image: "/assets/components/Team/tykhova-tatiana-min.png",
      name: t("teamComp__Name3"),
      position: t("teamComp__Position6"),
      social: {
        instagram: "https://instagram.com/taffeeta?igshid=NTc4MTIwNjQ2YQ==",
        telegram: "https://t.me/+971522419898",
        whatsapp: "https://wa.me/971522419898",
        facebook:
          "https://www.facebook.com/profile.php?id=100090630440600&mibextid=LQQJ4d",
      },
    },
    {
      image: "/assets/components/Team/kristina-sokolovskaya-min.png",
      name: t("teamComp__Name4"),
      position: t("teamComp__Position7"),
      social: {
        instagram: "",
        telegram: "https://t.me/+971529568390",
        whatsapp: "https://wa.me/971529568390",
        facebook: "",
      },
    },
    {
      image: "/assets/components/Team/pavel-dynin-min.jpg",
      name: t("teamComp__Name5"),
      position: t("teamComp__Position8"),
      social: {
        instagram: "https://instagram.com/pavel.dynin?igshid=OGQ5ZDc2ODk2ZA==",
        telegram: "https://t.me/pavel_dynin",
        whatsapp: "https://wa.me/971585622362",
        facebook: "https://www.facebook.com/csdus?mibextid=LQQJ4d",
      },
    },
    {
      image: "/assets/components/Team/anna-horshunova-min.jpg",
      name: t("teamComp__Name6"),
      position: t("teamComp__Position9"),
      social: {
        instagram:
          "https://instagram.com/annagorshunova?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr",
        telegram: "https://t.me/annagorshunova",
        whatsapp: "https://wa.me/971506585962",
        facebook: "https://www.facebook.com/annagorshunova?mibextid=LQQJ4d",
      },
    },
    {
      image: "/assets/components/Team/alla-gerassimova-min.jpg",
      name: t("teamComp__Name7"),
      position: t("teamComp__Position5"),
      social: {
        instagram: "https://instagram.com/a11gep?igshid=NTc4MTIwNjQ2YQ==",
        telegram: "https://t.me/alla_gerassimova",
        whatsapp: "https://wa.me/971555728933",
        facebook: "",
      },
    },
    {
      image: "/assets/components/Team/dmitriy-koltsov-min.jpg",
      name: t("teamComp__Name8"),
      position: t("teamComp__Position10"),
      social: {
        instagram: "https://instagram.com/brokervdubae",
        telegram: "https://t.me/brokervdubae",
        whatsapp: "https://wa.me/971585589938",
        facebook: "",
      },
    },
    {
      image: "/assets/components/Team/ruslan-geisha.png",
      name: t("teamComp__Name9"),
      position: t("teamComp__Position11"),
      social: {
        instagram:
          "https://www.instagram.com/mister_geisha?igsh=eWs3aTluNmN0NXdq",
        telegram: "https://t.me/ruslan_geisha",
        whatsapp: "https://wa.me/971503886822",
        facebook: "",
      },
    },
  ];

  const [visibleMembers, setVisibleMembers] = useState(4);
  const displayedMembers = team.slice(0, visibleMembers);

  return (
    <div className="ourTeam">
      <div className="ourTeam__team">
        {displayedMembers.map((member, index) => (
          <div
            key={index}
            className="ourTeam__member"
            state={{ memberObject: member }}
          >
            <div className="ourTeam__member-hover">
              <div className="ourTeam__hover-hoverContent">
                <div className="ourTeam__hover-texts">
                  <h5 className="ourTeam__hover-name">{member.name}</h5>
                  <p className="ourTeam__hover-position">{member.position}</p>
                </div>
                <div className="ourTeam__hover-links">
                  <Link to={member.social.instagram}>
                    <img
                      src="/assets/components/Footer/instagram.svg"
                      alt="Logo image"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link to={member.social.whatsapp}>
                    <img
                      src="/assets/components/Footer/whatsapp.svg"
                      alt="Logo image"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link to={member.social.telegram}>
                    {" "}
                    <img
                      src="/assets/components/Footer/telegram.svg"
                      alt="Logo image"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link to={member.social.facebook}>
                    {" "}
                    <img
                      src="/assets/components/Footer/facebook.svg"
                      alt="Logo image"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="ourTeam__image">
              <img src={member.image} alt="Employee photo" />
            </div>
          </div>
        ))}
      </div>
      {visibleMembers != 12 && (
        <div
          className="ourTeam__showMore"
          onClick={() => setVisibleMembers(visibleMembers + 4)}
        >
          <div className="ourTeam__showMore-button">
            {t("PropertiePage__ShowMoreBtn")}
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
