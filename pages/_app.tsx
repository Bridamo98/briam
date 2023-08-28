import 'nextra-theme-blog/style.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/main.css'
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useCallback } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <div id="particles-js">
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "repulse"
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse"
                  },
                  resize: true
                },
                modes: {
                  push: {
                    quantity: 5
                  },
                  repulse: {
                    distance: 200,
                    duration: 1
                  }
                }
              },
              particles: {
                color: {
                  value: "#444444"
                },
                links: {
                  color: "#444444",
                  distance: 100,
                  enable: true,
                  opacity: 0.2,
                  width: 3
                },
                collisions: {
                  enable: false
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce"
                  },
                  random: false,
                  speed: 0.1,
                  straight: false
                },
                number: {
                  density: {
                    enable: true,
                    area: 800
                  },
                  value: 150
                },
                opacity: {
                  value: 0.1
                },
                shape: {
                  type: "circle"
                },
                size: {
                  value: { min: 1, max: 5 }
                }
              },
              detectRetina: true
            }}
        />
        <Head>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS"
            href="/feed.xml"
          />
          <link
            rel="preload"
            href="/fonts/Inter-roman.latin.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <Component {...pageProps} />
    </div>
  )
}
