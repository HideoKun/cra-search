import React, { memo } from "react";
import { useSelector } from "react-redux";

import { Loader } from "../../shared";

const selector = ({ search: { isLoading } }) => isLoading;
const bigLoader = 80;

export const GlobalLoader = memo(() => {
  const isLoading = useSelector(selector);

  return <>{isLoading && <Loader size={bigLoader} />}</>;
});
