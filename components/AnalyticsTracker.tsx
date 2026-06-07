'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { app } from '@/lib/firebase';
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics';

export function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && app !== null) {
      isSupported().then((supported) => {
        if (supported && app) {
          const analytics = getAnalytics(app);
          logEvent(analytics, 'page_view', {
            page_path: pathname,
            page_search: searchParams ? searchParams.toString() : '',
          });
        }
      });
    }
  }, [pathname, searchParams]);

  return null;
}
