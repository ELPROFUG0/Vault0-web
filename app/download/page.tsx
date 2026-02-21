"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AppleIcon } from "@/components/icons/apple-icon"
import {
  XIcon,
  DiscordIcon,
  GitHubIcon,
  ChevronRightIcon,
} from "@/components/icons/social-icons"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MainContainer } from "@/components/main-container"

export default function DownloadPage() {
  const handleDownload = (arch: "arm64" | "x64" | "universal") => {
    const downloadUrl = "https://github.com/Vault0App/Vault0/releases/download/v1.2/Vault0.dmg"
    window.open(downloadUrl, "_blank")
  }

  return (
    <>
      <MainContainer>
        <Header />
        <div className="relative flex flex-col min-h-[80dvh]">
          {/* Header */}
          <div className="flex flex-col gap-4 p-8 pt-12 pb-10 items-center text-center animate-blur-fade-slide-in">
            <div className="opacity-90 hover:opacity-100 py-1 transition-colors bg-[#FBBAC3] text-foreground/80 px-2 h-5 rounded-md flex items-center gap-1 font-medium text-[11px]">
              Indie Mac App
            </div>
            <h1 className="text-2xl font-medium tracking-tight text-foreground">
              Download Vault0
            </h1>
            <p className="text-foreground/65 text-sm max-w-md leading-relaxed">
              Vault0 is a bootstrapped, indie project. Try free to see if it fits
              your workflow, then grab a license to unlock full access and support
              development.
            </p>
          </div>

          {/* Download Section */}
          <div className="ring ring-tertiary grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-tertiary [animation-delay:100ms] animate-blur-fade-slide-in">
            {/* Left - Download Form */}
            <div className="p-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-medium flex items-center gap-2">
                  <AppleIcon className="size-5 text-foreground/60" />
                  Download for Mac
                </h2>
                <p className="text-sm text-foreground/60">
                  Version 1.2-beta.1 • macOS 14.0+
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  className="w-full rounded-lg"
                  onClick={() => handleDownload("arm64")}
                >
                  <AppleIcon className="size-4" />
                  Mac (Apple Silicon)
                </Button>

                <Button
                  variant="secondary"
                  className="w-full rounded-lg"
                  onClick={() => handleDownload("x64")}
                >
                  <AppleIcon className="size-4" />
                  Mac (Intel)
                </Button>

                <Button
                  variant="secondary"
                  className="w-full rounded-lg"
                  onClick={() => handleDownload("universal")}
                >
                  <AppleIcon className="size-4" />
                  Mac Universal
                </Button>
              </div>
            </div>

            {/* Right - Coming Soon */}
            <div className="p-8 flex flex-col gap-4">
              <div className="font-[380] opacity-90 hover:opacity-100 py-1 transition-colors bg-foreground/10 text-foreground px-2 h-5 text-xs rounded-full flex items-center gap-1 w-fit">
                Coming Soon
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-8 rounded-lg bg-foreground/5">
                    <svg className="size-4 text-foreground/50" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 12v-8.646l10-1.355v10.001h-10zm11 0h13v-12l-13 1.807v10.193zm-1 1h-10v8.646l10 1.355v-10.001zm1 0v10.193l13 1.807v-12h-13z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-foreground/70">Windows</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-8 rounded-lg bg-foreground/5">
                    <svg className="size-4 text-foreground/50" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06 0 .27-.055.524-.156.787-.103.26-.25.48-.39.662-.196.199-.455.4-.727.478-.275.075-.614.101-.758-.04-.096-.094-.154-.264-.166-.455-.012-.187.004-.399.043-.599.104-.453.245-.912.421-1.237.198-.328.456-.526.763-.622h.004zm-3.562.8c.234.099.394.227.496.467.119.27.158.669.171 1.057.013.421-.017.855-.055 1.266-.031.37-.085.741-.123 1.007-.089.04-.162.09-.244.134-.144-.278-.283-.522-.424-.801-.195-.396-.403-.85-.576-1.382-.133-.416-.279-1.084-.23-1.455.032-.297.099-.397.202-.468.102-.075.247-.086.487.004l.296.171zm9.452.232c.003 0 .007-.001.01 0 .08.002.157.035.227.095.277.24.502.676.533 1.137.028.459-.136.909-.486 1.148-.11.08-.235.118-.367.128-.038-.262-.078-.51-.131-.746-.111-.53-.263-1.023-.435-1.419-.085-.182-.177-.335-.265-.462.048-.108.121-.195.22-.249a.383.383 0 01.198-.051c.167.003.327.003.496-.002v.421z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-foreground/70">Linux</span>
                </div>
              </div>

              <p className="text-xs text-foreground/50 pt-2">
                We&apos;re working on bringing Vault0 to more platforms. Stay tuned!
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 gap-0 divide-x divide-tertiary">
            {/* GitHub Link */}
            <a
              href="https://github.com/Vault0App/Vault0"
              target="_blank"
              rel="noopener noreferrer"
              className="border-none border-t border-tertiary p-6 flex items-center gap-6 hover:bg-secondary/50 transition-colors [animation-delay:200ms] animate-blur-fade-slide-in"
            >
              <div className="flex items-center justify-center size-12 rounded-xl bg-background shadow-xs shrink-0">
                <GitHubIcon className="size-5 text-foreground/80" />
              </div>
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium text-foreground">
                    Contribute on GitHub
                  </span>
                  <div className="opacity-90 hover:opacity-100 py-1 transition-colors bg-foreground/10 text-foreground/80 px-2 h-5 rounded-full flex items-center gap-1 font-medium text-[11px]">
                    Open Source
                  </div>
                </div>
                <span className="text-sm text-foreground/60 max-w-[500px]">
                  Star the repo, report issues, or contribute code to help improve Vault0.
                </span>
              </div>
              <ChevronRightIcon className="size-4 text-foreground/40 shrink-0" />
            </a>

            {/* Twitter Link */}
            <a
              href="https://x.com/elmoidev"
              target="_blank"
              rel="noopener noreferrer"
              className="border-t border-tertiary p-6 flex items-center gap-6 hover:bg-secondary/50 transition-colors [animation-delay:200ms] animate-blur-fade-slide-in"
            >
              <div className="flex items-center justify-center size-12 rounded-xl bg-background shadow-xs shrink-0">
                <XIcon className="size-5 text-foreground/80" />
              </div>
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium text-foreground">Follow on X</span>
                  <div className="font-[380] opacity-90 hover:opacity-100 py-1 transition-colors bg-foreground/10 text-foreground px-2 h-5 text-xs rounded-full flex items-center gap-1">
                    @elmoidev
                  </div>
                </div>
                <span className="text-sm text-foreground/60 max-w-[500px]">
                  Stay updated with new features and development progress.
                </span>
              </div>
              <ChevronRightIcon className="size-4 text-foreground/40 shrink-0" />
            </a>

            {/* Discord Link */}
            <div
              className="border-t border-tertiary p-6 flex items-center gap-6 opacity-60 [animation-delay:300ms] animate-blur-fade-slide-in"
            >
              <div className="flex items-center justify-center size-12 rounded-xl bg-background shadow-xs shrink-0">
                <DiscordIcon className="size-5 text-indigo-700/80" />
              </div>
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium text-foreground">
                    Join the community
                  </span>
                  <div className="font-[380] opacity-90 py-1 bg-foreground/10 text-foreground px-2 h-5 text-xs rounded-full flex items-center gap-1">
                    Soon
                  </div>
                </div>
                <span className="text-sm text-foreground/60 max-w-[500px]">
                  Get help, share feedback, and connect with other Vault0 users.
                </span>
              </div>
            </div>
          </div>

          {/* Support Email */}
          <div className="p-8 text-sm text-foreground/70 leading-6 [animation-delay:400ms] border-t border-tertiary animate-blur-fade-slide-in">
            Questions or issues? Email{" "}
            <a
              className="text-accent hover:underline"
              href="mailto:support@vault0.app"
            >
              support@vault0.app
            </a>
            . We read every email.
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  )
}
