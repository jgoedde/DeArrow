export const titleCaseNotCapitalized = new Set([
    "a",
    "an",
    "the",
    "and",
    "but",
    "or",
    "nor",
    "for",
    "yet",
    "so",
    "as",
    "in",
    "of",
    "on",
    "to",
    "from",
    "into",
    "with",
    "w/",
    "upon",
    "at",
    "by",
    "via",
    "to",
    "vs",
    "v.s.",
    "vs.",
    "ft",
    "ft.",
    "feat",
    "feat.",
    "etc.",
    "etc"
]);

export const titleCaseDetectionNotCapitalized = new Set([
    ...titleCaseNotCapitalized,
    "it",
    "is",
    "my"
]);

export const allowlistedWords = new Set([
    "NASA",
    "osu!",
    "PETA",
    "DEFCONConference",
    "DEFCON",
    "HDHR",
    "HDDT",
    "HDDTHR",
    "TUYU",
    "umu.",
    "MIMI",
    "S3RL",
    "NOMA",
    "DECO*27",
    "EVO+",
    "VINXIS",
    "IOSYS",
    "fhána",
    "LGBT",
    "LGBTQ",
    "LGBTQIA",
    "LGBTQ+IA",
    "LGBTQ2S",
    "BIPOC",
    "STFU",
    "TLDR",
    "TOTK",
    "BOTW",
    "SAINTCON",
    "TASBOT",
    "FNAF",
    "IANA",
    "OSHA",
    "NAFTA",
    "SCOTUS",
    "CPAN",
    "SWAT",
    "USAF",
    "ADHD",
    "IONOS",
    "NORAD",
    "UNHRC",
    "LDAC",
    "NVENC",
    "HEVC",
    "NVBFC",
    "IMAX",
    "CUDA",
    "VAAPI",
    "JPEG",
    "IETF",
    "zstd",
    "LZMA",
    "ANOVA",
    "HEIF",
    "HTML",
    "HDTV",
    "HDMI",
    "EULA",
    "GDPR",
    "CCPA",
    "HTTP",
    "HTTPS",
    "BIOS",
    "DMCA",
    "GUID",
    "JSON",
    "MIDI",
    "MMORPG",
    "OLED",
    "RHEL",
    "SFTP",
    "PCIe",
    "SSID",
    "UEFI",
    "UUID",
    "VRAM",
    "XMPP",
    "YAML",
    "OWSLA",
    "DJVI",
    "PSYQUI",
    "INZO",
    "MYRNE",
    "KNOWER",
    "PYLOT",
    "USAO",
    "TESV",
    "WRLD",
    "LAPD",
    "NYPD",
    "NVMe",
    "WYSIWYG",
    "TAS",
    "USSR",
    "Yu-Gi-Oh!",
    "II",
    "III",
    "IV",
    "VI",
    "VII",
    "VIII",
    "XIV",
    "XV",
    "XVI",
    "XVII",
    "XVIII",
    "VIA",
    "CCCP",
    "DIY",
    "SNES",
    "INTV",
    "PICO-8",
    "PICO8",
    "WSWAN",
    "PCE",
    "PCECD",
    "FPGA",
    "GTA",
    "bell hooks",
    "TOOOL",
    "drawholic",
    "TF2",
    "L4D",
    "L4D2",
    "P/ECE",
    "CDROM",
    "CD-ROM",
    "EFF",
    "AAA",
    "IQ",
    "GEEKOM",
    "AI",
    "RVC",
    "DisplayPort",
    "BFDI",
    "BFDIA",
    "IDFB",
    "TPOT",
    "WWII",
    "CS2",
    "CS:GO",
    "CSGO",
    "SCART",
    "ASMR",
    "CNBC",
    "mm",
    "cm",
    "m",
    "km",
    "ft",
    "in",
    "mi",
    "yd",
    "kg",
    "g",
    "mg",
    "lb",
    "lbs",
    "oz",
    "mL",
    "gal",
    "m/s",
    "km/h",
    "mph",
    "ft/s",
    "in/s",
    "lbf",
    "cal",
    "kcal",
    "kW",
    "Hz",
    "kHz",
    "MHz",
    "GHz",
    "THz",
    "Pa",
    "kPa",
    "MPa",
    "GPa",
    "atm",
    "mmHg",
    "torr",
    "GPA",
    "ABC",
    "AFK",
    "AKA",
    "ASAP",
    "ATM",
    "BBC",
    "BC",
    "BCE",
    "BDSM",
    "BMW",
    "CCTV",
    "CD",
    "CIA",
    "CSS",
    "DC",
    "DLC",
    "DNA",
    "DPS",
    "DUI",
    "DVD",
    "DWI",
    "EMS",
    "ETA",
    "FAQ",
    "FBI",
    "FCC",
    "FDA",
    "FEMA",
    "FLOTUS",
    "FOMO",
    "FPS",
    "FTC",
    "GIF",
    "GPS",
    "HDD",
    "IRL",
    "IRS",
    "ISIL",
    "ISIS",
    "ISP",
    "JPG",
    "LAFD",
    "LCD",
    "LSD",
    "MBA",
    "MDMA",
    "MMA",
    "MMO",
    "MMR",
    "MMS",
    "MP3",
    "MP4",
    "NATO",
    "NBA",
    "NBC",
    "NFL",
    "NHL",
    "NHS",
    "NRA",
    "NSA",
    "NSFL",
    "NSFW",
    "NYC",
    "OCD",
    "OHS",
    "PDF",
    "PHP",
    "PMS",
    "PNG",
    "POTUS",
    "PTSD",
    "QR",
    "RLCS",
    "RPG",
    "RSVP",
    "SMS",
    "SQL",
    "SUV",
    "TV",
    "UFO",
    "UNGA",
    "URL",
    "USA",
    "USB",
    "USPS",
    "VCR",
    "VHS",
    "VIP",
    "VOD",
    "VPN",
    "WHS",
    "WWE",
    "WWF",
    "WWI",
    "XML",
    "LGBTQIA2S+",
    "NVFBC",
    "DALL-E",
    "DALL·E",
    "iilluminaughtii",
    "TOML",
    "DJ",
    "SPTV",
    "VST",
    "EQ"
]);

