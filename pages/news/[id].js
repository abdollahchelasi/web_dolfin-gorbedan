import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const khabar1 = () => {
  const ruter = useRouter();

  return (
    <div>

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
              <Image className={styles.imgkh} width={250} height={150} layout="responsive" src="/images/eft.jpg" />
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