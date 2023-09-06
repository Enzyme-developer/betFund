"use client";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Pagination,
} from "@windmill/react-ui";
import { useEffect, useState } from "react";
import response from "../utils/tableData";

export const GameData = () => {
  const [pageTable1, setPageTable1] = useState(1);

  const [dataTable1, setDataTable1] = useState<any>([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChangeTable1(p: any) {
    setPageTable1(p);
  }

  useEffect(() => {
    setDataTable1(
      response.slice(
        (pageTable1 - 1) * resultsPerPage,
        pageTable1 * resultsPerPage
      )
    );
  }, [pageTable1]);

  return (
    <div className="my-6">
      <p className="font-bold text-center text-lg">Test Game </p>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Bets</TableCell>
              <TableCell>Stake</TableCell>
              <TableCell>Odds</TableCell>
              {/* <TableCell>Qins</TableCell> */}
              <TableCell>Status</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable1.map((user: any, i: number) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar
                      className="hidden mr-3 md:block"
                      src={user.avatar}
                      alt="User avatar"
                    />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {user.job}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ {user.amount}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(user.date).toLocaleDateString()}
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
            onChange={onPageChangeTable1}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </div>
  );
};
