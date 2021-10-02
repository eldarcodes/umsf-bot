import React from "react";
import { Alert, AlertProps } from "@bot/ui";

const MyError: React.FC<AlertProps> = props => {
  return <Alert {...props} type="error" />;
};

export default MyError;
