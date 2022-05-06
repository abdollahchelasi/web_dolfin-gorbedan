import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/Home.module.css";

const khabar1 = (props) => {
  const ruter = useRouter();

  return (
    <div>
      {ruter.query.id == 1 ? (
        <div>
          <Head>
        <title>خبر ورزشی - همه نگاه ها به دلفین</title>
        <link rel='icon' href='/images/dolfin.png' />
        <meta name="keywords" content="همه نگاه ها به دلفین گربدان , خبر ورزشی قشم , آخرین خبر قشم"/>
        <meta name="description" content=" همه نگاه‌ها به دلفین گربدان, لیگ 2 در اوج حساسیت "/>
      </Head>
          <Container>
            <Row>
              <Col sm={12} className={styles.news1}>
                <h3> همه نگاه‌ها به دلفین گربدان, لیگ 2 در اوج حساسیت </h3>
              </Col>

              <Col>
                <p className={styles.pp}>
                  جزیره قشم از جمله شهرهایی در استان هرمزگان است که فوتبال در آن
                  از اهمیت ویژه و پویایی خاصی برخوردار است و طی روزهای گذشته
                  مسابقات لیگ دسته دوم قشم با حضور 9 تیم از شهر و روستاهای این
                  شهرستان با هیجان خاصی دنبال می‌شود.{" "}
                </p>
              </Col>
              <Col sm={12}>
                <img className={styles.imgkh} src="/images/i34.jpg" />
              </Col>
              <Col sm={12}>
                <p className={styles.pp}>
                  به گزارش خبرگزاری گربدان از قشم، جزیره قشم از جمله شهرهایی در
                  استان هرمزگان است که فوتبال در آن از اهمیت ویژه و پویایی خاصی
                  برخوردار است، کما اینکه از اول سال جاری و در ماه‌های اخیر طبق
                  تقویم سالیانه به صورت مستمر تمام مسابقات از جمله بازی‌های رده
                  سنی زیر 10 سال، زیر 12 سال، زیر 14 سال، نوجوانان و رده سنی
                  جوانان برگزار شده و در حال حاضر طی روزهای گذشته مسابقات لیگ
                  دسته دوم قشم با حضور 9 تیم از شهر و روستاهای این شهرستان با
                  هیجان خاصی دنبال می‌شود. در اتفاقی جالب در این دوره از مسابقات
                  تیم دولفین روستای گربدان با مدیرعاملی مصطفی زارعی که برای
                  نخستین بار در مسابقات رسمی پا به عرصه فوتبال گذاشته این تیم
                  برابر قرعه، هفته اول را به استراحت پرداخت. اما در دیگر بازی‌ها
                  در هفته اول این مسابقات تیم پاس قشم با نتیجه یک بر صفر تیم
                  پیروزی قشم را شکست داد، مهتشان بندر لافت با نتیجه چهار بر دو
                  از سد تیم عقاب قشم گذشت، والفجر با نتیجه چهار بر یک استقلال
                  قشم را شکست داد و پریما اسپرت با 6 گل وحدت گیاهدان را گلباران
                  کرد. اما در هفته دوم لیگ دسته دو قشم تیم دولفین روستای گربدان
                  اولین بازی رسمی خود را به مصاف تیم عقاب قشم رفت و علی رغم
                  شایستگی بازیکنان این تیم به دلیل بی‌تجربگی سه امتیاز این دیدار
                  را به حریف قشمی خود واگذار کرد. در دیگر بازی‌های هفته دوم با
                  انجام چهار بازی در این مسابقات دو تیم همشهری پاس و استقلال قشم
                  به مصاف یکدیگر رفتند و استقلال توانست با نتیجه سه بر صفر از سد
                  آبی‌پوشان بگذرد، مهتشان بندرلافت با نتیجه پنج بر دو وحدت
                  گیاهدان را در هم کوبید، والفجر و پریما اسپرت نیز با تساوی دو
                  بر دو رضایت دادند. در هفته سوم این بازی ها تیم پیروزی قشم که
                  در هفته اول شکست خورده بود در مصاف با استقلال این شهر با نتیجه
                  یک بر صفر پیروز شد. اما در دومین روز از هفته سوم این لیگ تیم
                  دولفین روستای گربدان که با ترکیب یعقوب محمدی، اسماعیل صالحی
                  پور، یعقوب نیکخواه، حیدر فجر، حسن زارعی، یحیی شادان، ماجد
                  کوهی‌نژاد، فرشاد خاکی، امید زارعی، فرهاد زارعی و صلاح
                  الدین‌نیکخواه در مصاف با تیم وحدت گیاهدان پا به مستطیل سبز
                  گذاشت، توانست با حریف قدر خود با اتحاد و انسجام با گل های
                  یعقوب محمدی ،حیدر فجر و امیر کاروان با نتیجه پرگل سه بر صفر
                  اولین برد و سه امتیاز خود را در مسابقات رسمی ثبت و با انگیزه و
                  امید به دیگر بازی‌ها نیم نگاهی به معتبرترین لیگ قشم مسابقات
                  لیگ دسته اول قشم داشته باشد.{" "}
                </p>
              </Col>
              <Col>
                <p sm={12} className={styles.pp}>
                  دیگر بازیکنان این تیم عبدالقادر مقدسی، معین‌فروزنده، امیر
                  کاروان، لقمان‌زارعی، عبدالله نیکخواه، ولید فروزان، مسعود
                  خوه،خلیل شادمان و محمد زارعی به مربیگری عادل‌نیکخواه و
                  سرمربیگری محمد متوسل بودند. قضاوت این دیدار برعهده فرزاد
                  شیرمردی ،امین زارعی و امیر همتی بود. در حال حاضر تیم‌های
                  مهتشان بندر لافت و پاس فجر قشم با شش امتیاز به ترتیب در مکان
                  اول و دوم، پریما اسپرت و والفجر قشم با چهار امتیاز در مکان سوم
                  و چهارم، تیم های عقاب و دولفین گربدان با سه امتیاز در مکان
                  پنجم و ششم و تیم پیروزی قشم با سه امتیاز در مکان هفتم وتیم های
                  استقلال و وحدت گیاهدان نیز بدون امتیاز در مکان های هشتم و نهم
                  جدول قرار دارند.{" "}
                </p>
              </Col>
              <Col sm={12}>
                <img className={styles.imgkh} src="/images/jadval.jpg" />
              </Col>

              <Col>
                <p sm={12} className={styles.pp}>
                  به گزارش خبرگذاری گربدان از قشم، روستای گربدان از توابع بخش
                  مرکزی با جمعیتی بالغ بر یک‌هزار و 100 نفر در فاصله 45 کیلومتری
                  شهر قشم واقع شده است.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <h1></h1>
      )}

      {ruter.query.id == 2 ? (
        <div>
           <Head>
        <title>خبر ورزشی -  برد پرگل دلفین گربدان مقابل قایقسازی رمچاه </title>
        <link rel='icon' href='/images/dolfin.png' />
        <meta name="keywords" content="دلفین گربدان مقابل قایقسازی رمچاه , خبر ورزشی مسابقات قشم , اخبار قشم"/>
        <meta name="description" content=" هفته پایانی رقابتهای لیگ دو امروز در حالی آغاز شد که در تک بازی امروز دلفین گربدان توانست قایقسازی رمچاه را گلباران کند. در این دیدار که برای دو تیم کاملأ تشریفاتی بود، دلفین گربدان توانست با گلهای یعقوب محمدی با نتیجه 5 بر 1 از سد قایقسازی رمچاه بگذرد تا با 11 امتیاز به کار خود در این فصل پایان دهد. "/>
      </Head>
          <Container>
            <Row>
              <Col sm={12} className={styles.news1}>
                <h3> برد پرگل دلفین گربدان مقابل قایقسازی رمچاه </h3>
              </Col>

              <Col>
                <p className={styles.pp}>
                  هفته پایانی رقابتهای لیگ دو امروز در حالی آغاز شد که در تک
                  بازی امروز دلفین گربدان توانست قایقسازی رمچاه را گلباران کند.
                  در این دیدار که برای دو تیم کاملأ تشریفاتی بود، دلفین گربدان
                  توانست با گلهای یعقوب محمدی با نتیجه 5 بر 1 از سد قایقسازی
                  رمچاه بگذرد تا با 11 امتیاز به کار خود در این فصل پایان دهد.
                  از سویی قایقسازی رمچاه نیز که در این فصل موفق نشده بود امتیازی
                  کسب کند در این دیدار هم تن به شکست داد تا با نه شکست متوالی
                  بدترین رکورد ممکن را از آن خود کند.یعقوب محمدی با بثمر رساندن
                  پنج گل برای دلفین گربدان توانست به تنهایی 10 گل زده در صدر
                  جدول گلزنان قرار بگیرد و تک گل قایقسازی رمچاه را نیز حسام
                  اسلامی وارد دروازه دلفین گربدان کرد.
                </p>
                <p>رقابتهای لیگ دسته دو</p>
                <p>هفته نهم</p>
                <p>شنبه 96/10/02</p>
                <p className={styles.bazi}>دلفین گربدان 5 - 1 قایقسازی رمچاه</p>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <h1></h1>
      )}

      {ruter.query.id == 3 ? (
        <div>
          <Head>
        <title>خبر ورزشی - افتتاح زمین چمن دلفین گربدان</title>
        <link rel='icon' href='/images/dolfin.png' />
        <meta name="keywords" content="  افتتاح زمین چمن دلفین گربدان , خبر ورزشی افتتاح زمین چمن قشم , اخبار قشم"/>
        <meta name="description" content="افتتاح و بهره برداری زمین چمن مصنوعی دلفین روستای گربدان قشم "/>
      </Head>
          <Container>
            <Row>
              <Col sm={12} className={styles.news1}>
                <h3>افتتاح و بهره برداری زمین چمن مصنوعی دلفین روستای گربدان قشم </h3>
              </Col>

              <Col sm={12}>
              <img className={styles.imgkh} src="/images/eft.jpg" />
              </Col>

              <Col>
              <p className={styles.pp}>
              زمین چمن مصنوعی دلفین روستای گربدان قشم افتتاح و به بهربرداری رسید.
با حضور دکتر تقی زاده معاون حقوقی، مجلس و امور استان های وزارت ورزش و جوانان،دکترمرادی نماینده مردم استان در مجلس شورای اسلامی، امیاری مدیرکل ورزش و جوانان هرمزگان و جمعی از مسوولین محلی زمین چمن مصنوعی دلفین روستای گربدان قشم افتتاح شد. شایان گفتن است ، زمین چمن مصنوعی محله ای روستای گربدان بخش مرکزی شهرستان قشم با اعتباری بالغ بر ۶۰۰ میلیون تومان و متراژ ۹۲۴ متر مربع از محل اعتبارات استانی و در سال ۹۹ شروع و در ۲۳ خرداد۱۴۰۰ مورد بهره برداری و دراختیار مردم روستای گربدان قشم قرارگرفت.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
};

export default khabar1;
