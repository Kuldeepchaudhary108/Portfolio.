"use client";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 border-b-4 border-black">

            <h1 className="text-[13vw] md:text-[10vw] leading-[0.8] font-black uppercase tracking-tighter mb-6">
                FULL STACK <br />
                <span className="text-white" style={ { WebkitTextStroke: "3px black" } }>
                    DEVELOPER
                </span>
            </h1>

            <p className="font-mono text-lg md:text-2xl max-w-2xl mx-auto mb-10 bg-neo-yellow border-2 border-black p-4 shadow-hard">
                I build digital products that refuse to be boring.
            </p>

            <div className="flex gap-6">
                <a
                    href="#projects"
                    className="bg-black text-white border-2 border-black px-10 py-5 text-xl font-bold shadow-hard hover:bg-neo-green hover:text-black"
                >
                    VIEW DATABASE
                </a>

                <a
                    href="/Resume/Arham Resume.pdf"
                    download
                    className="bg-white border-2 border-black px-10 py-5 text-xl font-bold shadow-hard"
                >
                    DOWNLOAD CV
                </a>
            </div>
        </section>
    );
}