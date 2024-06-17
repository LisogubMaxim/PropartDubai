import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GetConsultationForm from "../ui/GetConsultationForm/GetConsultation";
import { AnimatePresence } from "framer-motion";
import Menu from "../Menu/Menu";
import MenuBar from "../ui/MenuBar/MenuBar";
import ExploreAreas from "../area/ExploreAreas/ExploreAreas";

import crossIcon from "../../assets/images/cross.svg";
import { teamData } from "../../data/teamData"

import s from "./how-it-works.module.scss";
import "./slider.scss";
import "swiper/scss";

const specializationsData = [
  "Business licensing",
  "Financial flows",
  "Freezone",
  "Local LLC company",
  "Opening accounts",
  "AML/KYC reporting",
  "CFC problems",
  "Taxation",
];

const HowItWorks = ({ setIsModalOpen }) => {
  const [showInfo, setShowInfo] = useState(null);
  const swiperRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSelectedOpen, setIsSelectedOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleShowInfo = (name) => {
    setShowInfo(name);
  }

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsSelectedOpen(true);
  };

  const handleCloseItem = () => {
    setSelectedItem(null);
    setIsSelectedOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (swiperRef.current && !swiperRef.current.contains(event.target)) {
        setShowInfo(null)
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [swiperRef]);

  return (
    <>
      <div
        className={`modal-window ${s.howItWorks}`}
        style={{ paddingBottom: "110px", zIndex: 10000 }}
      >
        <div className="main-container">
          <AnimatePresence>
            {isMenuOpen && <Menu closeMenu={() => setIsMenuOpen(false)} />}
          </AnimatePresence>

          <div className={s.header}>
            <h1 className={s.mainTitle}>How we works</h1>
            <button className={`circle-btn shadow`}>
              <img
                src={crossIcon}
                onClick={() => setIsModalOpen(false)}
                alt="Close"
              />
            </button>
          </div>
          <div className={s.content}>
            <h2 className={s.secondTitle}>Our advantages</h2>
            <ul className={s.advantages}>
              <li className={s.advantageItem}>
                <h3 className={s.advantageTitle}>
                  PROMPT <br /> CUSTOMER SERVICE
                </h3>
                <p className={s.advantageText}>
                  We respond quickly to customer requests and complete tasks
                  accurately.
                </p>
              </li>
              <li className={s.advantageItem}>
                <h3 className={s.advantageTitle}>COST TRANSPARENCY</h3>
                <p className={s.advantageText}>
                  We provide detailed information about payments and costs of our
                  services to ensure transparency and trust.
                </p>
              </li>
              <li className={s.advantageItem}>
                <h3 className={s.advantageTitle}>SHORT TURNAROUND TIME</h3>
                <p className={s.advantageText}>
                  Due to established relationships with government regulators and
                  financial institutions, we have the fastest turnaround times for
                  service delivery.
                </p>
              </li>
              <li className={s.advantageItem}>
                <h3 className={s.advantageTitle}>CONCIERGE SERVICE</h3>
                <p className={s.advantageText}>
                  With our help, we fully accompany our clients at all stages of
                  service fulfillment by
                </p>
              </li>
              <li className={s.advantageItem}>
                <h3 className={s.advantageTitle}>INVESTMENT CONSULTING</h3>
                <p className={s.advantageText}>
                  Our experts have in-depth knowledge and advice on investment
                  decisions
                </p>
              </li>
              <li className={s.advantageItem}>
                <h3 className={s.advantageTitle}>
                  LEGAL SUPPORT FOR CONSTRUCTION
                </h3>
                <p className={s.advantageText}>
                  Developers can receive legal and corporate assistance with
                  property acquisitions, permitting, tenders and escrow accounts.
                </p>
              </li>
            </ul>

            <h2 className={s.secondTitle}>Our specializations</h2>
            <ul className={s.specializations}>
              {specializationsData.map((specialization, idx) => (
                <li key={idx} className={s.specializationItem}>
                  <span className={s.specializationText}>{specialization}</span>
                </li>
              ))}
            </ul>

            <h2 className={s.secondTitle}>Our team</h2>
            <Swiper
              ref={swiperRef}
              spaceBetween={12}
              slidesPerView={"auto"}
              className="how-it-works-swiper"
            >
              {teamData.map((member, idx) => (
                <SwiperSlide
                  key={idx}
                  className="how-it-works-slide"
                  onClick={() => handleShowInfo(member.name)}
                >
                  <img
                    src={member.image}
                    className="how-it-works-slide__img"
                    alt={member.name}
                  />
                  <div
                    className="how-it-works-slide__member-info"
                    style={showInfo === member.name
                      ? { transform: "translateY(0)" }
                      : { transform: "translateY(100%)" }
                    }
                  >
                    <p className="how-it-works-slide__name">{member.name}</p>
                    <p className="how-it-works-slide__job">{member.position}</p>
                    <div className="how-it-works-slide__social">
                      {member.social.instagram && (
                        <a href={member.social.instagram} target="_blank">
                          <img
                            src="/assets/components/Footer/instagram.svg"
                            alt="Instagram"
                            width={24}
                            height={24}
                          />
                        </a>
                      )}
                      {member.social.whatsapp && (
                        <a href={member.social.whatsapp} target="_blank">
                          <img
                            src="/assets/components/Footer/whatsapp.svg"
                            alt="Whatsapp"
                            width={24}
                            height={24}
                          />
                        </a>
                      )}
                      {member.social.telegram && (
                        <a href={member.social.telegram} target="_blank">
                          <img
                            src="/assets/components/Footer/telegram.svg"
                            alt="Telegram"
                            width={24}
                            height={24}
                          />
                        </a>
                      )}
                      {member.social.facebook && (
                        <a href={member.social.facebook} target="_blank">
                          <img
                            src="/assets/components/Footer/facebook.svg"
                            alt="Facebook"
                            width={24}
                            height={24}
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <GetConsultationForm />
          </div>
        </div>
        <MenuBar
          onAreasClick={() => handleSelectItem(<ExploreAreas handleClose={handleCloseItem} />)}
          onMenuClick={() => setIsMenuOpen(true)}
        />
      </div>
      {isSelectedOpen && selectedItem}
    </>
  );
};

export default HowItWorks;
