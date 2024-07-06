import styles from "./page.module.css";
import Nav from "./components/navbar/Nav";
import Footer from "./components/navbar/footer/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className={styles.homesection}>
        <Nav />
        <div className={styles.homesectionContainer}>
          <h1 className={styles.homesectionTilte}>
            Resonating Life <br />
            Mansion
          </h1>
          <div className={styles.discoverContainer}>
            <div className={styles.discover}>
              ــــــــــــــــــ Discover More ــــــــــــــــــ
            </div>
            <div className={styles.numbersSlider}>
              <IoIosArrowBack /> <span>0</span>
              <div className={styles.line}></div> <span>3</span>
              <IoIosArrowForward />
            </div>
          </div>
          <div className={styles.conatctInfo}>
            <div className={styles.location}>
              <IoLocationSharp className={styles.icon} />
              Miami
            </div>
            <div className={styles.phoneNumber}>+9 018887579</div>
            <div className={styles.email}>shddesign@hmail.com</div>
          </div>
        </div>
      </div>
      <div className={styles.aboutSection}>
        <h1 className={styles.aboutSectionTitle}>About Us</h1>
        <div className={styles.contentContainer}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.greenSpace}
              src="/greenSpace.jpeg"
              alt="greenSpace img"
              width={700}
              height={430}
              priority
            />
          </div>
          <div className={styles.aboutSectionParag}>
            At SH Design we add value by applying a holistic, human centred
            design approach. We synthesize best practice, user insights, our
            client’s research and competitor analysis with to create meaningful
            experiences in environments.Our comprehensive planning and strategic
            approach, enhanced by our years of experience working with leading
            retail developers and landlords informs our understanding of the
            critical factors that make a successful public and retail
            environment.
          </div>
        </div>
      </div>
      <div className={styles.porjectsSection}>
        <h1 className={styles.porjectsSectionTitle}>Our projects</h1>
        <p className={styles.porjectsParag}>
          We released more than 150 commercial and private projects all around
          the world, providing our clients with custom solutions in stylish,
          functional, and well-thought-out designs.
        </p>
        <div className={styles.imgaesSlider}>
          <IoIosArrowBack className={styles.icon} />
          <div className={styles.imgContainer}>
            <Image
              className={styles.image}
              src="/img1.jpeg"
              alt=" image"
              width={3000}
              height={4300}
              priority
            />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.image}
              src="/img2.png"
              alt=" image"
              width={3000}
              height={4300}
              priority
            />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.image}
              src="/img3.png"
              alt="image "
              width={3000}
              height={4300}
              priority
            />
          </div>
          <IoIosArrowForward className={styles.icon} />
        </div>
      </div>
      <div className={styles.sunSection}>
        <div className={styles.container}>
          <div className={styles.sunImage1}>
            <Image
              className={styles.image}
              src="/sunImage1.jpeg"
              alt="sun Image"
              width={550}
              height={340}
              priority
            />
          </div>
          <div className={styles.sunImage2}>
            <Image
              className={styles.image}
              src="/sunImage1.jpeg"
              alt="sun Image"
              width={900}
              height={540}
              priority
            />
          </div>
          <div className={styles.sunImage3}>
            <Image
              className={styles.image}
              src="/sunImage3.jpeg"
              alt="sun Image"
              width={410}
              height={290}
              priority
            />
          </div>
          <h1 className={styles.suntitle}>Sun Imperial Mansion</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
