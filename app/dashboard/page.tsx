"use client";
import React, { useState, useEffect } from "react";
import RoundIcon from "../components/RoundIcon";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Badge,
  Pagination,
} from "@windmill/react-ui";
import InfoCard from "../components/InfoCard";
import { ApiResponse, create } from "apisauce";
import CartIcon from "../assets/icons/home.svg";
import ChatIcon from "../assets/icons/forms.svg";
import MoneyIcon from "../assets/icons/cards.svg";
import PeopleIcon from "../assets/icons/cards.svg";
import Sidebar from "../components/Sidebar";
import Header from "../reusables/Header";
import Status from "../reusables/Status";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [withdrawals, setWithdrawals] = useState<any>([]);

  const resultsPerPage = 10;
  const totalResults = withdrawals?.length;

  function onPageChange(p: number) {
    setPage(p);
  }
  let token = null;

  if (typeof localStorage !== "undefined") {
    const authData = localStorage.getItem("auth");
    if (authData) {
      const parsedAuthData = JSON.parse(authData);
      token = parsedAuthData.token;
    }
  }

  const api = create({
    baseURL: "https://api.mybetfunds.com/api/",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const fetchWithdrawals = async () => {
    try {
      const response: ApiResponse<any, any> = await api.get("withdrawals");
      console.log(response);
      if (response.ok) {
        setWithdrawals(
          response?.data.data?.slice(
            (page - 1) * resultsPerPage,
            page * resultsPerPage
          )
        );
      } else {
        console.error("API request failed:", response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUser = async () => {
    try {
      const response: ApiResponse<any, any> = await api.get("user");
      console.log(response);
      if (response.ok) {
        // setWithdrawals(
        //   response?.data.data?.slice(
        //     (page - 1) * resultsPerPage,
        //     page * resultsPerPage
        //   )
        // );
      } else {
        console.error("API request failed:", response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWithdrawals();
    fetchUser()
  }, [page]);

  return (
    <div className="flex w-full min-h-screen">
    <Sidebar />
      {/* <!-- Cards --> */}
      <div className="flex flex-col w-full">
      <Header />
      <div className="p-4 md:p-6 bg-slate-200 dark:bg-inherit min-h-screen">
      <div className="grid gap-6 my-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total Bets" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Test Balance" value="$ 46,760.89">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Real Balance" value="376">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Pending transactions" value="35">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <h1
        className="text-center text-lg font-bold text-gray-800 dark:text-gray-200"
      >
        Withdrawal Requests
      </h1>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {withdrawals?.map((withdrawal: any, i: number) => (
              <TableRow key={i}>
                <TableCell>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {withdrawal?.id}
                  </p>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    ₦{(withdrawal?.amount / 100).toLocaleString("en-Ng")}
                  </span>
                </TableCell>
                <TableCell>
                  {/* <Badge type={withdrawal.status}>{withdrawal.status}</Badge> */}
                  <Status status={withdrawal?.status} />
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(withdrawal?.updated_at).toLocaleDateString()}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChange}
            label="Table navigation"
          />
        </TableFooter>
        </TableContainer>
        </div>
        </div>
    </div>
  );
}

export default Dashboard;
