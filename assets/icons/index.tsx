import React from "react";
import Home09Icon from "./home-09-stroke-rounded";
import FavouriteIcon from "./favourite-stroke-rounded";
import Calendar04Icon from "./calendar-04-stroke-rounded";
import UserIcon from "./user-stroke-rounded";
import ArrowLeft02Icon from "./arrow-left-02-stroke-rounded";
import CreditCardValidationIcon from "./credit-card-validation-stroke-rounded";
import Notification03Icon from "./notification-03-stroke-rounded";
import Search01Icon from "./search-01-stroke-rounded";
import StarIcon from "./star-stroke-rounded";
import Mail01Icon from "./mail-01-stroke-rounded";
import SquareLock02Icon from "./square-lock-02-stroke-rounded";
import Appointment01Icon from "./appointment-01-stroke-rounded";
import Appointment02Icon from "./appointment-02-stroke-rounded";
import PencilEdit02Icon from "./pencil-edit-02-stroke-rounded";
import SecurityCheckIcon from "./security-check-stroke-rounded";
import Settings02Icon from "./settings-02-stroke-rounded";
import Share01Icon from "./share-01-stroke-rounded";
import Delete02Icon from "./delete-02-stroke-rounded";
import HelpSquareIcon from "./help-square-stroke-rounded";
import PlusSignCircleIcon from "./plus-sign-circle-stroke-rounded";
import RemoveCircleIcon from "./remove-circle-stroke-rounded";
import ArrowRight01Icon from "./arrow-right-01-stroke-rounded";
import Logout03Icon from "./logout-03-stroke-rounded";
import PreferenceHorizontalIcon from "./filter";
import DeveloperIcon from "./developer";

const icons = {
  home: Home09Icon,
  favourite: FavouriteIcon,
  calendar: Calendar04Icon,
  profile: UserIcon,
  arrowleft: ArrowLeft02Icon,
  arrowright: ArrowRight01Icon,
  payment: CreditCardValidationIcon,
  notification: Notification03Icon,
  logout: Logout03Icon,
  search: Search01Icon,
  star: StarIcon,
  mail: Mail01Icon,
  lock: SquareLock02Icon,
  appiomentOne: Appointment01Icon,
  appiomentTwo: Appointment02Icon,
  edit: PencilEdit02Icon,
  security: SecurityCheckIcon,
  settings: Settings02Icon,
  share: Share01Icon,
  delete: Delete02Icon,
  help: HelpSquareIcon,
  plus: PlusSignCircleIcon,
  minus: RemoveCircleIcon,
  filter: PreferenceHorizontalIcon,
  developer: DeveloperIcon,
};

const Icon = ({
  name,
  color,
  ...props
}: {
  name: keyof typeof icons;
  color?: string;
}) => {
  const IconComponent = icons[name];
  return (
    <IconComponent
      height={26}
      width={26}
      {...props}
      color={color || "#000"}
      strokeWidth={1.9}
    />
  );
};

export default Icon;
