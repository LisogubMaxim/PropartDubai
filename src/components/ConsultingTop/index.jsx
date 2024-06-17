import "./consultingTop.scss";
import WidthContainer from "../UI/WidthContainer";
import { Link } from "react-scroll";
import Button from "../../components/UI/Button";

export function ConsultingTop({ bg, title, text, btnText, children }) {
  return (
    <section
      className="consultingTop"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(168deg, rgba(0, 0, 0, 0.85) -3.63%, rgba(0, 0, 0, 0.00) 31.1%), linear-gradient(284deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.29) 19.37%, rgba(0, 0, 0, 0.00) 36.21%), linear-gradient(67deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.45) 30.99%, rgba(0, 0, 0, 0.00) 57.93%), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <WidthContainer>
        <div className="consultingTop__topBox">
          <span className="consultingTop__textBox">
            <h1>{title}</h1>
            <div className="consultingTop__textBox-textWrapper">{text}</div>
          </span>
          <Link
            to="consultationHelpForm"
            smooth={true}
            duration={500}
            offset={-100}
          >
            <Button className="button--whiteBlure">
              {btnText}{" "}
              <img
                src="/assets/UI/arrowBtn.svg"
                alt="arrowBtn"
                width={24}
                height={24}
              />
            </Button>
          </Link>
        </div>
        <div className="consultingTop__stepsContainer">{children}</div>
      </WidthContainer>
    </section>
  );
}

export function ConsultingTopItem({ count, text, img }) {
  return (
    <div className="consultingTopItem">
      <span>
        {count} <img src={img} alt={img} width={24} height={24} />
      </span>
      <img src={img} alt={img} width={150} height={150} />
      <p>{text}</p>
    </div>
  );
}
