import { ServicePage } from "@/components/service-page";
import { createPageMetadata } from "@/lib/seo";
import { servicePages } from "@/lib/service-content";

const content = servicePages.sprint;

export const metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: content.path,
});

export default function SecureAiAdoptionSprintPage() {
  return <ServicePage content={content} />;
}
