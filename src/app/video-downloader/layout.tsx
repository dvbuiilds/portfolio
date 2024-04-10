import type { Metadata } from 'next';
import { useEffect, useState } from 'react';

export const metadata: Metadata = {
  title: 'Online Video Downloader',
  description: 'Download any video that tempts you <3',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
