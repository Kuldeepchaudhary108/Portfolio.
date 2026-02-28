import React from "react";

export default function Footer() {
  return (
    <footer class="bg-black text-white py-16 px-4 border-t-8 border-neo-green font-mono relative overflow-hidden">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div class="col-span-1 md:col-span-2">
          <h2 class="text-4xl font-black mb-6">ARHAM.</h2>
          <p class="text-gray-400 max-w-sm">
            Designing for the future with the raw aesthetics of the past. No
            cookies, no trackers, just code.
          </p>
        </div>

        <div>
          <h3 class="font-bold text-neo-green mb-4 border-b border-gray-700 pb-2">
            SITEMAP
          </h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <a
                href="#"
                class="hover:text-white hover:underline decoration-neo-pink decoration-2 cursor-hover"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                class="hover:text-white hover:underline decoration-neo-pink decoration-2 cursor-hover"
              >
                Works
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="hover:text-white hover:underline decoration-neo-pink decoration-2 cursor-hover"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="hover:text-white hover:underline decoration-neo-pink decoration-2 cursor-hover"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-neo-green mb-4 border-b border-gray-700 pb-2">
            SOCIALS
          </h3>
          <div class="flex gap-4">
            <a
              href="https://leetcode.com/u/arham43-ops/"
              class="text-2xl hover:text-neo-blue transition-colors cursor-hover"
            >
              <i class="ri-code-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/ofc.not_arham"
              class="text-2xl hover:text-neo-pink transition-colors cursor-hover"
            >
              <i class="ri-instagram-fill"></i>
            </a>
            <a
              href="https://github.com/Arham43-ops"
              class="text-2xl hover:text-neo-yellow transition-colors cursor-hover"
            >
              <i class="ri-github-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/arham43-ops/"
              class="text-2xl hover:text-neo-purple transition-colors cursor-hover"
            >
              <i class="ri-linkedin-fill"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="text-center mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm">
        <p>© 2025 ARHAM.exe // SYSTEM_END</p>
      </div>

      <div class="absolute bottom-0 left-0 w-full text-[20vw] font-black text-white opacity-[0.03] leading-none select-none pointer-events-none text-center">
        BRUTAL
      </div>
    </footer>
  );
}
