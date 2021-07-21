import { Request, Response, Router } from "express";

class MainController {
  public path: string = "/";
  public router: Router = Router();

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get("/discover", this.discover);
    this.router.get("/tips", this.tips);
  }

  private async discover(req: Request, res: Response) {
    try {
      const protocol = process.env.NODE_ENV == "production" ? "https" : "http";
      const host = req.get("host");
      const domain = `${protocol}://${host}`;

      return res.status(200).json([
        {
          id: 1,
          name: "The Highlands",
          country: "United Kingdom",
          description:
            'The Highlands is a historic region of Scotland. Culturally, the Highlands and the Lowlands diverged from the later Middle Ages into the modern period, when Lowland Scots replaced Scottish Gaelic throughout most of the Lowlands. The term is also used for the area north and west of the Highland Boundary Fault, although the exact boundaries are not clearly defined, particularly to the east. The Great Glen divides the Grampian Mountains to the southeast from the Northwest Highlands. The Scottish Gaelic name of A\' Ghàidhealtachd literally means "the place of the Gaels" and traditionally, from a Gaelic-speaking point of view, includes both the Western Isles and the Highlands.',
          more: "The area is very sparsely populated, with many mountain ranges dominating the region, and includes the highest mountain in the British Isles, Ben Nevis. During the 18th and early 19th centuries the population of the Highlands rose to around 300,000, but from c. 1841 and for the next 160 years, the natural increase in population was exceeded by emigration (mostly to Canada, the United States, Australia and New Zealand, and migration to the industrial cities of Scotland and England.) The area is now one of the most sparsely populated in Europe. At 9.1/km2 (24/sq mi) in 2012, the population density in the Highlands and Islands is less than one seventh of Scotland's as a whole, comparable with that of Bolivia, Chad and Russia.",
          latitude: 57.12,
          longitude: -4.71,
          heroPicture: `${domain}/images/locations/highlands.jpg`,
          pictures: ["photo2", "photo3", "photo4"],
          advisory:
            "We accept no liability for any visitors eaten alive by midges.",
        },
        {
          id: 2,
          name: "Great Smoky Mountains",
          country: "United States",
          description:
            "The Great Smoky Mountains are a mountain range rising along the Tennessee–North Carolina border in the southeastern United States. They are a subrange of the Appalachian Mountains, and form part of the Blue Ridge Physiographic Province. The range is sometimes called the Smoky Mountains and the name is commonly shortened to the Smokies. The Great Smokies are best known as the home of the Great Smoky Mountains National Park, which protects most of the range. The park was established in 1934, and, with over 11 million visits per year, it is the most visited national park in the United States.",
          more: "The Great Smokies are part of an International Biosphere Reserve. The range is home to an estimated 187,000 acres (76,000 ha) of old growth forest, constituting the largest such stand east of the Mississippi River. The cove hardwood forests in the range's lower elevations are among the most diverse ecosystems in North America, and the Southern Appalachian spruce-fir forest that coats the range's upper elevations is the largest of its kind. The Great Smokies are also home to the densest black bear population in the Eastern United States and the most diverse salamander population outside of the tropics.",
          latitude: 35.6532,
          longitude: -83.507,
          heroPicture: `${domain}/images/locations/smokies.jpg`,
          pictures: [
            "photo1",
            "photo2",
            "photo3",
            "photo4",
            "photo5",
            "photo6",
            "photo7",
            "photo8",
          ],
          advisory:
            "We accept no liability for any visitors eaten alive by bears.",
        },
        {
          id: 3,
          name: "Knight Inlet",
          country: "Canada",
          description:
            "Knight Inlet or Tsawatti or Tswawadwi is one of the principal inlets of the British Columbia Coast, and the largest of the major inlets in the southern part of the Coast. It is fifth in sequence of the great saltwater inlets north from the 49th parallel near Vancouver, but it is the first whose outflow points away from the Strait of Georgia, opening into Queen Charlotte Strait at the Kwakwakaʼwakw community of Memkumlis (often known by the name of the group who were based there, the Mamalilikala) on Village Island.",
          more: 'Knight Inlet is one of the longest on the BC Coast at c. 125 km (78 mi) in length; it is about 2.5 km (1.6 mi) in average width. Its great volume of water causes a major current and severe turbulence at its mouth during tidal changes, and outflow winds from it, which pour out of the BC Interior, are a hazard to small vessels in the Queen Charlotte Strait. It is fed by the Klinaklini River, which begins on the western edge of the Chilcotin Plateau and is fed by the massive Klinaklini Glacier, one of the two main eastern "tongues" of the Ha-Iltzuk Icefield, one of the largest of the ice caps of the southern Coast Mountains and also home to the Silverthrone Caldera volcanic bowl.',
          latitude: 50.8883,
          longitude: -125.5857,
          heroPicture: `${domain}/images/locations/knight-inlet.jpg`,
          pictures: ["photo3", "photo4", "photo5", "photo6", "photo7"],
          advisory: "",
        },
        {
          id: 4,
          name: "Black River Gorges",
          country: "Mauritius",
          description:
            "Black River Gorges National Park is a national park in the hilly south-western part of Mauritius. It was proclaimed on June 15, 1994 and is managed by the National Parks and Conservation Service. It covers an area of 67.54 km² including humid upland forest, drier lowland forest and marshy heathland. Facilities for visitors include two information centres, picnic areas and 60 kilometres of trails. There are four field stations in the park which are used for National Parks and Conservation Service and Mauritian Wildlife Foundation research and conservation projects.",
          more: "The park protects most of the island's remaining rainforest although much of this has been degraded by introduced plants such as Chinese guava and privet and animals such as rusa deer and wild pigs. Several areas have been fenced off and invasive species have been eradicated from them to preserve native wildlife. Many endemic plants and animals still occur in the park including the Mauritian flying fox and all of the island's endemic birds: Mauritius kestrel, pink pigeon, Mauritius parakeet, Mauritius cuckooshrike, Mauritius bulbul, Mauritius olive white-eye, Mauritius grey white-eye and Mauritius fody.",
          latitude: -20.4264,
          longitude: 57.4509,
          heroPicture: `${domain}/images/locations/black-river-gorges.jpg`,
          pictures: ["photo4", "photo5", "photo6", "photo7", "photo8"],
          advisory: "",
        },
        {
          id: 5,
          name: "Abu Simbel",
          country: "Egypt",
          description:
            "Abu Simbel is a village in the Egyptian part of Nubia, about 240 kilometers southwest of Aswan and near the border with Sudan. As of 2012, it has about 2600 inhabitants. It is best known as the site of the Abu Simbel temples, which were built by King Ramses II.",
          more: "In the past, Abu Simbel was located on the west bank of the Nile between the first and second Cataracts of the Nile. Cataracts are rapids caused by boulders or rock sills; they were only passable with difficulty by Nile ship traffic, especially at baseflow. Today both cataracts near Aswan and Wadi Halfa are covered by Lake Nasser, which is named after Gamal Abdel Nasser, Egyptian president from 1954 to 1970. At the time of Ramses II, the southern border of the realm of the Pharaohs was located near the two cataracts. The construction of the Abu Simbel temple compound there was meant to demonstrate the power and eternal supremacy of Egypt with respect to the tributary Nubia.",
          latitude: 22.346,
          longitude: 31.6156,
          heroPicture: `${domain}/images/locations/abu-simbel.jpg`,
          pictures: [
            "photo5",
            "photo6",
            "photo7",
            "photo8",
            "photo1",
            "photo2",
            "photo3",
            "photo4",
          ],
          advisory: "",
        },
        {
          id: 6,
          name: "Verona",
          country: "Italy",
          description:
            "Verona is a city on the Adige River in Veneto, Italy, with 258,108 inhabitants. It is one of the seven provincial capitals of the region. It is the second largest city municipality in the region and the third largest in northeast Italy. The metropolitan area of Verona covers an area of 1,426 km2 (550.58 sq mi) and has a population of 714,274 inhabitants. It is one of the main tourist destinations in northern Italy because of its artistic heritage and several annual fairs, shows, and operas, such as the lyrical season in the Arena, an ancient Roman amphitheater.",
          more: "Between the 13th and 14th century the city was ruled by the Della Scala Family. Under the rule of the family, in particular of Cangrande I della Scala, the city experienced great prosperity, becoming powerful, rich and being surrounded with new walls. The Della Scala era is survived in numerous monuments around Verona. Two of William Shakespeare's plays are set in Verona: Romeo and Juliet and The Two Gentlemen of Verona. It is unknown if Shakespeare ever visited Verona or Italy, but his plays have lured many visitors to Verona and surrounding cities. The city has been declared a World Heritage Site by UNESCO because of its urban structure and architecture.",
          latitude: 45.4384,
          longitude: 10.9916,
          heroPicture: `${domain}/images/locations/verona.jpg`,
          pictures: [
            "photo6",
            "photo7",
            "photo8",
            "photo1",
            "photo2",
            "photo3",
            "photo4",
          ],
          advisory: "",
        },
        {
          id: 7,
          name: "Taj Mahal",
          country: "India",
          description:
            "The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.",
          more: "The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being \"the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage\". It is regarded by many as the best example of Mughal architecture and a symbol of India's rich history. The Taj Mahal attracts 7–8 million visitors a year and in 2007, it was declared a winner of the New 7 Wonders of the World (2000–2007) initiative.",
          latitude: 27.1751,
          longitude: 78.0421,
          heroPicture: `${domain}/images/locations/taj-mahal.jpg`,
          pictures: [
            "photo7",
            "photo8",
            "photo1",
            "photo2",
            "photo3",
            "photo4",
            "photo5",
            "photo6",
          ],
          advisory: "",
        },
        {
          id: 8,
          name: "Penang",
          country: "Malaysia",
          description:
            "Penang is a Malaysian state located on the northwest coast of Peninsular Malaysia, by the Malacca Strait. It has two parts: Penang Island, where the capital city, George Town, is located, and Seberang Perai on the Malay Peninsula. They are connected by Malaysia's two longest road bridges, the Penang Bridge and the Sultan Abdul Halim Muadzam Shah Bridge; the latter is also as of May 2019 the longest oversea bridge in Southeast Asia. The second smallest Malaysian state by land mass, Penang is bordered by Kedah to the north and the east, and Perak to the south.",
          more: "Penang's modern history began in 1786, upon the establishment of George Town by Francis Light. Penang formed part of the Straits Settlements in 1826, which became a British crown colony in 1867. Direct British rule was only briefly interrupted during World War II, when Japan occupied Penang; the British retook Penang in 1945. Penang was later merged with the Federation of Malaya (now Malaysia), which gained independence from the British in 1957. Following the decline of its entrepôt trade towards the 1970s, Penang's economy was reoriented towards hi-tech manufacturing.",
          latitude: 5.4141,
          longitude: 100.3288,
          heroPicture: `${domain}/images/locations/penang.jpg`,
          pictures: ["photo8", "photo1", "photo2", "photo3", "photo4"],
          advisory: "",
        },
        {
          id: 9,
          name: "Blue Mountains",
          country: "Australia",
          description:
            "The Blue Mountains are a mountainous region and a mountain range located in New South Wales, Australia. The region borders on Sydney's metropolitan area, its foothills starting about 50 kilometres (31 mi) west of centre of the state capital, close to the major suburb of Penrith. The public's understanding of the extent of the Blue Mountains is varied, as it forms only part of an extensive mountainous area associated with the Great Dividing Range. Officially the Blue Mountains region is bounded by the Nepean and Hawkesbury rivers in the east, the Coxs River and Lake Burragorang to the west and south, and the Wolgan and Colo rivers to the north. Geologically, it is situated in the central parts of the Sydney Basin.",
          more: "The Blue Mountains Range comprises a range of mountains, plateau escarpments extending off the Great Dividing Range about 4.8 kilometres (3.0 mi) northwest of Wolgan Gap in a generally southeasterly direction for about 96 kilometres (60 mi), terminating at Emu Plains. For about two-thirds of its length it is traversed by the Great Western Highway and the Main Western railway line. Several established towns are situated on its heights, including Katoomba, Blackheath, Mount Victoria, and Springwood. The range forms the watershed between Coxs River to the south and the Grose and Wolgan rivers to the north. The range contains the Explorer Range and the Bell Range.",
          latitude: -33.41,
          longitude: 150.3037,
          heroPicture: `${domain}/images/locations/blue-mountains.jpg`,
          pictures: [
            "photo1",
            "photo2",
            "photo3",
            "photo4",
            "photo5",
            "photo6",
            "photo7",
            "photo8",
          ],
          advisory:
            "We accept no liability for any visitors eaten alive by drop bears.",
        },
        {
          id: 10,
          name: "Kyoto",
          country: "Japan",
          description:
            "Kyoto, officially Kyoto City, is the capital city of Kyoto Prefecture in Japan. Located in the Kansai region on the island of Honshu, Kyoto forms a part of the Keihanshin metropolitan area along with Osaka and Kobe. As of 2018, the city had a population of 1.47 million.",
          more: "In 794, Kyoto (then known as Heian-kyō) was chosen as the new seat of Japan's imperial court. The original city was arranged in accordance with traditional Chinese feng shui following the model of the ancient Chinese capital of Chang'an. The Imperial Palace faced south, resulting in Ukyō (the right sector of the capital) being on the west while Sakyō (the left sector) is on the east. The streets in the modern-day wards of Nakagyō, Shimogyō, and Kamigyō-ku still follow a grid pattern.",
          latitude: 35.0116,
          longitude: 135.7681,
          heroPicture: `${domain}/images/locations/kyoto.jpg`,
          pictures: [
            "photo2",
            "photo3",
            "photo4",
            "photo5",
            "photo6",
            "photo7",
            "photo8",
            "photo1",
          ],
          advisory:
            "We accept no liability for any visitors eaten alive by Pokemon.",
        },
      ]);
    } catch (exception) {
      console.error(`MainController => discover() => Exception: ${exception}`);

      return res.status(500).end();
    }
  }

  private async tips(req: Request, res: Response) {
    return res.status(200).json([
      {
        text: "Where to go",
        children: [
          {
            text: "How about magnificent Morocco? Or incredible India? Or wonderful, er, Wamerica? We have vacations in every continent in the world, so you can go wherever your heart leads you – or wherever your bank account can afford, whichever comes first. Just pick up the phone and get in touch today and we'll bring the holiday of your dreams to life. (Please contact your bank manager first.)",
          },
        ],
      },
      {
        text: "When to travel",
        children: [
          {
            text: "If you're looking for a special summer getaway, we have a great vacation for you. If you're looking for a cheeky winter break, we can make it happen. If you accidentally said 'you too' after a cinema usher ripped your ticket and told you to enjoy the film and now need to fly to the opposite end of the planet and assume a false name to avoid eternal embarrassment, we're here to help. TL;DR: we're pretty darn good at vacations.",
          },
        ],
      },
      {
        text: "What to pack",
        children: [
          {
            text: "What you need to pack depends on where you want to travel, but for hot climates you'll want to pack some high-quality sun cream, mosquito repellant, and perhaps a battery pack for your iPhone so you can take lots of pictures to send back to your friends who are stuck at home. If you're visiting a cold climate, you should pack a large notebook so you can take copious notes of the reasons why visiting a hot climate would have been better.",
          },
        ],
      },
      {
        text: "How to pay",
        children: [
          {
            text: "When it comes to paying for your vacation, you'll be pleased to know we accept literally every form of payment you can imagine: Apple Pay, Visa, Mastercard, cashiers check, WePay, Alipay, PayPal, Payzone, Applejack, PayU, SagePay, Qiwi, Passport, Pinkie Pie, Atom, Adyen, Amazon Pay, Twilight Sparkle, Paysafe, Payoneer, Paytm, Klarna, and even cash. The only thing we don't accept is Google Pay, for obvious reasons, but come on – we just listed several characters from My Little Pony and you probably didn't even notice because Apple Pay was first on our list.",
          },
        ],
      },
      {
        text: "When to pay",
        children: [
          {
            text: "You can either pay the full amount now, put down a 50% deposit now and pay the balance a month before your trip, or put down a 10% deposit now and hope we forget about charging you the rest. Honestly it's all a bit irrelevant given the likelihood of your flight getting cancelled thanks to the coronavirus.",
          },
        ],
      },
      {
        text: "Who will be in my group",
        children: [
          {
            text: "All our groups are carefully hand-picked to ensure there's a wide variety of interesting, funny people who we know for sure will become your friends after the trip finishes. (BOB: WE NEED TO EDIT THIS, IT'S CLEARLY NOT TRUE. SERIOUSLY, WHO KEEPS IN TOUCH WITH PEOPLE THEY MEET DURING A VACATION?)",
          },
        ],
      },
      {
        text: "About this app",
        children: [
          {
            text: "This app was made by an elite team of rockstar developers, who have made it their mission to build finely crafted works of art. This is no mere app: this is artisanal, craft Swift, delicately engineered to transport you to far off lands, forged in the fires of Mount Doom. Possibly.",
          },
        ],
      },
    ]);
  }
}

export default MainController;
