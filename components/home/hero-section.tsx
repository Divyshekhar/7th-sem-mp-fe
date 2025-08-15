import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default async function Home() {

    return (
        <section className="relative mx-auto flex flex-col justify-center items-center z-0 py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">

            <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-teal-200 via-teal-500 to-teal-800 animate-gradient-x">
                <Badge variant={"secondary"}
                    className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-blue-50 transition-colors duration-200 hover:bg-teal-200">
                    <Sparkles style={{ height: '25px', width: '25px' }} className="mr-2 text-teal-600 animate-pulse" />
                    <p className="text-base text-teal-600">Powered by AI</p>
                </Badge>
            </div>
            <h1 className="font-bold py-6 text-center text-7xl">
                Get interview level {' '}
                <span className="relative inline-block">
                    <span className="relative z-10 px-2">questions</span>
                    <span className=" absolute inset-0 bg-teal-200/50 rounded-lg transform -skew-y-0 transition-transform duration-2 animate-spin-once " aria-hidden="true"></span>
                </span> {'  '}
                instantly
            </h1>
            <h2 className="text-center text-lg sm:text-xl lg:text-3xl px-4 lg:px-0 lg:max-w-4xl text-gray-600">Get a beautiful summary reel of the document in seconds.</h2>
            {/* <Link href={destination} className="cursor-default"> */}
                <Button variant={'link'} className="transform hover:scale-105 transition hover:no-underline flex gap-2 text-base items-center bg-teal-500 hover:bg-blue-600 text-white mt-6 sm:text-lg lg:text-xl rounded-full px-12 sm:px-14 py-7 lg:px-16 sm:py-7 lg:py-8 lg:mt-16  duration-320 ease-in-out ">
                    <Link href={"/login"} className="flex items-center">
                        <span className="pl-2">Try Questify</span>
                        <ArrowRight className="animate-pulse ml-3 pt-0.5"/>
                    </Link>
                </Button>
            {/* </Link> */}
        </section>
    )
}