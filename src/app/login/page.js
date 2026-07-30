"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBanking } from "@/features/banking/useBanking";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useBanking();

  const [email, setEmail] = useState("alex@nexabank.com");
  const [password, setPassword] = useState("nexa1234");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      const res = login(email, password);
      setLoading(false);

      if (res.success) {
        router.push("/dashboard");
      } else {
        setError(res.error);
      }
    }, 600);
  };

  const fillDemoCreds = () => {
    setEmail("alex@nexabank.com");
    setPassword("nexa1234");
    setError("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f1ea] grid-bg p-4 font-mono select-none">
      <div className="w-full max-w-md border-[4px] border-[#0a0a0a] bg-[#f4f1ea] p-6 sm:p-8 shadow-hard-lg">
        {/* Logo Header */}
        <div className="flex items-center gap-3 border-b-[3px] border-[#0a0a0a] pb-6 mb-6">
          <div className="h-12 w-12 border-[3px] border-[#0a0a0a] bg-[#e8ff00] shadow-hard-sm flex items-center justify-center font-extrabold text-[20px] text-[#0a0a0a]">
            N
          </div>
          <div>
            <h1 className="font-grotesk font-black text-[24px] uppercase tracking-tight text-[#0a0a0a] leading-none">
              NEXABANK
            </h1>
            <p className="text-[10px] font-bold tracking-[0.18em] text-[#0a0a0a]/60 uppercase mt-1">
              Audit-Grade Core Ledger Portal
            </p>
          </div>
        </div>

        {/* Credentials Notice Box */}
        <div className="border-[3px] border-[#0a0a0a] bg-[#e8ff00] p-4 mb-6 text-[11px]">
          <div className="flex justify-between items-center mb-1">
            <span className="font-extrabold uppercase text-[#0a0a0a]">🔑 Demo Login Credentials</span>
            <button
              type="button"
              onClick={fillDemoCreds}
              className="text-[10px] font-bold uppercase underline hover:text-[#0a0a0a]/70 cursor-pointer"
            >
              Auto-Fill
            </button>
          </div>
          <div className="space-y-1 font-bold text-[#0a0a0a]">
            <div>Email: <span className="underline select-all">alex@nexabank.com</span></div>
            <div>Password: <span className="underline select-all">nexa1234</span></div>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="alex@nexabank.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            required
          />

          <Input
            label="Security Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            required
          />

          {error && (
            <div className="border-[2px] border-red-600 bg-red-100 p-3 text-[11px] font-extrabold uppercase text-red-700">
              ⚠️ {error}
            </div>
          )}

          <div className="pt-2">
            <Button
              type="submit"
              variant="acid"
              size="lg"
              className="w-full"
              loading={loading}
            >
              Authenticate &amp; Access Dashboard -&gt;
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
