import { Navbar } from "@/components/admin-panel/navbar";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div className="">
      <Navbar title={title} />
      <div className="container pt-4 pb-4 px-4 sm:px-8">{children}</div>
    </div>
  );
}
