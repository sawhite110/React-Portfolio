import React from 'react';
import { Image } from 'semantic-ui-react';

export default function Home() {
  return (
    <div>
      <main>
      <Image circular size='large' src='busiconnontransparent.png' />
        <section className="relative flex justify-center min-hscreen pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-green-100 font bold cursive leading-none lg:leading-snug home-name">Hello! I'm Stevenson, a Full Stack Web Developer.</h1>
        </section>
      </main>
    </div>
  );
}
