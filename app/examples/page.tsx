"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon,
} from "@/components/icons/social-icons"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MainContainer } from "@/components/main-container"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is TexTab?",
    answer: "TexTab is a macOS app that lets you transform any selected text using AI. Simply select text anywhere on your Mac, press a keyboard shortcut, and get instant results like grammar fixes, translations, summaries, and more.",
  },
  {
    question: "How do I use TexTab?",
    answer: "Select any text in any app, press ⌘ + Shift + T (or your custom shortcut), choose an action from the popup menu, and the transformed text will be ready to use. It's that simple!",
  },
  {
    question: "What platforms does TexTab support?",
    answer: "TexTab is currently available for macOS. An iPhone app is coming soon, and we're exploring Windows and other platforms for the future.",
  },
  {
    question: "Is TexTab free to use?",
    answer: "TexTab offers a free trial so you can experience its features. After the trial, you can purchase a license to continue using all features without limitations.",
  },
  {
    question: "Does TexTab work offline?",
    answer: "TexTab requires an internet connection to process text transformations since it uses AI models in the cloud. However, the app itself runs locally on your Mac.",
  },
  {
    question: "Is my data private and secure?",
    answer: "Yes, we take privacy seriously. Your text is only sent to our servers when you explicitly trigger an action, and we don't store your content after processing. See our privacy policy for more details.",
  },
  {
    question: "Can I customize the keyboard shortcut?",
    answer: "Yes! You can change the default keyboard shortcut (⌘ + Shift + T) to any combination you prefer in the app settings.",
  },
]

const demos = [
  {
    id: "demo-grammar-main",
    title: "Fix Grammar",
    description: "Instantly fix spelling and grammar errors",
    details: "Select any text with typos or grammar issues, trigger TexTab, and get instant corrections. Perfect for emails, documents, and social posts.",
    features: [
      "Fixes spelling mistakes automatically",
      "Corrects grammar and punctuation",
      "Maintains your original tone and style",
      "Works in any text field",
    ],
  },
  {
    id: "demo-tweet-main",
    title: "Write Tweets",
    description: "Generate engaging tweets from any text",
    details: "Transform your ideas into Twitter-ready content. Select your draft text, and TexTab will craft an engaging tweet with the right length and tone.",
    features: [
      "Optimizes for Twitter's character limit",
      "Adds relevant hashtags and mentions",
      "Creates engaging hooks",
      "Multiple tone options available",
    ],
  },
  {
    id: "demo-gmail-main",
    title: "Email Replies",
    description: "Draft professional email responses",
    details: "Reply to emails in seconds. Select the email you received, trigger TexTab, and get a professionally crafted response ready to send.",
    features: [
      "Matches the sender's formality level",
      "Addresses all points in the original email",
      "Professional and courteous tone",
      "Customizable response length",
    ],
  },
  {
    id: "demo-code-main",
    title: "Code Helper",
    description: "Debug, explain, or refactor code",
    details: "Get instant help with any code snippet. Select code in your IDE, trigger TexTab, and get explanations, bug fixes, or refactored versions in seconds.",
    features: [
      "Explains complex code in plain English",
      "Suggests optimizations and fixes",
      "Supports multiple programming languages",
      "Generates documentation automatically",
    ],
  },
  {
    id: "demo-notion-main",
    title: "Summarize Notes",
    description: "Condense long text into key points",
    details: "Turn lengthy documents, articles, or notes into concise summaries. Select any text and let TexTab extract the most important information instantly.",
    features: [
      "Summarizes long documents in seconds",
      "Extracts key points and takeaways",
      "Adjustable summary length",
      "Works with any text source",
    ],
  },
]

