import ProjectInfo from "./project_info";
import WhatsNew from "./whats_new";
import CreatorInfo from "./creator_info";
import Feedback from "./feedback";
import Feedbacks from "./feedbacks";

export default function Page() {
  return (
    <div className="relative mx-auto max-w-screen-minicontainer rtl p-2">
      <ProjectInfo />
      <CreatorInfo />
      <Feedback />
      <Feedbacks />
      <WhatsNew />
    </div>
  );
}
