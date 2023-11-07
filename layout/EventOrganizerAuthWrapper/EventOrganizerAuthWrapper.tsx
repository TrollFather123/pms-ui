/* eslint-disable import/order */
import Seo from "@/components/Seo/Seo";
import useOnlineStatus from "@/hooks/useDetectOnline";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

interface wrapperProps {
  children: JSX.Element | JSX.Element[];
}

const EventOrganizerAuthWrapper = ({ children }: wrapperProps) => {
  const router = useRouter();

  const routerText = router.pathname.split("");

  routerText.shift();
  const favText = routerText.join("").toString().toUpperCase();
  const projectName = "CASA";

  useOnlineStatus();
  return (
    <>
      {/* <NextProgress height={8} color="#266C87" /> */}
      <Seo
        title={
          router.pathname === "/"
            ? `${projectName}`
            : `${projectName} || ${favText}`
        }
        canonical=""
        description=""
        url=""
        image=""
      />

      <Box className="body_content_eventOrgnz">{children}</Box>
    </>
  );
};

export default EventOrganizerAuthWrapper;
