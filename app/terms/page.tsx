import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MainContainer } from "@/components/main-container"

export default function TermsPage() {
  return (
    <>
      <MainContainer>
        <Header />
        <div className="relative flex flex-col min-h-[80dvh]">
          {/* Header */}
          <div className="flex flex-col gap-4 p-8 pt-12 pb-10 items-center text-center opacity-0 animate-blur-fade-slide-in">
            <div className="opacity-90 hover:opacity-100 py-1 transition-colors bg-foreground/10 text-foreground px-2 h-5 rounded-md flex items-center gap-1 font-medium text-[11px]">
              Legal
            </div>
            <h1 className="text-2xl font-medium tracking-tight text-foreground">
              Terms of Service
            </h1>
            <p className="text-foreground/65 text-sm max-w-md leading-relaxed">
              Please read these terms carefully before using TexTab.
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col">
            {/* Acceptance of Terms */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "100ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                By downloading, installing, or using TexTab, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the app.
              </p>
            </div>

            {/* Description of Service */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "150ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                Description of Service
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                TexTab is an AI-powered keyboard shortcuts application for macOS that allows you to:
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  Create custom AI actions triggered by keyboard shortcuts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  Process selected text with AI providers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  Configure and use your own AI provider API keys
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  Sync actions across devices using iCloud
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  Access premium features with a Pro subscription
                </li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "200ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                User Responsibilities
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                You are responsible for:
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  Keeping your API keys secure and confidential
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  Complying with the terms of service of any AI provider you use
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  The content you process through the app
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  Any costs incurred from AI provider usage
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "250ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                Intellectual Property
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                TexTab and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            {/* Subscriptions */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "300ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                Subscriptions
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                TexTab offers optional subscriptions for premium features (&quot;TexTab Pro&quot;). Subscriptions are processed through our payment provider and are subject to the following terms:
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  All purchases are final and non-refundable, except as required by applicable law
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  Subscription prices may change with notice
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  You can manage or cancel subscriptions in your account settings
                </li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "350ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                Disclaimer
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                TexTab is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that:
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  The app will be error-free or uninterrupted
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  AI-generated content will be accurate or suitable for any purpose
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  The app is suitable for any particular purpose
                </li>
              </ul>
              <p className="text-sm text-foreground/70 leading-relaxed mt-4">
                You are solely responsible for reviewing and verifying any AI-generated content before use.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "400ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                Limitation of Liability
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of TexTab, including any damages arising from AI-generated content.
              </p>
            </div>

            {/* Changes to Terms */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "450ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                Changes to Terms
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of the app after changes constitutes acceptance of the new terms.
              </p>
            </div>

            {/* Contact */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "500ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                Contact
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                For questions about these Terms of Service, contact us at{" "}
                <a
                  href="mailto:support@textab.io"
                  className="text-foreground hover:underline"
                >
                  support@textab.io
                </a>
              </p>
            </div>
          </div>

          {/* Last updated */}
          <div
            className="p-8 text-sm text-foreground/50 leading-6 opacity-0 border-t border-tertiary animate-blur-fade-slide-in"
            style={{ animationDelay: "550ms" }}
          >
            Last updated: January 2026
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  )
}
