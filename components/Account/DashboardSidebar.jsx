import { useMemo, useState } from "react";
import { BsBox2, BsCardList, BsHouseDoor } from "react-icons/bs";
import { BiQuestionMark } from "react-icons/bi";
import { MdOutlineContactless } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import SignInButton from "../SignInButton";
const DashboardSidebar = ({ resetTab, setTab, tab }) => {
  const [active, setActive] = useState(tab);

  console.log(active);
  console.log(tab);
  const handleActive = (item) => {
    setActive(item);
  };

  const routes = useMemo(
    () => [
      {
        label: "My orders",
        tab: "Orders",
        icon: <BsBox2 size={20} />,
      },
      {
        label: "My details",
        tab: "Account",
        icon: <BsCardList size={20} />,
      },
      {
        label: "Address Book",
        tab: "Address",
        icon: <BsHouseDoor size={20} />,
      },
      {
        label: "Contact Preferences",
        tab: "Contact",
        icon: <MdOutlineContactless size={20} />,
      },
      {
        label: "Need help?",
        tab: "Help",
        icon: <IoMdInformationCircleOutline size={20} />,
      },
      {
        label: "Where's my order?",
        tab: "Where's my order?",
        icon: <BiQuestionMark size={20} />,
      },
      {
        label: "How do I make a return?",
        tab: "How do I make a return?",
        icon: <BiQuestionMark size={20} />,
      },
    ],
    []
  );

  return (
    <div
      className="flex flex-col
    h-100"
    >
      <div className="md:sticky md:top-36">
        <div
          className={`bg-white text-neutral-500 hidden md:flex gap-4 p-6 w-full cursor-pointer hover:bg-neutral-200 border-b-2 border-neutral-200  mx-auto mt-1 text-base capitalize items-center mb-4 whitespace-nowrap`}
          onClick={() => {
            handleActive("Overview");
            resetTab();
          }}
        >
          <span>
            <FaUserCircle size={22} />
          </span>
          <h1>Account Overview</h1>
        </div>
        {routes.map((item) => (
          <div
            className={`${
              item.tab === tab
                ? "bg-neutral-200 text-neutral-500"
                : "bg-white text-neutral-500"
            } gap-4 p-4 w-full cursor-pointer hover:bg-neutral-200 border-b-2 border-neutral-200  mx-auto mt-1 md:mt-2 text-base capitalize flex items-center`}
            onClick={() => {
              setTab(item.tab);
              handleActive(item.tab);
            }}
            key={item.label}
          >
            <span>{item.icon}</span>
            <h1>{item.label}</h1>
          </div>
        ))}
        <SignInButton />
      </div>
    </div>
  );
};

export default DashboardSidebar;
