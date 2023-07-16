import { authMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  afterAuth(auth, req) {
    if (auth.userId && req.nextUrl.pathname === '/') {
      const dashboardURL = new URL('/dashboard', req.url);
      return NextResponse.redirect(dashboardURL);
    }
  },
  publicRoutes: ['/', '/(api|trpc)(.*)', '/api/user'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
