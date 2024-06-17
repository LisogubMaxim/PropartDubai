import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { t } from "i18next";
import { CustomSelect } from "../../ui/CustomSelects/CustomSelect";
import { Plan } from "./Plan";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { Modal } from "./Modal/Modal";

const descriptiveData = [
  { name: "Booking", value: "40%", price: "AED 550 500" },
  { name: "Construction", value: "40%", price: "AED 550 500" },
  { name: "Upon handover", value: "20%", price: "AED 550 500" },
  { name: "After handover", value: "30%", price: "AED 550 500" },
];

import s from "./plans.module.scss";
import "swiper/scss";
import "swiper/scss/free-mode";

export const Plans = ({ floorPlans }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({});
  const [selectedRooms, setSelectedRooms] = useState();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (floorPlans && Object.keys(floorPlans).length) {
      const newOptions = [];

      for (const option of Object.keys(floorPlans)) {
        newOptions.push({ label: option, value: option });
      }

      setOptions(newOptions);
      setSelectedRooms(newOptions[0].value);
    }
  }, [floorPlans]);

  const handleOpenModal = (plan) => {
    setIsModalOpen(true);
    setSelectedPlan({ ...plan, descriptiveData: descriptiveData });
  };

  return (
    <>
      {isModalOpen && (
        <Modal plan={selectedPlan} closeModal={() => setIsModalOpen(false)} />
      )}
      <section className="project-property__section main-container">
        <h2 className="project-property__second-title">
          {t("projectPage__floorAndPayment")}
        </h2>
        {floorPlans && Object.keys(floorPlans).length ? (
          <>
            <div className={s.roomsCount}>
              <p className={`project-property__main-text ${s.roomsText}`}>
                Choose room count to view floor and payment options
              </p>
              <CustomSelect
                options={options}
                selectedValues={selectedRooms}
                placeholder={selectedRooms}
                selectBoxStyles={{ padding: "10px 16px", fontSize: "14px" }}
                onChange={(value) => setSelectedRooms(value)}
              />
            </div>
            <Swiper
              modules={[FreeMode]}
              freeMode={true}
              spaceBetween={12}
              slidesPerView={"auto"}
              className="plans-swiper"
            >
              {floorPlans[selectedRooms]?.map((plan) => (
                <SwiperSlide
                  key={plan.id}
                  className="shadow plans-slide"
                  onClick={() => handleOpenModal(plan)}
                >
                  <span className={s.infoIcon}>
                    <IoIosInformationCircleOutline size="1.5em" />
                  </span>
                  <Plan plan={plan} bedrooms={selectedRooms} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          "No plans"
        )}
      </section>
    </>
  );
};
