/*let deatils = document.querySelector(".details");
let imgContainer = document.querySelector(".img-container");
let getUserBtn = document.getElementById("get-user-btn");
let url = "https://random-data-api.com/api/v2/users?response_type=json";
let getUser = () => {
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        imgContainer.innerHTML = `<img src= ${data.avatar}>`;
        deatils.innerHTML = `
        <h2>${data.first_name} ${data.last_name}</h2>
        <h3>${data.employment.title}</h3>
        <h4><i class="fa-solid fa-location-dot"></i> ${data.address.city}</h4>`;

        let randomColor = 
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
        document.documentElement.style.setProperty("--theme-color", randomColor);
    });
};*/

/*$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });*/

/*  import axios from "axios";
    
  async function getRandomUsers() {
    try {
      const data = await axios.get("/api/users/random_user?size=3");
      return data;
    } catch(err) {
      console.log("error: ", err);
    }
  } */

  'use strict';

  const data = {
      names: require('./names.json'),
      adjectives: require('./adjectives.json')
  }
  let seperator = '-'
  
  function setNames(names) {
      data.names = names
  };
  
  function setAdjectives(adjectives) {
      data.adjectives = adjectives
  };
  
  function setSeperator(new_seperator) {
      seperator = new_seperator
  };
  
  function generate() {
      const ran_a = Math.floor(Math.random() * data.names.length)
      const ran_b = Math.floor(Math.random() * data.adjectives.length)
      const ran_suffix = Math.floor(Math.random() * 100)
      return `${data.adjectives[ran_b]}${seperator}${data.names[ran_a]}${ran_suffix}`
  };
  
  module.exports = {
      setNames: setNames,
      setAdjectives: setAdjectives,
      setSeperator: setSeperator,
      generate: generate
  }