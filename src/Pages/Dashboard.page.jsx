import { useEffect, useState } from "react";
import Chart from "../Components/Chart/Chart";
import DashboardNav from "../Components/Dashboard/DashboardNav";
import FilterNab from "../Components/Dashboard/FilterNab";
import Table from "../Components/Dashboard/Table";
import VmtTable from "../Components/Dashboard/VmtTable";

const Dashboard = () => {
  const [allData, setAllData] = useState([]);
  const [getSubregion, setGetSubregion] = useState("california");
  const [getDate, setGetDate] = useState("Monthly");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <div className='w-screen bg-gradient-to-r '>
      <DashboardNav />
      <FilterNab setGetDate={setGetDate} setGetSubregion={setGetSubregion} />
      <div>
        <div className='mx-[2%]'>
          <Chart allData={allData} getSubregion={getSubregion}></Chart>
        </div>
      </div>
      <div className='flex gap-5 items-center mx-[2%]'>
        <Table
          allData={allData}
          getSubregion={getSubregion}
          getDate={getDate}
        ></Table>
        <VmtTable
          getDate={getDate}
          allData={allData}
          getSubregion={getSubregion}
        ></VmtTable>
      </div>
    </div>
  );
};

export default Dashboard;
