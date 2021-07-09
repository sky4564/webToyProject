const quotes = [
    {
        quote : "적을알고 나를 알면 백전 백승 이라 1" ,
        author : "이순신 장군 1 "
    },
    
    {
        quote : "적을알고 나를 알면 백전 백승 이라 1" ,
        author : "이순신 장군 2 "
    },

    {
        quote : "적을알고 나를 알면 백전 백승 이라 1" ,
        author : "이순신 장군 3 "
    },
    {
        quote : "적을알고 나를 알면 백전 백승 이라 1" ,
        author : "이순신 장군 4 "
    },
    {
        quote : "적을알고 나를 알면 백전 백승 이라 1" ,
        author : "이순신 장군 5 "
    },
    {
        quote : "적을알고 나를 알면 백전 백승 이라 1" ,
        author : "이순신 장군 6 "
    },
    {
        quote : "적을알고 나를 알면 백전 백승 이라 1" ,
        author : "이순신 장군 7 "
    },
    {
        quote : "적을알고 나를 알면 백전 백승 이라 1" ,
        author : "이순신 장군 8 "
    },
    {
        quote : "적을알고 나를 알면 백전 백승 이라 1" ,
        author : "이순신 장군 9 "
    },
    {
        quote : "적을알고 나를 알면 백전 백승 이라 1" ,
        author : "이순신 장군 10 "
    },

];

const quote =document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = (quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText =  todaysQuote.author;