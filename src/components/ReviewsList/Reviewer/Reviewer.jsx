import PropTypes from "prop-types";
import escapeHTML from "../../../auxiliary/escapeHTML";
import css from "./Reviewer.module.css";

const Reviewer = ({
  _id,
  author = "Anonymous",
  avatar_url = "default-avatar.png",
  review = "No review provided",
}) => {
  return (
    <div className={css.item} id={`review-${_id}`}>
      <img className={css.avatar} src={avatar_url} alt={`${author} avatar`} />
      <div className={css.info}>
        <h3 className={css.fullname}>{escapeHTML(author)}</h3>
        <p className={css.text}>{escapeHTML(review)}</p>
      </div>
    </div>
  );
};

Reviewer.propTypes = {
  _id: PropTypes.string.isRequired,
  author: PropTypes.string,
  avatar_url: PropTypes.string,
  review: PropTypes.string,
};

export default Reviewer;
