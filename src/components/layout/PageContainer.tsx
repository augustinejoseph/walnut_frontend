import React from "react";
import { THEME } from "../../constants/theme";

interface Props {
  children: React.ReactNode;
}

const PageContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className={`${THEME.background} min-h-screen flex flex-col items-center justify-center p-10`}>
      <div className={`${THEME.card} w-full max-w-5xl p-8`}>{children}</div>
    </div>
  );
};

export default PageContainer;
