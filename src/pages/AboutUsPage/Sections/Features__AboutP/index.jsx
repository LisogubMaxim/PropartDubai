import React from "react";
import "./features__AboutP.scss";

import BuildingIcon from "../../../../icons/Buildings.svg";
import DocumentIcon from "../../../../icons/Document.svg";
import FileIcon from "../../../../icons/File.svg";
import GarageIcon from "../../../../icons/Garage.svg";
import NotesIcon from "../../../../icons/Notes.svg";
import PresentationIcon from "../../../../icons/Presentation.svg";
import UserIcon from "../../../../icons/UserHandUp.svg";
import WalletIcon from "../../../../icons/Wallet.svg";
import { useTranslation } from "react-i18next";

const featureItems = [
  {
    icon: BuildingIcon,
    title: "Company registration",
    text: "Efficient and professional company registration services",
  },
  {
    icon: WalletIcon,
    title: "Bank account",
    text: "Open a corporate bank account effortlessly",
  },
  {
    icon: DocumentIcon,
    title: "Attorney power",
    text: "Legal support for your business needs in the UAE",
  },
  {
    icon: NotesIcon,
    title: "Resident Visa",
    text: "Secure your residency in the UAE with a good expert",
  },
  {
    icon: FileIcon,
    title: "Accounting",
    text: "Professional financial management services",
  },
  {
    icon: PresentationIcon,
    title: "Trademark registration",
    text: "Protect your business brand in the UAE market",
  },
  {
    icon: GarageIcon,
    title: "Mainland",
    text: "Navigating business regulations in the UAE mainland",
  },
  {
    icon: UserIcon,
    title: "UAE employment",
    text: "Hire skilled professionals for your business",
  },
];

const index = () => {
  const { t } = useTranslation();
  for (let i = 0; i < featureItems.length; i++) {
    featureItems[i].title = t(`AboutUsPage__Features__AboutP__Title${i + 1}`);
    featureItems[i].text = t(`AboutUsPage__Features__AboutP__Text${i + 1}`);
  }
  return (
    <div className="container">
      <section className="features">
        <div className="grid-container">
          {featureItems.map((item, index) => (
            <div key={index} className="grid-item">
              <img src={item.icon} alt={item.title} width={24} height={24} />
              <div>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default index;
