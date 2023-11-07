import SignInMain from "@/components/SignInMain/SignInMain";
import EventOrganizerAuthWrapper from "@/layout/EventOrganizerAuthWrapper/EventOrganizerAuthWrapper";

export default function Index() {
  return (
    <EventOrganizerAuthWrapper>
      <SignInMain pathName="/auth/signup" />
    </EventOrganizerAuthWrapper>
  );
}
