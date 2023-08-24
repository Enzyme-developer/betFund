"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import How from "./components/How";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import MultiStepSignupForm from "./components/Signup";
import useModalStore from "./store/modalStore";
import Login from "./components/Login";

export default function Home() {
  const isSignup = useModalStore((state) => state.isSignup);
  const isLogin = useModalStore((state) => state.isLogin);

  return (
    <main className="flex min-h-screen flex-col p-4 bg-yellow-500">
      {isSignup && (
        <Modal>
          <MultiStepSignupForm />
        </Modal>
      )}
      {isLogin && (
        <Modal>
          <Login />
        </Modal>
      )}
      <Header />
      <Hero />
      <Plans />
      <How />
      <Footer />
    </main>
  );
}
