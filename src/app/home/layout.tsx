import { HeaderWidget } from "@/widgets";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-300 w-full">
        <HeaderWidget /> {children}
      </div>
    </div>
  );
}
