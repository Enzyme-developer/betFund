"use client";
import Account from "../components/Account";
import BottomNav from "../components/BottomNav";
import CashOut from "../components/CashOut";
import Countdown from "../components/Countdown";
import Game from "../components/Game";
import Header from "../components/Header";
import Lost from "../components/Lost";
import Modal from "../components/Modal";
import Phase from "../components/Phase";
import PlaceBet from "../components/PlaceBet";
import MultiStepSignupForm from "../components/Signup";
import Stage from "../components/Stage";
import { demoCopy } from "../utils/copy";
import { nunito } from "../utils/fonts";

export default function Home() {
  const isSignup = true;
  // useModalStore((state) => state.isSignup);

  return (
    <main className={`${nunito.className} flex min-h-screen flex-col p-4 bg-yellow-500`}>
      {isSignup && (
        <Modal>
          <Countdown />
          {/* <Account
            name="Benjamin Dada"
            email="angelagmail.com"
            phoneNumber="0908765431"
          /> */}
        </Modal>
      )}
      <Header reward={true} />
      <Stage title={demoCopy.title} body={demoCopy.body} note={demoCopy.note} />
      <Game title="Test Game" />
      <Phase title="Live Phase 1" />
      <BottomNav />
    </main>
  );
}
