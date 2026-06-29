import type { Metadata } from "next";

import { ServicePage } from "@/components/service-page";
import { createPageMetadata } from "@/lib/seo";
import { servicePages } from "@/lib/service-content";

const content = servicePages.review;

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: content.path,
});

export default function AiRiskOpportunityReviewPage() {
  return <ServicePage content={content} />;
}
