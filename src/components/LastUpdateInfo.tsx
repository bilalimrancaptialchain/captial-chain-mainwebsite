import React from "react";

interface LastUpdateInfoProps {
  title: string;
  lastUpdateDate: string;
}

const LastUpdateInfo: React.FC<LastUpdateInfoProps> = ({
  title,
  lastUpdateDate,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
      <div className="flex-1">
        <h3 className="text-active font-semibold text-2xl sm:text-4xl font-display">
          {title}
        </h3>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-white text-lg font-display">Last Update</span>
        <span className="text-active font-display text-lg">
          {lastUpdateDate}
        </span>
      </div>
    </div>
  );
};

export default LastUpdateInfo;
