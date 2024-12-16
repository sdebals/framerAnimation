import ScrollAnimation from "@/components/ScrollAnimation";
import ScrollUseScroll from "@/components/ScrollUseScroll";
import ScrollUseScroll2 from "@/components/ScrollUseScroll2";

export default function TextPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ScrollUseScroll2></ScrollUseScroll2>
        <ScrollAnimation></ScrollAnimation>
        <ScrollUseScroll></ScrollUseScroll>
      </main>
    </div>
  );
}
