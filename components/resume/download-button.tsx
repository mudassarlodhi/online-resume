"use client"

import { Download } from "lucide-react"

const PDF_URL = "https://drive.google.com/file/d/1aRD4YUEPsF2zqsuPU-S24lCevYmOs9j5/view?usp=sharing"

export function DownloadButton() {
  return (
    <div className="fixed bottom-6 right-6 no-print">
      <a
        href={PDF_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-resume-dark text-white px-4 py-2.5 rounded-lg hover:bg-stone-800 transition-colors flex items-center gap-2 text-sm font-medium"
      >
        <Download className="w-4 h-4" />
        Download PDF
      </a>
    </div>
  )
}
