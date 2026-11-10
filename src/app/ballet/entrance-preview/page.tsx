import type { Metadata } from "next";
import Home from "@/app/page";
import BalletPage from "@/app/ballet/page";
import { EntranceStudy } from "./EntranceStudy";
import "./preview.css";

export const metadata: Metadata = {
  title: "Ballet entrance — motion study",
  description: "Isolated nine-pose animation feasibility study for visual review.",
  robots: { index: false, follow: false },
};

export default function EntrancePreview() {
  return <EntranceStudy collection={<Home />} destination={<BalletPage />} />;
}
