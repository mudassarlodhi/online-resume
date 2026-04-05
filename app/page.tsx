import { ResumeHeader } from "@/components/resume/header"
import { ResumeSidebar } from "@/components/resume/sidebar"
import { ResumeContent } from "@/components/resume/content"
import { ResumeFooter } from "@/components/resume/footer"
import { DownloadButton } from "@/components/resume/download-button"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-stone-100 print:bg-white">
      {/* Full-width Header */}
      <ResumeHeader />
      
      {/* Main Content - Full width with centered content */}
      <main className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <ResumeSidebar />
          <ResumeContent />
        </div>
      </main>
      
      {/* Full-width Footer */}
      <ResumeFooter />
      
      <DownloadButton />
    </div>
  )
}
