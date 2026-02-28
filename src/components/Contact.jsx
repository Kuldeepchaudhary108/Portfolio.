    import React from 'react'
    
    export default function Contact() {
      return (
          <>
             <section id="contact" class="py-24 px-4 max-w-5xl mx-auto">
        <div class="bg-white border-4 border-black shadow-hard-xl p-8 md:p-12 relative reveal mt-12">
            <div
                class="absolute -top-10 -left-6 bg-neo-yellow border-4 border-black px-6 py-2 shadow-hard rotate-[-5deg]">
                <span class="font-black text-2xl">START A PROJECT</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 class="text-6xl font-black uppercase mb-6 leading-[0.85]">Let's<br>Talk<br>Code.</h2>
                    <p class="font-mono text-lg mb-8 text-gray-600">
                        I am currently available for freelance work and open to full-time opportunities.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black">
                                <i class="ri-mail-line text-xl"></i>
                            </div>
                            <a href="mailto:topiwalaarham@gmail.com"
                                class="text-xl font-bold hover:bg-neo-blue cursor-hover">topiwalaarham@gmail.com</a>
                        </div>
                        <div class="flex items-center gap-4">
                            <div
                                class="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black">
                                <i class="ri-map-pin-line text-xl"></i>
                            </div>
                            <span class="text-xl font-bold">Remote / Earth</span>
                        </div>
                    </div>
                </div>

                <form id="contact-form" class="space-y-6 bg-gray-50 p-6 border-2 border-black"
                    onsubmit="event.preventDefault(); this.innerHTML='<div class=\'py-20 text-center\'><i class=\'ri-checkbox-circle-fill text-6xl text-neo-green mb-4 block\'></i><h3 class=\'text-2xl font-black uppercase\'>Transmission Received</h3><p class=\'font-mono text-sm mt-2\'>System response initialized. I will reach out shortly.</p></div>'">
                    <div class="flex flex-col">
                        <label class="font-mono font-bold mb-1 uppercase text-xs">Identity</label>
                        <input type="text" placeholder="NAME / COMPANY"
                            class="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all cursor-hover">
                    </div>
                    <div class="flex flex-col">
                        <label class="font-mono font-bold mb-1 uppercase text-xs">Coordinates</label>
                        <input type="email" placeholder="EMAIL ADDRESS"
                            class="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all cursor-hover">
                    </div>
                    <div class="flex flex-col">
                        <label class="font-mono font-bold mb-1 uppercase text-xs">Transmission</label>
                        <textarea rows="4" placeholder="PROJECT DETAILS..."
                            class="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all resize-none cursor-hover"></textarea>
                    </div>
                    <button type="submit"
                        class="w-full bg-neo-blue text-white font-black text-xl py-4 border-2 border-black shadow-hard neo-button hover:bg-neo-black hover:translate-y-1 hover:shadow-none transition-all cursor-hover">
                        TRANSMIT DATA
                    </button>
                </form>
            </div>
        </div>
    </section>
          </>

      )
    }
    