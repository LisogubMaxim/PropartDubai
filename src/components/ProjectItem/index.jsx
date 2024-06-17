import { Link } from "react-router-dom";
import { useCurrency } from "../../components/CurrencyProvider";
import CurrencyLogo from "../../components/UI/CurrencyLogo";
import "./projectItem.scss";

export default function ProjectItem({ img, title, priceFrom, id }) {
  const { selectedCurrency, convertPrice } = useCurrency();

  return (
    <div className="projectItem" style={{ backgroundImage: `url(${img})` }}>
      <Link to={`/project/${id}`}>
        <div>
          <h4>{title}</h4>
          <p>
            from
            <span>
              <CurrencyLogo currency={selectedCurrency} />
              {convertPrice(priceFrom)}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}
