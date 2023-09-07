"use client";
import { Account } from "../components/Account";
import { CashOut } from "../components/CashOut";
import { Countdown } from "../components/Countdown";
import { Lost } from "../components/Lost";
import { PlaceBet } from "../components/PlaceBet";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from "../base/Footer";
import { GameData } from "../components/Table";
import { ApiResponse, create } from "apisauce";
import Navbar from "../base/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full p-6">
      <Navbar />
      <Card className="w-full bg-primary h-fit text-center text-black">
        <CardHeader>
          <CardTitle>Evaluation</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          Prove that you can be trusted. Play 3 different bets (minimum of 10
          odds) using the Test Money, If you win 2 out of 3, you will be moved
          to Real Money stage automatically.
          <p className="font-bold mt-4">
            NB: Money made on test game cannot be cash-out
          </p>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
      <GameData />
      <CashOut />
      <Lost />
      <PlaceBet />
      <Account />
      <Countdown />
      <Card className="w-full bg-primary opacity-40 h-fit text-center text-black mb-4">
        <CardHeader>
          <CardTitle>Level 1</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          KINDLY PASS THE TEST GAME ABOVE BEFORE LIVE GAME IS ACTIVATED
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
      <Footer />
    </main>
  );
}
