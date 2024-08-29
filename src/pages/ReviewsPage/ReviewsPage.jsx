import React, { useEffect } from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import {
  selectReviews,
  selectIsLoading,
  selectError,
} from "../../redux/reviews/selectors";
import { selectTheme } from "../../redux/theme/selectors";
import { getReviews } from "../../redux/reviews/operations";
import DocumentTitle from "../../components/DocumentTitle";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import Loader from "../../components/UI/Loader/Loader";
// import reviews from "../../data/reviews.json"; //for test
import { errNotify } from "../../auxiliary/notification/notification";
import css from "./ReviewsPage.module.css";

const ReviewsPage = () => {
  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const theme = useSelector(selectTheme);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews())
      .unwrap()
      .catch((error) => {
        errNotify("Failed to fetch reviews:", error.message);
      });
  }, [dispatch]);

  return (
    <React.Fragment>
      <DocumentTitle>Reviews</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.title}>Reviews</h2>
          {isLoading ? (
            <Loader />
          ) : error || reviews.length === 0 ? (
            <React.Fragment>
              <p className={clsx(css.notfound, css[theme])}>
                {error ? "Failed to load reviews." : "Reviews not found!"}
              </p>
              <ReviewsList reviews={[]} isNotBtns={true} />
            </React.Fragment>
          ) : (
            <ReviewsList reviews={reviews} />
          )}
        </div>
      </section>
    </React.Fragment>
  );
};
export default ReviewsPage;
