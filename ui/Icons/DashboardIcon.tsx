import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

export default function DashboardIcon({
  IconColor,
  IconWidth,
  IconHeight
}: CustomIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth || "19"}
      height={IconHeight || "19"}
      viewBox="0 0 19 19"
      fill="none"
    >
      <path
        d="M5.54167 0H3.16667C2.32681 0 1.52136 0.33363 0.927495 0.927495C0.33363 1.52136 0 2.32681 0 3.16667L0 5.54167C0 6.38152 0.33363 7.18697 0.927495 7.78084C1.52136 8.3747 2.32681 8.70833 3.16667 8.70833H5.54167C6.38152 8.70833 7.18697 8.3747 7.78084 7.78084C8.3747 7.18697 8.70833 6.38152 8.70833 5.54167V3.16667C8.70833 2.32681 8.3747 1.52136 7.78084 0.927495C7.18697 0.33363 6.38152 0 5.54167 0ZM7.125 5.54167C7.125 5.96159 6.95818 6.36432 6.66125 6.66125C6.36432 6.95818 5.96159 7.125 5.54167 7.125H3.16667C2.74674 7.125 2.34401 6.95818 2.04708 6.66125C1.75015 6.36432 1.58333 5.96159 1.58333 5.54167V3.16667C1.58333 2.74674 1.75015 2.34401 2.04708 2.04708C2.34401 1.75015 2.74674 1.58333 3.16667 1.58333H5.54167C5.96159 1.58333 6.36432 1.75015 6.66125 2.04708C6.95818 2.34401 7.125 2.74674 7.125 3.16667V5.54167ZM15.8333 0H13.4583C12.6185 0 11.813 0.33363 11.2192 0.927495C10.6253 1.52136 10.2917 2.32681 10.2917 3.16667V5.54167C10.2917 6.38152 10.6253 7.18697 11.2192 7.78084C11.813 8.3747 12.6185 8.70833 13.4583 8.70833H15.8333C16.6732 8.70833 17.4786 8.3747 18.0725 7.78084C18.6664 7.18697 19 6.38152 19 5.54167V3.16667C19 2.32681 18.6664 1.52136 18.0725 0.927495C17.4786 0.33363 16.6732 0 15.8333 0ZM17.4167 5.54167C17.4167 5.96159 17.2499 6.36432 16.9529 6.66125C16.656 6.95818 16.2533 7.125 15.8333 7.125H13.4583C13.0384 7.125 12.6357 6.95818 12.3387 6.66125C12.0418 6.36432 11.875 5.96159 11.875 5.54167V3.16667C11.875 2.74674 12.0418 2.34401 12.3387 2.04708C12.6357 1.75015 13.0384 1.58333 13.4583 1.58333H15.8333C16.2533 1.58333 16.656 1.75015 16.9529 2.04708C17.2499 2.34401 17.4167 2.74674 17.4167 3.16667V5.54167ZM5.54167 10.2917H3.16667C2.32681 10.2917 1.52136 10.6253 0.927495 11.2192C0.33363 11.813 0 12.6185 0 13.4583L0 15.8333C0 16.6732 0.33363 17.4786 0.927495 18.0725C1.52136 18.6664 2.32681 19 3.16667 19H5.54167C6.38152 19 7.18697 18.6664 7.78084 18.0725C8.3747 17.4786 8.70833 16.6732 8.70833 15.8333V13.4583C8.70833 12.6185 8.3747 11.813 7.78084 11.2192C7.18697 10.6253 6.38152 10.2917 5.54167 10.2917ZM7.125 15.8333C7.125 16.2533 6.95818 16.656 6.66125 16.9529C6.36432 17.2499 5.96159 17.4167 5.54167 17.4167H3.16667C2.74674 17.4167 2.34401 17.2499 2.04708 16.9529C1.75015 16.656 1.58333 16.2533 1.58333 15.8333V13.4583C1.58333 13.0384 1.75015 12.6357 2.04708 12.3387C2.34401 12.0418 2.74674 11.875 3.16667 11.875H5.54167C5.96159 11.875 6.36432 12.0418 6.66125 12.3387C6.95818 12.6357 7.125 13.0384 7.125 13.4583V15.8333ZM15.8333 10.2917H13.4583C12.6185 10.2917 11.813 10.6253 11.2192 11.2192C10.6253 11.813 10.2917 12.6185 10.2917 13.4583V15.8333C10.2917 16.6732 10.6253 17.4786 11.2192 18.0725C11.813 18.6664 12.6185 19 13.4583 19H15.8333C16.6732 19 17.4786 18.6664 18.0725 18.0725C18.6664 17.4786 19 16.6732 19 15.8333V13.4583C19 12.6185 18.6664 11.813 18.0725 11.2192C17.4786 10.6253 16.6732 10.2917 15.8333 10.2917ZM17.4167 15.8333C17.4167 16.2533 17.2499 16.656 16.9529 16.9529C16.656 17.2499 16.2533 17.4167 15.8333 17.4167H13.4583C13.0384 17.4167 12.6357 17.2499 12.3387 16.9529C12.0418 16.656 11.875 16.2533 11.875 15.8333V13.4583C11.875 13.0384 12.0418 12.6357 12.3387 12.3387C12.6357 12.0418 13.0384 11.875 13.4583 11.875H15.8333C16.2533 11.875 16.656 12.0418 16.9529 12.3387C17.2499 12.6357 17.4167 13.0384 17.4167 13.4583V15.8333Z"
        fill={IconColor || primaryColors?.white}
      />
    </svg>
  );
}
