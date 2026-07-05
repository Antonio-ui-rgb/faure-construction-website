"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success";

const inputClass =
  "w-full rounded-md border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 outline-none transition-colors focus:border-orange";

export function EstimateForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-sm bg-white p-10 text-center shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
        <CheckCircle2 className="mb-5 text-orange" size={40} strokeWidth={1.5} />
        <h3 className="font-display text-2xl text-charcoal">
          Thank You.
        </h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-charcoal/60">
          We&apos;ve received your request and will reach out shortly. For
          immediate assistance, call{" "}
          <a href={site.phoneHref} className="text-orange">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-sm bg-white p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] sm:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Jane Rivera"
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder="(787) 000-0000"
          />
        </Field>
      </div>

      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
          placeholder="jane@email.com"
        />
      </Field>

      <Field label="Project Type" htmlFor="projectType">
        <select id="projectType" name="projectType" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.title} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Project Details" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={cn(inputClass, "resize-none")}
          placeholder="Tell us about your property and project goals..."
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-orange-dark disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          "Request My Estimate"
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-xs font-medium uppercase tracking-wide text-charcoal/50">
        {label}
      </label>
      {children}
    </div>
  );
}
