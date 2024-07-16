import React from "react";
import { ToastBar, Toaster, toast, useToasterStore } from "react-hot-toast";
import {
  CheckBadgeIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { TOAST_COUNT_LIMIT, TOAST_NOTIFICATION_DURATION } from "@/config";

export const AppToastBar = () => {
  const { toasts } = useToasterStore();

  // Enforce Limit
  React.useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_COUNT_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName="toaster-wrapper"
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className:
          "rounded-[12px] border border-solid !p-[16px] lg:!p-[20px] shadow-[0px_4px_16px_0px_rgba(16,11,39,0.08)] z-50",
        style: {
          borderRadius: "12px",
          border: "1px solid",
          padding: "16px",
          boxShadow: "0px 4px 16px 0px rgba(16, 11, 39, 0.08)",
          zIndex: 999
        },
        duration: TOAST_NOTIFICATION_DURATION,
        // duration: Infinity,

        // Default options for specific types
        success: {
          className:
            "!bg-gradient-to-r from-[#32BB71] to-[#2A9D8F]  !border-[#43D590]",
          icon: <CheckBadgeIcon className="w-5 !text-white" />
        },
        error: {
          className:
            "!bg-gradient-to-r from-[#F6743E] to-[#D42525] !border-[#F0863A]",
          icon: <ExclamationCircleIcon className="w-5 !text-white" />
        },
        blank: {
          className:
            "!bg-gradient-to-r from-[#2D82B2] to-[#329ABB] !border-[#7BCFED]",
          icon: <InformationCircleIcon className="w-5 !text-white" />
        }
      }}>
      {(t) => (
        <ToastBar toast={t} style={{ padding: "0", width: "100%" }}>
          {({ icon, message }) => (
            <>
              <div className="w-full flex justify-between items-center">
                <div
                  style={{ display: "flex" }}
                  className="flex items-start justify-start gap-4">
                  <div>{icon}</div>

                  <div className="flex flex-col text-left justify-start items-start">
                    <div className="text-[18px] text-[#ffffff] font-semibold font-outfit leading-[100%] mb-1">
                      {t.type === "loading" && "Loading"}
                      {t.type === "success" && "Success"}
                      {t.type === "error" && "Error"}
                      {t.type === "blank" && "Info"}
                    </div>
                    <div className="text-[16px] text-[#ffffff] font-medium font-outfit leading-[100%] text-left w-fit [&>*]:!mx-0">
                      {message}
                    </div>
                  </div>
                </div>
                {t.type !== "loading" && (
                  <button
                    className="bg-transparent border-none p-1 cursor-pointer text-[#ffffff]"
                    onClick={() => toast.dismiss(t.id)}>
                    <XMarkIcon className="w-4" />
                  </button>
                )}
              </div>
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};
