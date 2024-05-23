import Modal from "./Modal";
import Toasts from "./Toasts";
import cc from "classcat";

interface LayoutProps {
  children: React.ReactNode;
  mobileFirst?: boolean;
}

export default function Layout({ mobileFirst = false, children }: LayoutProps) {
  return (
    <div className="w-full flex justify-center h-screen">
      <Toasts mobileFirst={mobileFirst} />
      <Modal mobileFirst={mobileFirst} />
      <div
        className={cc([
          "w-full h-screen overflow-auto no-scrollbar",
          mobileFirst && "max-w-md shadow-xl",
        ])}
      >
        <div className="flex flex-col items-center relative">{children}</div>
      </div>
    </div>
  );
}
