/** Paste streaming / album URL when released; empty = LISTEN without external link */
export const LISTEN_HREF = "https://album.link/past_present_future";

export const MAIN_HERO_IMAGE = "/images/main%20page%20pic.jpg";

export const VINYL_SLIDES = ["/images/vinyl_2.png", "/images/vinyl_1.png"];

export const VINYL_ORDER_SCRIPT = `${process.env.PUBLIC_URL || ""}/send-vinyl.php`;

export const MUSIC_RELEASES = [
  {
    title: "Past Present Future",
    subTitle: "ALBUM / 2026",
    image: "/images/music/1. vonavi  - past present future_album 2026.jpg",
    link: "https://album.link/past_present_future",
  },
  {
    title: "War Diary",
    subTitle: "ALBUM / 2023",
    image: "/images/music/2. vonavi - war diary_album 2023.jpg",
    link: "https://album.link/war_diary",
  },
  {
    title: "Reset",
    subTitle: "ALBUM / 2022",
    image: "/images/music/3. vonavi  - reset album 2022.png",
    link: "https://song.link/reset_",
  },
  {
    title: "REFLECTION",
    subTitle: "ALBUM / 2019",
    image: "/images/music/4. vonavi - reflection_album 2019.jpg",
    link: "https://album.link/reflection",
  },
];

export const VIDEOS = [
  {
    // title: "VONAVI ft. Run Rivers -  Still With Me",
    title: "VONAVI ft. Run Rivers -  Girl in the Mirror",
    link: "https://youtu.be/a35a5sIOI5c?si=j-xZsUNuVGSBpW6k&autoplay=1&rel=0&showinfo=0",
    image: "url(/images/videoThumbnail/2.stillWithMe.jpg)",
  },
  {
    title: "VONAVI ft. Run Rivers - Regrow",
    link: "https://www.youtube.com/embed/FTmQKwMDp40?autoplay=1&rel=0&showinfo=0",
    image: "url(/images/videoThumbnail/3.regrow.jpg)",
  },
  {
    title: "VONAVI ft. Run Rivers - Sunburst",
    link: "https://www.youtube.com/embed/6RL9rW622YI?autoplay=1&rel=0&showinfo=0",
    image: "url(/images/videoThumbnail/4.sunburst.jpg)",
  },
  {
    title: "VONAVI ft. Lorna Rose - Fear For You",
    link: "https://www.youtube.com/embed/CVUfqsOOz00?autoplay=1&rel=0&showinfo=0",
    image: "url(/images/videoThumbnail/5.fearForYou.jpg)",
  },
];
