import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react";
import { ReactNode } from "react";

type Step = {
    icon: ReactNode;
    label: string;
    description: string;
}

const steps: Step[] = [
    {
        icon: <FileText size={64} strokeWidth={1.5} />,
        label: 'Select the subject',
        description: "Simply click on the subject you want to get questions for,"

    },
    {
        icon: <BrainCircuit size={64} strokeWidth={1.5} />,
        label: 'AI Generation',
        description: "Our advanced AI generates interview level questions about your subject,",

    },
    {
        icon: <FileOutput size={64} strokeWidth={1.5} />,
        label: "Get Questions",
        description: "Recover questions, and answer which are easy to understand."
    }

]

export default function HowItWorksSection() {
    return (
        <section className="relative overflow-hidden bg-gray-50"id="how-it-works">
            <div className="py-12 lg:py-24 mx-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="text-center mb-16">
                    <h2 className="font-bold text-xl uppercase mb-4 text-teal-500">How it works</h2>
                    <h3 className="font-bold text-3xl max-w-2xl mx-auto">Get interview-ready questions instantly in just three simple steps.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl relative">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex items-stretch">
                            <StepItem key={idx} {...step} />
                            {idx < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                    <MoveRight size={32} strokeWidth={1} className="text-teal-400"></MoveRight>
                                </div>)}
                        </div>
                    ))}
                </div>
            </div>


        </section >
    )
}

function StepItem({ icon, label, description }: Step) {
    return <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-teal-500/50 transition-colors group w-full">
        <div className="flex flex-col h-full gap-4">
            <div className="flex items-center justify-center h-24 w-24 mx-auto bg-linear-to-br from-teal-500/10 to-transparent group-hover:from-teal-500/20">
                <div className="text-teal-500">
                    {icon}
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-1 justify-between">
                <h4 className="text-center font-bold text-xl">{label}</h4>
                <p className="text-center text-gray-600 text-sm">{description}</p>
            </div>
        </div>

    </div>
}
