"use client";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Avatar,
  Pagination,
} from "@windmill/react-ui";
import { useEffect, useState } from "react";
import response from "../utils/tableData";
import Status from "../reusables/Status";
import { ApiResponse, create } from "apisauce";

export const GameData = () => {
  const [withdrawals, setWithdrawals] = useState<any>([]);

  const { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth") || "{}")
    : null;

  const api = create({
    baseURL: "https://api.mybetfunds.com/api/",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    const fetchWithdrawals = async () => {
      try {
        const response: ApiResponse<any, any> = await api.get("withdrawals");
        if (response.ok) {
          setWithdrawals(response.data.data);
        } else {
          console.error("API request failed:", response.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchWithdrawals();
  }, []);

  const [pageTable, setPageTable] = useState(1);

  const [dataTable, setDataTable] = useState<any>([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = withdrawals?.length;

  // pagination change control
  function onPageChangeTable(p: number) {
    setPageTable(p);
  }

  useEffect(() => {
    setDataTable(
      withdrawals?.slice(
        (pageTable - 1) * resultsPerPage,
        pageTable * resultsPerPage
      )
    );
  }, [pageTable]);

  return (
    <div className="my-6">
      <p className="font-bold text-center text-lg">Withdrawal Requests</p>
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
            {dataTable.map((withdrawal: any, i: number) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar
                      className="hidden mr-3 md:block"
                      src={withdrawal?.avatar}
                      alt="withdrawal avatar"
                    />
                    <div>
                      <p className="font-semibold">{withdrawal?.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {withdrawal?.job}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ {withdrawal?.amount}</span>
                </TableCell>
                <TableCell>
                  {/* <Badge type={withdrawal.status}>{withdrawal.status}</Badge> */}
                  <Status status={withdrawal?.status} />
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(withdrawal?.date).toLocaleDateString()}
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
            onChange={onPageChangeTable}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </div>
  );
};
