import Image from "next/image";
import "./page.scss";
export default function Home() {
  return (
    <main className="main" id="product">
      <div className="hero">
        <div className="hero__left">
        <h1 className="hero__left__title">
          Nisi ad tempor dolore dolore sint qui do anim
        </h1>
        <p className="hero__left__desc">
          Eu consequat exercitation sint quis voluptate deserunt minim pariatur
          consectetur anim occaecat. Lorem pariatur non velit anim duis ad non
          dolore. Proident magna labore magna incididunt in minim.Nisi ad tempor dolore dolore sint qui do anim reprehenderit labore do
          consequat.
        </p>
        <button className="hero__left__button">Learn More</button>
        </div>
        <div className="hero__right">
          <Image alt="ai" src="/ai.png" fill className="image"/>
        </div>
      </div>
    </main>
  );
}
