import React from 'react';
// import image from "../stevenson.jpg";

export default function Home() {
  return (
    <div>
      <main>
        {/* <img src={image} alt="Pic of Developer." className="absolute object-cover w-full h-full"/> */}
        <section className="relative flex justify-center min-hscreen pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-green-100 font bold cursive leading-none lg:leading-snug home-name">Hello! I'm Stevenson, a Full Stack Web Developer.</h1>
        </section>
      </main>
    </div>
  );
}
