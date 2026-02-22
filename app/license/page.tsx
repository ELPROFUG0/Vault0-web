"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MainContainer } from "@/components/main-container"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

const faqs = [
  {
    question: "What is Vault0?",
    answer: "Vault0 is a macOS app that lets you capture and organize everything worth remembering. Screenshots, links, notes, and more - all in one beautiful place.",
  },
  {
    question: "How do I use Vault0?",
    answer: "Use the global shortcut to quickly capture anything. Screenshots are saved automatically, links are captured with metadata, and notes can be created instantly. Everything syncs via iCloud.",
  },
  {
    question: "What platforms does Vault0 support?",
    answer: "Vault0 is currently available for macOS. An iPhone app is coming soon to sync your captures across devices.",
  },
  {
    question: "Is Vault0 free to use?",
    answer: "Vault0 offers an early supporter license for a one-time payment. This includes unlimited captures and 2 years of updates after stable release.",
  },
  {
    question: "Where is my data stored?",
    answer: "All your data is stored locally on your Mac and synced via iCloud. We never see or store your content on our servers.",
  },
  {
    question: "Is my data private and secure?",
    answer: "Yes, we take privacy seriously. Your captures are stored locally and synced via iCloud - we never have access to your data. See our privacy policy for more details.",
  },
  {
    question: "Can I customize the keyboard shortcuts?",
    answer: "Yes! You can change the default keyboard shortcuts to any combination you prefer in the app settings.",
  },
]

