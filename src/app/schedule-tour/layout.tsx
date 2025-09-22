import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule Tour",
  description:
    "Schedule a tour of our premium properties. Fill out the form and our sales team will contact you shortly.",
};

export default function ScheduleTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