// Can be switched to a trie structure if it grows
export const allowlistedStartOfWords = new Set([
    "osu!",
    "de_",
    "cs_",
    "ar_",
    "as_",
    "es_",
    "dz_",
    "fy_",
    "aim_",
    "zm_",
    "jail_",
    "bb_",
    "gg_",
    "awp_",
    "df_",
    "deathrun_",
]);

export const acronymBlocklist = new Set([
    "not",
    "see",
    "be",
    "you",
    "are",
    "is",
    "it",
    "of",
    "the",
    "to",
    "new",
    "end",
    "won",
    "sue",
    "day",
    "fly",
    "so",
    "one",
    "two",
    "six",
    "ten",
    "can",
    "pro",
    "why",
    "did",
    "now",
    "too",
    "bad",
    "big",
    "all",
    "old"
]);

export const notStartOfSentence = new Set([
    "v.s.",
    "vs.",
    "ft.",
    "feat.",
    "mr.",
    "mrs.",
    "ms.",
    "dr.",
    "prof.",
    "sr.",
    "jr.",
]);

/**
 * List based on https://github.com/gc/confusables and https://gist.github.com/ajayyy/2db5acc76fb2e0cb305b06549445e0aa
 */ 
export const fancyTextConversions = new Map<string, string>(JSON.parse(`[["⓿","0"],["₀","0"],["⁰","0"],["1","1"],["⓵","1"],["➊","1"],["⑴","1"],["𝟏","1"],["𝟙","1"],["１","1"],["𝟷","1"],["𝟣","1"],["⒈","1"],["𝟭","1"],["➀","1"],["₁","1"],["①","1"],["❶","1"],["⥠","1"],["⓶","2"],["⒉","2"],["⑵","2"],["➋","2"],["𝟚","2"],["２","2"],["𝟮","2"],["𝟤","2"],["𝟸","2"],["𝟐","2"],["②","2"],["₂","2"],["➁","2"],["❷","2"],["𝟑","3"],["𝟛","3"],["𝟯","3"],["➌","3"],["⓷","3"],["⑶","3"],["⒊","3"],["➂","3"],["③","3"],["₃","3"],["❸","3"],["𝟰","4"],["𝟺","4"],["𝟦","4"],["𝟒","4"],["➍","4"],["𝟜","4"],["⓸","4"],["４","4"],["⁴","4"],["➃","4"],["₄","4"],["④","4"],["❹","4"],["⑷","4"],["⒋","4"],["𝟱","5"],["⓹","5"],["➎","5"],["Ƽ","5"],["𝟓","5"],["𝟻","5"],["𝟝","5"],["𝟧","5"],["５","5"],["➄","5"],["₅","5"],["⑤","5"],["⁵","5"],["❺","5"],["⑸","5"],["⒌","5"],["𝟼","6"],["𝟲","6"],["𝟞","6"],["𝟨","6"],["𝟔","6"],["➏","6"],["⓺","6"],["⁶","6"],["６","6"],["⑥","6"],["₆","6"],["❻","6"],["⑹","6"],["𝟕","7"],["𝟟","7"],["𝟩","7"],["𝟳","7"],["𝟽","7"],["🄈","7"],["⓻","7"],["➐","7"],["７","7"],["⁷","7"],["⑦","7"],["₇","7"],["❼","7"],["➆","7"],["⑺","7"],["⒎","7"],["𐌚","8"],["➑","8"],["⓼","8"],["８","8"],["𝟠","8"],["𝟪","8"],["⁸","8"],["₈","8"],["𝟴","8"],["➇","8"],["⑧","8"],["❽","8"],["𝟾","8"],["𝟖","8"],["⑻","8"],["⒏","8"],["𝟡","9"],["𝟵","9"],["⓽","9"],["➒","9"],["𝟫","9"],["𝟿","9"],["𝟗","9"],["⁹","9"],["₉","9"],["➈","9"],["⑨","9"],["❾","9"],["⑼","9"],["⒐","9"],["⓾","10"],["❿","10"],["➉","10"],["➓","10"],["🔟","10"],["⑩","10"],["⑽","10"],["⒑","10"],["⑪","11"],["⑾","11"],["⒒","11"],["⓫","11"],["⑫","12"],["⑿","12"],["⒓","12"],["⓬","12"],["⑬","13"],["⒀","13"],["⒔","13"],["⓭","13"],["⑭","14"],["⒁","14"],["⒕","14"],["⓮","14"],["⑮","15"],["⒂","15"],["⒖","15"],["⓯","15"],["⑯","16"],["⒃","16"],["⒗","16"],["⓰","16"],["⑰","17"],["⒄","17"],["⒘","17"],["⓱","17"],["⑱","18"],["⒅","18"],["⒙","18"],["⓲","18"],["⑲","19"],["⒆","19"],["⒚","19"],["⓳","19"],["⑳","20"],["⒇","20"],["⒛","20"],["⓴","20"],["𝑨","A"],["𝖠","A"],["𝗔","A"],["𝞐","A"],["🄐","A"],["🄰","A"],["𐊠","A"],["𝜜","A"],["𝐴","A"],["ꓮ","A"],["𝚨","A"],["𝝖","A"],["🅐","A"],["🅰","A"],["𝐀","A"],["𝔸","A"],["Ⓐ","A"],["Ａ","A"],["ᴬ","A"],["ₐ","A"],["ª","A"],["𝛢","A"],["𝓐","A"],["𝙰","A"],["𝘼","A"],["𝒜","A"],["𝘈","A"],["⍺","a"],["ⓐ","a"],["ᵃ","a"],["⒜","a"],["ａ","a"],["ɑ","a"],["𝐚","a"],["𝑎","a"],["𝒂","a"],["𝒶","a"],["𝓪","a"],["𝔞","a"],["𝕒","a"],["𝖆","a"],["𝖺","a"],["𝗮","a"],["𝘢","a"],["𝙖","a"],["𝚊","a"],["𝛂","a"],["𝛼","a"],["𝜶","a"],["𝝰","a"],["𝞪","a"],["⍶","a"],["🄑","B"],["𝔙","B"],["𝖁","B"],["𐌁","B"],["𝑩","B"],["𝕭","B"],["🄱","B"],["𐊡","B"],["𝖡","B"],["𝘽","B"],["ꓐ","B"],["𝗕","B"],["𝘉","B"],["𝜝","B"],["𐊂","B"],["𝚩","B"],["𝐁","B"],["𝛣","B"],["𝝗","B"],["𝐵","B"],["𝙱","B"],["𝔹","B"],["𝞑","B"],["𝔅","B"],["🅑","B"],["𝓑","B"],["🅱","B"],["Ⓑ","B"],["ʙ","B"],["ᴮ","B"],["ᵇ","B"],["𝐛","b"],["𝘣","b"],["𝒷","b"],["𝔟","b"],["𝓫","b"],["𝖇","b"],["𝖻","b"],["𝑏","b"],["𝙗","b"],["𝕓","b"],["𝒃","b"],["𝗯","b"],["𝚋","b"],["ⓑ","b"],["⒝","b"],["Ⲥ","C"],["🄲","C"],["ꓚ","C"],["𐊢","C"],["🅲","C"],["🅒","C"],["ᶜ","C"],["𝐂","C"],["𝐶","C"],["𝑪","C"],["𝖢","C"],["𝗖","C"],["𝘊","C"],["𝒞","C"],["𝓒","C"],["𝘾","C"],["🝌","c"],["ｃ","c"],["ⅽ","c"],["𝐜","c"],["𝑐","c"],["𝒄","c"],["𝒸","c"],["𝓬","c"],["𝔠","c"],["𝕔","c"],["𝖈","c"],["𝖼","c"],["𝗰","c"],["𝘤","c"],["𝙘","c"],["𝚌","c"],["ⲥ","c"],["𐐽","c"],["𝙲","c"],["🄳","D"],["𝔻","D"],["𝗗","D"],["𝘋","D"],["𝙳","D"],["𝐷","D"],["𝓓","D"],["𝐃","D"],["𝑫","D"],["𝕯","D"],["𝖣","D"],["𝔇","D"],["𝘿","D"],["ⅅ","D"],["𝒟","D"],["ꓓ","D"],["🅳","D"],["🅓","D"],["Ⓓ","D"],["Ｄ","D"],["Ɗ","D"],["ᴰ","D"],["ꓒ","d"],["𝓭","d"],["ⓓ","d"],["ｄ","d"],["ɗ","d"],["ᵈ","d"],["⒟","d"],["𝕕","d"],["𝖽","d"],["𝑑","d"],["𝘥","d"],["𝒅","d"],["𝙙","d"],["𝐝","d"],["𝗱","d"],["𝚍","d"],["ⅆ","d"],["𝒹","d"],["⋿","E"],["∃","E"],["ⴺ","E"],["ꓱ","E"],["𝐄","E"],["𝐸","E"],["𝖤","E"],["𝘌","E"],["𝙴","E"],["𝛦","E"],["𝜠","E"],["🄔","E"],["🄴","E"],["𝙀","E"],["𝔼","E"],["𐊆","E"],["𝚬","E"],["ꓰ","E"],["𝝚","E"],["𝞔","E"],["𝑬","E"],["𝗘","E"],["🅴","E"],["🅔","E"],["ᴱ","E"],["ᵉ","E"],["ⴹ","E"],["𝓔","E"],["ꬲ","e"],["𝑒","e"],["𝓮","e"],["𝕖","e"],["𝖊","e"],["𝘦","e"],["𝗲","e"],["𝚎","e"],["𝙚","e"],["𝒆","e"],["𝔢","e"],["𝖾","e"],["𝐞","e"],["ⓔ","e"],["ｅ","e"],["⒠","e"],["ₑ","e"],["℮","e"],["ℯ","e"],["𝐅","F"],["𝐹","F"],["𝑭","F"],["𝔽","F"],["𝖥","F"],["𝗙","F"],["𝙁","F"],["𝙵","F"],["𝟊","F"],["🄕","F"],["🄵","F"],["𐊇","F"],["𝘍","F"],["🅵","F"],["🅕","F"],["𝓕","F"],["Ⓕ","F"],["Ｆ","F"],["𝐟","f"],["𝕗","f"],["𝖿","f"],["𝗳","f"],["𝙛","f"],["𝚏","f"],["ꬵ","f"],["ꞙ","f"],["ẝ","f"],["ⓕ","f"],["ｆ","f"],["ƒ","f"],["ᶠ","f"],["⒡","f"],["𝑓","f"],["𝒇","f"],["𝒻","f"],["𝓯","f"],["𝘧","f"],["𝗚","G"],["𝘎","G"],["🄖","G"],["ꓖ","G"],["🄶","G"],["𝔾","G"],["𝓖","G"],["𝑮","G"],["𝒢","G"],["𝙂","G"],["𝖦","G"],["𝙶","G"],["𝔊","G"],["𝐺","G"],["𝐆","G"],["🅶","G"],["🅖","G"],["Ⓖ","G"],["Ｇ","G"],["ɢ","G"],["ᴳ","G"],["ᶢ","g"],["ⓖ","g"],["ｇ","g"],["ᵍ","g"],["⒢","g"],["ℊ","g"],["ɡ","g"],["𝐠","g"],["𝑔","g"],["𝒈","g"],["𝓰","g"],["𝔤","g"],["𝖌","g"],["𝗀","g"],["𝗴","g"],["𝘨","g"],["𝙜","g"],["𝚐","g"],["🄗","H"],["𝆦","H"],["🄷","H"],["𝜢","H"],["ꓧ","H"],["𝘏","H"],["𝐻","H"],["𝝜","H"],["𝖧","H"],["𐋏","H"],["𝗛","H"],["ℍ","H"],["Ⲏ","H"],["𝑯","H"],["𝞖","H"],["🅷","H"],["🅗","H"],["Ⓗ","H"],["Ｈ","H"],["ℋ","H"],["𝐇","H"],["𝙃","H"],["𝙷","H"],["ʜ","H"],["𝛨","H"],["𝚮","H"],["ᴴ","H"],["𝓗","H"],["⒣","h"],["ⓗ","h"],["ｈ","h"],["ℎ","h"],["𝐡","h"],["𝒉","h"],["𝒽","h"],["𝓱","h"],["𝕙","h"],["𝗁","h"],["𝗵","h"],["𝘩","h"],["𝙝","h"],["𝚑","h"],["ʰ","h"],["🄘","I"],["🄸","I"],["ꀤ","I"],["🅸","I"],["🅘","I"],["Ⓘ","I"],["Ｉ","I"],["Ⅰ","I"],["ɪ","I"],["ᶦ","I"],["𝐼","I"],["ᴵ","I"],["𝚰","I"],["𝑰","I"],["𝐈","I"],["𝓘","I"],["𝘐","I"],["𝙄","I"],["𝙸","I"],["ℹ","i"],["ⅈ","i"],["𝚒","i"],["𝗂","i"],["𝐢","i"],["𝕚","i"],["𝖎","i"],["𝗶","i"],["𝘪","i"],["𝙞","i"],["ⁱ","i"],["ᵢ","i"],["𝓲","i"],["𝑖","i"],["𝒊","i"],["𝒾","i"],["𝐉","J"],["𝐽","J"],["𝑱","J"],["𝒥","J"],["𝓙","J"],["𝔍","J"],["𝕁","J"],["𝕵","J"],["𝖩","J"],["𝗝","J"],["𝘑","J"],["𝙅","J"],["𝙹","J"],["ꓙ","J"],["🄙","J"],["🄹","J"],["🅹","J"],["🅙","J"],["Ⓙ","J"],["Ｊ","J"],["ʝ","J"],["ⱼ","J"],["𝚥","j"],["ⅉ","j"],["ⓙ","j"],["ｊ","j"],["ʲ","j"],["⒥","j"],["𝒿","j"],["𝘫","j"],["𝗷","j"],["𝑗","j"],["𝙟","j"],["𝔧","j"],["𝒋","j"],["𝗃","j"],["𝕛","j"],["𝚓","j"],["𝐣","j"],["𝓳","j"],["𝐊","K"],["𝐾","K"],["𝑲","K"],["𝓚","K"],["𝖪","K"],["𝙺","K"],["𝚱","K"],["𝝟","K"],["🄚","K"],["𝗞","K"],["🄺","K"],["𝜥","K"],["𝘒","K"],["ꓗ","K"],["𝙆","K"],["𝕂","K"],["Ⲕ","K"],["𝛫","K"],["𝞙","K"],["🅺","K"],["🅚","K"],["Ⓚ","K"],["Ｋ","K"],["ĸ","K"],["Ƙ","K"],["ᴋ","K"],["ᴷ","K"],["ᵏ","K"],["⒦","K"],["K","K"],["𝒦","K"],["ⓚ","k"],["𝐤","k"],["𝘬","k"],["𝗄","k"],["𝕜","k"],["𝙠","k"],["𝚔","k"],["𝑘","k"],["𝒌","k"],["𝗸","k"],["𝓴","k"],["𝓀","k"],["𝐋","L"],["𝐿","L"],["𝕃","L"],["𝖫","L"],["𝗟","L"],["𝘓","L"],["𝙇","L"],["🄛","L"],["🄻","L"],["𐐛","L"],["Ⳑ","L"],["𝑳","L"],["𝙻","L"],["𐑃","L"],["ⳑ","L"],["ꓡ","L"],["🅻","L"],["🅛","L"],["Ⓛ","L"],["ᴸ","L"],["ˡ","L"],["ₗ","L"],["ℒ","L"],["ᶫ","L"],["𝓛","L"],["𝙡","L"],["ⓛ","l"],["ｌ","l"],["⒧","l"],["𝒍","l"],["𝓁","l"],["𝐥","l"],["𝑙","l"],["𝓵","l"],["𝘭","l"],["𝚕","l"],["🄜","M"],["🄼","M"],["𐌑","M"],["ꓟ","M"],["🅼","M"],["🅜","M"],["Ⓜ","M"],["Ｍ","M"],["ᴍ","M"],["ᴹ","M"],["Ⅿ","M"],["ℳ","M"],["𝐌","M"],["𝑀","M"],["𝑴","M"],["𝓜","M"],["𝕄","M"],["𝖬","M"],["𝗠","M"],["𝘔","M"],["𝙈","M"],["𝙼","M"],["𝚳","M"],["𝛭","M"],["𝜧","M"],["𝝡","M"],["𝞛","M"],["𝖒","m"],["𝐦","m"],["𝗆","m"],["𝔪","m"],["𝕞","m"],["𝓂","m"],["ⓜ","m"],["ｍ","m"],["ⅿ","m"],["𝙢","m"],["𝓶","m"],["𝚖","m"],["𝑚","m"],["𝗺","m"],["𝒎","m"],["𝘮","m"],["🄝","N"],["𝙉","N"],["🄽","N"],["ꓠ","N"],["𝛮","N"],["𝝢","N"],["𝙽","N"],["𝚴","N"],["𝑵","N"],["𝑁","N"],["Ⲛ","N"],["𝐍","N"],["𝒩","N"],["𝞜","N"],["𝗡","N"],["𝘕","N"],["𝜨","N"],["𝓝","N"],["𝖭","N"],["🅽","N"],["🅝","N"],["Ⓝ","N"],["Ｎ","N"],["ɴ","N"],["ᴺ","N"],["ᶰ","N"],["ⁿ","N"],["𝒏","n"],["𝓷","n"],["𝙣","n"],["𝑛","n"],["𝗇","n"],["𝚗","n"],["𝗻","n"],["ⓝ","n"],["⒩","n"],["𝕟","n"],["𝘯","n"],["𝐧","n"],["𝓃","n"],["𝟘","O"],["𝑂","O"],["𝑶","O"],["𝗢","O"],["𝘖","O"],["𝙊","O"],["𝛰","O"],["𐊒","O"],["𝟬","O"],["ꓳ","O"],["Ⲟ","O"],["𐐄","O"],["𐊫","O"],["𐓂","O"],["𝞞","O"],["𝝤","O"],["𝚶","O"],["𝜪","O"],["𝐎","O"],["Ｏ","O"],["𝒪","O"],["𝓞","O"],["𝓸","O"],["𝙾","O"],["𝑜","o"],["𝒐","o"],["𝝄","o"],["𝛐","o"],["𝗈","o"],["ⲟ","o"],["𝙤","o"],["𝘰","o"],["𝗼","o"],["𝕠","o"],["𝜊","o"],["𝐨","o"],["𝝾","o"],["𝞸","o"],["ｏ","o"],["ᴏ","o"],["𝚘","o"],["🄿","P"],["ꓑ","P"],["𝚸","P"],["𝙿","P"],["𝞠","P"],["𝙋","P"],["Ⲣ","P"],["𝝦","P"],["𝑃","P"],["𝑷","P"],["𝗣","P"],["𝐏","P"],["𐊕","P"],["𝜬","P"],["𝘗","P"],["𝓟","P"],["𝖯","P"],["𝛲","P"],["🅟","P"],["🅿","P"],["Ⓟ","P"],["Ｐ","P"],["Ƥ","P"],["ᴘ","P"],["ᴾ","P"],["ᵖ","P"],["⒫","P"],["ℙ","P"],["𝒫","P"],["ⲣ","p"],["℗","p"],["ⓟ","p"],["ｐ","p"],["ƿ","p"],["⍴","p"],["𝓹","p"],["𝓅","p"],["𝐩","p"],["𝑝","p"],["𝒑","p"],["𝕡","p"],["𝖕","p"],["𝗉","p"],["𝗽","p"],["𝘱","p"],["𝙥","p"],["𝚙","p"],["🅀","Q"],["🄠","Q"],["🆀","Q"],["🅠","Q"],["Ｑ","Q"],["ℚ","Q"],["ⵕ","Q"],["𝐐","Q"],["𝑄","Q"],["𝑸","Q"],["𝚀","Q"],["𝘘","Q"],["𝙌","Q"],["𝖰","Q"],["𝗤","Q"],["𝒬","Q"],["𝓠","Q"],["𝓆","q"],["𝗾","q"],["ⓠ","q"],["ｑ","q"],["⒬","q"],["𝑞","q"],["𝘲","q"],["𝕢","q"],["𝚚","q"],["𝒒","q"],["𝔮","q"],["𝓺","q"],["𝐪","q"],["𝙦","q"],["🄡","R"],["ꓣ","R"],["🆁","R"],["🅡","R"],["Ⓡ","R"],["Ｒ","R"],["ʀ","R"],["ᴿ","R"],["ℛ","R"],["ℜ","R"],["ℝ","R"],["𝐑","R"],["𝑅","R"],["𝑹","R"],["𝓡","R"],["𝕽","R"],["𝖱","R"],["𝗥","R"],["𝘙","R"],["𝙍","R"],["𝚁","R"],["𝚛","r"],["ꭇ","r"],["ⓡ","r"],["ｒ","r"],["ʳ","r"],["⒭","r"],["𝐫","r"],["𝑟","r"],["𝒓","r"],["𝓇","r"],["𝓻","r"],["𝔯","r"],["𝕣","r"],["𝖗","r"],["𝗋","r"],["𝗿","r"],["𝘳","r"],["𝙧","r"],["ᵣ","r"],["🅂","S"],["🄪","S"],["🄢","S"],["ꇙ","S"],["𝗦","S"],["𝚂","S"],["𝐒","S"],["ꓢ","S"],["𝖲","S"],["𝙎","S"],["𐐠","S"],["𝘚","S"],["𝕊","S"],["𝑆","S"],["𝑺","S"],["🆂","S"],["🅢","S"],["Ⓢ","S"],["Ｓ","S"],["ˢ","S"],["⒮","S"],["𝒮","S"],["𝓢","S"],["ⓢ","s"],["ꜱ","s"],["𐑈","s"],["ｓ","s"],["𝐬","s"],["𝑠","s"],["𝒔","s"],["𝗌","s"],["𝘀","s"],["𝘴","s"],["𝙨","s"],["𝚜","s"],["𝓈","s"],["𝓼","s"],["🅃","T"],["🄣","T"],["𝜯","T"],["🆃","T"],["𝚻","T"],["𝛵","T"],["𝕋","T"],["𝕿","T"],["𝑻","T"],["𐊱","T"],["𐊗","T"],["𝖳","T"],["𝙏","T"],["🝨","T"],["𝝩","T"],["𝞣","T"],["𝚃","T"],["𝘛","T"],["𝑇","T"],["ꓔ","T"],["⟙","T"],["𝐓","T"],["Ⲧ","T"],["𝗧","T"],["⊤","T"],["𝔗","T"],["𝒯","T"],["🅣","T"],["⏉","T"],["Ⓣ","T"],["Ｔ","T"],["ᴛ","T"],["ᵀ","T"],["𝓣","T"],["ⓣ","t"],["ｔ","t"],["ᵗ","t"],["⒯","t"],["𝐭","t"],["𝑡","t"],["𝒕","t"],["𝔱","t"],["𝕥","t"],["𝖙","t"],["𝗍","t"],["𝘁","t"],["𝘵","t"],["𝙩","t"],["𝚝","t"],["𝓉","t"],["𝓽","t"],["🅄","U"],["🄤","U"],["🆄","U"],["🅤","U"],["Ⓤ","U"],["ᵁ","U"],["ᵘ","U"],["⒰","U"],["𝐔","U"],["𝑈","U"],["𝑼","U"],["𝒰","U"],["𝓤","U"],["𝔘","U"],["𝕌","U"],["𝖀","U"],["𝖴","U"],["𝗨","U"],["𝘜","U"],["𝙐","U"],["𝚄","U"],["𝘂","u"],["𝘶","u"],["𝙪","u"],["𝚞","u"],["𐓶","u"],["ⓤ","u"],["ｕ","u"],["ᵤ","u"],["𝐮","u"],["𝑢","u"],["𝒖","u"],["𝓊","u"],["𝓾","u"],["𝔲","u"],["𝕦","u"],["𝖚","u"],["𝗎","u"],["𝑉","V"],["𝒱","V"],["𝕍","V"],["𝗩","V"],["🄥","V"],["🅅","V"],["ꓦ","V"],["𝑽","V"],["𝖵","V"],["𝘝","V"],["𝚅","V"],["𝙑","V"],["𝐕","V"],["🆅","V"],["🅥","V"],["Ⓥ","V"],["ᵛ","V"],["⒱","V"],["Ⅴ","V"],["ⴸ","V"],["𝓥","V"],["∨","v"],["ⅴ","v"],["𝐯","v"],["𝑣","v"],["𝒗","v"],["𝕧","v"],["𝗏","v"],["ⓥ","v"],["ｖ","v"],["ᴠ","v"],["ᵥ","v"],["𝙫","v"],["𝚟","v"],["𝛎","v"],["𝜈","v"],["𝝂","v"],["𝝼","v"],["𝞶","v"],["𝘷","v"],["𝘃","v"],["𝓿","v"],["𝓋","v"],["𝐖","W"],["𝑊","W"],["𝓦","W"],["𝕎","W"],["𝖶","W"],["𝗪","W"],["𝙒","W"],["𝚆","W"],["🄦","W"],["🅆","W"],["𝑾","W"],["ꓪ","W"],["𝒲","W"],["𝘞","W"],["🆆","W"],["Ⓦ","W"],["🅦","W"],["ｗ","W"],["ᵂ","W"],["ʷ","W"],["⒲","W"],["𝐰","w"],["𝑤","w"],["𝒘","w"],["𝔀","w"],["𝔴","w"],["𝕨","w"],["𝖜","w"],["𝗐","w"],["𝘄","w"],["𝘸","w"],["𝙬","w"],["𝚠","w"],["ⓦ","w"],["𝓌","w"],["𝛘","X"],["𝜒","X"],["𝝌","X"],["𝞆","X"],["𝟀","X"],["𝑿","X"],["𝛸","X"],["🄧","X"],["🅇","X"],["𐌗","X"],["Ⲭ","X"],["ꓫ","X"],["𝞦","X"],["𝘟","X"],["𐊐","X"],["𝚾","X"],["𝝬","X"],["𝜲","X"],["𐌢","X"],["𝖷","X"],["𝑋","X"],["𝕏","X"],["𐊴","X"],["𝗫","X"],["🆇","X"],["🅧","X"],["Ⓧ","X"],["𝓧","X"],["Ｘ","X"],["𝒳","X"],["ˣ","X"],["⒳","X"],["Ⅹ","X"],["╳","X"],["ⅹ","x"],["ⵝ","X"],["𝙓","X"],["𝚇","X"],["𝐗","X"],["𝑥","x"],["𝒙","x"],["𝓍","x"],["𝗑","x"],["𝘅","x"],["ⓧ","x"],["ｘ","x"],["×","x"],["ₓ","x"],["𝘹","x"],["𝐱","x"],["𝚡","x"],["𝔁","x"],["𝙭","x"],["𝒴","Y"],["🄨","Y"],["𝓨","Y"],["𝖸","Y"],["𝘠","Y"],["𝙔","Y"],["𝚼","Y"],["𝛶","Y"],["𝝪","Y"],["𝞤","Y"],["𝚈","Y"],["𝑌","Y"],["𝗬","Y"],["𝐘","Y"],["𝒀","Y"],["𝜰","Y"],["𐊲","Y"],["🆈","Y"],["🅨","Y"],["Ⓨ","Y"],["𝐲","y"],["𝑦","y"],["𝒚","y"],["𝓎","y"],["𝔂","y"],["𝗒","y"],["𝘆","y"],["𝘺","y"],["𝙮","y"],["𝚢","y"],["ʏ","y"],["ỿ","y"],["ꭚ","y"],["ℽ","y"],["𝛄","y"],["𝛾","y"],["𝜸","y"],["𝝲","y"],["𝞬","y"],["🅈","y"],["ⓨ","y"],["ｙ","y"],["ƴ","y"],["ʸ","y"],["⒴","y"],["🄩","Z"],["🅉","Z"],["ꓜ","Z"],["𝗭","Z"],["𝐙","Z"],["𝘡","Z"],["🆉","Z"],["🅩","Z"],["Ⓩ","Z"],["Ｚ","Z"],["ᶻ","Z"],["⒵","Z"],["ℤ","Z"],["𝑍","z"],["𝒁","z"],["𝒵","z"],["𝓩","z"],["𝙕","z"],["𝚉","z"],["𝚭","z"],["𝛧","z"],["𝜡","z"],["𝝛","z"],["𝞕","z"],["𝐳","z"],["𝑧","z"],["𝒛","z"],["𝓏","z"],["𝗓","z"],["𝘇","z"],["𝘻","z"],["𝙯","z"],["𝚣","z"],["ⓩ","z"],["ｚ","z"],["ᴢ","z"],["𝔃","z"],["ｎ","n"],["ｉ","i"],["ｂ","b"],["ᵐ","m"],["ᵒ","o"],["ᴀ","A"],["ᴄ","C"],["ᴅ","D"],["ᴇ","E"],["ꜰ","F"],["ᴊ","J"],["ʟ","L"],["ᴜ","U"],["ᴡ","W"],["ⓒ","c"],["ⓘ","i"],["ⓞ","o"],["ꞯ","Q"]]`));
