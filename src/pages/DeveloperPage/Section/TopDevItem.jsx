import { Link } from "react-router-dom";

export default function TopDevItem({
  item = {
    title: "Emaar",
    value: "emaar",
    header_photo_src:
      "https://metropolitan.realestate/wp-content/uploads/2021/10/burj-khalifa.jpg",
  },
}) {
  return (
    <div
      className="searchDev__topItem"
      style={{
        backgroundImage: `linear-gradient(213deg, rgba(0, 0, 0, 0.35) -11.09%, rgba(0, 0, 0, 0.00) 45.5%), linear-gradient(24deg, rgba(0, 0, 0, 0.45) 9.7%, rgba(0, 0, 0, 0.00) 40%), url(${item.header_photo_src})`,
      }}
    >
      <span>
        <h4>{item.title}</h4>
        <p>Top developer in Dubai</p>
      </span>
      <Link to={`/developer/${item.value}`}>
        <img
          src="/assets/UI/openIcon.svg"
          alt="openIcon"
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
}
