"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={index} className="border-b border-white/10 last:border-0">
                    <button
                        onClick={() => toggle(index)}
                        className="flex justify-between items-center w-full text-left py-4 focus:outline-none group"
                    >
                        <p className="text-lg font-bold text-white group-hover:text-voltura-gold transition-colors pr-8">
                            {item.question}
                        </p>
                        <ChevronDown
                            className={cn(
                                "w-5 h-5 text-voltura-gold transition-transform duration-300 flex-shrink-0",
                                openIndex === index ? "rotate-180" : ""
                            )}
                        />
                    </button>
                    <div
                        className={cn(
                            "overflow-hidden transition-all duration-300 ease-in-out",
                            openIndex === index ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
                        )}
                    >
                        <p className="text-gray-400 leading-relaxed">
                            {item.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
