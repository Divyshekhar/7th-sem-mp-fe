import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default async function CTASection() {
    // const destination = userId ? '/upload' : '/sign-in'
    return (
        <section className="bg-gray-50 py-12">
            <div className="py-12 lg:py-24 mx-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center">
                    <div className="space-y-2 mx-auto flex flex-col">
                        <h2 className="text-4xl mx-auto font-bold tracking-relaxed sm:text-4xl md:text-4xl ">Ready to Ace your Interview?</h2>
                        <p className="mx-auto max-w-[750px] text-gray-500 md:text-2xl/relaxed lg:text-2xl text-base/relaxed dark:text-gray-400 ">
                            Crack your next tech interview with AI-crafted questions.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-[20px]">
                        <div>
                            <Button variant={'link'} size="lg" className="transform hover:scale-105 hover:no-underline w-full min-[400px] :w-auto bg-linear-to-r from-teal-800 to-teal-500 hover:from-teal-500 hover:mask-r-to-slate-900 hover:text-white text-white transition duration-350 flex items-center justify-center">
                                <Link href={"/login"} className="flex items-center justify-center"><span className="px-2 ">Get Started</span> <ArrowRight className="ml-2 h-4 w-4 animate-pulse" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}