import { TabButton } from "./TabButton";

export const Tabs = ({ buttons, ButtonsContainer = "menu", children }) => {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};
