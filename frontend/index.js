const renderData = (data) => {
    const main = document.querySelector("main");
    data.forEach((obj) => {
      const div = document.createElement("div")
      div.className = "item-list";

      const InfoDiv = document.createElement("div");
      InfoDiv.className = "item-list__info";

      const InfoTitleDiv = document.createElement("div");
      InfoTitleDiv.className = "item-list__info-title";
      InfoTitleDiv.innerText - obj.title;

      const InfoMetaDiv = document.createElement("div");
      InfoMetaDiv.className = "item-list__info-meta";
      InfoMetaDiv.innerText - obj.place;
      
      const InfoPriceDiv = document.createElement("div");
      InfoPriceDiv.className = "item-list__info-price";
      InfoPriceDiv.innerText - obj.price;

      InfoDiv.appendChild(InfoTitleDiv);
      InfoDiv.appendChild(InfoMetaDiv);
      InfoDiv.appendChild(InfoPriceDiv);
      div.appendChild(InfoDiv);
      main.appendChild(div);
    });    
};

const fetchList = async () => {
    const res = await fetch('/items');
    const data = await res.json();
    renderData(data);

};

fetchList();