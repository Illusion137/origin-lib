/* 
let ban = document.getElementsByClassName("sub-menu")[0].children
for(let i = 0; i < ban.length; i++)
    console.log(`${ban[i].querySelector("a").getAttribute("title")} = "${ban[i].querySelector("a").href.slice(20)}",`) 
*/
export enum Genre_gm {
    Action = "action",
    Action_Adventure = "action-adventure",
    Adventure = "adventure",
    Animation = "animation",
    Biography = "biography",
    Comedy = "comedy",
    Crime = "crime",
    Documentary = "documentary",
    Drama = "drama",
    Family = "family",
    Fantasy = "fantasy",
    History = "history",
    Horror = "horror",
    Kids = "kids",
    Music = "music",
    Mystery = "mystery",
    News = "news",
    Reality = "reality",
    Romance = "romance",
    Sci_Fi_Fantasy = "sci-fi-fantasy",
    Science_Fiction = "science-fiction",
    Soap = "soap",
    Talk = "talk",
    Thriller = "thriller",
    TV_Movie = "tv-movie",
    War = "war",
    War_Politics = "war-politics",
    Western = "western",
};
export enum Country_gm {
    Argentina = "AR",
    Australia = "AU",
    Austria = "AT",
    Belgium = "BE",
    Brazil = "BR",
    Canada = "CA",
    China = "CN",
    Czech_Republic = "CZ",
    Denmark = "DK",
    Finland = "FI",
    France = "FR",
    Germany = "DE",
    Hong_Kong = "HK",
    Hungary = "HU",
    India = "IN",
    Ireland = "IE",
    Israel = "IL",
    Italy = "IT",
    Japan = "JP",
    Luxembourg = "LU",
    Mexico = "MX",
    Netherlands = "NL",
    New_Zealand = "NZ",
    Norway = "NO",
    Poland = "PL",
    Romania = "RO",
    Russia = "RU",
    South_Africa = "ZA",
    South_Korea = "KR",
    Spain = "ES",
    Sweden = "SE",
    Switzerland = "CH",
    Taiwan = "TW",
    Thailand = "TH",
    United_Kingdom = "GB",
    United_States_of_America = "US",
};
export enum MonoPath_gm {
    Coming_Soon = "coming-soon",
    Movie = "movie",
    TV = "tv-show"
};
export enum Path_gm {
    Genre = "genre/",
    Country = "country/",
    Production = "production/",
    Cast = "cast/",
};
export enum FiltersType_gm{
    Movies = "&type=movie",
    TV_Shows = "&type=tv"
};
export enum FiltersQuality_gm{
    HD = "&quality=HD",
    SD = "&quality=SD",
    CAM = "&quality=CAM"
};
export enum FiltersReleased_gm{
    _2023 = "&release_year=2023",
    _2022 = "&release_year=2022",
    _2021 = "&release_year=2021",
    _2020 = "&release_year=2020",
    _2019 = "&release_year=2019",
    Older = "&release_year=older-2019"
};
export enum FiltersGenre_gm{ // document.querySelectorAll("[name='genres[]']")
    Action = "10",
    Action_Adventure = "24",
    Adventure = "18",
    Animation = "3",
    Biography = "37",
    Comedy = "7",
    Crime = "2",
    Documentary = "11",
    Drama = "4",
    Family = "9",
    Fantasy = "13",
    History = "19",
    Horror = "14",
    Kids = "27",
    Music = "15",
    Mystery = "1",
    News = "34",
    Reality = "22",
    Romance = "12",
    Sci_Fi_Fantasy = "31",
    Science_Fiction = "5",
    Soap = "35",
    Talk = "29",
    Thriller = "16",
    TV_Movie = "8",
    War = "17",
    War_Politics = "28",
    Western = "6",
};
export enum FiltersCountry_gm{ // document.querySelectorAll("[name='countries[]']")
    Argentina = "11",
    Australia = "151",
    Austria = "4",
    Belgium = "44",
    Brazil = "190",
    Canada = "147",
    China = "101",
    Czech_Republic = "231",
    Denmark = "222",
    Finland = "158",
    France = "3",
    Germany = "96",
    Hong_Kong = "93",
    Hungary = "72",
    India = "105",
    Ireland = "196",
    Israel = "24",
    Italy = "205",
    Japan = "173",
    Luxembourg = "91",
    Mexico = "40",
    Netherlands = "172",
    New_Zealand = "122",
    Norway = "219",
    Poland = "23",
    Romania = "170",
    Russia = "109",
    South_Africa = "200",
    South_Korea = "135",
    Spain = "62",
    Sweden = "114",
    Switzerland = "41",
    Taiwan = "119",
    Thailand = "57",
    United_Kingdom = "180",
    United_States_of_America = "129",
};