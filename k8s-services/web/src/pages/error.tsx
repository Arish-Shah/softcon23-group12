import { RootLayout } from "@/layouts/root-layout";
import type { FunctionComponent } from "preact";
import type { RoutableProps } from "preact-router";

export const Error: FunctionComponent<RoutableProps> = () => {
  return (
    <RootLayout title="not found" columns={false}>
      <span>the page you are looking for does not exist</span>
    </RootLayout>
  );
};
