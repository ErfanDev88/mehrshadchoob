"use client";
import React, { createContext, useEffect, useState } from "react";
import doorWorkSample1 from "../../../public/assets/doorWorkSample1.jpg";
import doorWorkSample2 from "../../../public/assets/doorWorkSample2.jpg";
import doorWorkSample3 from "../../../public/assets/doorWorkSample3.jpg";
import doorWorkSample4 from "../../../public/assets/doorWorkSample4.jpg";
import doorWorkSample5 from "../../../public/assets/doorWorkSample5.jpg";
import doorWorkSample6 from "../../../public/assets/doorWorkSample6.jpg";
import doorWorkSample7 from "../../../public/assets/doorWorkSample7.jpg";
import doorWorkSample8 from "../../../public/assets/doorWorkSample8.jpg";
import closetWorkSample1 from "../../../public/assets/closetWorkSample1.jpg";
import closetWorkSample2 from "../../../public/assets/closetWorkSample2.jpg";
import closetWorkSample3 from "../../../public/assets/closetWorkSample3.jpg";
import closetWorkSample4 from "../../../public/assets/closetWorkSample4.jpg";
import closetWorkSample5 from "../../../public/assets/closetWorkSample5.jpg";
import closetWorkSample6 from "../../../public/assets/closetWorkSample6.jpg";
import cabinetMemberanWorkSample1 from "../../../public/assets/cabinetMemberanWorkSample1.jpg";
import cabinetMemberanWorkSample2 from "../../../public/assets/cabinetMemberanWorkSample2.jpg";
import cabinetMemberanWorkSample3 from "../../../public/assets/cabinetMemberanWorkSample3.jpg";
import cabinetMemberanWorkSample4 from "../../../public/assets/cabinetMemberanWorkSample4.jpg";
import cabinetMemberanWorkSample5 from "../../../public/assets/cabinetMemberanWorkSample5.jpg";
import cabinetMdfWorkSample1 from "../../../public/assets/cabinetMdfWorkSample1.jpg";
import cabinetMdfWorkSample2 from "../../../public/assets/cabinetMdfWorkSample2.jpg";
import cabinetMdfWorkSample3 from "../../../public/assets/cabinetMdfWorkSample3.jpg";
import cabinetMdfWorkSample4 from "../../../public/assets/cabinetMdfWorkSample4.jpg";
import cabinetMdfWorkSample5 from "../../../public/assets/cabinetMdfWorkSample5.jpg";
import mirrorWorkSample1 from "../../../public/assets/mirrorWorkSample1.jpg";
import mirrorWorkSample2 from "../../../public/assets/mirrorWorkSample2.jpg";
import mirrorWorkSample3 from "../../../public/assets/mirrorWorkSample3.jpg";
import stairWorkSample1 from "../../../public/assets/stairWorkSample1.jpg";
import stairWorkSample2 from "../../../public/assets/stairWorkSample2.jpg";
import stairWorkSample3 from "../../../public/assets/stairWorkSample3.jpg";
import stairWorkSample4 from "../../../public/assets/stairWorkSample4.jpg";

export const WorkContext = createContext();

