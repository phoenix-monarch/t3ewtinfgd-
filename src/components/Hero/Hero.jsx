import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./hero.css";
import {
  FaCalendar,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaPlayCircle,
} from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRecentAnime, useTrendingAnime } from "../../hooks/useKitsu";
import LoadingSpinner from "../LoadingSpinner";
import { Link } from "react-router-dom";

export default function Hero() {
  const { isLoading, data } = useRecentAnime();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const heroSlide = data?.map((el, idx) => {
    const item = el.attributes;

    return (
      <SwiperSlide data-bs-interval="1500" key={el.id}>
        <div className={`carousel-item`}>
          <div className="anime-info">
            <div className="anime-info-content">
              <span className="rank">#{idx + 1} Spotlight</span>
              <h1 className="anime-title">
                {item.titles.en || item.titles.en_jp}
              </h1>
              <div className="anime-statistics">
                <span className="anime-st-item">
                  <FaPlayCircle size={14} />
                  {item.subtype}
                </span>
                <span className="anime-st-item">
                  <FaClock size={14} />
                  {item.episodeLength + "m"}
                </span>

                <span className="anime-st-item">
                  <FaCalendar size={13} /> {item.startDate}
                </span>
                <span className="anime-st-item">
                  <span className="quality">HD</span>
                  <span className="episode-count">
                    CC:{item.episodeCount || "Unknown"}
                  </span>
                </span>
              </div>
              <p className="description">
                {(item.background && item.description.slice(0, 250) + "...") ||
                  (item.synopsis && item.synopsis.slice(0, 250) + "...")}
              </p>
              <div className="button-wrapper">
                <button className="btn-primary hero-button">
                  <FaPlayCircle size={12} /> Watch Now
                </button>
                <Link
                  to={`/details/kitsu/${el.id}`}
                  className="btn-secondary hero-button"
                >
                  {" "}
                  Details <FaChevronRight size={12} />
                </Link>
              </div>
            </div>
          </div>
          <img
            className="carousel-img"
            src={
              item.posterImage?.original ||
              item.posterImage?.large ||
              item.posterImage?.small ||
              item.posterImage?.medium
            }
            alt={item.titles.en_jp || item.titles.en}
          />
        </div>
      </SwiperSlide>
    );
  });
  useEffect(() => {
    function handleChange() {
      setScreenWidth(window.innerWidth);
    }
    const listener = window.addEventListener("resize", handleChange);
    return () => window.removeEventListener(listener, handleChange);
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="carousel slide" style={{ position: "relative" }}>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        direction="horizontal"
        loop={true}
        autoplay={true}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={{
          nextEl: ".carousel-control-next",
          prevEl: ".carousel-control-prev",
        }}
        className="carousel slide"
      >
        {heroSlide}
      </Swiper>
      <div className="carousel-controls-wrapper">
        <button
          className="carousel-controls carousel-control-next trans-03 "
          type="button"
        >
          <FaChevronRight size={15} />
        </button>
        <button
          className="carousel-controls carousel-control-prev trans-03  "
          type="button"
        >
          <FaChevronLeft size={15} />
        </button>
      </div>
    </div>
  );
}
