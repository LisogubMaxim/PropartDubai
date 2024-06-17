import areaMap from "../assets/Areas/map.png";
import palm from "../assets/Areas/AreasPhoto/palm.png";
import mbr from "../assets/Areas/AreasPhoto/mbr.png";
import creek from "../assets/Areas/AreasPhoto/creek.png";
import dubai from "../assets/Areas/AreasPhoto/dubai.png";
import damac from "../assets/Areas/AreasPhoto/damac.png";
import jlt from "../assets/Areas/AreasPhoto/jlt.png";
import mjl from "../assets/Areas/AreasPhoto/mjl.png";
import mudon from "../assets/Areas/AreasPhoto/mudon.png";
import jvc from "../assets/Areas/AreasPhoto/jvc.png";
import bluewaters from "../assets/Areas/AreasPhoto/bluewaters.png";
import cityWalk from "../assets/Areas/AreasPhoto/city-walk.png";
import { useTranslation } from "react-i18next";

const AreasCardsInfo = () => {
  const { t } = useTranslation();

  return [
    {
      name: "Business Bay",
      description: t("Business Bay description"),
      price: "$$$",
      image: areaMap,
      area: "area/business",
    },
    {
      name: "Palm Jumeirah",
      description: t("Palm description"),
      price: "$$$$",
      image: palm,
      area: "area/palm",
    },
    {
      name: "MBR City",
      description: t("MBR description"),
      price: "$$",
      image: mbr,
      area: "area/mbr",
    },
    {
      name: "Creek Harbour",
      description: t("Creek description"),
      price: "$$$",
      image: creek,
      area: "area/creek",
    },
    {
      name: "Dubai Marina",
      description: t("Dubai description"),
      price: "$$",
      image: dubai,
      area: "area/marina",
    },
    {
      name: "Damac Lagoons",
      description: t("Damac description"),
      price: "$$$",
      image: damac,
      area: "area/lagoons",
    },
    {
      name: "JLT",
      description: t("JLT description"),
      price: "$$",
      image: jlt,
      area: "area/jlt",
    },
    {
      name: "MJL",
      description: t("MJL description"),
      price: "$$$$",
      image: mjl,
      area: "area/mjl",
    },
    {
      name: "Mudon",
      description: t("Mudon description"),
      price: "$$",
      image: mudon,
      area: "area/mudon",
    },
    {
      name: "JVC",
      description: t("JVC description"),
      price: "$$$",
      image: jvc,
      area: "area/jvc",
    },
    {
      name: "Bluewaters",
      description: t("Bluewaters description"),
      price: "$$",
      image: bluewaters,
      area: "area/bluewaters",
    },
    {
      name: "City Walk",
      description: t("City description"),
      price: "$$$",
      image: cityWalk,
      area: "area/central-park",
    },
  ];
};

export default AreasCardsInfo;
