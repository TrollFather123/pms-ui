import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

export default function LockIcon({
  IconColor,
  IconHeight,
  IconWidth
}: CustomIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth || "12"}
      height={IconHeight || "13"}
      viewBox="0 0 12 13"
      fill="none"
    >
      <path
        d="M3.22222 5.95V3.75C3.22222 3.02065 3.51488 2.32118 4.03581 1.80546C4.55675 1.28973 5.26329 1 6 1C6.73671 1 7.44325 1.28973 7.96419 1.80546C8.48512 2.32118 8.77778 3.02065 8.77778 3.75V5.95M2.11111 5.95H9.88889C10.5025 5.95 11 6.44249 11 7.05V10.9C11 11.5075 10.5025 12 9.88889 12H2.11111C1.49746 12 1 11.5075 1 10.9V7.05C1 6.44249 1.49746 5.95 2.11111 5.95Z"
        stroke={IconColor || primaryColors?.colorGrey}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
