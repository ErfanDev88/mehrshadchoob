"use client";
import React, { useContext, useEffect } from "react";
import styles from "./_page.module.scss";
import "../base/card.css";
import { WorkContext } from "../context/WorkSamplesContext";
import Image from "next/image";
import Footer from "../layout/Footer";
import AOS from 'aos'

function WorkSamplesPage() {
  useEffect(function () {
    AOS.init({ duration: 900 });
  }, []);
  const workSamplesData = useContext(WorkContext);

  const grouped = workSamplesData.reduce((acc, item) => {
    const cat = item.category || "بدون دسته";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  console.log(workSamplesData)
  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.title}>نمونه کار ها</h1>

        {Object.keys(grouped).map((category) => (

        <section key={category}>
          <h1>{category}</h1>
          <div class="cardContainer">
            {grouped[category].map((data) => {
              return (
                <div class="container" style={{ height: "350px" }} key={data.id}>
                  <div class="canvas">
                    <div class="tracker tr-1"></div>
                    <div class="tracker tr-2"></div>
                    <div class="tracker tr-3"></div>
                    <div class="tracker tr-4"></div>
                    <div class="tracker tr-5"></div>
                    <div class="tracker tr-6"></div>
                    <div class="tracker tr-7"></div>
                    <div class="tracker tr-8"></div>
                    <div class="tracker tr-9"></div>
                    <div class="tracker tr-10"></div>
                    <div class="tracker tr-11"></div>
                    <div class="tracker tr-12"></div>
                    <div class="tracker tr-13"></div>
                    <div class="tracker tr-14"></div>
                    <div class="tracker tr-15"></div>
                    <div class="tracker tr-16"></div>
                    <div class="tracker tr-17"></div>
                    <div class="tracker tr-18"></div>
                    <div class="tracker tr-19"></div>
                    <div class="tracker tr-20"></div>
                    <div class="tracker tr-21"></div>
                    <div class="tracker tr-22"></div>
                    <div class="tracker tr-23"></div>
                    <div class="tracker tr-24"></div>
                    <div class="tracker tr-25"></div>
                    <div id="card">
                      <img
                        src={`http://localhost:1337${data.image?.url}`}
                        width={100}
                        height={230}
                        class="img"
                        style={{ objectFit: 'cover'}}
                        alt={data.title}
                      />
                      <h2>{data.title}</h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        ))}

        <Footer />
      </main>
    </>
  );
}

export default WorkSamplesPage;