function WorkSamplesContext({ children }) {
  const [worksamples, setWorksamples] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:1337/api/work-samples?pagination[pageSize]=1000&sort=createdAt:desc&populate=*",
      {
        cache: "no-store",
      }
    )
      .then((res) => res.json())
      .then((data) => setWorksamples(data.data));
  }, []);
  console.log(worksamples);

  // const data = useState([
  //   {
  //     cabinetMDF: [
  //       {
  //         id: 1,
  //         imageSrc: cabinetMdfWorkSample1,
  //         title: "کابینت ام دی اف",
  //       },
  //       {
  //         id: 2,
  //         imageSrc: cabinetMdfWorkSample2,
  //         title: "کابینت ام دی اف",
  //       },
  //       {
  //         id: 3,
  //         imageSrc: cabinetMdfWorkSample3,
  //         title: "کابینت ام دی اف",
  //       },
  //       {
  //         id: 4,
  //         imageSrc: cabinetMdfWorkSample4,
  //         title: "کابینت ام دی اف",
  //       },
  //       {
  //         id: 5,
  //         imageSrc: cabinetMdfWorkSample5,
  //         title: "کابینت ام دی اف",
  //       },
  //     ],
  //   },
  //   {
  //     closet: [
  //       {
  //         id: 1,
  //         imageSrc: closetWorkSample1,
  //         title: "کمد دیواری",
  //       },
  //       {
  //         id: 2,
  //         imageSrc: closetWorkSample2,
  //         title: "کمد دیواری",
  //       },
  //       {
  //         id: 3,
  //         imageSrc: closetWorkSample3,
  //         title: "کمد دیواری",
  //       },
  //       {
  //         id: 4,
  //         imageSrc: closetWorkSample4,
  //         title: "کمد دیواری",
  //       },
  //       {
  //         id: 5,
  //         imageSrc: closetWorkSample5,
  //         title: "کمد دیواری",
  //       },
  //       {
  //         id: 6,
  //         imageSrc: closetWorkSample6,
  //         title: "کمد دیواری",
  //       },
  //     ],
  //   },
  //   {
  //     cabinetMemberan: [
  //       {
  //         id: 1,
  //         imageSrc: cabinetMemberanWorkSample1,
  //         title: "کابینت ممبران آشپزخانه",
  //       },
  //       {
  //         id: 2,
  //         imageSrc: cabinetMemberanWorkSample2,
  //         title: "کابینت ممبران آشپزخانه",
  //       },
  //       {
  //         id: 3,
  //         imageSrc: cabinetMemberanWorkSample3,
  //         title: "کابینت ممبران آشپزخانه",
  //       },
  //       {
  //         id: 4,
  //         imageSrc: cabinetMemberanWorkSample4,
  //         title: "کابینت ممبران آشپزخانه",
  //       },
  //       {
  //         id: 5,
  //         imageSrc: cabinetMemberanWorkSample5,
  //         title: "کابینت ممبران آشپزخانه",
  //       },
  //     ],
  //   },
  //   {
  //     door: [
  //       {
  //         id: 1,
  //         imageSrc: doorWorkSample1,
  //         title: "ساخت درب ساختمان",
  //       },
  //       {
  //         id: 2,
  //         imageSrc: doorWorkSample2,
  //         title: "ساخت درب ساختمان",
  //       },
  //       {
  //         id: 3,
  //         imageSrc: doorWorkSample3,
  //         title: "ساخت درب ساختمان",
  //       },
  //       {
  //         id: 4,
  //         imageSrc: doorWorkSample4,
  //         title: "ساخت درب ساختمان",
  //       },
  //       {
  //         id: 5,
  //         imageSrc: doorWorkSample5,
  //         title: "ساخت درب ساختمان",
  //       },
  //       {
  //         id: 6,
  //         imageSrc: doorWorkSample6,
  //         title: "ساخت درب ساختمان",
  //       },
  //       {
  //         id: 7,
  //         imageSrc: doorWorkSample7,
  //         title: "ساخت درب ساختمان",
  //       },
  //       {
  //         id: 8,
  //         imageSrc: doorWorkSample8,
  //         title: "ساخت درب ساختمان",
  //       },
  //     ],
  //   },
  //   {
  //     mirror: [
  //       {
  //         id: 1,
  //         imageSrc: mirrorWorkSample1,
  //         title: "آینه کنسول",
  //       },
  //       {
  //         id: 2,
  //         imageSrc: mirrorWorkSample2,
  //         title: "آینه کنسول",
  //       },
  //       {
  //         id: 3,
  //         imageSrc: mirrorWorkSample3,
  //         title: "آینه کنسول",
  //       },
  //     ],
  //   },
  //   {
  //     stair: [
  //       {
  //         id: 1,
  //         imageSrc: stairWorkSample1,
  //         title: "پله",
  //       },
  //       {
  //         id: 2,
  //         imageSrc: stairWorkSample2,
  //         title: "پله",
  //       },
  //       {
  //         id: 3,
  //         imageSrc: stairWorkSample3,
  //         title: "پله",
  //       },
  //       {
  //         id: 4,
  //         imageSrc: stairWorkSample4,
  //         title: "پله",
  //       },
  //     ],
  //   },
  // ]);
  return (
    <WorkContext.Provider value={worksamples}>{children}</WorkContext.Provider>
  );
}

export default WorkSamplesContext;
