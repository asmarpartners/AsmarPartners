import { ServicePage } from "@/components/service-page";
import { createPageMetadata } from "@/lib/seo";
import { servicePages } from "@/lib/service-content";

const content = servicePages.roi;

export const metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: content.path,
});

export default function AiAdoptionRoiMeasurementPage() {
  return <ServicePage content={content} />;
}