export default function ExamplesPage() {
  return (
    <>
      <MainContainer>
        <Header />
        <div className="relative flex flex-col">
          {/* Hero Image */}
          <div className="flex relative w-full ring-1 ring-tertiary opacity-0 [animation-delay:300ms] animate-fade-in overflow-hidden">
            <Image
              src="/capture-hero.png"
              alt="Vault0 App Preview"
              width={4000}
              height={2250}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Pricing Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 ring ring-foreground/10">
            <div className="ring-[0.5px] w-full ring-foreground/10 p-8">
              <h2 className="text-lg font-medium flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-amber-600/70" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                Early Supporter License
              </h2>
              <div className="my-6 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="font-[380] opacity-90 hover:opacity-100 py-1 transition-colors bg-foreground/10 text-foreground px-2 h-5 text-xs has-[.close-icon]:pr-1 rounded-full flex items-center gap-1">
                    Save 20% (early supporter)
                  </div>
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="text-3xl font-medium tracking-tight">$39</div>
                  <div className="text-xl text-foreground/70">one-time</div>
                  <div className="text-xl text-foreground/50 line-through">$49</div>
                </div>
              </div>
              <a href="https://sandbox-api.polar.sh/v1/checkout-links/polar_cl_MdCkWR7SJGbO7FEEK74SmwlN31U1V6DYii3ih3AFr8h/redirect" className="block" data-polar-checkout data-polar-checkout-theme="light">
                <button data-slot="button" className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap font-medium transition-[transform] disabled:pointer-events-none disabled:opacity-20 outline-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-xl px-4 text-sm w-full group/button">
                  Get Early Supporter License
                </button>
              </a>
              <div className="flex items-center gap-2 text-sm text-foreground/60 mt-4">
                <span className="flex items-center gap-2">
                  Secure checkout via
                  <a href="https://polar.sh" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-3.5" aria-hidden="true">
                      <g clipPath="url(#clip0_1_4)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M66.4284 274.26C134.876 320.593 227.925 302.666 274.258 234.219C320.593 165.771 302.666 72.7222 234.218 26.3885C165.77 -19.9451 72.721 -2.0181 26.3873 66.4297C-19.9465 134.877 -2.01938 227.927 66.4284 274.26ZM47.9555 116.67C30.8375 169.263 36.5445 221.893 59.2454 256.373C18.0412 217.361 7.27564 150.307 36.9437 92.318C55.9152 55.2362 87.5665 29.3937 122.5 18.3483C90.5911 36.7105 62.5549 71.8144 47.9555 116.67ZM175.347 283.137C211.377 272.606 244.211 246.385 263.685 208.322C293.101 150.825 282.768 84.4172 242.427 45.2673C264.22 79.7626 269.473 131.542 252.631 183.287C237.615 229.421 208.385 265.239 175.347 283.137ZM183.627 266.229C207.945 245.418 228.016 210.604 236.936 168.79C251.033 102.693 232.551 41.1978 195.112 20.6768C214.97 47.3945 225.022 99.2902 218.824 157.333C214.085 201.724 200.814 240.593 183.627 266.229ZM63.7178 131.844C49.5155 198.43 68.377 260.345 106.374 280.405C85.9962 254.009 75.5969 201.514 81.8758 142.711C86.5375 99.0536 99.4504 60.737 116.225 35.0969C92.2678 55.983 72.5384 90.4892 63.7178 131.844ZM199.834 149.561C200.908 217.473 179.59 272.878 152.222 273.309C124.853 273.742 101.797 219.039 100.724 151.127C99.6511 83.2138 120.968 27.8094 148.337 27.377C175.705 26.9446 198.762 81.648 199.834 149.561Z" fill="currentColor"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_4">
                          <rect width="300" height="300" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    Polar
                  </a>
                </span>
              </div>
            </div>
            <div className="ring-[0.5px] w-full ring-foreground/10 p-8">
              <p className="mb-8 text-sm text-left text-foreground/70">
                One-time purchase at the early supporter price. Unlimited captures and 2 years of updates after stable release.
              </p>
              <div className="flex items-start gap-4">
                <div className="mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-foreground/60" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.53 7.15214C16.9983 7.44485 17.1407 8.0618 16.848 8.53013L11.848 16.5301C11.6865 16.7886 11.4159 16.9592 11.1132 16.9937C10.8104 17.0282 10.5084 16.9227 10.2929 16.7072L7.29289 13.7072C6.90237 13.3167 6.90237 12.6836 7.29289 12.293C7.68342 11.9025 8.31658 11.9025 8.70711 12.293L10.8182 14.4042L15.152 7.47013C15.4447 7.0018 16.0617 6.85943 16.53 7.15214Z" fill="currentColor"></path>
                  </svg>
                </div>
                <p className="text-sm text-foreground/70 leading-6">Unlimited captures</p>
              </div>
              <div className="flex items-start gap-4 mt-3">
                <div className="mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-foreground/60" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.53 7.15214C16.9983 7.44485 17.1407 8.0618 16.848 8.53013L11.848 16.5301C11.6865 16.7886 11.4159 16.9592 11.1132 16.9937C10.8104 17.0282 10.5084 16.9227 10.2929 16.7072L7.29289 13.7072C6.90237 13.3167 6.90237 12.6836 7.29289 12.293C7.68342 11.9025 8.31658 11.9025 8.70711 12.293L10.8182 14.4042L15.152 7.47013C15.4447 7.0018 16.0617 6.85943 16.53 7.15214Z" fill="currentColor"></path>
                  </svg>
                </div>
                <p className="text-sm text-foreground/70 leading-6">Mac app license (up to 2 Macs)</p>
              </div>
              <div className="flex items-start gap-4 mt-3">
                <div className="mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-foreground/60" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.53 7.15214C16.9983 7.44485 17.1407 8.0618 16.848 8.53013L11.848 16.5301C11.6865 16.7886 11.4159 16.9592 11.1132 16.9937C10.8104 17.0282 10.5084 16.9227 10.2929 16.7072L7.29289 13.7072C6.90237 13.3167 6.90237 12.6836 7.29289 12.293C7.68342 11.9025 8.31658 11.9025 8.70711 12.293L10.8182 14.4042L15.152 7.47013C15.4447 7.0018 16.0617 6.85943 16.53 7.15214Z" fill="currentColor"></path>
                  </svg>
                </div>
                <p className="text-sm text-foreground/70 leading-6">2 years of updates after stable release</p>
              </div>
              <div className="flex items-start gap-4 mt-3">
                <div className="mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-foreground/60" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.53 7.15214C16.9983 7.44485 17.1407 8.0618 16.848 8.53013L11.848 16.5301C11.6865 16.7886 11.4159 16.9592 11.1132 16.9937C10.8104 17.0282 10.5084 16.9227 10.2929 16.7072L7.29289 13.7072C6.90237 13.3167 6.90237 12.6836 7.29289 12.293C7.68342 11.9025 8.31658 11.9025 8.70711 12.293L10.8182 14.4042L15.152 7.47013C15.4447 7.0018 16.0617 6.85943 16.53 7.15214Z" fill="currentColor"></path>
                  </svg>
                </div>
                <p className="text-sm text-foreground/70 leading-6">Priority email support</p>
              </div>
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
