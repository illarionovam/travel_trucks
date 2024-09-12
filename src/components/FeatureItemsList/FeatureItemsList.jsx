import css from "./FeatureItemsList.module.css";
import FeatureItem from "../FeatureItem/FeatureItem";

const FeatureItemsList = ({ data }) => {
  return (
    <div className={css.featureItems}>
      <FeatureItem value="transmission" label={data.transmission} />
      <FeatureItem value="engine" label={data.engine} />
      {data.AC && <FeatureItem value="ac" label="AC" />}
      {data.bathroom && <FeatureItem value="bathroom" label="bathroom" />}
      {data.kitchen && <FeatureItem value="kitchen" label="kitchen" />}
      {data.TV && <FeatureItem value="tv" label="TV" />}
      {data.radio && <FeatureItem value="radio" label="radio" />}
      {data.refrigerator && (
        <FeatureItem value="refrigerator" label="refrigerator" />
      )}
      {data.microwave && <FeatureItem value="microwave" label="microwave" />}
      {data.gas && <FeatureItem value="gas" label="gas" />}
      {data.water && <FeatureItem value="water" label="water" />}
    </div>
  );
};

export default FeatureItemsList;
