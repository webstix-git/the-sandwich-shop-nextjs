"use client";

import Script from "next/script";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

type TurnstileApi = {
  ready?: (callback: () => void) => void;
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      theme?: "light" | "dark" | "auto";
      size?: "normal" | "flexible" | "compact";
      callback?: (token: string) => void;
      "error-callback"?: () => void;
      "expired-callback"?: () => void;
    },
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export type TurnstileWidgetHandle = {
  reset: () => void;
};

type TurnstileWidgetProps = {
  siteKey: string;
  onTokenChange: (token: string | null) => void;
};

export const TurnstileWidget = forwardRef<
  TurnstileWidgetHandle,
  TurnstileWidgetProps
>(function TurnstileWidget({ siteKey, onTokenChange }, ref) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenChangeRef = useRef(onTokenChange);
  onTokenChangeRef.current = onTokenChange;

  const mountWidget = useCallback(() => {
    if (!siteKey || !containerRef.current || !window.turnstile) return;
    if (widgetIdRef.current) return;

    containerRef.current.replaceChildren();

    try {
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme: "light",
        size: "flexible",
        callback: (token) => onTokenChangeRef.current(token),
        "error-callback": () => onTokenChangeRef.current(null),
        "expired-callback": () => onTokenChangeRef.current(null),
      });
    } catch (error) {
      console.error("[turnstile] render failed", error);
      widgetIdRef.current = null;
    }
  }, [siteKey]);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (!window.turnstile) return;
      try {
        window.turnstile.reset(widgetIdRef.current ?? undefined);
      } catch {
        // ignore
      }
      onTokenChangeRef.current(null);
    },
  }));

  useEffect(() => {
    let cancelled = false;

    const run = () => {
      if (cancelled) return;
      if (!window.turnstile) return;
      if (typeof window.turnstile.ready === "function") {
        window.turnstile.ready(() => {
          if (!cancelled) mountWidget();
        });
      } else {
        mountWidget();
      }
    };

    run();

    const interval = window.setInterval(() => {
      if (widgetIdRef.current) {
        window.clearInterval(interval);
        return;
      }
      run();
    }, 250);

    const timeout = window.setTimeout(() => window.clearInterval(interval), 15000);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
      window.clearTimeout(timeout);
      const id = widgetIdRef.current;
      widgetIdRef.current = null;
      if (id && window.turnstile) {
        try {
          window.turnstile.remove(id);
        } catch {
          // ignore
        }
      }
    };
  }, [mountWidget]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={mountWidget}
      />
      <div
        ref={containerRef}
        className="min-h-[65px] w-full overflow-hidden"
        aria-label="Captcha challenge"
      />
    </>
  );
});
