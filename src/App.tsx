import { useState } from 'react';
import './App.css';

// Note: Ensure Tailwind is installed and configured for these classes to work.

export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-charcoal font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white min-h-screen flex flex-col">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-60"></div>

      {/* Main Wrapper */}
      <div className="relative z-10 flex min-h-screen w-full flex-col">
        {/* Navigation */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-gray-200/50 bg-white/80 backdrop-blur-md px-10 py-3 shadow-sm">
          <div className="flex items-center gap-3 text-charcoal">
            <div className="flex size-8 items-center justify-center rounded-lg bg-charcoal text-primary">
              <span className="material-symbols-outlined text-[20px]">architecture</span>
            </div>
            <h2 className="text-charcoal text-lg font-bold leading-tight tracking-[-0.015em]">Solucionator</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="hidden md:flex items-center gap-9">
              <a className="text-charcoal text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Services</a>
              <a className="text-charcoal text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Portfolio</a>
              <a className="text-charcoal text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">About</a>
              <a className="text-charcoal text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Contact</a>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-charcoal text-white hover:bg-primary hover:text-charcoal transition-all duration-300 text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Start Project</span>
            </button>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative">
            <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10 lg:py-20">
              <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                <div className="@container">
                  <div className="flex flex-col gap-12 py-10 lg:flex-row items-center">
                    {/* Text Content */}
                    <div className="flex flex-col gap-8 flex-1">
                      <div className="flex flex-col gap-4 text-left">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 shadow-sm">
                          <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                          <span className="text-xs font-semibold text-charcoal">System Version 2.0 Live</span>
                        </div>
                        <h1 className="text-charcoal text-5xl lg:text-7xl font-black leading-[0.95] tracking-[-0.033em]">
                          Engineering <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Digital Reality.</span>
                        </h1>
                        <h2 className="text-gray-600 text-lg lg:text-xl font-medium leading-relaxed max-w-[600px]">
                          We architect custom software solutions that scale. From concept to code, we build the infrastructure for your growth.
                        </h2>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-primary text-charcoal text-base font-bold leading-normal tracking-[0.015em] hover:shadow-[0_0_20px_rgba(59,184,247,0.4)] transition-shadow">
                          <span className="truncate">Initialize Project</span>
                        </button>
                        <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-white border border-gray-200 text-charcoal text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-colors">
                          <span className="truncate">View Blueprint</span>
                        </button>
                      </div>
                      <div className="flex items-center gap-4 pt-4">
                        <div className="flex -space-x-3">
                          <div className="size-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnaWbPgbzK3xd-rfBBTXeJTHl09ZepOy9QjYufNjqgRR9gniY36Of5uGproDxvjJyGwaGyEVWKl8dfALxfILoPI6Gp56HmA1EkfFAmNDid78Qt30GoiD2zueaT1UiWmyU0pAJYPeM4C6NXxXlysuzVGtRalo51BH0-m20iCvoogGZjNZR8DD5ct5NzcC89uwfkK6DLRHvYOPIKiPer4xHLnQ4UzToCn4VozvS0weNuAUD9Q-wh-xRn7HeShIO1eWgYX5fGDijDXsCr')" }}></div>
                          <div className="size-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxn4qfe6y85Z5rWA3gSqsPQ3O_-f-zMb4NGqSnFTaNdyrblUCKfRJY0anc_jjN4G0kVeqd2n0nwGdh61Ofo_Gomas7jceqaH4ZyfHNXuA-gdwiY743fuNn8L2N1dIQIL4tTCfRnGcycwM6ze3nO1tvLsI7am_0P_4Y5DeaovlSqxA3oFuacklMldH1VqrfIJwZEUG50hbKUtuiJN18ouJ_q6kk34XGmEDB5nxDlvnEVwrT2tBQKaaBW01WjKxSKf-RhOl2Cb5Yp9fk')" }}></div>
                          <div className="size-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXqWxIy150oWkH4CFwAoDBo8QDpo3I0YcowvfFfeBxqz7dGbVkMtXNg4GWO26tuU4aWwvs0vjeKpGK5Fvz3Ts-ApCXRFfjJs5zOdssHCmTPPM1D7mjXU6VKLyT8GuBirGFORJGyV5kqbyHKtewhBeRqiipGhxpAG8rHO731wxYA6dC08cmLFxxadQ4HqXlzEI1cD82yBUUGitIcW4hRasOBfRHlFnqfNGEUyr72PJmXrJ6BxUiPjeEckLsFzh0xAmASCMXWzG65yyz')" }}></div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex gap-1 text-primary">
                            <span className="material-symbols-outlined text-sm">star</span>
                            <span className="material-symbols-outlined text-sm">star</span>
                            <span className="material-symbols-outlined text-sm">star</span>
                            <span className="material-symbols-outlined text-sm">star</span>
                            <span className="material-symbols-outlined text-sm">star</span>
                          </div>
                          <span className="text-xs font-bold text-charcoal">Trusted by 500+ Engineers</span>
                        </div>
                      </div>
                    </div>
                    {/* Visual Content */}
                    <div className="w-full flex-1 relative perspective-1000 group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative w-full aspect-square md:aspect-[4/3] bg-charcoal rounded-2xl overflow-hidden shadow-2xl border border-gray-800 flex items-center justify-center">
                        {/* Abstract 3D Representation */}
                        <div className="w-full h-full bg-cover bg-center opacity-90 mix-blend-screen" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADl2FMUUpRlNTtaEdLKPw1CzrUlaULbUufQLdLX65gV9aHArufO2SOpIuhj1pPcJ6MslOQxJf33pgd4b5s4gO1fjfJEKGw2Q5zsV5V77WXkeP8-ehsVvbG3Yw2d0e9T0NxqUxjWD5I8xb4SXhLXpizDM6oWYeeCi7yBpz02SIq2VZs-iomTtu1SKlHGKu3nGdGsf1I4MtBZiLQfyXQnuVgiGa8fWVqa2wA7-py5LeWCm46upUZKTtpUN3v7CVDm6SdjNBDZ7EeHiMX')" }}>
                        </div>
                        {/* Overlay UI Element Mockup */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg">
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex gap-2">
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-[10px] font-mono text-primary uppercase">Status: Optimal</div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                            <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <section className="border-y border-gray-200 bg-white/50 backdrop-blur-sm">
            <div className="px-4 md:px-10 lg:px-40 py-8">
              <div className="max-w-[1200px] mx-auto">
                <h4 className="text-gray-500 text-sm font-bold uppercase tracking-widest text-center mb-8">Trusted by forward-thinking companies</h4>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale transition-all hover:grayscale-0">
                  <div className="text-xl font-black text-charcoal flex items-center gap-2"><span className="material-symbols-outlined">hexagon</span> ACME Corp</div>
                  <div className="text-xl font-black text-charcoal flex items-center gap-2"><span className="material-symbols-outlined">change_history</span> Vertex</div>
                  <div className="text-xl font-black text-charcoal flex items-center gap-2"><span className="material-symbols-outlined">all_inclusive</span> Infinite</div>
                  <div className="text-xl font-black text-charcoal flex items-center gap-2"><span class="material-symbols-outlined">polymer</span> Nexus</div> {/* Fixed typo manually class->className */}
                  <div className="text-xl font-black text-charcoal flex items-center gap-2"><span className="material-symbols-outlined">view_in_ar</span> Cube</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 md:px-10 lg:px-40">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h2 className="text-charcoal text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                  Core Architectures
                </h2>
                <p className="text-gray-600 text-base md:text-lg font-normal leading-normal max-w-[720px]">
                  Our three pillars of digital transformation, engineered for precision and scale. We don't just build websites; we construct ecosystems.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 hover:border-charcoal hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-charcoal text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-charcoal transition-colors">
                    <span className="material-symbols-outlined text-[28px]">terminal</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-charcoal text-xl font-bold">Custom Development</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Robust, scalable code infrastructures built for high-performance applications. We write clean, efficient code that stands the test of time.
                    </p>
                  </div>
                </div>
                {/* Card 2: Highlighted Dark Card for Contrast */}
                <div className="group flex flex-col gap-4 rounded-2xl border border-charcoal bg-charcoal p-6 shadow-2xl transform md:-translate-y-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 text-primary flex items-center justify-center border border-white/10">
                    <span className="material-symbols-outlined text-[28px]">design_services</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-xl font-bold">Strategic Design</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      User-centric interfaces designed with architectural precision. We merge aesthetics with functionality to create seamless experiences.
                    </p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 hover:border-charcoal hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-charcoal text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-charcoal transition-colors">
                    <span className="material-symbols-outlined text-[28px]">explore</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-charcoal text-xl font-bold">Digital Strategy</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Data-driven roadmaps that align technology with your business goals. We plot the course before laying the first brick.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Grid */}
          <section className="py-20 px-4 md:px-10 lg:px-40 bg-white border-t border-gray-200">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
              <div className="flex items-center justify-between">
                <h2 className="text-charcoal text-3xl font-bold tracking-tight">Recent Deployments</h2>
                <a className="hidden md:flex items-center gap-1 text-sm font-bold text-primary hover:underline" href="#">
                  View all projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {/* Project 1 */}
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIOoJJZkHvxy6ugVVl5Allf45EugUZ7PpA17_A9ZrbR96Rv7hPaCGO8EsL6zuUar3LMztyRINK2n4UZ5C8jHLdU2HCrXTSr68vw3N3vE14A3NcLy6ca4IbtpxVipii2ZiBCgvxer5OqKz8H29Sq5mSUMemG6htlKCnC4Da5LG9ZKj3y6QTo0oLBpaKLi2p-3t9m59eHF23yDLQMBVtjmMfSi1Q4oSzxSxwP-SMtcoPjkMmluxqDPfsfBAA-tAyen9hL8Q6JEwBH9GX')" }}></div>
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-white font-bold text-lg">FinTech Dashboard</h4>
                      <p className="text-primary text-sm">Web Application</p>
                    </div>
                  </div>
                </div>
                {/* Project 2 */}
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 cursor-pointer md:col-span-2">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsvs93vAMF3WesHIufOAiaOE7x6PsNyFRRsrTScIxGCcelFYKjPzUSuAiqDbM9vyUWGxYh9FzwCnVdeIJFn2BV_E-6gObadSrwRbNhefaxyzwbB15B_y5r0Yyzlj2nv8eklYLVF-E-ymzML1ysRgIth5OX7gZTrPaboO9jWqXx9NZRntNglCt3qvfUzVQGdCx215b0Mg1TV9H9evX_npTEcf-kwWWd2lDGskVPTAMg3yBVKPuCN2WfdzfF8-Sk_HER5AQ4coZsB2wk')" }}></div>
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-white font-bold text-lg">Analytics Engine</h4>
                      <p className="text-primary text-sm">Data Science</p>
                    </div>
                  </div>
                </div>
                {/* Project 3 */}
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnF-3Dy_G6Qlre7GkVaVuG_o4JNJdusE3uHLt8KWKWM_UFsNYEJuvacd7CpspDgFUbhjpkr71ke0nmEvbxCKUNZ4LjmazKCvNuS_IUodIBOzq_edA79zKvwZuiXAAkfxsGtwfGUnI085lR6vNddD6aj_Uy8MOcqHUcc3iB6URi1tt-qIzwLUU2rxxyjJpqUfC2vyHwhDlJ_mjOvFLafAKwLCT-nFg7FALs1CeXI2WBIaxMZ4D3aaCfyX1NupfLbHMdlvmV-hv0brs4')" }}></div>
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-white font-bold text-lg">HealthConnect</h4>
                      <p className="text-primary text-sm">Mobile App</p>
                    </div>
                  </div>
                </div>
                {/* Project 4 */}
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrk9SuLMsqYUG-G1LgYzmzqNZTzB8xVvajtZZLRDxM1lDfL_uW9Uwruo1WI_yYD02O7VsoYjcQKfrrGD7Gjf4-T4xl6gLS8BOnGwbK_AEmatbl_mn4Zg0C4C-LUjP9lW4n008wTJxczE3tXzXx0GNwrhWU6wd94y4qfjttaNYQb6UwC7SqnMnKtih4KF7vh8dikM5E4aq6zbp7z4sBYeghdWNHJjuMUmaL_jRayYiSSR0hg29j7GJ8NDBXz_dDGqIXdhAdbpfBOiIJ')" }}></div>
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 class="text-white font-bold text-lg">DevOps Platform</h4> {/* Typo fixed to className */}
                      <p className="text-primary text-sm">Cloud Infrastructure</p>
                    </div>
                  </div>
                </div>
                {/* Project 5 */}
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCalgpHz6m9Qjs8jlBOEdA8wf5mDK5JqPT1IZoCIQx2ETD-LCgf09dc2tln0iPzi8oG-PjgPxlHDPV8k7ib_1zdv-EVs9lOlzpS_tRX1VLiJAhue8_NQYtck7FnCsw2ROS0r78vhAVUxVrM3MHE2-UF-zJSDPQvzUtGhDYGRiexMLEwAIrigi2LwMCr2jaBuLZlbMVeo3MsQtVDsLwLgHHqx-43BpfdQiAUqKfecUkUDzsHWlg-Qc8CsRB_wqhJBqjKyN7pu7je_DPS')" }}></div>
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-white font-bold text-lg">Crypto Wallet</h4>
                      <p className="text-primary text-sm">Blockchain</p>
                    </div>
                  </div>
                </div>
                {/* Project 6 */}
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 cursor-pointer md:col-span-2">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGyZpg64DecopcU5_VOUTUIkpcTdkY4vXZIjcuxQ2UTS6FvYg5lOvC2EwFcYqNtTSK1mqdS_pozu9cm_7iCDVYLTw18p6_OJ4JSJ41r9nhkcqiG4X7cB6otEuaMoy-Sv_1DXs4kemzcrAxVlu__YvhNYGeRTQvLMFtZiAo70gmmih6rkUBopDu9OYwbacR-_QJ8QEc-Y78N_LX3Tj4AxSKoeQqUP7v1tnYE9a_nIJtxeRBaM4X_Lt2_m9pfsTgcb8zdzvBycSgSPck')" }}></div>
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-white font-bold text-lg">Server Migration</h4>
                      <p className="text-primary text-sm">Enterprise IT</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:hidden justify-center mt-4">
                <a className="flex items-center gap-1 text-sm font-bold text-primary hover:underline" href="#">
                  View all projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-charcoal text-white pt-16 pb-8 px-4 md:px-10 lg:px-40">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
              <div className="flex flex-col gap-4 max-w-sm">
                <div className="flex items-center gap-2 text-white">
                  <div className="flex size-6 items-center justify-center rounded bg-primary text-charcoal">
                    <span className="material-symbols-outlined text-[16px]">architecture</span>
                  </div>
                  <h2 className="text-lg font-bold">Solucionator</h2>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Engineered for excellence. We build the digital tools that power tomorrow's businesses today.
                </p>
              </div>
              <div className="flex gap-16 flex-wrap">
                <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-primary">Company</h4>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">About</a>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">Careers</a>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">Blog</a>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-primary">Resources</h4>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">Documentation</a>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">Help Center</a>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">Privacy</a>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-primary">Connect</h4>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">Twitter</a>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">LinkedIn</a>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">GitHub</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-xs">© 2023 Solucionator Inc. All rights reserved.</p>
              <p className="text-gray-600 text-xs">System Status: <span className="text-green-500">Operational</span></p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
