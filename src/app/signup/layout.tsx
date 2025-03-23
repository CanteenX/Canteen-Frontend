import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - CanteenX",
  description: "Create your CanteenX account",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 