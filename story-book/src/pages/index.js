import JHButton from "../components/jhButton/jhButton";
import JHInput from "../components/jhInput/input";
import JHModal from "../components/jhModal/jhModal";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import { COROLS } from "../styles/color";
import { FONT_SIZE } from "../styles/fontSize";

const MainPage = () => {
  return (
    <>
      <JHButton variant="primary" size="largeCircle" font={FONT_SIZE.large}>
        check
      </JHButton>
      <JHInput variant="secondary" size="largeCircle" font="medium" />

      <JHModal
        headingText="Save account"
        contentText="Are you sure you want to delete your account ? All of your data will be parmanently removed"
        cancleButtonText="취소"
        confirmButtonText="확인"
        icon={faCircleCheck}
        color={COROLS.sucess}
      />

      <JHModal
        headingText="경고"
        contentText="이러저러해서 이래저래 될수 있어요. 삭제할래요?"
        cancleButtonText="취소"
        confirmButtonText="삭제"
        icon={faCircleXmark}
        color={COROLS.errors}
      />
    </>
  );
};
export default MainPage;
