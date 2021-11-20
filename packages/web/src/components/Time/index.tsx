import React from "react";
import { Tooltip } from "@bot/ui";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

interface TimeProps {
  absFormat?: string;
  utc?: string | null;
}

const Time: React.FC<TimeProps> = ({
  absFormat = "ddd, DD MMM YYYY HH:mm",
  utc,
}) => {
  if (!utc) {
    return null;
  }

  dayjs.extend(relativeTime);
  const absDate = dayjs(utc).format(absFormat);
  const relDate = dayjs(utc).fromNow();

  return <Tooltip title={absDate}>{relDate}</Tooltip>;
};

export default Time;
