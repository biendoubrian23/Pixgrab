import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Search Console Setup Guide | Pixgrab',
  description: 'Learn how to set up Google Search Console for your website. Complete guide to verifying your site and monitoring search performance.',
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
