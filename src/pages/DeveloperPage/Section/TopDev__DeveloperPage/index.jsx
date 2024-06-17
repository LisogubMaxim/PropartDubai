import React from "react";
import TopDevItem from "../TopDevItem";
import infoDev from "../../../../companiesInfo.json";
import "./topDev__DeveloperPage.scss";

export default function TopDev__DeveloperPage() {
  const randomIndexes = [];
  while (randomIndexes.length < 3) {
    const randomIndex = Math.floor(Math.random() * infoDev.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  const developers = randomIndexes.map((index) => infoDev[index]);

  return (
    <section className="topDev">
      {developers.map((item, index) => (
        <TopDevItem key={index} item={item} />
      ))}
    </section>
  );
}
