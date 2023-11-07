import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

export default function EyeOpen({ ...props }: CustomIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.IconWidth || "19"}
      height={props?.IconHeight || "13"}
      viewBox="0 0 19 13"
      fill="none"
    >
      <path
        d="M9.37598 8.75C10.7567 8.75 11.876 7.63071 11.876 6.25C11.876 4.86929 10.7567 3.75 9.37598 3.75C7.99526 3.75 6.87598 4.86929 6.87598 6.25C6.87598 7.63071 7.99526 8.75 9.37598 8.75Z"
        fill={props?.IconColor || primaryColors?.lightTxtColor}
      />
      <path
        d="M18.5492 5.57031C17.5156 3.97188 16.1746 2.61406 14.6715 1.64336C13.0086 0.56836 11.1727 0 9.3625 0C7.70156 0 6.06836 0.474609 4.5082 1.41055C2.91719 2.36484 1.47578 3.75898 0.223826 5.55391C0.0824919 5.75676 0.00465364 5.99705 0.0002022 6.24425C-0.00424924 6.49144 0.0648871 6.73438 0.198826 6.94219C1.23047 8.55664 2.5582 9.91641 4.03789 10.8738C5.7039 11.9531 7.49687 12.5 9.3625 12.5C11.1871 12.5 13.027 11.9363 14.6828 10.8703C16.1852 9.90273 17.5234 8.53984 18.5531 6.92812C18.6824 6.72514 18.7508 6.48932 18.7501 6.24865C18.7494 6.00797 18.6797 5.77255 18.5492 5.57031ZM9.37578 10C8.6341 10 7.90907 9.78007 7.29239 9.36801C6.67571 8.95596 6.19506 8.37029 5.91123 7.68506C5.6274 6.99984 5.55314 6.24584 5.69783 5.51841C5.84253 4.79098 6.19968 4.1228 6.72413 3.59835C7.24858 3.0739 7.91676 2.71675 8.64419 2.57206C9.37162 2.42736 10.1256 2.50162 10.8108 2.78545C11.4961 3.06928 12.0817 3.54993 12.4938 4.16661C12.9058 4.7833 13.1258 5.50832 13.1258 6.25C13.1246 7.24421 12.7292 8.19738 12.0262 8.90039C11.3232 9.60341 10.37 9.99886 9.37578 10Z"
        fill={props?.IconColor || primaryColors?.lightTxtColor}
      />
    </svg>
  );
}
