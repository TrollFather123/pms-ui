import ResetPassword from "@/components/ResetPassword/ResetPassword";
import EventOrganizerAuthWrapper from "@/layout/EventOrganizerAuthWrapper/EventOrganizerAuthWrapper";

export default function Index() {
  return (
    <EventOrganizerAuthWrapper>
      <ResetPassword />
    </EventOrganizerAuthWrapper>
  );
}
