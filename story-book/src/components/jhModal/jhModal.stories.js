import JHModal from "./jhModal";
import { COROLS } from "../../styles/color";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
export default {
  title: "JHModal",
  component: JHModal,
  parameters: {
    // 화면 어디에 보여줄지
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const SucessAlret = {
  args: {
    headingText: "Save account",
    contentText:
      "Are you sure you want to delete your account ? All of your data will be parmanently removed",
    cancleButtonText: "Cancel",
    confirmButtonText: "Save",
    icon: faCircleCheck,
    color: COROLS.sucess,
  },
};

export const EorrosAlret = {
  args: {
    headingText: "Delete account",
    contentText:
      "Are you sure you want to delete your account ? All of your data will be parmanently removed",
    cancleButtonText: "Cancel",
    confirmButtonText: "Delete",
    icon: faCircleXmark,
    color: COROLS.errors,
  },
};
