import React from "react";
import HeaderSecond from "../../components/HeaderSecond";
import WidthContainer from "../../components/UI/WidthContainer";
import Logo__DeveloperMainP from "./Section/Logo__DeveloperMainP";
import About__DeveloperMainP from "./Section/About__DeveloperMainP";
import Projects__DeveloperMainPage from "./Section/Projects__DeveloperMainPage";
import Areas__DeveloperMainP from "./Section/Areas__DeveloperMainP";
import ProjectsCompany__DeveloperMain from "./Section/ProjectsCompany__DeveloperMain";
import HelpForm from "../../components/HelpForm";
import CollectionDeveloper from "../../components/CollectionDeveloper";
import Company from "../../components/Company";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./developerMainPage.scss";
import { useTranslation } from "react-i18next";

const developerMainPage = () => {
  const { t, i18n } = useTranslation();

  const developers = [
    {
      title: "Emaar",
      value: "emaar",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/10/burj-khalifa.jpg",
      projects_amount: "241",
      projects_price_from: "750,888",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/05/emaar-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/emaar-beachfront.jpg",
          area_title: "Emaar Beachfront",
          area_data: "Price from 1,500,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/emaar-south-scaled.jpg",
          area_title: "Emaar South",
          area_data: "Price from 450,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/dubai-marina.jpg",
          area_title: "Dubai Marina",
          area_data: "Price from 600,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/downtown-header.jpg",
          area_title: "Downtown Dubai",
          area_data: "Price from 428,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubai-hills-estate.jpg",
          area_title: "Dubai Hills Estate",
          area_data: "Price from 861,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubai-creek-harbour-bg-scaled.jpg",
          area_title: "Dubai Creek Harbour",
          area_data: "Price from 850,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2022/02/arabian-ranches-3-1.jpg",
          area_title: "Arabian Ranches 3",
          area_data: "Price from 1,200,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout1.1"),
        t("developerParagraphAbout1.2"),
        t("developerParagraphAbout1.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2020/10/dubai-creek-residences-20.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2020/10/Collective-2-1.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/Maple-2-1.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/vida-residence-by-emaar-properties-2-1.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/Creekside-18-1.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "Creek Waters 2",
            "exudes a glamorous aura and boasts a unique character amidst the towering skyscrapers of varying architectural designs on Creek Island. The stylish residential tower offers a wide range of luxurious apartments, lavish townhouses, a cutting-edge penthouse, and a breathtaking amenities podium. This sanctuary of tranquilly and elegance rises in the heart of Dubai Creek Harbour, offering unmatched vistas of the Creek and the magnificent Dubai Skyline, as well as convenient access to exceptional dining and curated shopping experiences.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/Collective-1-1024x659.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/Opera-Grand-1-1-1024x885.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/Palace-Residences-3-1024x577.jpg",
          ],
        },
        {
          container_info: [
            "Born out of experience",
            "and the belief that there is an ever-increasing need for independent co-living spaces, Socio is a purpose-built and purpose- designed residence for those that want to have shared experiences. Socio is a fresh, hip and colourful social hub that provides owners and tenants with private residences opening onto a variety of world-class shared amenities.",
            "Enjoy an entire ground floor as your lounge, relax in the pool, work out at the sports facilities, experience retail and dining shops, unwind at the library or relish your favourite movies in the cinema room. Socio supports, enriches and inspires its residents through a community of like-minded investors, entrepreneurs, professionals and creatives from all corners of the world.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/forte-by-emaar-properties-7.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/Vida-Residences-3-1024x632.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/The-Cove-4-1024x480.jpg",
          ],
        },
        {
          container_info: [
            "Address Residences Al Marjan Island is",
            "a resort-style development by Address Hotels + Resorts in the heart of Al Marjan Island's luxurious lifestyle, located directly by the Arabian Sea and offering guests direct access to stunning beachfront and proximity to the urban hub of the island.",
            "As a part of the vibrant View community, the hotel brings the Address Hotels + Resorts signature blend of service standards and lifestyle amenities to Ras Al Khaimah. Guests can indulge in a variety of world-class facilities, including unique restaurant concepts like The Restaurant at Address, two speciality dining outlets, a modern fitness centre, cutting- edge spa, and a scenic pool.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/Collective-7-1024x590.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/Dubai-Creek-Residences-13-1024x526.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/08/Rove-City-Walk-1024x576.jpg",
          ],
        },
      ],
    },
    {
      title: "DAMAC",
      value: "damac",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/10/damac-1.jpg",
      projects_amount: "188",
      projects_price_from: "307,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/05/Damac_logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/dubai-marina.jpg",
          area_title: "Dubai Marina",
          area_data: "Price from 600,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/damac-hills-0.jpg",
          area_title: "DAMAC Hills",
          area_data: "Price from 340,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/akoya-oxygen.jpeg",
          area_title: "AKOYA Oxygen",
          area_data: "Price from 1,000,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/downtown-header.jpg",
          area_title: "Downtown Dubai",
          area_data: "Price from 428,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/business-bay_-scaled.jpg",
          area_title: "Business Bay",
          area_data: "Price from 410,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubailand.jpg",
          area_title: "Dubailand",
          area_data: "Price from 322,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/11/dubai-canal-51.jpg",
          area_title: "Dubai Canal",
          area_data: "Price from 931,150 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/jumeirah-village-circle-scaled.jpg",
          area_title: "Jumeirah Village Circle",
          area_data: "Price from 400,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/downtown-jebel-ali_-scaled.jpg",
          area_title: "Downtown Jebel Ali",
          area_data: "Price from 225,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout2.1"),
        t("developerParagraphAbout2.2"),
        t("developerParagraphAbout2.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2021/10/damac-9.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/damac-11.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/damac-10.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/damac-12.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "DAMAC Hills 2",
            "(previously known as Akoya and Akoya Oxygen). The Trump International Golf Club is located here. The project offers villas, townhouses, penthouses and land plots. DAMAC Hills 2 is positioned as the greenest community in the UAE and includes the following communities: Hajar 2 Stone Villas, Bait Al Aseel Villas, Just Cavalli Villas, Akoya Genus Villas, Sahara Villas, Avencia 2 Villas and Aknan Villas. The minimum cost of real estate for these projects are AED 1,100,000 (USD 300,000). Some residential properties can also be purchased off-plan under favorable payment plans from the developer. DAMAC Hills 2 shows a high return on investment: ROI is 6.5%.",
            "*The price is valid for 2024",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/damac-13-1024x394.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/damac-15.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/damac-16.jpg",
          ],
        },
        {
          container_info: [
            "Greenwoods Townhouses",
            "is one of the newest projects in DAMAC Hills. The estimated number of 3 and 4-bedroom villas in the community is around 48. The construction started in May 2021. Freehold ownership of Greenwoods facilities includes all kinds of entitlements for the owner. The “star” facade with built-in sparkling LEDs will be the main feature of the villas in Greenwoods Townhouses. The cost of residences will start from AED 1,700,000 (USD 463,000).",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/damac-17.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/damac-18.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/damac-19.jpg",
          ],
        },
        {
          container_info: [
            "Cavalli Tower",
            "is an elite residential development in Dubai Marina and is the second joint project of DAMAC Properties and the world-renowned fashion brand Roberto Cavalli. The complex is situated within walking distance from the sea and JBR. The 70-storey tower offers 1-4 bedroom apartments and a limited series of penthouses, with residences starting from the fifth floor. There will also be “flying villas” with swimming pools, spacious terraces and relaxation areas on the upper floors of the Cavalli Tower. The development is not only the sole skyscraper in the world built under the Cavalli brand but also a residential project. In each apartment there will be a vertical wall for hydroponics in order to grow garden crops. The complex also offers its residents an area to relax in, with the closed Malibu Bay lagoon. Moreover, Cavalli Tower residents will have access to an a la carte service (menu of 7 branded restaurants), infinity pools, a modern gym, SPA center and other world-class amenities. The cost of luxury real estate in Cavalli Tower will be approximately AED 2,300 (USD 626) per 1 sq.ft.",
            "*The price is valid for 2024",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/damac-21-1024x706.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/damac-22-1024x479.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/damac-20.jpg",
          ],
        },
      ],
    },
    {
      title: "Nakheel",
      value: "nakheel",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/nakheel-4.jpg",
      projects_amount: "53",
      projects_price_from: "477,600",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/07/nakheel-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/palm-jumeirah.jpg",
          area_title: "Palm Jumeirah",
          area_data: "Price from 1,000,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubailand.jpg",
          area_title: "Dubailand",
          area_data: "Price from 322,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubai-international-city.jpg",
          area_title: "International City",
          area_data: "Price from 180,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/nad-al-sheba.jpg",
          area_title: "Nad Al Sheba",
          area_data: "Price from 1,729,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/jebel-ali-scaled.jpg",
          area_title: "Jebel Ali",
          area_data: "Price from 1,219,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/mirdif-hills.jpg",
          area_title: "Mirdif Hills",
          area_data: "Price from 551,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout3.1"),
        t("developerParagraphAbout3.2"),
        t("developerParagraphAbout3.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2021/11/nakheel-7.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/nakheel-8.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/nakheel-6.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "The Palm Tower Residences",
            "Located in the Palm Jumeirah area, this residence sells fully furnished studios and apartments",
            "The number of bedrooms ranges from 1 to 3",
            "A distinctive feature are the picturesque views of the Palm Jumeirah",
            "The starting price begins at AED 1,250,000 (USD 340,300).",
            "Nad Al Sheba",
            "This is a residential complex of the closed type, which offers villas with4 or 5 bedrooms",
            "They are decorated in the Mediterranean and Moroccan style",
            "The starting price is AED 2,800,000 (USD 762,300)",
            "It is a 30-minute drive from the Expo 2020 site.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/nakheel-9.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/nakheel-10.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/nakheel-11.jpg",
          ],
        },
        {
          container_info: [
            "Murooj Al Furjan",
            "Buyers are offered comfortable 3 and 4 bedroom townhouses in the family gated community, Nakheel Properties",
            "This is a residential area of Al Furjan in Dubai, which is popular due to the presence of only premium real estate, developed infrastructure",
            "Each house has a private garden, maid’s room, outdoor terraces, and a garage for two cars",
            "It also already has all the necessary appliances for a comfortable life",
            "Starting price from AED 1,700,000 (USD 463,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/nakheel-12-1024x561.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/nakheel-13-1024x561.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/nakheel-14-1024x561.jpg",
          ],
        },
      ],
    },
    {
      title: "Sobha",
      value: "sobha",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/sobha-2.jpg",
      projects_amount: "42",
      projects_price_from: "796,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/sobha-realty-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/mohammed-bin-rashid-city-scaled.jpg",
          area_title: "MBR City",
          area_data: "Price from 480,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/sheikh-zayed-road-scaled.jpg",
          area_title: "Sheikh Zayed Road",
          area_data: "Price from 706,777 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout4.1"),
        t("developerParagraphAbout4.2"),
        t("developerParagraphAbout4.3"),
      ],

      gallery_images: [],
      section_5_info: [
        {
          container_info: [
            "Sobha District One Residences, a complex of apartment buildings ranging from 5 to 17 stories",
            "The community is located in Mohammed Bin Rashid City, surrounded by landscaped parks, jogging and cycling paths",
            "Furnished one- to two-bedroom apartments of 701-1396 sq",
            "ft",
            "are available",
            "The cost of such properties starts from AED 1,100,000 (USD 300 000)",
            "A distinctive feature of the apartments is the floor-to-ceiling panoramic windows overlooking the picturesque park area and The Crystal Lagoon",
            "The community features amenities such as a clubhouse, cafes, restaurants, stores, a fitness area, a professional golf course, access to a private beach and a 24-hour concierge service.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/sobha-2-1-1024x576.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/sobha-4-1024x578.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/sobha-5.jpg",
          ],
        },
        {
          container_info: [
            "Sobha Forest is a complex of premium 4 and 5 bedroom villas located in Mohammed Bin Rashid City",
            "It serves as a self-contained sub-community within Sobha Hartland",
            "Sobha Villas combine the coziness and tranquility of a country lifestyle with modern urban amenities",
            "Each property has its own landscaped garden and parking space",
            "The materials used for the interiors include marble, solid wood and porcelain stoneware",
            "The 5-bedroom villas are also equipped with a high-speed elevator",
            "An optional car gallery with glass doors and other amenities can also be added to the property",
            "Villas range in size 6,500 – 8,900 sq",
            "ft",
            "and are priced from AED 12,200,000 (USD 3,321,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/sobha-8-1024x502.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/sobha-6-1024x682.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/sobha-7-1024x682.jpg",
          ],
        },
      ],
    },
    {
      title: "Dubai Properties",
      value: "dubai-properties",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-2.jpg",
      projects_amount: "39",
      projects_price_from: "671,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/06/Dubai-Properties-Logo1.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/burj-khalifa-district-00-1-scaled.jpg",
          area_title: "Burj Khalifa District",
          area_data: "Price from 1,700,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/jbr.jpg",
          area_title: "JBR",
          area_data: "Price from 1,150,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubailand.jpg",
          area_title: "Dubailand",
          area_data: "Price from 322,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/culture-village_-scaled.jpg",
          area_title: "Culture Village",
          area_data: "Price from 1,000,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/villanova.jpg",
          area_title: "Villanova",
          area_data: "Price from 1,212,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/mudon-scaled.jpg",
          area_title: "Mudon",
          area_data: "Price from 970,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout5.1"),
        t("developerParagraphAbout5.2"),
        t("developerParagraphAbout5.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-4.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-9.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-12.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-10.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-11.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-8.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "For this, the corresponding structural enterprises have been created, in addition to Dubai Properties:",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-5-1024x767.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-7-1024x682.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-6-1024x576.jpg",
          ],
        },
        {
          container_info: [
            "Dubai Creek Harbour is a colossal project in conjunction with Emaar Properties",
            "The master plan of the upcoming development includes residential and commercial buildings, a park, on-site parking, landscaped gardens and a square",
            "As well as that, the project plans to feature a promenade area, Creek Beach, an area with residential complexes, The Island District, and a shopping and entertainment area called Dubai Square",
            "There are 1-3 bedroom apartments available for sale, as well as 4-bedroom penthouses in many major complexes, such as 17 Icon Bay (due for completion in Q4 2022), Creek Gate (to be ready for handover in Q4 2021), Bayshore (Q3 2022), Breeze (completed) and Creek Horizon which overlooks the Burj Khalifa (completed), just to name a few",
            "The prices start from AED 1,029,000 (USD 280,000), and have an expected ROI of 6%.",
            "1 / JBR is a 47-storey residential tower in Jumeirah Beach Residence with private beach access and stunning panoramic sea views",
            "The development offers an array of 2-4 bedroom apartments and 5-bedroom penthouses for the starting price of AED 7,000,000 (USD 1,900,000)",
            "The development of 1/JBR was completed in Q4 2019.",
            "Serena is a complex with an area of ​​about 8.6 million sq.ft",
            "and consists of Casa Dora, Bella Casa and Casa Viva",
            "Interested buyers can choose from a range of 2-3 bedroom townhouses and 3-bedroom villas",
            "These properties are sold by the developer, but there is an opportunity to purchase them on the secondary market at a minimum cost of AED 1,820,000 (USD 495,000)",
            "The rental yield averages at 6%.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-13-1024x723.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-14.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-15.jpg",
          ],
        },
        {
          container_info: [
            "Villanova is a community in Dubailand, offering mostly off-plan residences",
            "The complexes LA ROSA I, II, III, IV, V and VI all have villas with 2-5 bedrooms and 3-4 bedroom townhouses at a minimum price of AED 1,270,000 (USD 345,000)",
            "It is worth noting that spacious 3-5 bedroom luxury villas in its La Quinta and Amaranta sub-communities are currently sold out, although they can be purchased from new owners on the secondary market",
            "The average ROI for these types of properties is 6.5%.",
            "La Vie is a complex located in the iconic area of Dubai JBR and features a collection of premium off-plan 1-4 bedroom apartments and penthouses for sale",
            "The development will be completed in the first quarter of 2023 with starting prices of AED 7,300,000 (USD 2,000,000).",
            "The Bellevue Dubai Towers complex consists of two 23-storey towers located in the center of the prestigious Burj Khalifa area",
            "There are 1-3 bedroom apartments, lofts and penthouses on offer, starting at AED 2,230,000 (USD 607,000), offering a 7% ROI.",
            "Mudon is a new residential development on the edge of the desert in DubaiLand, at the intersection of Al Qudra Road and Emirates Road (E 611)",
            "It consists of Al Salam, Al Naseem Townhouses, Rahat Villas, Mudon Views and Arabella developments, which feature villas and townhouses, both completed and off-plan",
            "As well as this, Mudon Views offers 1-3 bedroom apartments, including two-level layouts, at a price of AED 1,150,000 (USD 313,000), with an ROI of 6.5%",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-17.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-18.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-16.jpg",
          ],
        },
        {
          container_info: [
            "Madinat Jumeirah is a residential complex, located opposite the famous Burj Al Arab",
            "The development offers 1-4 bedroom apartments of various layouts and sizes for sale",
            "Some of the buildings were commissioned in the second quarter of 2021, while the construction of other structures is ongoing and can currently be purchased off-plan",
            "The starting price for these properties is AED 1,200,000 (USD 327,000) with a rental yield of about 7%.",
            "The development of Marsa Al Arab features artificial islands with a total area of ​​3.9 million sq.ft in the Persian Gulf, in the Jumeirah area",
            "The complex consists of 9 six-bedroom villas with 3 ;floors and private underground parking",
            "The handover is scheduled for the fourth quarter of 2021 and the luxury properties can be purchased at a price of AED 40,000,000 (USD 10,890,000).",
            "Manazel Al Khor and Dubai Wharf are complexes in Dubai Creek, with 1-3 bedroom apartments available for purchase",
            "At the moment, the properties can be purchased on the secondary market.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-19-1024x572.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-20.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/dubai-properties-21.jpg",
          ],
        },
      ],
    },
    {
      title: "Meraas",
      value: "meraas",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-9.jpg",
      projects_amount: "38",
      projects_price_from: "1,290,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/06/Meraas1.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/jumeira-bay.jpg",
          area_title: "Jumeira Bay",
          area_data: "Price from 3,900,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/bluewaters-island-1.jpg",
          area_title: "Bluewaters Island",
          area_data: "Price from 2,350,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubailand.jpg",
          area_title: "Dubailand",
          area_data: "Price from 322,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/jumeirah-scaled.jpg",
          area_title: "Jumeirah",
          area_data: "Price from 3,800,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/nad-al-sheba.jpg",
          area_title: "Nad Al Sheba",
          area_data: "Price from 1,729,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/jebel-ali-scaled.jpg",
          area_title: "Jebel Ali",
          area_data: "Price from 1,219,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/port-de-la-mer_.jpg",
          area_title: "Port De La Mer",
          area_data: "Price from 1,430,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/11/dubai-canal-51.jpg",
          area_title: "Dubai Canal",
          area_data: "Price from 931,150 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/mohammed-bin-rashid-city-scaled.jpg",
          area_title: "MBR City",
          area_data: "Price from 480,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/pearl-jumeirah.jpg",
          area_title: "Pearl Jumeirah",
          area_data: "Price from 2,993,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/city-walk-scaled.jpg",
          area_title: "City Walk",
          area_data: "Price from 760,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout6.1"),
        t("developerParagraphAbout6.2"),
        t("developerParagraphAbout6.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-4.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-2.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-3.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-10.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-18.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-11.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "The developer’s most popular projects include:",
            "The multibillion-dollar project of the artificial Bluewaters Island, home to the world’s largest Ferris wheel, Ain Dubai, and the Madame Tussauds Museum of Wax Figures.",
            "Port De La Mer, an exclusive artisanal community.",
            "Luxury resort-style residences Bvlgari Resort & Residences Dubai, developed in collaboration with the international brand Bulgari.",
            "The first-class gated community of Cherrywoods Townhouses and the premium Nikki Beach Residences.",
            "Since its opening in 2013, City Walk has become one of the best places for shopping, fine dining, and a favorite destination for locals and tourists alike.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-6-1024x576.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-5.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-7.jpg",
          ],
        },
        {
          container_info: [
            "One of Meraas’ real estate projects on Bluewaters Island is Bluewaters Residences, a wide range of 1-4 bedroom apartments and a limited collection of 5-bedroom penthouses and 4-5-bedroom townhouses ranging in size",
            "All apartments boast incredible views of the sea, Ain Dubai, Dubai Marina, a garden or one of the many beautifully lit boulevards",
            "Bluewaters Residences is just a 5-minute drive from Dubai Marina and is directly connected to the Sheikh Zayed Road, which allows you to reach downtown in 20 minutes.",
            "Bluewaters is an ideal place for living for both singles and families who want to be close both to the quiet waterfront and noisy city life",
            "Bluewaters Residences are a good investment both for living and renting",
            "The price for a 1 bedroom apartment with a 1,148 sq.ft area in Bluewaters Residences starts from AED 2.3М (USD 640К)",
            "The asking price for a 9,405 sq.ft penthouse is AED 27M (USD 7.35M) and a 6,531 sq.ft five-bedroom townhouse is AED 17M (USD 4.63M).",
            "Since the complex was fully commissioned in 2019, there are also properties available for rent here, with prices starting from AED 130К (USD 36К) per year",
            "Return on investment in real estate in this area is from 5% per year",
            "And it might grow after the development of Bluewaters Island.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-12-1024x650.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-14.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-13-1024x650.jpg",
          ],
        },
        {
          container_info: [
            "Port De La Mer  is one of the most popular low-rise residential complexes in Dubai, located in Jumeirah 1",
            "The buildings are designed in a Mediterranean style, and you can find luxury seaside recreation, as well as access to the marina for 190 yachts and a private beach overlooking Pearl Jumeirah",
            "Buyers are presented with residences of 1-5 bedrooms as well as full access to first-class amenities such as private landscaped terraces, family parks, swimming pools and fitness clubs, 4 and 5-star hotels, restaurants, cafes and leisure facilities.",
            "This Meraas project is divided into 6 phases: La Cote, Le Pont, La Rive, Sur La Mer, La Voile and La Sirene, each offering residences with their own set of premium amenities",
            "One-bedroom apartments in Port De La Mer start at AED 1.4M (USD 381K).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-15-1024x564.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-16-1024x547.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-17-1024x544.jpg",
          ],
        },
        {
          container_info: [
            "La Sirène is the latest addition to Port de La Mer, set in the Jumeirah 1 district and is an ideal beachfront destination, inspired by the Mediterranean",
            "Port de La Mer is considered one of the most prospective Dubai projects with various spaces located along the promenade from cafes restaurants to retail outlets and hotels which are easily connected",
            "Seaside and marine promenades, fascinating swimming pools and private amenities make this place ideal for living",
            "Another benefit is fast connectivity to downtown",
            "City Walk, Dubai Mall and other popular sights can be reached in a 20-minute drive of the development.",
            "There is a selection of apartments from 1 to 4-bedrooms, with a more exclusive option of a 6-bedroom penthouse",
            "Each of the apartments boasts a marina view and a terrace or balcony",
            "The cost of a 1-bedroom apartment with a 840 sq.ft area is AED 1.2M (USD 346K).",
            "The estimated construction completion date is around Q1 2024",
            "Meraas proposes a payment plan divided into 6 installments with 10% upon booking",
            "The last payment is equivalent to 50% of the whole apartment price which can be made at handover",
            "Return on investment in real estate in this area is from 5% per year.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-19-1024x586.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-20-1024x682.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/meraas-21-1024x683.jpg",
          ],
        },
      ],
    },
    {
      title: "Deyaar",
      value: "deyaar",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/deyaar-5.jpg.webp",
      projects_amount: "28",
      projects_price_from: "477,527",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/06/deyaar-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/06/business-bay_-scaled.jpg.webp",
          area_title: "Business Bay",
          area_data: "Price from 410,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/06/DIFC-scaled.jpg.webp",
          area_title: "DIFC",
          area_data: "Price from 700,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout7.1"),
        t("developerParagraphAbout7.2"),
        t("developerParagraphAbout7.3"),
      ],
      gallery_images: [],
      section_5_info: [
        {
          container_info: [
            "Deyaar Regalia is a 70-story residential tower that houses about 900 luxury properties, including studios, apartments and penthouses",
            "Property sizes range from 40-407 square meters",
            "Homes are priced from AED 627,000 (USD 171,000)",
            "The project is located in the Business Bay area, surrounded by stores, cafes and restaurants.",
            "All apartments are equipped with “smart home,” modern European kitchen appliances, high-end plumbing, as well as panoramic windows overlooking the skyline of modern Dubai",
            "Residences are sold with a complete set of furniture",
            "Property owners can make use of the landscape pool, gym with state-of-the-art equipment, and yoga pavilions.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/deyaar-5-1-1024x669.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/deyaar-2-1024x512.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/deyaar-4-1-1024x606.jpg.webp",
          ],
        },
        {
          container_info: [
            "The Atria is a modern apartment complex in Business Bay",
            "It consists of two high-rise towers, one of which is the 4-star Millennium Atria Business Bay Hotel and the other is the Atria Residences apartment complex.",
            "The Atria Tower has 30 floors with 219 luxury studios and 1-3bedroom apartments",
            "Development of the project began in 2014 and was completed in 2018.",
            "Properties range in size from 54-83 square meters",
            "The cost of housing starts at AED 750,000 (USD 205,000)",
            "Meanwhile, the average annual rental price for apartments at Atria is AED 74,000-85,000 (USD 20,000-23,500).",
            "At the disposal of the residents of the complex are: two high-speed elevators, private parking, a state-of-the-art fitness center and gym, tennis court, pool and 24-hour concierge service.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/deyaar--1024x640.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/deyaar-7-1024x512.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/deyaar-8-1024x470.jpg.webp",
          ],
        },
      ],
    },
    {
      title: "MAG",
      value: "mag",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/mag-3.jpg",
      projects_amount: "28",
      projects_price_from: "480,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/mag-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/mohammed-bin-rashid-city-scaled.jpg",
          area_title: "MBR City",
          area_data: "Price from 480,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout8.1"),
        t("developerParagraphAbout8.2"),
        t("developerParagraphAbout8.3"),
      ],
      gallery_images: [],
      section_5_info: [
        {
          container_info: [
            "MAG Eye Apartments, a sub-community within the Meidan apartment complex in Mohammed Bin Rashid City",
            "The community includes studios, 1 and 2-bedroom apartments and 3 and 4-bedroom townhouses in a contemporary style",
            "MAG Eye Apartments features amenities such as a nursery, playground, clubhouse with pool, lounge area and gym, bike and jogging trails, park area, stores and clinic",
            "There is easy access to public transport stops, the airport, a heliport and Al Khail Road and Al Meydan Road",
            "Property prices start from AED 780,000 (USD 212,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/mag-4-1024x474.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/mag-5-1024x569.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/mag-6.jpg",
          ],
        },
        {
          container_info: [
            "MAG City Parks is a modern residential complex in MAG City, Meydan District 7",
            "It includes premium 4-bedroom townhouses and 5, 6 and 8-bedroom villas",
            "There are a total of 247 properties within the community",
            "Each residence will have its own high-speed elevator and rooftop terrace",
            "Properties will be 23 meters apart, providing residents with peace and privacy",
            "MAG City Parks features amenities such as a walking area, children’s playground, gym and swimming pool, cafes, restaurants and stores",
            "The starting price of the property is AED 4,800,000 (USD 1,307,000)",
            "The project is under construction",
            "Its commissioning is scheduled for 2023.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/mag-8-1024x397.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/mag-7-1024x713.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/mag-9-1024x686.jpg",
          ],
        },
      ],
    },
    {
      title: "Ellington Properties",
      value: "ellington-properties",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/ellington-2.jpg",
      projects_amount: "27",
      projects_price_from: "434,828",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/06/ellington.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/downtown-header.jpg",
          area_title: "Downtown Dubai",
          area_data: "Price from 428,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/business-bay_-scaled.jpg",
          area_title: "Business Bay",
          area_data: "Price from 410,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubailand.jpg",
          area_title: "Dubailand",
          area_data: "Price from 322,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/mohammed-bin-rashid-city-scaled.jpg",
          area_title: "MBR City",
          area_data: "Price from 480,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/jumeirah-village-circle-scaled.jpg",
          area_title: "Jumeirah Village Circle",
          area_data: "Price from 400,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout9.1"),
        t("developerParagraphAbout9.2"),
        t("developerParagraphAbout9.3"),
      ],
      gallery_images: [],
      section_5_info: [
        {
          container_info: [
            "Ellington KW, is an apartment complex of 12 skyscrapers with a distinctive unique exterior facade and is located on the grounds of the aforementioned MBR City",
            "A wide range of apartments are available to rent and purchase, including studios, one, two and three-bedroom units)",
            "The minimum price for accommodation in this complex is AED 765,828.",
            "*The price is valid for 2024",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/ellington-3-1024x776.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/ellington-4-1024x763.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/ellington-5-1024x682.jpg",
          ],
        },
        {
          container_info: [
            "Ellington’s DT1 is a luxury skyscraper that’s ichbuilt to the exact construction standards",
            "The building is located in Downtown Dubai and is equipped with 24/7 video surveillance cameras, multiple large swimming pools and fitness centres.  Wood is a key element in the design of the apartments – both the guest rooms and the kitchens are clad with the material",
            "Prices start at AED 1,179,828, with all units being fully complete and ready to move into.",
            "*The price is valid for 2024",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/ellington-6-1024x563.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/ellington-8-1024x512.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/ellington-9-1024x493.jpg",
          ],
        },
        {
          container_info: [
            "Ellington Belgravia 3 is a continuation of the developer’s projects that have almost become a kind of “cornerstone” of the architectural world",
            "This apartment building is located in Dubai Jumeirah Village Circle",
            "From the list presented, the housing here is the most expensive, with prices starting at AED 2M",
            "The territorial district also offers a fitness room, swimming pools, landscaped areas and above-ground garage parking for easy access.",
            "*The price is valid for 2024",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/ellington-10.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/ellington-11.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/ellington-12-1024x768.jpg",
          ],
        },
      ],
    },
    {
      title: "Select Group",
      value: "select-group",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/09/peninsula-new-launch-by-select-group-in-business-bay-4.jpg",
      projects_amount: "25",
      projects_price_from: "580,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/05/select-group-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/dubai-marina.jpg",
          area_title: "Dubai Marina",
          area_data: "Price from 600,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/business-bay_-scaled.jpg",
          area_title: "Business Bay",
          area_data: "Price from 410,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout10.1"),
        t("developerParagraphAbout10.2"),
        t("developerParagraphAbout10.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2021/10/select-group-3.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/select-group-6.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/select-group-5.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/select-group-4.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/select-group-7.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/select-group-8.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/03/top-9-areas-to-buy-property-in-dubai-Palm-Jumeirah-scaled.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2020/10/dubai-marina-towers-3.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/06/business-bay-se8.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "Select Group has built several large buildings over the past few years",
            "Even with the  Covid-19 pandemic and the difficult situation in the global real estate market, continuing its developments has not become a hindrance for the company.",
            "In 2020, the construction of the Jumeirah Living Marina Gate residential complex in the Dubai Marina area was completed",
            "The development includes 389 premium residences and 15 gorgeous villas",
            "Due to the partnership with the Jumeirah Group company, which is one of the best known companies in the global luxury hotel business, the residents of the complex have access to a room cleaning service and registration for the Jumeirah-Jumeirah One Loyalty Programme",
            "In addition, the amenities include a fitness room with a sauna, temperature controlled infinity pools for adults and children, close proximity to the marina and stunning views of the embankment.",
            "Studios and 1, 2 and 3-bedroom apartments are still available for sale",
            "The minimum cost of a studio with an area of 613 sq",
            "ft is AED 1,580,000 (USD 430,200).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/select-group-10-1024x454.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/select-group-9.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/select-group-11.jpg",
          ],
        },
        {
          container_info: [
            "Another popular project from the developer is a residential 30-storey high-rise building in Dubai Marina – Studio One",
            "The complex consists of 410 studios and apartments with 1 and 2 bedrooms",
            "At the moment, the complex is ready as construction was completed in 2019",
            "Studio One is aimed at young and busy individuals with amenities such as a modern gym with sauna and steam room, round-the-clock security, and a temperature-controlled swimming pool overlooking the marina as well as much more.",
            "The minimum cost of a 1-bedroom apartment with an area of 710 sq",
            "ft starts from AED 1,025,000 (USD 280,000).",
            "The West Avenue residential complex, the Botanica residence with tropical gardens, and The Royal Oceanic private residence were also built under the guidance of the Select Group development company.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/select-group-12-1024x512.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/select-group-14-1024x682.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/select-group-13-1024x800.jpg",
          ],
        },
        {
          container_info: [
            "The construction of the 15 Northside project in the Business Bay area was launched in February 2021 and will be completed in the fourth quarter of 2022",
            "The project is a 21-storey building with 349 apartments overlooking the Dubai Canal",
            "This residential complex is suitable for both investors and young professionals who want to live in the heart of the business center in Dubai.",
            "15 Northside offers apartments with 1, 2, 3 and 4 bedrooms with living area varying from 365 sq",
            "ft to 3,143 sq",
            "ft",
            "Starting prices for a 1-bedroom apartment with an area of 549 sq",
            "ft constitutes AED 960,000 (USD 261,400).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/select-group-16-1024x562.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/select-group-15-1024x562.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/select-group-17-1024x562.jpg",
          ],
        },
      ],
    },
    {
      title: "Azizi Developments",
      value: "azizi-developments",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/azizi-developments-2.jpg.webp",
      projects_amount: "21",
      projects_price_from: "398,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/azizi-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/dubai-healthcare-city-scaled.jpg.webp",
          area_title: "Dubai Healthcare City",
          area_data: "Price from 450,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/mohammed-bin-rashid-city-scaled.jpg.webp",
          area_title: "MBR City",
          area_data: "Price from 480,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/downtown-jebel-ali_-scaled.jpg.webp",
          area_title: "Downtown Jebel Ali",
          area_data: "Price from 225,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout11.1"),
        t("developerParagraphAbout11.2"),
        t("developerParagraphAbout11.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/azizi-developments-6.jpg.webp",
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/azizi-developments-7.jpg.webp",
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/azizi-developments-5.jpg.webp",
      ],
      section_5_info: [
        {
          container_info: [
            "Royal Bay is a premium coastal residential complex located at the eastern end of the Palm Jumeirah crescent",
            "It is a 10-storey building housing 90 luxury 1 and 2 bedroom apartments, as well as penthouses overlooking the Palm Jumeirah coast and the skyline of modern Dubai",
            "The central part of each of the properties features an open-plan living room, an adjacent equipped kitchen and bedrooms with en-suite bathrooms",
            "The properties are sold ready to move in, with furniture and appliances",
            "The price of the property is from AED 2,647,000 (USD 721,000).",
            "The complex has a landscaped garden, an outdoor landscape pool, a sunbathing area, a restaurant, a gym, a sauna and steam room, a barbecue area and parking",
            "The building is under 24-hour security and video surveillance",
            "Royal Bay residents can also count on a first class concierge service.",
            "*The price is valid for 2021",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/azizi-developments-8-1024x500.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/azizi-developments-9.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/azizi-developments-10-1024x682.jpg.webp",
          ],
        },
        {
          container_info: [
            "Azizi Mina is a 10-storey premium residential and commercial project in Palm Jumeirah",
            "Construction of the complex was launched in 2016",
            "It includes 178 properties, including 1- and 2-bedroom apartments and penthouses with premium hotel services",
            "70% of the entire Azizi Mina is landscaped gardens, green spaces and children’s playgrounds",
            "Properties here cost from AED 2,262,000 (USD 616,000).",
            "In the residential complex Azizi Mina there are the following facilities:",
            "a spa-center;",
            "a fitness room;",
            "a swimming pool;",
            "parking;",
            "access to a private beach.",
            "*The price is valid for 2021",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/azizi-developments-11-1024x684.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/azizi-developments-12-1024x512.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/azizi-developments-13-1024x538.jpg.webp",
          ],
        },
      ],
    },
    {
      title: "Binghatti",
      value: "binghatti",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/03/binghatti.jpg",
      projects_amount: "21",
      projects_price_from: "600,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/03/Binghatti-Logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2022/03/al-jaddaff-1.jpg",
          area_title: "Al Jaddaff",
          area_data: "Price from 700,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout12.1"),
        t("developerParagraphAbout12.2"),
        t("developerParagraphAbout12.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Danube Properties",
      value: "danube-properties",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/03/danube-properties-1.jpg",
      projects_amount: "18",
      projects_price_from: "380,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/03/Danube-Properties.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubai-international-city.jpg",
          area_title: "International City",
          area_data: "Price from 180,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2022/02/arjan-1.jpg",
          area_title: "Arjan",
          area_data: "Price from 470,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout13.1"),
        t("developerParagraphAbout13.2"),
        t("developerParagraphAbout13.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2022/03/danube-properties-3.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/danube-properties-5.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/danube-properties-6.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/danube-properties-13.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/danube-properties-4.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "Townhouses are available for purchase in the Al Furjan neighbourhood of Dubai",
            "Units are spread out among 171 buildings, and each site has more than 40% of its land set aside for open space",
            "Residents and buyers have a choice between three- and four-bedroom residences featuring spacious, secure, and safe accommodations",
            "Buildings are located in areas with a well-developed infrastructure, and residents have access to nearby parking, parks, sports facilities, grocery stores, and restaurants",
            "The price of a townhouse is approximately AED 1,200,000 (USD 327,000).",
            "*The price is valid for 2024",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2022/03/danube-properties-7-1024x634.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/danube-properties-8-1024x600.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/danube-properties-9-1024x634.jpg",
          ],
        },
        {
          container_info: [
            "Wavez is a residential complex located in Liwan, Dubai",
            "It has a total of 414 apartments and is considered to be a premium-class project with affordable prices",
            "Properties include large windows overlooking a public park",
            "Residents can enjoy several amenities, including a swimming pool, playground, jacuzzi, and health club",
            "The cost of a one-bedroom apartment is approximately AED 650,000 (USD 177,000).",
            "*The price is valid for 2024",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2022/03/danube-properties-10-1024x722.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/danube-properties-12-1024x574.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/danube-properties-11-1024x575.jpg",
          ],
        },
      ],
    },
    {
      title: "Omniyat",
      value: "omniyat",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-4.jpg",
      projects_amount: "15",
      projects_price_from: "830,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/05/logo-omniyat.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/palm-jumeirah.jpg",
          area_title: "Palm Jumeirah",
          area_data: "Price from 1,000,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/burj-khalifa-district-00-1-scaled.jpg",
          area_title: "Burj Khalifa District",
          area_data: "Price from 1,700,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/business-bay_-scaled.jpg",
          area_title: "Business Bay",
          area_data: "Price from 410,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout14.1"),
        t("developerParagraphAbout14.2"),
        t("developerParagraphAbout14.3"),
      ],

      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-5.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-6.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-7.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-8.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-9.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-10.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-12.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-13.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-14.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-15.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-16.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "A luxurious 23-storey complex erected on a man-made island in the Persian Gulf",
            "The first penthouses were sold at the beginning of construction in 2017",
            "Omniyat One Palm is located on the seafront",
            "Apartments and penthouses are available for sale with a well-thought-out layout and minimalist interior design",
            "The starting price for Omniyat One Palm is AED 16,233,000 (USD 4,500,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-1-1024x529.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-17-1024x640.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-19-1024x640.jpg",
          ],
        },
        {
          container_info: [
            "This 44-story tower is located in Dubai Maritime City",
            "It offers stylish studios and apartments overlooking the maritime harbor",
            "The objects are equipped with built-in appliances made in Italy and a smart home system",
            "The interior is made with expensive materials: marble, and natural wood",
            "The residential complex has a swimming pool, landscape gardens, sea terrace and a marina",
            "The minimum price for a residence at Omniyat Anwa starts at AED 864,000 (USD 235,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-20.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-21-1024x576.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-22-1024x683.jpg",
          ],
        },
        {
          container_info: [
            "This complex in the center of Dubai consists of two towers, one of which is a 5-star hotel, the other comprises serviced residences for sale",
            "Buyers are offered penthouses and apartments with 2, 3 and 4 bedrooms",
            "The uniqueness of the property is that it is managed by the well-known British brand The Dorchester Collection, famous for its high level of service",
            "Residents can use the concierge services, apartment managers, and maids",
            "The approximate average price of apartments in Omniyat The Dorchester Collection is AED 15,280,000 (USD 4,200,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-23.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-25-1024x658.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/omniyat-24-1024x512.jpg",
          ],
        },
      ],
    },
    {
      title: "Wasl",
      value: "wasl",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/wasl-1.jpg.webp",
      projects_amount: "14",
      projects_price_from: "500,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/wasl-logo.png.webp",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/06/dubailand.jpg.webp",
          area_title: "Dubailand",
          area_data: "Price from 322,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/sheikh-zayed-road-scaled.jpg.webp",
          area_title: "Sheikh Zayed Road",
          area_data: "Price from 706,777 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/zabeel-scaled.jpg.webp",
          area_title: "Zaabeel",
          area_data: "Price from 1,400,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/dubai-healthcare-city-scaled.jpg.webp",
          area_title: "Dubai Healthcare City",
          area_data: "Price from 450,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout15.1"),
        t("developerParagraphAbout15.2"),
        t("developerParagraphAbout15.3"),
      ],

      gallery_images: [],
      section_5_info: [
        {
          container_info: [
            "Park Gate Residences",
            "This is a premium residential complex consisting of four residential towers",
            "The project was launched in 2016 and completed in 2020",
            "It includes 1-3 bedroom apartments priced from AED 1,510,777 (USD 411,325) and is located in Zabeel Park",
            "Amenities such as restaurants, children’s playgrounds, parking, a fitness center, a large swimming pool, and conveniently located retail outlets are available for residents",
            "The buildings are under round-the-clock video surveillance for security",
            "And outdoor lovers can enjoy the walking paths and scenic landscapes of Zabeel Park",
            "It has everything for recreation, from cafes and restaurants to sports and playgrounds",
            "Park Gate Residences are conveniently located not only in relation to entertainment, from here it is a quick drive to Downtown Dubai (10 minutes) and Palm Jumeirah (20 minutes).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/wasl-4-1024x575.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/wasl-6.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/wasl-5.jpg.webp",
          ],
        },
        {
          container_info: [
            "Wasl Gardenia Townhomes",
            "This is a residential complex on Sheikh Zayed Road, which includes 257 townhomes with 3-4 bedrooms and garages for two cars",
            "The project also includes 6,500 apartments",
            "The property is priced from AED 1,677,777 (USD 456,793)",
            "This is a good option for families who want to combine the comfort of home with the opportunity to participate in city life",
            "The complex includes a social club for residents, equipped with various facilities, including a swimming pool, a playground, and a state-of-the-art gym.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/wasl-3-1-1024x461.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/wasl-8-1024x570.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/wasl-7.jpg.webp",
          ],
        },
        {
          container_info: [
            "Wasl The Nook is a complex of premium apartments in Jebel Ali, priced from AED 500,000 (USD 136,130)",
            "This facility has received a strong positive response from young investors",
            "Buyers can choose from studios or apartments with 1-3 bedrooms",
            "The project is under construction",
            "Its commissioning is scheduled for 2022.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/wasl-9.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/wasl-10-1024x565.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/wasl-11-1024x724.jpg.webp",
          ],
        },
      ],
    },
    {
      title: "Nshama Group",
      value: "nshama-group",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/nshama-group-4.jpg.webp",
      projects_amount: "14",
      projects_price_from: "625,888",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/Nshama-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/town-square.jpg.webp",
          area_title: "Town Square",
          area_data: "Price from 1,400,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout16.1"),
        t("developerParagraphAbout16.2"),
        t("developerParagraphAbout16.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/town-square-a6.jpg.webp",
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/town-square-a9.jpg.webp",
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/town-square-a12.jpg.webp",
      ],
      section_5_info: [
        {
          container_info: [
            "A complex of two-level townhouses. Offers homes with 3 and 4 bedrooms.",
            "The size of a 3-bedroom townhouse is 200 square meters and a 4-bedroom is 225 square meters.",
            "All houses have a maid’s room. There is double parking on the ground floor. There is a garden in front of the house.",
            "The residence is located within walking distance of the park. Nearby there is a sports complex, swimming pool and several playgrounds for children.",
            "Prices start from AED 1,300,000 (USD 350,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/nshama-group-5.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/nshama-group-6.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/nshama-group-7-1024x639.jpg.webp",
          ],
        },
        {
          container_info: [
            "This is a 12-story building built in a “co-living” format with residential apartments upstairs and public space (about 900 square meters) below.",
            "The building has 192 studio apartments and 764 one-bedroom apartments.",
            "Studios range in size from 30 to 50 square meters. And 1-bedroom apartments range in size from 45 to 66 square meters.",
            "A studio will cost at least AED 450,000 (USD 120,000). Apartments with 1 bedroom will cost from AED 630,000 (USD 180,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/nshama-group-8-1024x572.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/nshama-group-9-1024x576.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/nshama-group-10-1024x576.jpg.webp",
          ],
        },
        {
          container_info: [
            "Premium-level 1,2 and 3-bedroom apartments.",
            "Total floor area starts from 56 sq.m. in 1-bedroom apartments to 140 sq.m. in 3-bedroom apartments.",
            "The infrastructure around the houses is excellent. There isa park, boutiques, a cinema, a spa, and restaurants.",
            "The inner yard has children’s and adult pools, playgrounds, and a gym.",
            "Prices range from AED 760,000 (USD 206,000) for 1-bedroom apartments, AED 980,000 (USD 266,000) for 2-bedroom apartments and AED 1,300,000 (USD 353,000) for 3-bedroom apartments.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/nshama-group-11.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/nshama-group-13-1024x576.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/nshama-group-12-1024x444.jpg.webp",
          ],
        },
      ],
    },
    {
      title: "Tiger Group",
      value: "tiger-group",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-2.jpg",
      projects_amount: "13",
      projects_price_from: "362,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/01/tiger-group-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/dubai-marina.jpg",
          area_title: "Dubai Marina",
          area_data: "Price from 600,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubailand.jpg",
          area_title: "Dubailand",
          area_data: "Price from 322,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/jumeirah-village-circle-scaled.jpg",
          area_title: "Jumeirah Village Circle",
          area_data: "Price from 400,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/business-bay_-scaled.jpg",
          area_title: "Business Bay",
          area_data: "Price from 410,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2022/03/jumeirah-village-triangle-1.jpg",
          area_title: "Jumeirah Village Triangle",
          area_data: "Price from 419,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout17.1"),
        t("developerParagraphAbout17.2"),
        t("developerParagraphAbout17.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-13.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-12.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-5.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-6.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-7.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-10.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-11.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-14.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-8.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-4.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-9.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "Tiger Group has implemented several popular projects in Dubai, including the Square, O2 Tower, and Al Manara Tower.",
            "The Square is a new residential project within a 42-storey tower located in Jumeirah Village Circle",
            "The project was completed in 2021 and includes 346 residential properties",
            "Units feature studios and one-bedroom apartments that range in size from 330 sq",
            "ft",
            "(31 sq",
            "m.) to 906 sq",
            "ft",
            "(84 sq",
            "m.), and prices range from AED 349,000 (USD 95,000) to AED 694,000 (USD 189,000)",
            "Property buyers have the option to purchase half floors with an area of 16,716 sq",
            "ft",
            "(1,553 sq",
            "m.) for AED 10,030,000 (USD 2,731,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-15-1024x646.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-16.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-17.jpg",
          ],
        },
        {
          container_info: [
            "O2 Tower in Jumeirah Village Circle is a new project in partnership with the National Engineering Bureau",
            "The complex was completed in 2021",
            "The tower has 38 floors and features studios and one-bedroom apartments",
            "Units range in size from 401 sq",
            "ft",
            "(37 sq",
            "m.) to 945 sq",
            "ft",
            "(88 sq",
            "m.), and prices range from AED 309,000 (USD 84,000) to AED 750,000 (USD 204,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-19-1024x549.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-22.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-20.jpg",
          ],
        },
        {
          container_info: [
            "Al Manara Tower was completed in 2017 and is located in the Jumeirah Village Triangle",
            "LACASA Architects & Engineering Consultants was the architectural consultant for the project",
            "There are 300 residential units including studios and apartments with one and two bedrooms",
            "Units range in size from 380 sq",
            "ft",
            "(35 sq",
            "m.) to 1,335 sq",
            "ft",
            "(124 sq",
            "m.), and prices range from AED 310,000 (USD 84,000) to AED 950,000 (USD 259,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-25-1024x680.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-24.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/tiger-group-26-737x1024.jpg",
          ],
        },
      ],
    },
    {
      title: "Majid Al Futtaim",
      value: "majid-al-futtaim",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/majid-al-futtaim-4.jpg",
      projects_amount: "13",
      projects_price_from: "2,990,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/maf-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubailand.jpg",
          area_title: "Dubailand",
          area_data: "Price from 322,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/tilal-al-ghaf.jpg",
          area_title: "Tilal Al Ghaf",
          area_data: "Price from 1,950,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout18.1"),
        t("developerParagraphAbout18.2"),
        t("developerParagraphAbout18.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2021/11/majid-al-futtaim-6.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/majid-al-futtaim-8.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "The company recently launched the second part of a major project, the development of the Tilal Al Ghaf Aura Gardens neighborhood",
            "It is planned to be completed by the end of 2022",
            "To date, 60% of the plan has been realized",
            "Buyers will be offered a choice of 594 properties",
            "According to preliminary estimates, the total sales volume will be about AED 900,000 (USD 245,100)",
            "Among the project’s features are:",
            "The modern design of the apartments",
            "The initial price of townhouses from AED 1,800,000 (USD 490,100)",
            "Nearby infrastructure: water park, outdoor cinema, kindergarten, clinics, restaurants, a mosque, etc",
            "The development is located in theDubailand territory",
            "*The price is valid for 2024",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/majid-al-futtaim-9-1024x576.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/majid-al-futtaim-10-1024x727.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/majid-al-futtaim-11-1024x571.jpg",
          ],
        },
        {
          container_info: [
            "Harmony Villas II is another project from developer Majid Al Futtaim",
            "It consists of premium villas, each of which boasts 4 to 6 bedrooms",
            "At the moment the project is 30% completed, its construction is scheduled to finish in 2022",
            "Each villa includes:",
            "A garage for 3 cars",
            "A spacious terrace",
            "4-6 bedrooms",
            "High ceilings",
            "Panoramic windows",
            "A courtyard",
            "The total square footage of the property ranges from 4,016 to 5,677 square feet",
            "The villas are located in a cozy and quiet location with developed infrastructure",
            "The properties start at AED 3,390,000 (USD 923,000)",
            "The property is 20 minutes from Dubai Marina, 25 minutes from Downtown Dubai and 30 minutes from DXB Airport.",
            "*The price is valid for 2024",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/majid-al-futtaim-12-1024x630.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/majid-al-futtaim-13-1024x487.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/majid-al-futtaim-14-1024x576.jpg",
          ],
        },
      ],
    },
    {
      title: "Union Properties",
      value: "union-properties",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/union-properties-2.jpg.webp",
      projects_amount: "13",
      projects_price_from: "900,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/union-properties-logo.png.webp",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/dubai-motor-city-1.jpg",
          area_title: "Motor City",
          area_data: "Price from 626,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout19.1"),
        t("developerParagraphAbout19.2"),
        t("developerParagraphAbout19.3"),
      ],
      gallery_images: [],
      section_5_info: [
        {
          container_info: [
            "Oia Residence is a popular residential complex located in Motor City",
            "The residential building has 6 floors including 269 apartments and 143 apartments with 2 bedrooms",
            "But there are also spacious apartments with 4 bedrooms and even duplexes.",
            "The minimum size of the apartments is 75 square meters",
            "Apartments with 2 bedrooms have a size of 120-200 square meters and the spacious duplexes have up to 270 square meters.",
            "In addition to the apartments in the complex there are gyms and courts",
            "There are swimming pools and playgrounds in the comfortable yard",
            "It offers residents an underground parking lot for 400 cars",
            "Prices start from AED 900,000 (USD 245,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/union-properties-3-1024x528.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/union-properties-4-1024x545.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/union-properties-5-1024x528.jpg.webp",
          ],
        },
        {
          container_info: [
            "In the northwest part of the city in the district of Mirdif is located Uptown Mirdif",
            "Studios here range in size from 45 square meters to 3-bedroom apartments of 185 square meters",
            "Villas are offered in 3 varieties (3, 4 and 5 bedroom) and range in size from 150 to 460 square meters.",
            "Studio apartments cost about AED 675,000 (USD 185,000)",
            "Apartments with 2 bedrooms cost from AED 900,000 (USD 245,000)",
            "Prices for villas start from AED 200,000 (USD 550,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/union-properties-6.jpg",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/union-properties-7.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/union-properties-8.jpg.webp",
          ],
        },
        {
          container_info: [
            "Green Community is located in a esidential area of Motor City",
            "Here you can live in a villa, townhouse, or spacious apartments with 1-4 bedrooms.",
            "For 1-bedroom apartments (40-75 square meters) the price is AED 500,000 (USD 136,000)",
            "More spacious 3 bedroom apartments of 300-400 square meters will cost AED 2,000,000 (USD 550,000)",
            "Townhouses with 3-4 bedrooms cover an area of 370-460 square meters, costing from AED 3,000,000 (USD 800,000)",
            "The villas cover 550 to 650 square meters",
            "The price of these starts from AED 4,250,000 (USD 1,150,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/union-properties-9.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/union-properties-10.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/union-properties-11.jpg.webp",
          ],
        },
      ],
    },
    {
      title: "Meydan",
      value: "meydan",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/meydan-1.jpg",
      projects_amount: "12",
      projects_price_from: "1,320,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/maydan-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/11/dubai-canal-51.jpg",
          area_title: "Dubai Canal",
          area_data: "Price from 931,150 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/meydan-city.jpg",
          area_title: "Meydan City",
          area_data: "Price from 1,150,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout20.1"),
        t("developerParagraphAbout20.2"),
        t("developerParagraphAbout20.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2021/11/meydan-5.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/meydan-2.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/meydan-3.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/meydan-4.jpg",
      ],
      section_5_info: [
        {
          container_info: [],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/meydan-9-1024x487.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/meydan-8-1024x431.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/meydan-7.jpg",
          ],
        },
        {
          container_info: [
            "MARSA MEYDAN is a complex of coastal villas, townhouses and apartments built on the waterfront of Jebel Ali",
            "The community is located in close proximity to the Expo 2020 venue",
            "MARSA MEYDAN is a mixed-use development with residential and commercial units and its own marina.",
            "Within the community is:",
            "A marina with a 6.5-kilometer boardwalk and climate-controlled cooling;",
            "A green park area;",
            "An 11-kilometer jogging path;",
            "A 6 km long electric car lane;",
            "A 9km bike path;",
            "access to a private beach.",
            "On the boulevard next to the community there will be 4-star and 5-star hotels, stores, restaurants and a community center with a movie theater.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/meydan-10-1024x576.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/meydan-11-1024x576.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/meydan-12-1024x577.jpg",
          ],
        },
      ],
    },
    {
      title: "Reportage Properties",
      value: "reportage-properties",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/reportage-properties.jpg",
      projects_amount: "11",
      projects_price_from: "334,081",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/Reportage-Properties-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/jebel-ali-scaled.jpg",
          area_title: "Jebel Ali",
          area_data: "Price from 1,219,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/downtown-jebel-ali_-scaled.jpg",
          area_title: "Downtown Jebel Ali",
          area_data: "Price from 225,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout21.1"),
        t("developerParagraphAbout21.2"),
        t("developerParagraphAbout21.3"),
      ],
      gallery_images: [],
      section_5_info: [
        {
          container_info: [
            "Alexis Tower is located in the center of Jebel Ali district",
            "It has 16 floors with 259 studio apartments, 98 one-bedroom apartments, 13 two-bedroom apartments and 8 spacious commercial units.",
            "The total built-up area is about 115 thousand square meters",
            "All apartments are fully furnished and ready to move into.",
            "They boast a convenient location and developed infrastructure",
            "The development lies within walking distance to the metro station UAE Exchange, marina, the shopping center Ibn Battuta, and exit to Zayed Road",
            "The journey to the airport takes 13 minutes.",
            "The cost of housing in this development starts at USD 140,000 (AED 514,250).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/reportage-properties-3-1024x576.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/reportage-properties-2-1024x576.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/reportage-properties-5-1024x401.jpg",
          ],
        },
        {
          container_info: [
            "Rukan Tower is a complex in the Dubailand area",
            "It is a residential building of medium height containing comfortable townhouses",
            "203 of them have a size of 74-170 square meters, and 146 residences are 182-246 square meters.",
            "Each individual dwelling has its own plot of land",
            "The complex surroundings offer  gardens, stores, landscaped areas for recreation, sports fields, cycling and jogging trails, and picnic areas.",
            "The size of the complex is about 25 hectares, 30% of which is allocated for residential construction, and 70% for public space.",
            "The townhouses are ready to move in, fully furnished and equipped with appliances.",
            "The cost of housing in the complex starts at USD 684,000 (AED 2,512,500).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/reportage-properties-6-1024x512.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/reportage-properties-8-1024x602.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/reportage-properties-7-1024x533.jpg",
          ],
        },
      ],
    },
    {
      title: "Al Barari Properties",
      value: "al-barari-properties",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-barari-properties-2.jpg",
      projects_amount: "10",
      projects_price_from: "1,977,425",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/06/al-barari-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/al-barari.jpg",
          area_title: "Al Barari",
          area_data: "Price from 1,000,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout22.1"),
        t("developerParagraphAbout22.2"),
        t("developerParagraphAbout22.3"),
      ],
      gallery_images: [],
      section_5_info: [
        {
          container_info: [
            "The company’s flagship project is the Al Barari residential development of 1.4 million square meters, offering not only a vast collection of studios, apartments and villas, but also an extensive infrastructure for comfortable living in an environmentally sustainable area.",
            "Al Barari is a green, luxurious gated community on Sheikh Mohammad Bin Zayed Road, planned as a European garden in the desert",
            "80% of the development is manicured gardens, ponds, streams and botanical areas, among which are 217 exclusive villas with private pools, terraces and landscaped areas.",
            "The smallest property for sale in Al Barari is in The Neighbourhood, where a studio is 47 square meters (506 square feet) and costs AED 720,000 (USD 182,000).",
            "*The price is valid for 2022",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/12/al-barari-properties-3-1024x753.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/12/al-barari-properties-4-1024x753.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/12/al-barari-properties-2.jpg",
          ],
        },
        {
          container_info: [
            "Seventh Heaven, a stylish seven-story apartment complex, offers 1-bedroom apartments starting at 173 square meters (1,862 square feet) at an average price of about AED 2,000,000 (USD 505,000), and 2-bedroom apartments here sell for about AED 3,100,000 (USD 783,000).",
            "The smallest 5-bedroom, 6-bathroom villas are in Chorisia Villas",
            "Their floor size starts from 173 square meters (1,862 square feet), and the price is about AED 8,200,000 (USD 2,071,000).",
            "*The price is valid for 2022",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/12/al-barari-properties-5.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/12/al-barari-properties-6-1024x1024.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/12/al-barari-properties-7-1024x513.jpg",
          ],
        },
      ],
    },
    {
      title: "Al Habtoor Group",
      value: "al-habtoor-group",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-habtoor-group.jpg",
      projects_amount: "8",
      projects_price_from: "1,100,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-habtoor-group-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/al-habtoor-city-scaled.jpg",
          area_title: "Al Habtoor City",
          area_data: "Price from 1,000,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/business-bay_-scaled.jpg",
          area_title: "Business Bay",
          area_data: "Price from 410,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout28.1"),
        t("developerParagraphAbout28.2"),
        t("developerParagraphAbout28.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Expo City",
      value: "expo-city",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/03/expo-city.jpg",
      projects_amount: "6",
      projects_price_from: "1,000,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/03/logo-Expo-City.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2023/03/expo-city-dubai-1.jpg",
          area_title: "Expo City Dubai",
          area_data: "Price from 1,000,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout29.1"),
        t("developerParagraphAbout29.2"),
        t("developerParagraphAbout29.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Bloom",
      value: "bloom",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/bloom-2.jpg",
      projects_amount: "5",
      projects_price_from: "428,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/05/bloom_logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/dubai-marina.jpg",
          area_title: "Dubai Marina",
          area_data: "Price from 600,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout30.1"),
        t("developerParagraphAbout30.2"),
        t("developerParagraphAbout30.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2021/11/bloom-3.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/bloom-4.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/bloom-5.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/bloom-8.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/bloom-10.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/bloom-9.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/bloom-6.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/bloom-7.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "Bloom Stella Maris, Dubai Marina",
            "This is a 52-storey residential complex in the form of a single tower",
            "The total number of residential premises is 313, among which there are penthouses",
            "The bulk of the apartments range in size from 748 to 2,514 square feet, with the number of bedrooms ranging from 1 to 4",
            "The large windows in the rooms offer beautiful views of the Persian Gulf, and the amenities and infrastructure around can’t be beaten",
            "The starting price for these apartments is AED 998,000 (USD 271,700).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/bloom-11.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/bloom-13.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/bloom-12.jpg",
          ],
        },
        {
          container_info: [
            "Bloom Towers, Jumeirah Village Circle",
            "A residential complex consisting of three high-rise towers with 689 units",
            "Tenants and buyers are offered a full range of amenities: theaters, a sauna, a swimming pool, secure parking, concierge services and premium finish rooms",
            "The surrounding area is landscaped and the proximity to the Emirates Hills, as well as Dubai Marina makes this a great location",
            "one-bedroom apartments range from 564 to 750 square meters with 1-3 bedrooms, and there are also studios from 37 square meters",
            "Prices start from AED 422,400 (USD 115,000)",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/bloom-16-1024x480.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/bloom-15-1024x456.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/bloom-14-1024x532.jpg",
          ],
        },
      ],
    },
    {
      title: "Arada",
      value: "arada",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/11/Arada.jpg",
      projects_amount: "5",
      projects_price_from: "2,000,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/11/arada-developer-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/jumeirah-golf-estate.jpg",
          area_title: "Jumeirah Golf Estate",
          area_data: "Price from 1,320,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout34.1"),
        t("developerParagraphAbout34.2"),
        t("developerParagraphAbout34.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "TownX",
      value: "townx",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/04/townx.jpg",
      projects_amount: "5",
      projects_price_from: "742,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/04/TownX-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2022/02/al-furjan-1.jpg",
          area_title: "Al Furjan",
          area_data: "Price from 300,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout35.1"),
        t("developerParagraphAbout35.2"),
        t("developerParagraphAbout35.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Seven Tides",
      value: "seven-tides",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/seven-tides.jpg",
      projects_amount: "5",
      projects_price_from: "405,888",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/05/seventides-logo-black-text.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/palm-jumeirah.jpg",
          area_title: "Palm Jumeirah",
          area_data: "Price from 1,000,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/business-bay_-scaled.jpg",
          area_title: "Business Bay",
          area_data: "Price from 410,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout36.1"),
        t("developerParagraphAbout36.2"),
        t("developerParagraphAbout36.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2021/11/seven-tides-7.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/seven-tides-14.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/seven-tides-4.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/seven-tides-5.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/seven-tides-15.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "Marquise Square Tower, Burj Khalifa",
            "This 29-storey building sells apartments with 1 to 3 bedrooms, as well as luxury studios",
            "In all living areas there is thoughtful and modern finishing",
            "Around the premium complex is presented a full range of amenities for leisure",
            "Prices start from AED 847,888 (USD 230,800).",
            "*The price is valid for 2022",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/seven-tides-8-1024x505.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/seven-tides-9.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/seven-tides-10.jpg",
          ],
        },
        {
          container_info: [
            "Seven Palm Residences, in Palm Jumeirah",
            "This is a luxury project of two towers connected by a large bridge",
            "The developer offers studios, and apartment buildings with a stylish finishing",
            "The number of bedrooms in these residences ranges from 1 to 3",
            "Also available for sale are one-bedroom apartments with fitted kitchens and wonderfully large windows",
            "Prices start from AED 649,888 (USD 176,900).",
            "*The price is valid for 2022",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/seven-tides-11-1024x725.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/seven-tides-12-1024x655.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/seven-tides-13-1024x655.jpg",
          ],
        },
        {
          container_info: [
            "Golf Views Seven City, in Jumeirah Lake Towers (JLT)",
            "This comprises two 27-storey towers connected to each other",
            "It is the largest project of the Seven Tides company and the top two in the United Arab Emirates after the Burj Khalifa",
            "The residential complex offers studios and apartments ranging from1 to 3 bedrooms in size",
            "The starting price for these residential premises is AED 833,888 (USD 228,400).",
            "*The price is valid for 2022",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/seven-tides-1-1024x559.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/seven-tides-2-1024x576.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/seven-tides-6-1024x576.jpg",
          ],
        },
      ],
    },
    {
      title: "ALDAR",
      value: "aldar",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/10/yas-acres-north-bay-1.jpg.webp",
      projects_amount: "4",
      projects_price_from: "500,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/10/aldar-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/06/dubailand.jpg.webp",
          area_title: "Dubailand",
          area_data: "Price from 322,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout37.1"),
        t("developerParagraphAbout37.2"),
        t("developerParagraphAbout37.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "LIV",
      value: "liv",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/liv-2.jpg",
      projects_amount: "4",
      projects_price_from: "666,649",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/LIV_LOGO.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/dubai-marina.jpg",
          area_title: "Dubai Marina",
          area_data: "Price from 600,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout38.1"),
        t("developerParagraphAbout38.2"),
        t("developerParagraphAbout38.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2021/11/liv-5-1.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/liv-4-1.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/liv-3-1.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "A 10 minute walk from the center of Business Bay, at the crossroads leading to the suburbs of Al Meydan City and Al Hail Metro Station, a high-end, low-rise residential complex has sprung up",
            "Each house and plot is designed to accommodate families with children and pets",
            "In this area with well-developed infrastructure, there are two-storey villas and apartments with 4 to 6 bedrooms.",
            "One of the structures in this street is a building designed and built with the participation of developer Meydan Sobha",
            "There is a swimming pool in the courtyard",
            "The building has no intricate lines, it organically combines simplicity and luxury",
            "The cost per square meter starts from AED 1170",
            "That is, 1 sq",
            "m will cost the buyer USD 320",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/liv-7-1024x506.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/liv-6-1024x506.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/liv-8-1024x506.jpg",
          ],
        },
        {
          container_info: [
            "Mohammed Bin Rashid City-district, where lives Emir of Dubai Mohammed bin Rashid",
            "Here the height of the houses is 4 – 16 floors",
            "Residences from LIV Developers here have from 1 to 3 bedrooms",
            "The windows have a view of the lagoon",
            "The most modest one-bedroom apartment in the area will cost from Dhs 1,100,000 ≈ $300,000",
            "The peculiarity of the complex is that it is only 90 meters from Jumeirah Beach.",
            "Mohammed Bin Rashid City – an exclusive area of Dubai",
            "Close to Ras Al Khor Nature Reserve and the Caliph’s Tower, the tallest building",
            "Apartments range in size from 170 to 300 square meters",
            "In proportion to the meter increases and the cost of housing",
            "Prices range from AED 975,181.50 (USD 265,500) to AED 666,649.50 (USD 181,500).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/liv-12-1024x734.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/liv-11-1024x480.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/liv-9-1024x480.jpg",
          ],
        },
      ],
    },
    {
      title: "Palma Holding",
      value: "palma-holding",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/palma-holding-2.jpg",
      projects_amount: "4",
      projects_price_from: "2,506,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/05/logo-palma-holding.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/palm-jumeirah.jpg",
          area_title: "Palm Jumeirah",
          area_data: "Price from 1,000,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout39.1"),
        t("developerParagraphAbout39.2"),
        t("developerParagraphAbout39.3"),
      ],
      gallery_images: [],
      section_5_info: [
        {
          container_info: [
            "This is a waterfront residential tower located in the Dubai Marina district",
            "Silverene Towers is a project by one of today’s most popular contemporary architects, Hazel Wong",
            "The tower is a complex of elite apartments",
            "A distinctive feature of the apartments is the panoramic windows, spacious balconies and premium finishes using natural marble.",
            "Silverene Towers also has adult and children’s pools, a modern gym, covered parking and 24-hour concierge service",
            "Apartments start at AED 45,000.",
            "*The price is valid for 2022",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/palma-holding-2-1-1024x684.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/palma-holding-3-1024x490.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/palma-holding-4-1024x683.jpg",
          ],
        },
        {
          container_info: [
            "Serenia Residences is a complex of premium coastal apartments in Palm Jumeirah",
            "They include apartments with 1-3 bedrooms and penthouses",
            "The apartments are sold with fully furnished with appliances",
            "The price for an apartment starts at AED 2,200,000",
            "The complex has a swimming pool, gym, children’s playground, barbecue area, basketball court, private parking and 24 hour concierge service.",
            "*The price is valid for 2022",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/palma-holding-5.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/palma-holding-6.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/palma-holding-7-1024x571.jpg",
          ],
        },
        {
          container_info: [
            "The Jewels is a premium residential project located on the Dubai Marina",
            "The complex consists of two 120-meter towers and includes apartments with 1-3 bedrooms, duplexes, penthouses and villas",
            "The buildings have retail stores, landscaped gardens, a swimming pool, a gym, a sauna, children’s playgrounds, and a small business center with a conference room.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/palma-holding-8-1024x683.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/palma-holding-9.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/palma-holding-10-1024x401.jpg",
          ],
        },
      ],
    },
    {
      title: "Dar Al Arkan",
      value: "dar-al-arkan",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/dar-al-arkan-1.jpg",
      projects_amount: "3",
      projects_price_from: "1,174,252",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/10/dar-al-arkan-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/business-bay_-scaled.jpg",
          area_title: "Business Bay",
          area_data: "Price from 410,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/11/dubai-canal-51.jpg",
          area_title: "Dubai Canal",
          area_data: "Price from 931,150 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout40.1"),
        t("developerParagraphAbout40.2"),
        t("developerParagraphAbout40.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "SRG Holding",
      value: "srg-holding",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/marquise-square-new-launch-in-dubai-4.jpg.webp",
      projects_amount: "3",
      projects_price_from: "900,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/srg-holding-logo.png.webp",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/06/business-bay_-scaled.jpg.webp",
          area_title: "Business Bay",
          area_data: "Price from 410,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/06/burj-khalifa-district-00-1-scaled.jpg.webp",
          area_title: "Burj Khalifa District",
          area_data: "Price from 1,700,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout41.1"),
        t("developerParagraphAbout41.2"),
        t("developerParagraphAbout41.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "AHS Group",
      value: "ahs-group",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/11/one-canal-1.jpg",
      projects_amount: "3",
      projects_price_from: "18,000,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/11/ahs-properties-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/11/dubai-canal-51.jpg",
          area_title: "Dubai Canal",
          area_data: "Price from 931,150 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout42.1"),
        t("developerParagraphAbout42.2"),
        t("developerParagraphAbout42.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Al Sondos Holding",
      value: "al-sondos-holding",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/marina-mansions-1.jpg",
      projects_amount: "3",
      projects_price_from: "1,890,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-sondos-holding.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/dubai-marina.jpg",
          area_title: "Dubai Marina",
          area_data: "Price from 600,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout43.1"),
        t("developerParagraphAbout43.2"),
        t("developerParagraphAbout43.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Dubai Investments Real Estate",
      value: "dubai-investments-real-estate",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/dubai-investments-real-estate-1.jpg",
      projects_amount: "3",
      projects_price_from: "630,231",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/dire-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/mirdif-hills.jpg",
          area_title: "Mirdif Hills",
          area_data: "Price from 551,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout44.1"),
        t("developerParagraphAbout44.2"),
        t("developerParagraphAbout44.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "DarGlobal",
      value: "darglobal",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/03/Dar-Group.jpg.webp",
      projects_amount: "3",
      projects_price_from: "800,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/03/Darglobal_Logo-01.png.webp",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/06/business-bay_-scaled.jpg.webp",
          area_title: "Business Bay",
          area_data: "Price from 410,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout45.1"),
        t("developerParagraphAbout45.2"),
        t("developerParagraphAbout45.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "32Group",
      value: "32group",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/10/marina-sail-tower-1.jpg",
      projects_amount: "2",
      projects_price_from: "1,500,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/10/32group-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/dubai-marina.jpg",
          area_title: "Dubai Marina",
          area_data: "Price from 600,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout46.1"),
        t("developerParagraphAbout46.2"),
        t("developerParagraphAbout46.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Al Ain Properties",
      value: "al-ain-properties",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/10/al-ain-properties-4.jpg",
      projects_amount: "2",
      projects_price_from: "2,125,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/06/alain-holding-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/jbr.jpg",
          area_title: "JBR",
          area_data: "Price from 1,150,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout47.1"),
        t("developerParagraphAbout47.2"),
        t("developerParagraphAbout47.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Swiss Property",
      value: "swiss-property",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/10/kempinski-residences-the-creek-dubai-9.jpg",
      projects_amount: "2",
      projects_price_from: "840,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/11/swiss-propery-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2022/03/al-jaddaff-1.jpg",
          area_title: "Al Jaddaff",
          area_data: "Price from 700,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2022/03/jumeirah-village-triangle-1.jpg",
          area_title: "Jumeirah Village Triangle",
          area_data: "Price from 419,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout48.1"),
        t("developerParagraphAbout48.2"),
        t("developerParagraphAbout48.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Signature Developers",
      value: "signature-developers",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/signature-developers-2.jpg",
      projects_amount: "2",
      projects_price_from: "2,152,951",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/SignatureDevelopers-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/burj-khalifa-district-00-1-scaled.jpg",
          area_title: "Burj Khalifa District",
          area_data: "Price from 1,700,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout49.1"),
        t("developerParagraphAbout49.2"),
        t("developerParagraphAbout49.3"),
      ],

      gallery_images: [],
      section_5_info: [
        {
          container_info: [
            "The 118 is a luxury residential tower located in the central Dubya Downtown neighborhood",
            "The building is built on Mohammad Bin Rashid Boulevard, surrounded by stores, cafes and restaurants",
            "Nearby attractions include the Burj Khalifa and Dubai Mall.",
            "The 118 is a truly unique project and includes:",
            "28 spacious full floor apartments;",
            "3 fully furnished, duplex penthouses.",
            "The property is presented with 2 types of furnishings – classic and modern",
            "The classic version uses French beige Serpeggiante marble",
            "The modern interior includes cream marble flooring and furniture in dark walnut tones",
            "The purchase price of the property is from AED 19,800,000 (USD 5,391,000)",
            "A year’s rent starts from AED 650,000 (USD 177,000).",
            "*The price is valid for 2022",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/signature-developers-2-1-1024x682.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/signature-developers-3-1024x683.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/signature-developers-4.jpg",
          ],
        },
        {
          container_info: [
            "The Residences is a mixed-use complex of hotel and residential apartments located in Jumeirah Lake Towers",
            "Development of the project began in 2015 and was completed in 2019.",
            "The Residences tower consists of 49 floors",
            "The first 18 floors of the building are reserved for the Taj Hotel",
            "There are a total of 200 suites",
            "The remaining 11 floors contain 77 luxury apartments with 2-5 bedrooms and 3 penthouses with 5 bedrooms",
            "Also within the tower is a limited-edition collection of Monogram suites decorated with celebrity autographs",
            "It consists of 21 apartments with 3 to 5 bedrooms.",
            "Complex amenities include: underground parking, a high-speed elevator,a temperature-controlled infinity pool, an event room, a gym and a spa.",
            "The properties here are priced from AED 1,900,000 (USD 517,000) and rents from AED 130,000 (USD 35,000).",
            "*The price is valid for 2022",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/signature-developers-7.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/signature-developers-6-1024x572.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/signature-developers-5-1024x572.jpg",
          ],
        },
      ],
    },
    {
      title: "WOW RED",
      value: "wow-red",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/wow-real-estate-development.jpg",
      projects_amount: "2",
      projects_price_from: "1,242,888",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/WOW-RED-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/burj-khalifa-district-00-1-scaled.jpg",
          area_title: "Burj Khalifa District",
          area_data: "Price from 1,700,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout50.1"),
        t("developerParagraphAbout50.2"),
        t("developerParagraphAbout50.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Shapoorji Pallonji",
      value: "shapoorji-pallonji",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/10/shapoorji-pallonji-2.jpg",
      projects_amount: "2",
      projects_price_from: "700,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/10/Shapoorji-Pallonji-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/downtown-header.jpg",
          area_title: "Downtown Dubai",
          area_data: "Price from 428,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout51.1"),
        t("developerParagraphAbout51.2"),
        t("developerParagraphAbout51.3"),
      ],
      gallery_images: [],
      section_5_info: [
        {
          container_info: [
            "Shapoorji Pallonji has, for example, developed famous hotels – Bab Al Bahr and Marriott in Abu Dhabi, and DAMAC Park Towers.",
            "SP International has won many awards for its projects",
            "This includes winning the Dubai Quality Appreciation Award for excellence in the Dubai real estate market.",
            "Shapoorji Pallonji Group has a long and successful history",
            "The company was established back in 1865",
            "It was founded by Pallonji Mistry",
            "Until 2012, the corporation was headed by his grandson, whose name was the same – Pallonji Mistry",
            "he current CEO of SP Group is Shapoor Mistry",
            "As one of India’s most valuable private businesses, SP has provided more than 170 million square feet of commercial real estate.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/shapoorji-pallonji-6.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/shapoorji-pallonji-3-1024x394.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/shapoorji-pallonji-5.jpg",
          ],
        },
        {
          container_info: [
            "Bloom Central is a 25-story complex that houses two projects managed by Marriott International Corporation: the 5-star Abu Dhabi Marriott Hotel with more than 300 rooms, and 65 individual Marriott Executive Apartments in Abu Dhabi City Centre",
            "Also in the building are presented nearly 50 residences with two or three bedrooms, and about 6 thousand square meters of office space.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/shapoorji-pallonji-7.jpg",
          ],
        },
        {
          container_info: [
            "Another project of the developer worth mentioning is Imperial Avenue",
            "It is a 45-storey residential tower, located in the heart of the flourishing Burj Khalifa district in Dubai",
            "This one-of-a-kind development is steeped in modern, luxury features",
            "Some of these include:",
            "a rooftop landscape pool;",
            "a fully equipped gymnasium;",
            "thirteen high-speed elevators;",
            "a special playground for children;",
            "ample parking;",
            "gourmet restaurants;",
            "24-hour security.",
            "The cost of apartments varies depending on the number of bedrooms – AED 1,700,000-3,800,000 (USD 462,900-1,034,500).",
            "*The price is valid for 2021",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/10/imperial-avenue-7.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/imperial-avenue-3-1024x689.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/10/imperial-avenue-11.jpg",
          ],
        },
      ],
    },
    {
      title: "Meraki",
      value: "meraki",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/meraki-2.jpg",
      projects_amount: "2",
      projects_price_from: "539,228",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/Meraki-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/al-barsha.jpg",
          area_title: "Al Barsha",
          area_data: "Price from 330,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout55.1"),
        t("developerParagraphAbout55.2"),
        t("developerParagraphAbout55.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Imtiaz",
      value: "imtiaz",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/06/pearl-house-1.jpg",
      projects_amount: "2",
      projects_price_from: "569,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/06/Imtiaz-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/jumeirah-village-circle-scaled.jpg",
          area_title: "Jumeirah Village Circle",
          area_data: "Price from 400,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout56.1"),
        t("developerParagraphAbout56.2"),
        t("developerParagraphAbout56.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Imkan",
      value: "imkan",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/04/aljurf-gardens-2.jpg",
      projects_amount: "2",
      projects_price_from: "2,900,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/04/imkan-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2022/06/aljurf-2.jpg",
          area_title: "Al Jurf",
          area_data: "Price from 3,670,000 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout57.1"),
        t("developerParagraphAbout57.2"),
        t("developerParagraphAbout57.3"),
      ],
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Xtreme Vision",
      value: "xtreme-vision",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/xtreme-vision-1.jpg",
      projects_amount: "2",
      projects_price_from: "20,000,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/xtreme-vision-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/dubai-marina.jpg",
          area_title: "Dubai Marina",
          area_data: "Price from 600,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/11/dubai-canal-51.jpg",
          area_title: "Dubai Canal",
          area_data: "Price from 931,150 AED",
        },
      ],
      about_the_company: [
        t("developerParagraphAbout58.1"),
        t("developerParagraphAbout58.2"),
        t("developerParagraphAbout58.3"),
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2021/11/xtreme-vision-4.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/xtreme-vision-3.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/xtreme-vision-5.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "Now the developer is offering  its main project for sale, which made it famous in the property market,  Volante Tower",
            "The main goal of this project was to meet the needs and requirements of the most demanding customers who are looking for the perfect place to live.",
            "If we look at each apartment in this complex, it is clear that everything was developed on the original idea and concept",
            "The interior and functionality of the apartments are a work of art",
            "The rooms look minimalist and aesthetically pleasing, whilst being at the same time functional",
            "Each apartment is characterized by large bedrooms, incredibly beautiful living rooms, an original kitchen layout, offices, closets, and more",
            "The most impressive thing here is the spacious terrace, which can seat up to 60 people.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/xtreme-vision-10-1024x683.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/xtreme-vision-7-1024x682.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/xtreme-vision-6-1-1024x682.jpg",
          ],
        },
        {
          container_info: [
            "Special attention should be paid to the incredible finish of the kitchens, especially since there are two of them per apartment",
            "There is a common kitchen, which is located closer to the living area, as well as the back kitchen, which is designed to be used for cooking dinner",
            "The apartments are distinguished by the use of only the most expensive and quality materials, including Italian travertine in the living room and bedroom",
            "Also, the walls will immediately catch your attention,, which are covered in Zebrano panels, with the use of Jordanian limestone",
            "To create a modern feel to the doors and cabinets the builder has used Zebrano wood.",
            "All apartments are integrated with a smart home system, which is currently considered the greatest achievement in the construction industry",
            "The system manages all the appliances and communications in the house, including lighting, air conditioning, security, and the sound system, etc",
            "The building is also complemented with a large parking lot for private use.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/xtreme-vision-8-1024x682.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/xtreme-vision-9-1024x683.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/xtreme-vision-11.jpg",
          ],
        },
      ],
    },
    {
      title: "Taraf",
      value: "taraf",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/02/luce-9.jpg",
      projects_amount: "2",
      projects_price_from: "1,000,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/12/taraf-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/palm-jumeirah.jpg",
          area_title: "Palm Jumeirah",
          area_data: "Price from 1,000,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/jumeirah-golf-estate.jpg",
          area_title: "Jumeirah Golf Estate",
          area_data: "Price from 1,320,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "East & West Group",
      value: "east-&-west-group",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/03/st-regis-2.jpg",
      projects_amount: "2",
      projects_price_from: "2,000,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/03/east-and-west-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/downtown-header.jpg",
          area_title: "Downtown Dubai",
          area_data: "Price from 428,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Triplanet",
      value: "triplanet",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/04/triplanet.jpg",
      projects_amount: "2",
      projects_price_from: "540,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/04/TRIPLANET-LOGO.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/downtown-header.jpg",
          area_title: "Downtown Dubai",
          area_data: "Price from 428,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "GGICO",
      value: "ggico",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/ggico-2.jpg",
      projects_amount: "2",
      projects_price_from: "180,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/10/GGICO-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/dubai-marina.jpg",
          area_title: "Dubai Marina",
          area_data: "Price from 600,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Ithra Dubai",
      value: "ithra-dubai",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/12/ithra-dubai-2.jpg",
      projects_amount: "1",
      projects_price_from: "4,418,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/12/ithra-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/11/deira-1.jpg",
          area_title: "Deira",
          area_data: "Price from 4,418,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "National Bonds",
      value: "national-bonds",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/06/national-bonds-1.jpg",
      projects_amount: "1",
      projects_price_from: "1,700,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/06/National-Bonds-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubai-hills-estate.jpg",
          area_title: "Dubai Hills Estate",
          area_data: "Price from 861,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "AHAD Group",
      value: "ahad-group",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/05/ahad-group-1.jpg",
      projects_amount: "1",
      projects_price_from: "714,737",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/05/Ahad-Logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/business-bay_-scaled.jpg",
          area_title: "Business Bay",
          area_data: "Price from 410,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Amali Properties",
      value: "amali-properties",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/12/amali-properties-1.jpg",
      projects_amount: "1",
      projects_price_from: "2,600,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/12/Amali-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2023/07/Dubai-Islands.jpg",
          area_title: "Dubai Islands",
          area_data: "Price from 2,600,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Forum Group",
      value: "forum-group",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/forum-group-5.jpg",
      projects_amount: "1",
      projects_price_from: "38,535,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/05/logo-forum-group.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/palm-jumeirah.jpg",
          area_title: "Palm Jumeirah",
          area_data: "Price from 1,000,000 AED",
        },
      ],
      about_the_company: [
        {
          paragraphs: [
            "The CARAT Villas complex has 22 villas for sale, which are located on the artificial island of Palm Jumeirah, 25 minutes from Downtown Dubai. These buildings are of three types:",
            "The Ruby villas differ from the others in the number of floors, there are four floors in these villas.",
            "Among the general characteristics of the buildings are a large number of rooms, in particular seven bedrooms, and the presence of a swimming pool.",
            "The starting price for a CARAT villa is AED 38,500,000 (USD 10,481,300).",
            "*The price is valid for 2020",
          ],
        },
        {
          paragraphs: [
            "Owners of these fantastic villas have a lot of amenities at their disposal. On the island they have the opportunity to visit swimming pools, beaches, restaurants and clubs.",
            "Also on Palm Jumeirah there are five-star hotels and two large shopping centers – Golden Mile Galleria and The Pointe by Nakheel.",
            "It takes 15 minutes to get to the mainland and 45 minutes to Dubai Airport.",
            "Regarding safety and comfort, residents do not have to worry – the villas offered concierge services, round the clock security, and cleaning and maintenance of swimming pools. underground parking is also available.",
          ],
        },
      ],
      gallery_images: [],
      section_5_info: [
        {
          container_info: [
            "The CARAT Villas complex has 22 villas for sale, which are located on the artificial island of Palm Jumeirah, 25 minutes from Downtown Dubai",
            "These buildings are of three types:",
            "Emerald;",
            "Sapphire;",
            "Ruby.",
            "The Ruby villas differ from the others in the number of floors, there are four floors in these villas.",
            "Among the general characteristics of the buildings are a large number of rooms, in particular seven bedrooms, and the presence of a swimming pool.",
            "The starting price for a CARAT villa is AED 38,500,000 (USD 10,481,300).",
            "*The price is valid for 2020",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/forum-group-6-1024x596.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/forum-group-7-1024x488.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/forum-group-8-1024x597.jpg",
          ],
        },
        {
          container_info: [
            "Owners of these fantastic villas have a lot of amenities at their disposal",
            "On the island they have the opportunity to visit swimming pools, beaches, restaurants and clubs.",
            "Also on Palm Jumeirah there are five-star hotels and two large shopping centers – Golden Mile Galleria and The Pointe by Nakheel.",
            "It takes 15 minutes to get to the mainland and 45 minutes to Dubai Airport.",
            "Regarding safety and comfort, residents do not have to worry – the villas offered concierge services, round the clock security, and cleaning and maintenance of swimming pools",
            "underground parking is also available.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/forum-group-9-1024x594.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/forum-group-10-1024x594.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/forum-group-12-1024x570.jpg",
          ],
        },
      ],
    },
    {
      title: "Invest Group Overseas",
      value: "invest-group-overseas",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/06/society-house-37.jpg",
      projects_amount: "1",
      projects_price_from: "1,900,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/06/invest-group-overseas-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/downtown-header.jpg",
          area_title: "Downtown Dubai",
          area_data: "Price from 428,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Sankari Properties",
      value: "sankari-properties",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/12/onesankari-marasi-marina-bb-05.jpg",
      projects_amount: "1",
      projects_price_from: null,
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/12/Sankari.png",
      areas_info: [],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Al Sharq Investment",
      value: "al-sharq-investment",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-sharq-investment-2.jpg",
      projects_amount: "1",
      projects_price_from: "2,600,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/05/al-sharq-investment-llc.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/palm-jumeirah.jpg",
          area_title: "Palm Jumeirah",
          area_data: "Price from 1,000,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-sharq-investment-3.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-sharq-investment-13.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-sharq-investment-11.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-sharq-investment-9.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-sharq-investment-10.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-sharq-investment-4.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-sharq-investment-5.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-sharq-investment-6.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-sharq-investment-12.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-sharq-investment-14.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-sharq-investment-15.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-sharq-investment-16.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/al-sharq-investment-7.jpg",
      ],
      section_5_info: null,
    },
    {
      title: "Roya",
      value: "roya",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/03/roya.jpg",
      projects_amount: "1",
      projects_price_from: "3,000,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/03/logo-roya.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/palm-jumeirah.jpg",
          area_title: "Palm Jumeirah",
          area_data: "Price from 1,000,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Dubai South",
      value: "dubai-south",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/03/south-bay-3-1.jpg",
      projects_amount: "1",
      projects_price_from: "280,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/06/logo-1.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/dubai-south.jpg",
          area_title: "Dubai South",
          area_data: "Price from 300,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Solidere International",
      value: "solidere-international",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/05/solidere-international-1.jpg",
      projects_amount: "1",
      projects_price_from: "2,700,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/05/solidere-international.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2023/05/al-zorah-2.jpg",
          area_title: "Al Zorah",
          area_data: "Price from 1,300,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "DIFC",
      value: "difc",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/09/difc-living-1.jpg",
      projects_amount: "1",
      projects_price_from: "1,500,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/09/difc-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/DIFC-scaled.jpg",
          area_title: "DIFC",
          area_data: "Price from 700,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Fortune 5",
      value: "fortune-5",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/05/fortune-5-1.jpg",
      projects_amount: "1",
      projects_price_from: "5,000,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/05/logo-fortune-5-black.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/business-bay_-scaled.jpg",
          area_title: "Business Bay",
          area_data: "Price from 410,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Tebyan",
      value: "tebyan",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/tebyan-2.jpg.webp",
      projects_amount: "1",
      projects_price_from: "881,306",
      logo_src:
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/05/logo-tebyan.png.webp",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/05/dubai-marina.jpg.webp",
          area_title: "Dubai Marina",
          area_data: "Price from 600,000 AED",
        },
      ],
      about_the_company: [
        {
          paragraphs: [
            "Developer Tebyan Properties has completed several projects in the United Arab Emirates over the years, including hotels, office centers and residential complexes.",
          ],
        },
        {
          paragraphs: [
            "Sparkle Towers consists of three high-rise residential buildings which were built in partnership with Swarovski and are located in Dubai Marina district.",
            "A distinctive feature is the exterior lighting, consisting of almost 2,000 lamps.",
            "The complex includes studios, apartments with one, two and three bedrooms, as well as penthouses with four bedrooms.",
            "Within walking distance from the complex there are local attractions, beaches, shopping centers, the Dubai Marina and the Dubai Marina Walk.",
            "Public transport system is well developed, it is only 20 minutes to Downtown Dubai and 30 minutes to DXB airport.",
            "The price for residential real estate starts at USD 302,000 (AED 1,109,306).",
            "*The price is valid for 2021",
          ],
        },
        {
          paragraphs: [
            "With a modern approach, the high competence of their specialists, and the use of innovative technologies in architecture and construction, private developer Tebyan Properties successfully implements grandiose projects to build technically complex facilities.",
          ],
        },
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/tebyan-3.jpg.webp",
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/tebyan-2-1.jpg.webp",
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/tebyan-7.jpg.webp",
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/tebyan-6.jpg.webp",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/tebyan-4.jpg",
        "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/tebyan-5.jpg.webp",
      ],
      section_5_info: [
        {
          container_info: [
            "Sparkle Towers consists of three high-rise residential buildings which were built in partnership with Swarovski and are located in Dubai Marina district.",
            "A distinctive feature is the exterior lighting, consisting of almost 2,000 lamps.",
            "The complex includes studios, apartments with one, two and three bedrooms, as well as penthouses with four bedrooms.",
            "Within walking distance from the complex there are local attractions, beaches, shopping centers, the Dubai Marina and the Dubai Marina Walk.",
            "Public transport system is well developed, it is only 20 minutes to Downtown Dubai and 30 minutes to DXB airport.",
            "The price for residential real estate starts at USD 302,000 (AED 1,109,306).",
            "*The price is valid for 2021",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/tebyan-8.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/tebyan-9.jpg.webp",
            "https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/11/tebyan-10.jpg.webp",
          ],
        },
      ],
    },
    {
      title: "Medore Properties",
      value: "medore-properties",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/05/medore.jpg",
      projects_amount: "1",
      projects_price_from: "836,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/05/medore-logo-black.png",
      areas_info: [],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Durar Group",
      value: "durar-group",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/05/durar-group.jpg",
      projects_amount: "1",
      projects_price_from: "3,000,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/05/durar-group-logo-1.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/jumeirah-golf-estate.jpg",
          area_title: "Jumeirah Golf Estate",
          area_data: "Price from 1,320,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Jumeirah Golf Estates",
      value: "jumeirah-golf-estates",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/jumeirah-golf-estates-10.jpg",
      projects_amount: "1",
      projects_price_from: "1,090,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/jumeirah-golf-estates-dubai-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubailand.jpg",
          area_title: "Dubailand",
          area_data: "Price from 322,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/jumeirah-golf-estate.jpg",
          area_title: "Jumeirah Golf Estate",
          area_data: "Price from 1,320,000 AED",
        },
      ],
      about_the_company: [
        {
          paragraphs: [
            "Redwood Avenue Villas consists of 47 luxury villas, each with 5-6 bedrooms. The community offers outdoor recreation – the parks, beautifully landscaped alleys and nature reserves within Redwood are ideal for this purpose.",
            "Each site is designed by experienced architects. Redwood Avenue offers individual landscapes for each villa: natural stone compositions imitating mountain slopes, mosaics and water elements.",
            "Buyers can not only choose from 11 architectural styles and several interior schemes, but also design their own home.",
          ],
        },
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2021/11/jumeirah-golf-estates-2.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "Redwood Avenue Villas consists of 47 luxury villas, each with 5-6 bedrooms",
            "The community offers outdoor recreation – the parks, beautifully landscaped alleys and nature reserves within Redwood are ideal for this purpose.",
            "Each site is designed by experienced architects",
            "Redwood Avenue offers individual landscapes for each villa: natural stone compositions imitating mountain slopes, mosaics and water elements.",
            "Buyers can not only choose from 11 architectural styles and several interior schemes, but also design their own home.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/jumeirah-golf-estates-3-1024x947.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/jumeirah-golf-estates-6.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/jumeirah-golf-estates-5-1024x674.jpg",
          ],
        },
        {
          container_info: [
            "Alandulus Villas is like a beautiful, small town in the Islamic style of Andalusia",
            "The complex contains 715 apartments and 95 townhouses with open terraces",
            "The total area of the villas is 4 hectares, while the area of green areas is 6 hectares",
            "Alandulus features 5 lakes, medical and fitness centers, restaurants, and a 131,000-square-foot clubhouse.",
            "The apartments contain state-of-the-art kitchens",
            "The floors of the living rooms, bedrooms, bathrooms and hallways are made of ceramic (or porcelain)",
            "The ceilings and walls are meticulously plastered and beautifully finished, and the joinery is of special quality.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/jumeirah-golf-estates-7-1024x576.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/jumeirah-golf-estates-8.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/jumeirah-golf-estates-9.jpg",
          ],
        },
      ],
    },
    {
      title: "Samana Developers",
      value: "samana-developers",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/11/samana-barari-views-4.jpg",
      projects_amount: "1",
      projects_price_from: "749,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/11/samana-logo-1.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2022/04/Majan-1.jpg",
          area_title: "Majan",
          area_data: "Price from 366,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Lamar",
      value: "lamar",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/05/sea-mirror-10.jpg",
      projects_amount: "1",
      projects_price_from: null,
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/05/lamar-logo.png",
      areas_info: [],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Meilenstein",
      value: "meilenstein",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/03/meilenstein-18.jpg",
      projects_amount: "1",
      projects_price_from: "450,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/03/meilenstein-logo.png",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2022/03/Studio-City-1.jpg",
          area_title: "Studio City",
          area_data: "Price from 416,087 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2022/02/al-furjan-1.jpg",
          area_title: "Al Furjan",
          area_data: "Price from 300,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2022/03/meilenstein-5.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/meilenstein-2.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/meilenstein-3.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/meilenstein-4.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/meilenstein-6.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/meilenstein-7.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "The developer’s portfolio currently includes the following two well-known residential projects in Dubai.",
            "STUDIO 101 is a nine-storey Art Nouveau apartment complex in Dubai Studio City",
            "It is the developer’s flagship project, which launched in 2018",
            "The two lower floors feature retail stores, restaurants, and a fitness centre",
            "Residents can enjoy a courtyard with lush greenery and outdoor lounge areas within the complex",
            "The building houses 118 properties, including studios and apartments with one- and two-bedroom layouts",
            "Properties have spacious balconies, Italian plumbing, built-in appliances, and heated floors",
            "The average price of a studio is AED 450,000 (USD 122,517).",
            "*The price is valid for 2021",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2022/03/meilenstein-10.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/meilenstein-11.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/meilenstein-12.jpg",
          ],
        },
        {
          container_info: [
            "JMA Furjan is an apartment complex in the Al Furjan district",
            "The façade of the property includes elements of a vertical garden, and the courtyard consists of green areas and swimming pools",
            "Units offer floor plans with one- to three-bedroom layouts, and the complex provides underground parking",
            "Apartments range in size from 111 sq",
            "m (1,200 sq",
            "ft) to 169 sq",
            "m (1,820 sq",
            "ft), and the starting price of a unit is AED 580,000 (USD 157,910).",
            "*The price is valid for 2021",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2022/03/meilenstein-14-1024x768.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/meilenstein-15.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/meilenstein-13.jpg",
          ],
        },
      ],
    },
    {
      title: "PMR Property",
      value: "pmr-property",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/11/The-Rings-1.jpg",
      projects_amount: "1",
      projects_price_from: null,
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/11/pmr-logo.png",
      areas_info: [],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Mered",
      value: "mered",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/11/Iconic-by-Mered-9.jpg",
      projects_amount: "1",
      projects_price_from: null,
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/11/mered-logo.png",
      areas_info: [],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Zeidler",
      value: "zeidler",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/10/the-marina-promenade-3.jpg",
      projects_amount: "1",
      projects_price_from: "1,500,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/10/zeidler-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/dubai-marina.jpg",
          area_title: "Dubai Marina",
          area_data: "Price from 600,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Dubai Sports City",
      value: "dubai-sports-city",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/dubai-sports-city-6.jpg",
      projects_amount: "1",
      projects_price_from: "556,194",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/06/dsc-logo.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubai-sports-city-scaled.jpg",
          area_title: "Dubai Sports City",
          area_data: "Price from 285,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Innovate Living",
      value: "innovate-living",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/12/palme-couture-l-03.jpg",
      projects_amount: "1",
      projects_price_from: "1,000,000",
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/05/logo-Innovate-Living.svg",
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/palm-jumeirah.jpg",
          area_title: "Palm Jumeirah",
          area_data: "Price from 1,000,000 AED",
        },
      ],
      about_the_company: [
        {
          paragraphs: [
            "One of Innovate Living’s popular properties is Palme Couture. It includes 14 luxury residences with fully furnished apartments. Each residence has a spacious living room and stylish dining room, a convenient storage room and a fully equipped modern kitchen.",
            "All residences are equipped with smart home systems and are fully serviced by a concierge.",
            "Palme Couture residents can use the swimming pool, access the spa, beauty salon, massage room and local gym, and relax in the cigar lounge and barbecue area. Moreover, each apartment is assigned a parking space in the underground parking lot.",
          ],
        },
        {
          paragraphs: [
            "Apartments in the innovative Palme Couture start from AED 21,000,000 (USD 5,800,000). The price depends on the characteristics of the living space.",
            "Palme Couture Residences is a good option for those who want to make Dubai their permanent place of residence. Buying a property here can be done under a special payment plan: housing can be purchased in installments, making small cash payments gradually. Palme Couture is also suitable for those who want to invest their capital wisely.",
            "The popularity of real estate in Dubai is constantly growing, which means that the purchase of apartments from the developer Innovate Living is a good investment with a high return.",
            "*The price is valid for 2020",
          ],
        },
      ],
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2021/11/innovate-living-5.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/innovate-living-8.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/innovate-living-9.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/innovate-living-3.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/innovate-living-4.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/innovate-living-6.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2021/11/innovate-living-7.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "One of Innovate Living’s popular properties is Palme Couture",
            "It includes 14 luxury residences with fully furnished apartments",
            "Each residence has a spacious living room and stylish dining room, a convenient storage room and a fully equipped modern kitchen.",
            "All residences are equipped with smart home systems and are fully serviced by a concierge.",
            "Palme Couture residents can use the swimming pool, access the spa, beauty salon, massage room and local gym, and relax in the cigar lounge and barbecue area",
            "Moreover, each apartment is assigned a parking space in the underground parking lot.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/innovate-living-20-1024x734.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/innovate-living-10-1024x684.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/innovate-living-11-1024x684.jpg",
          ],
        },
        {
          container_info: [
            "Apartments in the innovative Palme Couture start from AED 21,000,000 (USD 5,800,000)",
            "The price depends on the characteristics of the living space.",
            "Palme Couture Residences is a good option for those who want to make Dubai their permanent place of residence",
            "Buying a property here can be done under a special payment plan: housing can be purchased in installments, making small cash payments gradually",
            "Palme Couture is also suitable for those who want to invest their capital wisely.",
            "The popularity of real estate in Dubai is constantly growing, which means that the purchase of apartments from the developer Innovate Living is a good investment with a high return.",
            "*The price is valid for 2020",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/innovate-living-22-582x1024.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/innovate-living-23-1024x576.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/innovate-living-21-1024x684.jpg",
          ],
        },
      ],
    },
    {
      title: "Bin Shafar Holding",
      value: "bin-shafar-holding",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/06/Bin-Shafar-Holding-1.jpg",
      projects_amount: "1",
      projects_price_from: "2,100,000",
      logo_src: null,
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/dubai-marina.jpg",
          area_title: "Dubai Marina",
          area_data: "Price from 600,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "London Gate",
      value: "london-gate",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/12/London-Gate2.jpg",
      projects_amount: "1",
      projects_price_from: null,
      logo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/12/London-Gate.png",
      areas_info: [],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Gemini",
      value: "gemini",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/gemini-1.jpg",
      projects_amount: "1986 y.",
      projects_price_from: "1,098,380",
      logo_src: null,
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/business-bay_-scaled.jpg",
          area_title: "Business Bay",
          area_data: "Price from 410,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "SOL Properties",
      value: "sol-properties",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/sol-properties.jpg",
      projects_amount: "1979 y.",
      projects_price_from: "322,000",
      logo_src: null,
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubailand.jpg",
          area_title: "Dubailand",
          area_data: "Price from 322,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/jumeirah-golf-estate.jpg",
          area_title: "Jumeirah Golf Estate",
          area_data: "Price from 1,320,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Al Futtaim Group",
      value: "al-futtaim-group",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/03/al-futtaim-group-2.jpg",
      projects_amount: "1975 y.",
      projects_price_from: "1,541,000",
      logo_src: null,
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2022/03/dubai-festival-city.jpg",
          area_title: "Dubai Festival City",
          area_data: "Price from 780,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2022/03/al-futtaim-group-5.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/al-futtaim-group-6.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/al-futtaim-group-4.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/al-futtaim-group-3.jpg",
      ],
      section_5_info: [
        {
          container_info: [
            "Al Badia is a community of villas, townhouses, and apartments built in a Mediterranean style amidst landscaped streets",
            "The villas and townhouses offer floor plans with two to five bedrooms",
            "Units range in size from 1,003 sq",
            "ft",
            "(93 sq",
            "m.) to 5,043 sq",
            "ft",
            "(468 sq",
            "m.), and prices range from AED 1,200,000 (USD 327,000) to AED 7,000,000 (USD 1,906,000)",
            "Apartments feature layouts with one to four bedrooms",
            "Units range in size from 1,537 sq",
            "ft",
            "(143 sq",
            "m.) to 7,300 sq",
            "ft",
            "(678 sq",
            "m.), and prices range from AED 1,750,000 (USD 476,400) to AED 4,000,000 (USD 1,089,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2022/03/al-futtaim-group-7-1024x458.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/al-futtaim-group-8.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/al-futtaim-group-9.jpg",
          ],
        },
        {
          container_info: [
            "Al Badia Hillside Village is built on a picturesque hill overlooking a golf course",
            "Properties have an eastern architectural style with 145 different floor plans",
            "The community offers apartments and duplexes with one to three bedrooms",
            "Properties range in size from 1,100 sq",
            "ft",
            "(102 sq",
            "m.) to 3,715 sq",
            "ft",
            "(345 sq",
            "m.), and prices range from AED 1,200,000 (USD 326,700) to AED 3,800,000 (USD 1,034,500).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2022/03/al-futtaim-group-12.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/al-futtaim-group-11.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/al-futtaim-group-10.jpg",
          ],
        },
        {
          container_info: [
            "Marsa Plaza is a tower of 500 residential units",
            "Apartments and penthouses have floor plans with one to four bedrooms",
            "Units range in size from 1,007 sq",
            "ft",
            "(93 sq",
            "m.) to 3,756 sq",
            "ft",
            "(348 sq",
            "m.), and prices range from AED 1,575,000 (USD 429,000) to AED 7,210,000 (USD 1,963,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2022/03/al-futtaim-group-14.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/al-futtaim-group-13.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2022/03/al-futtaim-group-15-1024x571.jpg",
          ],
        },
      ],
    },
    {
      title: "Oriental Pearls",
      value: "oriental-pearls",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/oriental-pearls-1.jpg",
      projects_amount: "1915 y.",
      projects_price_from: "1,169,824",
      logo_src: null,
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/meydan-city.jpg",
          area_title: "Meydan City",
          area_data: "Price from 1,150,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/nad-al-sheba.jpg",
          area_title: "Nad Al Sheba",
          area_data: "Price from 1,729,000 AED",
        },
      ],
      about_the_company: [
        {
          paragraphs: [
            "The construction company has two residential complexes. Construction work is still going on in their area of operation.",
          ],
        },
        {
          paragraphs: [
            "This residential complex is located in the prestigious Meydan-City district. You are offered a 1-4 bedroom apartments with a size ranging from 800 to 2000 sq.m.",
            "Royal Pearls is set up like a small family town. There is a theater, fitness center, supermarket, spa and beauty salons, and playgrounds for children.",
            "The starting price for luxury housing is about USD 300,000 or AED 1,169,824.",
            "*The price is valid for 2023",
          ],
        },
        {
          paragraphs: [
            "The concept for these residences is to combine the classic with the modern in the interior. Multifunctional apartments have from 1 to 4 bedrooms and smart home technology for the comfort and safety of the residents.",
            "The district where this complex is located, Nad Al Sheba, has a good reputation. Within walking distance of the residential complex is Meydan Racecourse, the Falcon Museum of History, tennis courts, nightclubs and the Deep Dive Dubai sports complex, where you can safely dive.",
            "Tonino Lamborghini Residences also has parks, restaurants, stores, fitness facilities and a swimming pool, educational institutions and clinics.",
            "To live in these high-tech apartments, you should be prepared to pay from USD 383,000, that is about AED 1,500,000.",
            "*The price is valid for 2023",
          ],
        },
      ],
      gallery_images: [],
      section_5_info: [
        {
          container_info: [
            "This residential complex is located in the prestigious Meydan-City district",
            "You are offered a 1-4 bedroom apartments with a size ranging from 800 to 2000 sq.m.",
            "Royal Pearls is set up like a small family town",
            "There is a theater, fitness center, supermarket, spa and beauty salons, and playgrounds for children.",
            "The starting price for luxury housing is about USD 300,000 or AED 1,169,824.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/oriental-pearls-3-1024x728.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/oriental-pearls-2-1024x642.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/oriental-pearls-4-1024x431.jpg",
          ],
        },
        {
          container_info: [
            "The concept for these residences is to combine the classic with the modern in the interior",
            "Multifunctional apartments have from 1 to 4 bedrooms and smart home technology for the comfort and safety of the residents.",
            "The district where this complex is located, Nad Al Sheba, has a good reputation",
            "Within walking distance of the residential complex is Meydan Racecourse, the Falcon Museum of History, tennis courts, nightclubs and the Deep Dive Dubai sports complex, where you can safely dive.",
            "Tonino Lamborghini Residences also has parks, restaurants, stores, fitness facilities and a swimming pool, educational institutions and clinics.",
            "To live in these high-tech apartments, you should be prepared to pay from USD 383,000, that is about AED 1,500,000.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/oriental-pearls-8.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/oriental-pearls-6.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/oriental-pearls-7.jpg",
          ],
        },
      ],
    },
    {
      title: "Muraba Properties",
      value: "muraba-properties",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2022/03/muraba-properties-2.jpg",
      projects_amount: "2014 y.",
      projects_price_from: "5,000,000",
      logo_src: null,
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/palm-jumeirah.jpg",
          area_title: "Palm Jumeirah",
          area_data: "Price from 1,000,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [
        "https://metropolitan.realestate/wp-content/uploads/2022/03/muraba-properties-12.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/muraba-properties-7.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/muraba-properties-3.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/muraba-properties-6.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/muraba-properties-10.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/muraba-properties-5.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/muraba-properties-8.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/muraba-properties-9.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/muraba-properties-11.jpg",
        "https://metropolitan.realestate/wp-content/uploads/2022/03/muraba-properties-4.jpg",
      ],
      section_5_info: null,
    },
    {
      title: "Green Group",
      value: "green-group",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/green-group-1.jpg",
      projects_amount: "2013 y.",
      projects_price_from: "494,819",
      logo_src: null,
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubailand.jpg",
          area_title: "Dubailand",
          area_data: "Price from 322,000 AED",
        },
      ],
      about_the_company: [
        {
          paragraphs: ["Let’s take a look at Green Group’s major projects:"],
        },
        {
          paragraphs: [
            "Signature Villas XIV is a gated community located in the Jumeirah Village Circle. There are 4-bedroom villas with maid’s rooms available for sale. The residences are designed in a contemporary style. All villas include a family living room, open-plan kitchen, roof terraces, a 2-car garage and a private garden. Close to the community are supermarkets, restaurants, hospitals, gyms and other essential facilities.",
          ],
        },
        {
          paragraphs: [
            "Signature Villas is a sub-community within the Nakheel community located on the Palm Jumeirah coast. The project includes spacious 5-7 bedroom premium villas available for sale and rent. The properties range in size from 650-1393 sqm. Villas can be designed in Arabic, European or Mediterranean style. The cost of such properties ranges from AED 15,000,000 (USD 4,083,632). Rental prices, depending on the size and location of the villa, vary between AED 450,000 and AED 2,000,000 (USD 122,509-544,484) per year. Near the community are both small stores and chain supermarkets (Spinney’s, Choithrams, etc.), and restaurants. There are schools and kindergartens within a 10-minute walk.",
            "*The price is valid for 2023",
          ],
        },
      ],
      gallery_images: [],
      section_5_info: [
        {
          container_info: [
            "Signature Villas XIV is a gated community located in the Jumeirah Village Circle",
            "There are 4-bedroom villas with maid’s rooms available for sale",
            "The residences are designed in a contemporary style",
            "All villas include a family living room, open-plan kitchen, roof terraces, a 2-car garage and a private garden",
            "Close to the community are supermarkets, restaurants, hospitals, gyms and other essential facilities.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/green-group-3.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/green-group-4.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/green-group-5.jpg",
          ],
        },
        {
          container_info: [
            "Signature Villas is a sub-community within the Nakheel community located on the Palm Jumeirah coast",
            "The project includes spacious 5-7 bedroom premium villas available for sale and rent",
            "The properties range in size from 650-1393 sqm",
            "Villas can be designed in Arabic, European or Mediterranean style",
            "The cost of such properties ranges from AED 15,000,000 (USD 4,083,632)",
            "Rental prices, depending on the size and location of the villa, vary between AED 450,000 and AED 2,000,000 (USD 122,509-544,484) per year",
            "Near the community are both small stores and chain supermarkets (Spinney’s, Choithrams, etc.), and restaurants",
            "There are schools and kindergartens within a 10-minute walk.",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/11/green-group-6.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/green-group-8.jpg",
            "https://metropolitan.realestate/wp-content/uploads/2021/11/green-group-7.jpg",
          ],
        },
      ],
    },
    {
      title: "Accor",
      value: "accor",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/03/accor-2.jpg",
      projects_amount: "1963 y.",
      projects_price_from: "3,000,000",
      logo_src: null,
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/12/al-sufouh.jpg",
          area_title: "Al Sufouh",
          area_data: "Price from 2,000,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
    {
      title: "Falconcity of Wonders",
      value: "falconcity-of-wonders",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2021/11/falconcity-of-wonders-2.jpg",
      projects_amount: "2005 y.",
      projects_price_from: "636,000",
      logo_src: null,
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/07/fon-2.jpg",
          area_title: "Falconcity",
          area_data: "Price from 494,000 AED",
        },
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/06/dubailand.jpg",
          area_title: "Dubailand",
          area_data: "Price from 322,000 AED",
        },
      ],
      about_the_company: [
        {
          paragraphs: [
            "The developer’s biggest achievement was the Falconcity City of Wonders project in DubaiLand, Dubai’s largest district. On the site of the community, which resembles a falcon’s figure, there are life-size copies of the wonders of ancient and modern history: the Eiffel Tower, the pyramids of Egypt, the Hanging Gardens of Semiramis, the Alexandria Lighthouse, the Leaning Tower of Pisa, the Taj Mahal, the Great Wall of China and others. Falconcity City real estate is represented by exclusive villas and apartments for residential complexes and hotels, surrounded by infrastructure facilities. The uniqueness of the project is to combine tourists’ desire to relax on the beach and at the same time admire the wonders of the world, collected in one place.",
          ],
        },
        {
          paragraphs: [
            "In SAAM Vega, a pyramid-shaped development, studios are priced from AED 570,000 (USD 155,000) and are sized from 36 sq.m. (388 sq ft). One-bedroom apartments cost from AED 1,082,000 (USD 294,500) and offer a living space of 51 sq.m. (549 sq ft).",
            "Three-bedroom villas in Western Residence North are selling from AED 2,800,000 (USD 762,000) with 374 sq m (4026 sq ft). A 4-bedroom, 477 sqm (5134 sqf) villa is also available for AED 3,800,000 (USD 1,034,000) and a 5-bedroom 446 sqm (4801 sqf) residence is available for AED 2,541,000 (USD 692,000).",
            "Off-plan 5-bedroom villas at Eastern Residence, depending on their size, range from AED 2,540,000 (USD 691,500) to AED 5,500,000 (USD 1,500,000).",
            "*The price is valid for 2023",
          ],
        },
      ],
      gallery_images: [],
      section_5_info: [
        {
          container_info: [
            "The developer’s biggest achievement was the Falconcity City of Wonders project in DubaiLand, Dubai’s largest district",
            "On the site of the community, which resembles a falcon’s figure, there are life-size copies of the wonders of ancient and modern history: the Eiffel Tower, the pyramids of Egypt, the Hanging Gardens of Semiramis, the Alexandria Lighthouse, the Leaning Tower of Pisa, the Taj Mahal, the Great Wall of China and others",
            "Falconcity City real estate is represented by exclusive villas and apartments for residential complexes and hotels, surrounded by infrastructure facilities",
            "The uniqueness of the project is to combine tourists’ desire to relax on the beach and at the same time admire the wonders of the world, collected in one place.",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/12/falconcity-of-wonders-4-1024x468.jpg",
          ],
        },
        {
          container_info: [
            "In SAAM Vega, a pyramid-shaped development, studios are priced from AED 570,000 (USD 155,000) and are sized from 36 sq.m",
            "(388 sq ft)",
            "One-bedroom apartments cost from AED 1,082,000 (USD 294,500) and offer a living space of 51 sq.m",
            "(549 sq ft).",
            "Three-bedroom villas in Western Residence North are selling from AED 2,800,000 (USD 762,000) with 374 sq m (4026 sq ft)",
            "A 4-bedroom, 477 sqm (5134 sqf) villa is also available for AED 3,800,000 (USD 1,034,000) and a 5-bedroom 446 sqm (4801 sqf) residence is available for AED 2,541,000 (USD 692,000).",
            "Off-plan 5-bedroom villas at Eastern Residence, depending on their size, range from AED 2,540,000 (USD 691,500) to AED 5,500,000 (USD 1,500,000).",
            "*The price is valid for 2023",
          ],
          two_col_grid_image_src: [
            "https://metropolitan.realestate/wp-content/uploads/2021/12/falconcity-of-wonders-3-1024x468.jpg",
          ],
        },
      ],
    },
    {
      title: "Royal Group",
      value: "royal-group",
      header_photo_src:
        "https://metropolitan.realestate/wp-content/uploads/2023/06/Royal-Group-2.jpg",
      projects_amount: "1990 y.",
      projects_price_from: "25,200,000",
      logo_src: null,
      areas_info: [
        {
          area_img_src:
            "https://metropolitan.realestate/wp-content/uploads/2021/05/palm-jumeirah.jpg",
          area_title: "Palm Jumeirah",
          area_data: "Price from 1,000,000 AED",
        },
      ],
      about_the_company: null,
      gallery_images: [],
      section_5_info: null,
    },
  ];

  const { id } = useParams();
  const navigate = useNavigate();
  const [developerData, setDeveloperData] = useState(null);

  useEffect(() => {
    setDeveloperData(developers.find((dev) => dev.value === id));
  }, [id]);

  useEffect(() => {
    if (developerData) {
      document.title = "Developer " + developerData.title;
      window.scrollTo(0, 0);
    }
  }, [developerData]);

  useEffect(() => {
    if (developerData) {
      setDeveloperData(developers.find((dev) => dev.value === id));
    }
  }, [i18n.language]);

  if (!developerData) {
    navigate("/developers");
    return null;
  }

  return (
    <main className="devMainPage">
      <HeaderSecond />
      <WidthContainer>
        <Logo__DeveloperMainP item={developerData} />
        <About__DeveloperMainP item={developerData} />
        <Areas__DeveloperMainP />
        <ProjectsCompany__DeveloperMain item={developerData} />
        <div className="developerMain__components">
          <HelpForm />
        </div>
        <div className="developerMain__company">
          <h2 className="devMainPage__companiesTitle">
            {t("developerMainPage__OtherDevelopersTitle")}
          </h2>
          <Company start={0} end={10} />
        </div>
      </WidthContainer>
    </main>
  );
};

export default developerMainPage;
