import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="p-8 space-y-6 font-mono">
      <div className="h-8 bg-[#0a0a0a]/10 w-48 animate-pulse" />
      <LoadingSkeleton count={4} />
    </div>
  );
}
