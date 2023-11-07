import SignUpMain from "@/components/SignUpMain/SignUpMain";
import EventOrganizerAuthWrapper from "@/layout/EventOrganizerAuthWrapper/EventOrganizerAuthWrapper";

export default function Index() {
  return (
    <EventOrganizerAuthWrapper>
      <SignUpMain pathName="/auth/signin" />
    </EventOrganizerAuthWrapper>
  );
}
