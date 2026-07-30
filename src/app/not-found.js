import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f1ea] font-mono p-6 text-center">
      <div className="border-[4px] border-[#0a0a0a] bg-[#e8ff00] p-8 shadow-hard-lg max-w-md w-full">
        <h1 className="font-grotesk font-black text-[64px] text-[#0a0a0a] leading-none mb-2">404</h1>
        <h2 className="font-grotesk font-black text-[20px] uppercase text-[#0a0a0a] mb-3">PAGE NOT FOUND</h2>
        <p className="text-[12px] uppercase text-[#0a0a0a]/80 tracking-[0.14em] mb-6">
          The banking ledger resource you requested does not exist or has been relocated.
        </p>
        <Link
          href="/dashboard"
          className="inline-block border-[3px] border-[#0a0a0a] bg-[#0a0a0a] text-[#f4f1ea] px-6 py-3 font-mono text-[12px] font-extrabold uppercase tracking-[0.14em] shadow-hard-sm hover:bg-[#f4f1ea] hover:text-[#0a0a0a] transition-all"
        >
          Return to Dashboard -&gt;
        </Link>
      </div>
    </div>
  );
}
