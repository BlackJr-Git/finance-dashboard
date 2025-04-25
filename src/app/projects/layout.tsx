import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Footer } from "@/components/admin-panel/footer";

export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ContentLayout title="Mes Projets Financiers">{children}</ContentLayout>
    </>
  );
}
