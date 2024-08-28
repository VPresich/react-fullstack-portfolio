import BenefitItem from "./BenefitItem/BenefitItem";
import benefitsData from "./benefits-data";
import css from "./BenefitsList.module.css";

const BenefitsList = () => {
  return (
    <ul className={css.list}>
      {benefitsData.map((item, index) => (
        <BenefitItem
          key={index}
          iconId={item.iconId}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default BenefitsList;
