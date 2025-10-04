"use client";

import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Section = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 120px 2rem 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  width: 100%;
  margin: 0;

  @media (max-width: 1024px) { font-size: 3.5rem; }
  @media (max-width: 768px)  { font-size: 2.5rem; }
  @media (max-width: 480px)  { font-size: 2rem; text-align: left; }
`;

const Text = styled(motion.div)`
  flex: 1;
  font-size: clamp(1.125rem, 1.5vw, 1.2rem);
  line-height: 1.6;
  color: #333;
  font-weight: 300;
  margin-bottom: 32px;
  a {
    font-weight: bold;
    color: #000;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

// Optional: a light wrapper so you can reuse .instagram-* class names if you want CSS parity
const CarouselWrap = styled(motion.div)`
  width: 100%;
  padding-bottom: 60px;
  .instagram-image,
  .instagram-video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* make slides square-ish by default; tweak as needed */
  .slide-inner {
    position: relative;
    width: 100%;
    padding-top: 100%; /* 1:1 ratio */
    overflow: hidden;
    border-radius: 16px;
  }
  .slide-inner > img,
  .slide-inner > video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  .swiper-button-prev, .swiper-button-next {
    background-color: #000;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    .swiper-navigation-icon {
      width: 10px;
      color: white;
    }
  }
  .swiper {
    padding-bottom: 50px;
  }
`;

export default function Instagram({ perPage = 24 }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch once: first `perPage` items (you can expand to paginate if needed)
  useEffect(() => {
    let aborted = false;
    (async () => {
      try {
        setLoading(true);
        const u = new URL("https://graph.instagram.com/me/media");
        u.searchParams.set(
          "fields",
          "id,media_type,media_url,thumbnail_url,permalink,caption,timestamp"
        );
        u.searchParams.set("access_token", process.env.NEXT_PUBLIC_InstagramKey);
        u.searchParams.set("limit", String(perPage));

        const res = await fetch(u.toString());
        if (!res.ok) throw new Error("IG fetch failed");
        const data = await res.json();

        if (!aborted) {
          const mapped = (data.data || []).map((it) => ({
            id: it.id,
            type: it.media_type,
            url: it.media_url || it.thumbnail_url,
            thumb: it.thumbnail_url || it.media_url,
            permalink: it.permalink,
            caption: it.caption || "",
            ts: it.timestamp,
          }));
          setItems(mapped);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (!aborted) setLoading(false);
      }
    })();
    return () => { aborted = true; };
  }, [perPage]);

  return (
    <Section >
      <Title initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }} >Conectados contigo</Title>
      <Text initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }} >
        Descubre cómo vivimos y creamos junto a <a href="https://www.instagram.com/diversared">nuestra comunidad en Instagram</a>.
      </Text>

      <CarouselWrap initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }} >
        <Swiper
          modules={[Navigation, Pagination]}
          loop
          navigation
          pagination={{ clickable: true }}
          speed={650}
          spaceBetween={12}
          slidesPerView={3}
          breakpoints={{
            0:   { slidesPerView: 1.2, spaceBetween: 8 },
            480: { slidesPerView: 1.6, spaceBetween: 10 },
            768: { slidesPerView: 2.2, spaceBetween: 12 },
            1024:{ slidesPerView: 3,   spaceBetween: 12 },
            1400:{ slidesPerView: 4,   spaceBetween: 14 }
          }}
        >
          {!loading &&
            items.map((it) => (
              <SwiperSlide key={it.id}>
                <a
                  className="instagram-item"
                  href={it.permalink}
                  target="_blank"
                  rel="noreferrer"
                  title={it.caption}
                  aria-label={it.caption || "Ver en Instagram"}
                >
                  <div className="slide-inner">
                    {it.type === "VIDEO" ? (
                      <video
                        className="instagram-video"
                        src={it.url}
                        poster={it.thumb}
                        muted
                        playsInline
                        loop
                        preload="metadata"
                      />
                    ) : (
                      <img
                        className="instagram-image"
                        src={it.url}
                        alt={it.caption || ""}
                        loading="lazy"
                      />
                    )}
                  </div>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </CarouselWrap>
    </Section>
  );
}