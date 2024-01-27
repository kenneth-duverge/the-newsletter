'use client';
import {ReactNode} from 'react';
import {ClerkProvider, useAuth} from "@clerk/clerk-react";
import {ConvexProviderWithClerk} from "convex/react-clerk";
import {ConvexReactClient} from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ConvexClientProvider({children}: { children: ReactNode }) {
  return <ClerkProvider publishableKey="pk_test_aHVnZS1yYWJiaXQtNTguY2xlcmsuYWNjb3VudHMuZGV2JA">
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  </ClerkProvider>
}
