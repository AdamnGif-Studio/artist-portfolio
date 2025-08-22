import { StringsMenu } from "@/app/types";

export const stringsMenu: StringsMenu = {
  website: {
    title: "AdamnGif Studio",
    description: "Where Stories Created",
    email: "your@email.com",
  },
  navbar: {
    logo: {
      teks: "AdamnGif",
      href: "#hero",
      img: "/favicon.ico",
    },
    links: [
      { text: "Home", href: "#hero" },
      { text: "Portfolio", href: "#portfolio" },
      { text: "Projects", href: "#projects" },
      { text: "Commission", href: "#commission" },
    ],
  },
  hero: {
    title: "hero",
    components: {
      background: {
        md: {
          image: "/images/bg-light.png",
          imageDark: "/images/bg-dark.png",
          position: "center",
          size: "cover",
        },
        sm: {
          image: "/images/m-bg-light.png",
          imageDark: "/images/m-bg-dark.png",
          position: "center",
          size: "cover",
        },
      },
      tagline: "✦ Anime-Inspired Creative Studio",
      title: "Make Your Story Feel Like Anime",
      description:
        "We craft worlds, characters, and moments with anime aesthetics. Illustration, motion, interactive experiences, and more.",
      buttons: [
        { text: "View Portfolio", href: "#portfolio" },
        { text: "See My Projects!", href: "#projects" },
      ],
    },
  },
  portfolio: {
    title: "My Portfolio",
    category: ["Personal", "Commission", "Collaboration"],
    description:
      "A showcase of my work, including illustrations, animations, and interactive projects.",
    buttons: [
      {
        text: "See Full Portfolio",
        href: "https://www.artstation.com/adamngif",
        target: "_blank",
      },
    ],
    localFiles: [
      // CARA MENYIMPAN ARTWORK UNTUK GALLERY:
      ///////////
      // 1. local files: Taruh gambar di folder public/assets/artworks/portfolio
      {
        title: "Morning Gaze",
        description: "Artworks for tutorial video material",
        category: "Personal",
        date: new Date("2025-05-18"),
        image: "/assets/artworks/illustration/day.png",
        timelapse_gif: "/assets/artworks/timelapse/day.gif",
        // client: "AdamnGif",
        // client_account: "client_01",
      },
      // 2. Lewat link sharing Google Drive:
      // -https://drive.google.com/file/d/<COPY ID SHARING FILE DARI DISINI>/view?usp=sharing
      // PASTE DISINI: https://drive.usercontent.google.com/download?id=<FILE ID>
      // pastikan image tidak besar sizenya, kalau besar tidak bisa muncul dan lebih baik taruh di folder local saja
      // bisa untuk gif timelapsenya juga kalau mau
      {
        title: "Divinity",
        description: "Illustration of a Goddess",
        category: "Commission",
        date: new Date("2025-04-09"),
        image:
          "https://drive.usercontent.google.com/download?id=13Pt7RXweSDVxCaS9c1JQ5dSFrEpb6IB1",
        timelapse_gif: "/assets/artworks/timelapse/divinity.gif",
        timelapse_url: "https://www.youtube.com/watch?v=A6_OC2fCqfs",
        client: "Divinity",
        // client_account: "https://x.com/<client username>",
      },
      {
        title: "The Final Gambit",
        description: "Uma Musume Fan Art",
        category: "Fan Art",
        date: new Date("2025-08-07"),
        image: "/assets/artworks/illustration/Sarga Competition.png",
        timelapse_gif: "/assets/artworks/timelapse/Sarga Competition.gif",
        // client: "Test Client",
        // client_account: "client_01",
      },
    ],
  },
  projects: {
    title: "Projects",
    category: ["Anime", "Game", "Manga", "Movie"],
    description:
      "A showcase of my projects, including illustrations, animations, and interactive experiences.",
    buttons: [
      {
        text: "See More Projects",
        href: "https://www.artstation.com/adamngif",
        target: "_blank",
      },
    ],
    localFiles: [
      // CARA MENYIMPAN ARTWORK UNTUK GALLERY:
      ///////////
      // 1. local files: Taruh gambar di folder public/assets/artworks/portfolio
      // 2. Lewat link sharing Google Drive:
      // -https://drive.google.com/file/d/<COPY ID SHARING FILE DARI DISINI>/view?usp=sharing
      // PASTE DISINI: https://drive.usercontent.google.com/download?id=<FILE ID>
      // pastikan image tidak besar sizenya, kalau besar tidak bisa muncul dan lebih baik taruh di folder local saja
      {
        title: "Uma Musume:Pretty Derby - The Final Gambit",
        status: "undisclosed", // must match your ProjectStatus type
        category: "Movie", // must match your ProjectCategory type
        summary: "For the thrones of two",
        release_date_option: "undisclosed",
        release_date: new Date("2025-08-10"),
        progress: "concept art",
        image: "/assets/artworks/projects/The Final Gambit.png",
      },
    ],
  },
  commission: {
    title: "Commission",
    description:
      "Bring your ideas to life with custom anime-style artwork. Let's collaborate!",
    buttons: [
      {
        text: "Contact for Commission",
        href: `mailto:your@email.com`,
      },
    ],
    tiers: [
      {
        title: "Full Illustration",
        price: "$100+",
        description: "Full Detailed Anime Illustration",
        sample: "/assets/artworks/illustration/divinity.png",
      },
      {
        title: "Skeb",
        price: "$30+",
        description: "No revision, one character, one Anime Scene",
        sample: "/assets/artworks/illustration/day.png",
      },
      {
        title: "Animation",
        price: "$300+",
        description: "4 revisions, one Anime Scene",
        sample: "/assets/artworks/illustration/Sarga Competition.png",
      },
      {
        title: "Sketch",
        price: "$20+",
        description: "2 revisions, one character, one Anime Scene",
        sample: "/assets/artworks/illustration/day.png",
      },
    ],
  },
  footer: {
    title: "Contact",
    copyright: "© 2025 AdamnGif Studio. All rights reserved.",
    links: [
      {
        text: "your@email.com",
        href: "mailto:your@email.com",
      },
      { text: "Twitter", href: "https://twitter.com/adamngif" },
      { text: "Instagram", href: "https://instagram.com/adamngif" },
      { text: "YouTube", href: "https://youtube.com/@adamngif" },
    ],
  },
};
