"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { Charity } from "@/data/charities";

type Props = {
  charity: Charity;
  reference: string;
  general: string[];
  email: string;
};

export default function DonateButton({ charity, reference, general, email }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [read, setRead] = useState(false);
  const [copied, setCopied] = useState(false);
  const titleId = useId();
  const checkId = useId();

  const open = () => {
    setRead(false);
    setCopied(false);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(reference);
      setCopied(true);
    } catch {
      // Clipboard blocked: the reference text is still selectable by hand.
    }
  };

  const notes = [...(charity.instructions ?? []), ...general];

  return (
    <>
      <button
        type="button"
        className="btn btn--gold !py-1.5 !text-[0.8rem]"
        aria-haspopup="dialog"
        onClick={open}
      >
        Donate
      </button>

      <dialog
        ref={dialogRef}
        className="donate-dialog"
        aria-labelledby={titleId}
        data-lenis-prevent=""
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="donate-dialog__inner">
          <button type="button" className="donate-dialog__close" aria-label="Close" onClick={close}>
            ×
          </button>

          <div className="flex items-center gap-4 pr-10">
            <div className="relative w-16 h-12 shrink-0">
              <Image src={charity.logo} alt="" fill sizes="64px" style={{ objectFit: "contain" }} />
            </div>
            <div>
              <p className="eyebrow">{charity.donateUrl ? "Before you donate" : "Want to donate?"}</p>
              <h2 id={titleId} className="donate-dialog__title">
                {charity.name}
              </h2>
            </div>
          </div>

          {charity.donateUrl ? (
            <>
              <p>
                Please read these notes first. They make sure your donation is counted
                for Team Winnie (UWinnipeg JDC West).
              </p>

              <div className="donate-ref">
                <p className="text-sm font-semibold">
                  Type this in the comments, additional info, or message box when you donate:
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <code className="donate-ref__code">{reference}</code>
                  <button type="button" className="donate-ref__copy" onClick={copy}>
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {notes.length > 0 && (
                <div>
                  <h3 className="font-extrabold uppercase tracking-wide text-sm">Notes</h3>
                  <ol className="donate-steps mt-2">
                    {notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ol>
                </div>
              )}

              <label htmlFor={checkId} className="donate-check">
                <input
                  id={checkId}
                  type="checkbox"
                  checked={read}
                  onChange={(e) => setRead(e.target.checked)}
                />
                <span>I&rsquo;ve read the notes above</span>
              </label>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {read ? (
                  <a
                    className="btn btn--gold"
                    href={charity.donateUrl}
                    target="_blank"
                    rel="noopener"
                    onClick={close}
                  >
                    Go to donation page ↗
                  </a>
                ) : (
                  <button type="button" className="btn btn--gold" disabled>
                    Go to donation page
                  </button>
                )}
                {read && charity.altUrl && (
                  <a className="donate-alt" href={charity.altUrl} target="_blank" rel="noopener">
                    {charity.altLabel || "Other ways to give"} ↗
                  </a>
                )}
              </div>
              {!read && <p className="text-sm opacity-70 -mt-2">Tick the box to continue.</p>}
            </>
          ) : (
            <>
              <p>
                We don&rsquo;t have a direct donation link for {charity.name}. Email the
                Team Winnie (UWinnipeg JDC West) team at{" "}
                <a className="underline font-semibold" href={`mailto:${email}`}>
                  {email}
                </a>{" "}
                and we&rsquo;ll get back to you.
              </p>
              <div>
                <a
                  className="btn btn--gold"
                  href={`mailto:${email}?subject=${encodeURIComponent(`Donating to ${charity.name}`)}`}
                >
                  Email the team
                </a>
              </div>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
