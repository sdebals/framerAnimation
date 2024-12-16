import Staggered from "@/components/Staggered";

export default function StaggeredPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Staggered></Staggered>
      </main>
    </div>
  );
}