export default function ExamplesPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollWidth = container.scrollWidth / demos.length
      container.scrollTo({ left: scrollWidth * index, behavior: "smooth" })
    }
  }

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : demos.length - 1
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex < demos.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollTimeout: NodeJS.Timeout | null = null

    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
      scrollTimeout = setTimeout(() => {
        if (container) {
          const scrollWidth = container.scrollWidth / demos.length
          const newIndex = Math.round(container.scrollLeft / scrollWidth)
          setCurrentIndex(prev => prev !== newIndex ? newIndex : prev)
        }
      }, 50)
    }

    container.addEventListener("scroll", handleScroll)
    return () => {
      container.removeEventListener("scroll", handleScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [])

  // Load demo scripts dynamically
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any

    // Load CSS first (check if already loaded)
    let cssLink = document.querySelector('link[href="/demos.css"]') as HTMLLinkElement | null
    if (!cssLink) {
      cssLink = document.createElement("link")
      cssLink.rel = "stylesheet"
      cssLink.href = "/demos.css"
      document.head.appendChild(cssLink)
    }

    // Load demo scripts sequentially and initialize (check if already loaded)
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        // Check if script already exists
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve()
          return
        }
        const script = document.createElement("script")
        script.src = src
        script.onload = () => resolve()
        document.body.appendChild(script)
      })
    }

    const initDemos = async () => {
      // Load all scripts first (only if not already loaded)
      await loadScript("/demo-grammar.js")
      await loadScript("/demo-tweet.js")
      await loadScript("/demo-gmail.js")
      await loadScript("/demo-code.js")
      await loadScript("/demo-notion.js")

      // Now manually initialize each demo since DOMContentLoaded already fired
      const grammarContainer = document.getElementById("demo-grammar-main")
      if (grammarContainer && w.GrammarDemo && !grammarContainer.dataset.initialized) {
        new w.GrammarDemo(grammarContainer)
        grammarContainer.dataset.initialized = "true"
      }

      const tweetContainer = document.getElementById("demo-tweet-main")
      if (tweetContainer && w.TweetDemo && !tweetContainer.dataset.initialized) {
        new w.TweetDemo(tweetContainer)
        tweetContainer.dataset.initialized = "true"
      }

      const gmailContainer = document.getElementById("demo-gmail-main")
      if (gmailContainer && w.GmailDemo && !gmailContainer.dataset.initialized) {
        new w.GmailDemo(gmailContainer)
        gmailContainer.dataset.initialized = "true"
      }

      const codeContainer = document.getElementById("demo-code-main")
      if (codeContainer && w.CodeDemo && !codeContainer.dataset.initialized) {
        new w.CodeDemo(codeContainer)
        codeContainer.dataset.initialized = "true"
      }

      const notionContainer = document.getElementById("demo-notion-main")
      if (notionContainer && w.NotionDemo && !notionContainer.dataset.initialized) {
        new w.NotionDemo(notionContainer)
        notionContainer.dataset.initialized = "true"
      }
    }

    initDemos()
  }, [])

  return (
    <>
      <MainContainer>
        <Header />
        <div className="relative flex flex-col">
          {/* Demo Carousel */}
          <div className="flex relative w-full ring-1 ring-tertiary opacity-0 [animation-delay:300ms] animate-fade-in">
            <div className="relative z-40 w-full group">
              <div className="relative">
                {/* Scrollable Container */}
                <div
                  ref={scrollContainerRef}
                  className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                  {demos.map((demo) => (
                    <div
                      key={demo.id}
                      className="snap-center shrink-0 w-full px-0"
                    >
                      <div
                        className="w-full h-[340px] xs:h-[380px] sm:h-[420px] md:h-[480px] lg:h-[540px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
                        style={{ backgroundImage: 'url(/MacOS,Ventura.jpg)' }}
                      >
                        <div
                          id={demo.id}
                          className="w-full max-w-[600px] relative z-10 demo-container-wrapper"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Previous Button */}
                <div className="absolute inset-y-0 left-2 sm:left-4 flex items-center z-20 opacity-100 md:opacity-0 pointer-events-auto md:pointer-events-none transition-opacity duration-150 md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:group-focus-within:opacity-100 md:group-focus-within:pointer-events-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="size-8 p-0 rounded-full bg-foreground/50 hover:bg-foreground/60 text-white backdrop-blur-xl"
                    onClick={handlePrev}
                    aria-label="Previous demo"
                  >
                    <ChevronLeftIcon className="size-4" />
                  </Button>
                </div>

                {/* Next Button */}
                <div className="absolute inset-y-0 right-2 sm:right-4 flex items-center z-20 opacity-100 md:opacity-0 pointer-events-auto md:pointer-events-none transition-opacity duration-150 md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:group-focus-within:opacity-100 md:group-focus-within:pointer-events-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="size-8 p-0 rounded-full bg-foreground/50 hover:bg-foreground/60 text-white backdrop-blur-xl"
                    onClick={handleNext}
                    aria-label="Next demo"
                  >
                    <ChevronRightIcon className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="relative bg-secondary/70 flex items-center justify-center px-8 py-6 text-sm text-foreground/60 text-center">
            <div className="flex flex-1 items-center justify-center gap-1.5">
              {demos.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to demo ${index + 1}`}
                  className={`size-1 rounded-[1px] transition-colors ${
                    index === currentIndex
                      ? "bg-foreground/80"
                      : "bg-foreground/30"
                  }`}
                  onClick={() => {
                    setCurrentIndex(index)
                    scrollToIndex(index)
                  }}
                />
              ))}
            </div>
          </div>

          {/* Dynamic Demo Info Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 ring ring-tertiary">
            <div className="ring-[0.5px] w-full ring-tertiary p-8">
              <h2 className="text-lg font-medium">
                {demos[currentIndex]?.title}
              </h2>
              <p className="mt-2 text-sm text-foreground/50">
                {demos[currentIndex]?.description}
              </p>
              <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
                {demos[currentIndex]?.details}
              </p>
            </div>
            <div className="ring-[0.5px] w-full ring-tertiary p-8">
              {demos[currentIndex]?.features.map((feature, idx) => (
                <div key={idx} className={`flex items-start gap-4 ${idx > 0 ? "mt-3" : ""}`}>
                  <div className="mt-0.5">
                    <CheckIcon className="size-5 text-foreground/60" />
                  </div>
                  <p className="text-sm text-foreground/70 leading-6">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="ring ring-tertiary opacity-0 animate-blur-fade-slide-in [animation-delay:400ms]">
            <div className="flex flex-col gap-0">
              <h3 className="text-lg font-medium text-foreground px-8 p-8">
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="last:border-b-0">
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  )
}
