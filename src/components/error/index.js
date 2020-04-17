import React, { memo } from "react";
import { useSelector } from "react-redux";

import { Error as ErrorMsg } from "../../shared";

const selector = ({ search: { error } }) => error;

export const Error = memo(() => {
  const error = useSelector(selector);

  return <>{error && <ErrorMsg error={error} />}</>;
});
