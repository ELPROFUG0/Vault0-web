import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MainContainer } from "@/components/main-container"

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-foreground/65 text-sm max-w-md leading-relaxed">
              At Vault0, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information.
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col">
            {/* Information We Collect */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "100ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                Vault0 is designed with privacy in mind. We collect minimal data:
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  <span><strong className="text-foreground/90">Action Data:</strong> Your custom AI actions, prompts, and keyboard shortcuts are stored locally on your device.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  <span><strong className="text-foreground/90">API Keys:</strong> If you use your own AI provider API keys, they are stored securely on your device and never transmitted to our servers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  <span><strong className="text-foreground/90">Usage Analytics:</strong> We may collect anonymous usage statistics to improve the app experience. This data cannot be used to identify you personally.</span>
                </li>
              </ul>
            </div>

            {/* Data Storage */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "150ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                Data Storage
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                Your data is stored:
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  Locally on your Mac using secure storage mechanisms
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  In your personal iCloud account if you enable iCloud sync (optional)
                </li>
              </ul>
              <p className="text-sm text-foreground/70 leading-relaxed mt-4">
                We do not have access to your prompts or API keys. Your information never leaves your device except when sent to your chosen AI provider.
              </p>
            </div>

            {/* Third-Party Services */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "200ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                Third-Party Services
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                Vault0 may interact with the following third-party services:
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  <span><strong className="text-foreground/90">AI Providers:</strong> When you trigger an action, your prompt and selected text are sent to your chosen AI provider (OpenAI, Anthropic, etc.) according to their privacy policies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  <span><strong className="text-foreground/90">Apple iCloud:</strong> For optional data backup and sync across your devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  <span><strong className="text-foreground/90">Supabase:</strong> For optional account authentication and subscription management</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "250ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                Data Security
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                We implement appropriate security measures to protect your data:
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  All data is stored using macOS secure storage mechanisms (Keychain for sensitive data)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  iCloud data is encrypted by Apple
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  API keys are stored securely and never logged or transmitted to our servers
                </li>
              </ul>
            </div>

            {/* Your Rights */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "300ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                Your Rights
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  Export your actions at any time
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  Delete all your data by uninstalling the app
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  Disable iCloud sync at any time
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/40">•</span>
                  Delete your account and associated data
                </li>
              </ul>
            </div>

            {/* Changes to This Policy */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "350ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                Changes to This Policy
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            {/* Contact */}
            <div
              className="p-8 border-t border-tertiary opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "400ms" }}
            >
              <h2 className="text-base font-medium text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a
                  href="mailto:support@vault0.app"
                  className="text-foreground hover:underline"
                >
                  support@vault0.app
                </a>
              </p>
            </div>
          </div>

          {/* Last updated */}
          <div
            className="p-8 text-sm text-foreground/50 leading-6 opacity-0 border-t border-tertiary animate-blur-fade-slide-in"
            style={{ animationDelay: "450ms" }}
          >
            Last updated: January 2026
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  )
}
