import * as Yup from "yup";

import {
  ERR_EMAIL,
  ERR_EMAIL_REQUIRED,
  ERR_COMMENT_SHORT,
  ERR_COMMENT_REQUIRED,
} from "./constants.js";

import { EMAIL_PATTERN } from "../../auxiliary/patterns";

export const feedbackSchema = Yup.object().shape({
  email: Yup.string()
    .matches(EMAIL_PATTERN, ERR_EMAIL)
    .required(ERR_EMAIL_REQUIRED),
  comment: Yup.string()
    .min(7, ERR_COMMENT_SHORT)
    .required(ERR_COMMENT_REQUIRED),
});
