"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export function ResumeHeader() {
  return (
    <header className="w-full bg-resume-dark text-white">
      <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 py-10 md:py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left: Photo + Name + Title */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 animate-fade-in-left">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1774996333062.jfif-VVZ6oLobvqVjpqc51AGFJennIAvb9K.jpeg"
                alt="Mudassar Lodhi"
                width={160}
                height={160}
                className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/15"
                priority
              />
            </div>

            {/* Name & Title */}
            <div className="text-center sm:text-left">
              {/* Name with orange accent box */}
              <div className="inline-block">
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white bg-orange-500 px-4 py-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Mudassar Lodhi
                </h1>
              </div>
              <p
                className="text-lg md:text-xl text-stone-100 mt-4 font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Senior Full-Stack Engineer
              </p>
              <p className="text-sm text-stone-300 mt-2 font-medium tracking-wide">
                8+ Years | React, Angular, Next.js, Node.js
              </p>
            </div>
          </div>

          {/* Right: Contact Info - Stacked, Left Aligned */}
          <div className="flex flex-col items-start gap-3 text-sm animate-fade-in-right">
            <a
              href="tel:+923065004337"
              className="flex items-center gap-3 text-stone-200 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>+92 306 500 4337</span>
            </a>
            <a
              href="mailto:mudasserlodhi@yahoo.com"
              className="flex items-center gap-3 text-stone-200 hover:text-white transition-colors font-medium"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>mudasserlodhi@yahoo.com</span>
            </a>
            <a
              href="https://github.com/mudassarlodhi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-stone-200 hover:text-white transition-colors font-medium"
            >
              <svg
                xmlns="http://w3.org"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/mudassarlodhi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-stone-200 hover:text-white transition-colors font-medium"
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <span className="flex items-center gap-3 text-stone-200 font-medium">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Islamabad, Pakistan</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
