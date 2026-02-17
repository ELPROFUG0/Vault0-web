import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MainContainer } from "@/components/main-container"

export default function WhyPage() {
  return (
    <>
      <MainContainer>
        <Header />
        <div className="flex py-32 flex-col min-h-[60dvh] gap-8 max-w-xl mx-auto px-8">
          <div className="prose prose-sm text-foreground/65">
            <h2
              className="text-lg font-medium opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "0.05s" }}
            >
              The idea behind TexTab
            </h2>
            <p
              className="opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "0.1s" }}
            >
              I always wanted a tool that could help me work with text more
              efficiently. Whether it&apos;s fixing a typo, translating a phrase,
              or summarizing a long document, I found myself constantly
              switching between apps and losing focus.
            </p>
            <p
              className="opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "0.2s" }}
            >
              There are many AI tools available, but they all require you to
              leave what you&apos;re doing, open a new app or website, copy your
              text, get a result, and then paste it back. This constant
              context-switching breaks your flow.
            </p>
            <p
              className="opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "0.3s" }}
            >
              That&apos;s why I started building TexTab.
            </p>
            <p
              className="opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "0.4s" }}
            >
              TexTab is a native Mac app that works everywhere. With a simple
              keyboard shortcut, you can transform any selected text without
              leaving the app you&apos;re working in.
            </p>
            <p
              className="opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "0.5s" }}
            >
              Select text, press the shortcut, and choose what you want to do:
              fix grammar, translate, summarize, expand, change tone, or any
              custom action you need. The result appears instantly, ready to
              use.
            </p>
            <p
              className="opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "0.6s" }}
            >
              Our vision with TexTab is to bring AI assistance directly into
              your workflow, making it as natural as copy and paste. No more
              app switching, no more broken focus—just seamless text
              transformation at your fingertips.
            </p>
            <div
              className="pt-4 border-t border-tertiary mt-8 opacity-0 animate-blur-fade-slide-in"
              style={{ animationDelay: "0.7s" }}
            >
              <p className="font-medium text-foreground mb-0">The TexTab Team</p>
              <p className="text-xs mt-1 mb-0">Building tools for better workflows</p>
            </div>
          </div>
          <div
            className="w-full flex items-center justify-start opacity-0 animate-blur-fade-slide-in"
            style={{ animationDelay: "1s" }}
          >
            <img
              src="/FIRMA.svg"
              alt="Signature"
              className="w-[100px] opacity-70"
            />
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  )
}
