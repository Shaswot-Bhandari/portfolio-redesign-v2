"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Loader2 } from "lucide-react";
import TrueFocus from "./TrueFocus";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const abortRef = useRef<AbortController | null>(null);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("shaswotbhandari1@gmail.com");
      setCopied(true);
    } catch (err) {
      console.error("Clipboard write failed:", err);
    }
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    copyTimeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    abortRef.current?.abort();
    const formData = new FormData(e.currentTarget);
    
    try {
      abortRef.current = new AbortController();
      const res = await fetch("https://formsubmit.co/ajax/shaswotbhandari1@gmail.com", {
        method: "POST",
        body: formData,
        signal: abortRef.current.signal,
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") return;
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        
        <div className="font-mono text-[10px] text-muted tracking-wide-super uppercase mb-4">
          <span className="text-accent">06.</span> Let&apos;s Talk
        </div>

        <div className="mb-24 md:mb-32">
          <TrueFocus
            sentence="Let's Build Something."
            manualMode={false}
            blurAmount={4}
            borderColor="var(--accent-color)"
            glowColor="rgba(var(--accent-rgb, 107, 140, 174), 0.6)"
            animationDuration={0.8}
            pauseBetweenAnimations={1.5}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-16">
          
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <h2 className="font-display text-4xl md:text-6xl text-foreground leading-[1.1] tracking-tight-super mb-12">
              Have an idea?<br/>
              <span className="text-muted">Let&apos;s build it.</span>
            </h2>

            <div className="space-y-12">
              {/* Email Detail with Copy */}
              <div className="flex flex-col gap-2 min-h-[5rem]">
                <p className="font-mono text-[10px] uppercase tracking-wide-super text-muted font-light">
                  Email to copy
                </p>
                <div className="relative block">
                  <button
                    onClick={handleCopy}
                    aria-label="Copy email address"
                    className="font-mono text-lg md:text-xl text-foreground hover:text-accent transition-colors duration-300 text-left cursor-copy block pt-1"
                  >
                    shaswotbhandari1@gmail.com
                  </button>

                  {/* Copied Toast Overlay */}
                  <AnimatePresence>
                    {copied && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute top-full left-0 mt-3 md:top-1/2 md:left-auto md:-right-32 md:mt-0 md:-translate-y-1/2 flex items-center gap-2 bg-foreground text-background px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-wide-super pointer-events-none shadow-lg"
                      >
                        <Check size={12} strokeWidth={2} />
                        Copied
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Phone Detail */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wide-super text-muted mb-4">Phone</p>
                <p className="font-mono text-sm md:text-base text-foreground">+977 9861582254</p>
              </div>

              {/* Location Detail */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wide-super text-muted mb-4">Location</p>
                <p className="font-mono text-sm md:text-base text-foreground">Kathmandu, Nepal</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="h-full flex flex-col justify-center items-start border border-muted/20 p-12 bg-surface/30"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6">
                  <Check size={24} />
                </div>
                <h3 className="font-display text-3xl text-foreground mb-4">Message sent.</h3>
                <p className="font-mono text-sm text-muted">
                  Thank you for reaching out. I will get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 font-mono text-xs text-foreground hover:text-accent uppercase tracking-wide-super border-b border-foreground/30 hover:border-accent pb-1 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Prevent formsubmit captcha/pages if possible via hidden inputs */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="relative">
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    autoComplete="name"
                    className="w-full bg-transparent border-b border-muted/30 py-4 font-mono text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors peer rounded-none"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    autoComplete="email"
                    className="w-full bg-transparent border-b border-muted/30 py-4 font-mono text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors peer rounded-none"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Your Message"
                    className="w-full bg-transparent border-b border-muted/30 py-4 font-mono text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors peer resize-none hide-scrollbar rounded-none"
                  ></textarea>
                </div>

                {status === "error" && (
                  <p className="font-mono text-xs text-accent">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group flex items-center gap-4 w-fit mt-4 font-mono text-xs uppercase tracking-wide-super text-foreground hover:text-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="border-b border-foreground/30 group-hover:border-accent pb-1 transition-colors">
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </span>
                  {status === "loading" ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {/* Footer Area */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end font-mono text-[10px] uppercase tracking-wide-super text-muted border-t border-muted/20 pt-8 mt-24 md:mt-40">
          <div className="flex flex-col gap-4 mb-8 md:mb-0">
            <p className="text-foreground">Elsewhere</p>
            <div className="flex gap-8">
              <a href="https://github.com/ShaswotBh" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/shaswot-bhandari-508b73283" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://www.behance.net/shaswotbhandari" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                Behance
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-left md:text-right">
            <p className="text-foreground">Availability</p>
            <p>Open for Part-time Roles &amp; Freelance</p>
            <p className="text-muted/50 mt-4">&copy; {new Date().getFullYear()} Shaswot Bhandari</p>
          </div>
        </div>

      </div>
    </section>
  );
}
