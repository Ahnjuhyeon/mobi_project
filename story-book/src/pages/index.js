import JHButton from "../components/jhButton/jhButton";
import JHInput from "../components/jhInput/input";
import { FONT_SIZE } from "../styles/fontSize";

const MainPage = () => {
  return (
    <>
      <JHButton variant="primary" size="largeCircle" font={FONT_SIZE.large}>
        check
      </JHButton>
      <JHInput variant="secondary" size="largeCircle" font="medium" />
    </>
  );
};
export default MainPage;
