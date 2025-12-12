"use client";
import styles from "./page.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import Btn from "./components/Btn";
import ServicesCard from "./components/ServicesCard";
import "./base/card.css";
import { WorkContext } from "./context/WorkSamplesContext";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Footer from "./layout/Footer";
import Head from "next/head";

export default function Home() {
  useEffect(function () {
    AOS.init({ duration: 900 });
  }, []);

  const workSamplesData = useContext(WorkContext);
  const [randomSamples, setRandomSamples] = useState([]);

  useEffect(() => {
    if (workSamplesData.length > 0 && randomSamples.length === 0) {
      const shuffled = [...workSamplesData].sort(() => 0.5 - Math.random());
      setRandomSamples(shuffled.slice(0, 3));
    }
  }, [workSamplesData]);

  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 data-text="صنایع چوب مهرشاد">صنایع چوب مهرشاد</h1>
        <p>
          <b>
            ساخت و نصب انواع کابینت, درب و دکوراسیون داخلی و سیستم آشپزخانه با
            بهترین کیفیت
          </b>
        </p>
        <p>برای مشاوره و سفارش همین حالا با ما تماس بگیرید!</p>
        <Btn
          title={"تماس با ما"}
          href={"/contact-us"}
          textColor={"#fff"}
          textShadow={"1px 1px 3px #000"}
          border={"1px solid #fff"}
        />
        <Link href={"/contact-us"} className={styles.heroMobileBtn}>
          تماس با ما
        </Link>
        <canvas id="stars" width="300" height="300"></canvas>
      </section>
      <section className={styles.services} id="services">
        <h1 className={styles.title}>خدمات کابینت سازی مهرشاد</h1>
        <ServicesCard />
      </section>
      <section className={styles.workSamples}>
        <h1 className={styles.title}>نمونه کار های کابینت سازی مهرشاد</h1>

        <div className="cardContainer">
          {randomSamples.map((item) => (
            <div class="container" style={{ height: "350px" }} key={item.id}>
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
                    src={`http://localhost:1337${item.image?.url}`}
                    width={100}
                    height={230}
                    class="img"
                    style={{ objectFit: "cover" }}
                    alt={item.title}
                  />
                  <h2 style={{paddingRight: "20px"}}>{item.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.btnContainer}>
          <Link
            title="نمونه کار های بییشتر"
            href={"/work-samples"}
            className={styles.btn}
          >
            نمونه کار های بییشتر
          </Link>
        </div>
      </section>
      <section className={styles.banner}>
        <div className={styles.contact}>
          <span>میخوای با هم صحبت کنیم؟</span>
          <h1>همین الان با ما تماس بگیر</h1>
          <Link className={styles.link} href={"tel:+989125788319"}>
            *09125788319*
          </Link>
        </div>
        <div className={styles.description}>
          <h1>کابینت سازی مهرشاد در تهران</h1>
          <p>
            <strong>
              ساخت کابینت در سبک و طرح های مختلفی انجام می شود برای ساخت کابینت
              آشپزخانه خود حتما به کابینت ساز حرفه ای و مطمئن مراجعه کنید زیرا
              که اکثر کابینت سازها از جنس های مرغوب ورق و چسب و یراق الات
              استفاده نمی‌کنند و باعث فرسودگی سریع کابینت ها می شود.
              <span></span>
              بدون شک در هر صنف (مانند صنف کابینت سازی ) افرادی وجود دارند که
              کار را به بهترین شکل ممکن انجام می دهند و در نهایت نتیجه ی کار
              بسیار حرفه ای به شما تحویل میدهند. برای پیدا کردن بهترین کابینت
              ساز در تهران و کرج باید از افراد متخصص که در کارگاه کابینت سازی
              تهران مشغولند، کمک بگیرید تا به نتیجه ی مطلوب برسید. اگر ساکن
              تهران و کرج هستید می توانید با ما تماس بگیرید و خدمات با کیفیت و
              قیمت مناسب کابینت ساز بهره مند شوید.
            </strong>
          </p>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "طراحی زیبا و منحصر به فرد",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "به همراه قیمت مناسب",
              1000,
              " را از ما بخواهید!",
              1000,
            ]}
            wrapper="span"
            speed={30}
            className={styles.typeAnimation}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
      </section>
      <section className={styles.locationContainer}>
        <div className={styles.location}>
          <div>
            <h1>ما کجاییم؟</h1>
            <p>
              <span>آدرس ما : </span>
              تهران، میدان رسالت، خیابان هنگام، بالاتر از چهار راه استقلال، جنب
              بستنی یاسر، پلاک ۶۲۷، واحد ۱، صنایع چوب مهرشاد
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d340.3145640358666!2d51.51392478581358!3d35.759750336621785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e03c5b379e98b%3A0x505a0df6c0c39043!2z2LXZhtin24zYuSDahtmI2KjbjCDZhdmH2LHYtNin2K8!5e0!3m2!1sen!2suk!4v1712162441243!5m2!1sen!2suk"
            width="500"
            height="300"
            style={{ border: 0, borderRadius: "20px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.locationMap}
          ></iframe>
        </div>
      </section>
      <Footer />
    </main>
  );
}
