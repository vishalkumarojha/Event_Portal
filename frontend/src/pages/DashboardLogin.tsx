import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login as loginApi } from "../api";

const DashboardLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const response = await loginApi({ email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard");
    } catch (err: any) {
      setErrorMsg(err.response?.data?.error || "Login failed. Please try again.");
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen flex items-center justify-center p-6">
      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(25,28,30,0.06)] min-h-[700px]">
        {/* Left Side: Visual Narrative */}
        <div className="relative hidden lg:flex flex-col justify-end p-12 overflow-hidden bg-primary text-white">
          <div className="absolute inset-0 z-0 opacity-80">
            <img
              alt="Campus architecture"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRtzsGpJ7vHceG3wY0bArhW0Zj_4khrAJ4HTfvEMh55Z9V1J0vsPquWls9CHTwjyK1WWvtOuWt4ElSJLm7b7yA6yn_xL-G2HHSm92u_EEFy1fumBfEBVOHUI0oZKurKZpTeIDEkVZGAtEEx449_3TFzaQPcF9vg3BzQG9cPVMJwSFa7KmBjQGZwAB9OLO-Mve8F1NkwFz-ajQwvSWeca9w_qMET-HOs7iNT3PjViNgBEcQqmzUwF0xHngyAMdkqL-MWd49FZH6HQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
          </div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl">auto_stories</span>
              <h1 className="text-3xl font-extrabold tracking-tighter uppercase">The Academic Curator</h1>
            </div>
            <p className="text-lg text-primary-fixed leading-relaxed max-w-md opacity-90 font-medium">
              Designing the next generation of campus events and intellectual discovery. Manage your club with editorial precision.
            </p>
            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-2">
                {[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBSLqadthCd26bZz-B5H5EzCSvYNWkOTPDtNj8ShU037paIRDto9Ze-lsmlQhAGuajmdJyjVabvBg-_dlyuom5kQ1WxsyYVmD1CNrORZc_iVyFIQXeTU5-pCAXinjXT17e_cLdE9GL1XCZgjHZXxOQ0hP5A7YwCih3m-RkWr0XOwR32umGdcdPUi73p5Fv-baKRT3RdTHPyJYhSCFTu9-gBVPWwI-xJ5aVvySRrc5_DSFtLHtKx2Z19ByJZCjAEg7gpf8jCF-_01w",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuC2dKKixM0QvEE5Z7YcsF6C9_EhrJGmB4SyyoW23PeolFqSsClDqXV8EBZk791It0-S0nbDcMyA5-aAeOFfjJLvvIvxuzBCM3KQYGcw0R6F91oDXreO4CkiOj-XLMvrf8n2onkwS7_2ftjE7uPJVIniF0SA-cVI6lUStamVvvmDbIwneEchRJnYDTS_eXDi7EeYBDxuNYSdaCfdC4MdMvOnUNK3QLKBRHOrmx70gPKBabbIHEH4VePOfc2rSrrpQG1soCRw_DfptQ",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDu5XP9z9Ts3_AX4qvDXBJbnQ_HU4GSYiZgsrVw8_FWjxZ3pWztAXTgUkNAUYPTVCDYUZ0W2d65v8WaTdR2_fgGLjrr_W1Ud4A9alEaIVWPWdohkbGm8qmxBFuZxGmdn_zcZM5O6-jS2_2luEAueTcPEiJg1Em4sDuIWGxSVCXgkk9KG2gPZf61PzRle7tULgBm30uVXyzhk2CCx97tnhp1SgyB2LqrHcplr-PbXIKeSrKXgSjdOakfd0B3-RUIrVj0QdzAWOrf9w",
                ].map((src, i) => (
                  <img key={i} alt={`User ${i+1}`} className="w-10 h-10 rounded-full border-2 border-primary" src={src} />
                ))}
              </div>
              <span className="text-sm font-label tracking-widest uppercase">Joined by 2k+ curators</span>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex flex-col justify-center items-center p-8 lg:p-20 bg-surface-container-lowest">
          <div className="w-full max-w-md space-y-12">
            <header className="space-y-3">
              <h2 className="text-4xl font-extrabold tracking-tighter text-on-surface">Welcome Back</h2>
              <p className="text-on-surface-variant text-lg">Enter your credentials to access the curator portal.</p>
            </header>

            <form className="space-y-8" onSubmit={handleSubmit}>
              {errorMsg && (
                <div className="p-4 bg-error/10 border border-error/20 rounded-xl text-error text-sm font-bold animate-shake">
                  {errorMsg}
                </div>
              )}
              <div className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-label tracking-widest text-on-surface-variant uppercase ml-1" htmlFor="email">Email Address</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">mail</span>
                    <input
                      className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-lg focus:ring-4 focus:ring-primary/10 transition-all text-on-surface placeholder:text-outline outline-none"
                      id="email"
                      name="email"
                      placeholder="curator@institution.edu"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-sm font-label tracking-widest text-on-surface-variant uppercase" htmlFor="password">Password</label>
                    <a className="text-xs font-semibold text-primary hover:underline transition-all" href="#">Forgot password?</a>
                  </div>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">lock</span>
                    <input
                      className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-lg focus:ring-4 focus:ring-primary/10 transition-all text-on-surface placeholder:text-outline outline-none"
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <button
                  className="primary-gradient w-full py-4 rounded-lg text-white font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  type="submit"
                >
                  Sign In to Dashboard
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>

                <div className="relative py-4 flex items-center gap-4">
                  <div className="h-px flex-grow bg-surface-container-high"></div>
                  <span className="text-xs font-label text-outline uppercase tracking-widest bg-surface-container-lowest px-2">Membership</span>
                  <div className="h-px flex-grow bg-surface-container-high"></div>
                </div>

                <div className="text-center space-y-4">
                  <p className="text-on-surface-variant text-sm">
                    Not a curator yet?{" "}
                    <a className="text-primary font-bold hover:underline transition-all" href="#">Request access</a>
                  </p>
                  <div className="p-4 bg-surface-container-low rounded-xl inline-block w-full">
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      <span className="material-symbols-outlined text-xs align-middle mr-1">info</span>
                      The Academic Curator operates on an <span className="font-bold">Invite-based signup</span>.
                      New organizations must provide a valid <span className="text-primary font-medium underline">DSW link</span> for verification.
                    </p>
                  </div>
                </div>
              </div>
            </form>

            <footer className="pt-12 text-center">
              <p className="text-[10px] text-outline font-label uppercase tracking-[0.2em]">
                © 2026 The Academic Curator. All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </main>

      {/* Support Button */}
      <div className="fixed bottom-8 right-8">
        <button className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur shadow-sm rounded-full text-on-surface-variant hover:bg-white transition-all text-sm font-medium border border-outline-variant/20">
          <span className="material-symbols-outlined text-lg">help</span>
          Support
        </button>
      </div>
    </div>
  );
};

export default DashboardLogin;
