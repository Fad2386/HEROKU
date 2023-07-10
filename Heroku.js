let datas = [
  [
    "PRODUCTS",
    [
      "Heroku Platform",
      "Heroku Data Services",
      "Heroku Postgres",
      "Heroku Data for Redis",
      "Apache Kafka on Heroku",
      "Heroku Enterprise",
      "Heroku Private Spaces",
      "Heroku Connect",
      "Heroku Shield",
      "Heroku Teams",
      "Elements Marketplace",
      "Pricing",
    ],
  ],
  [
    "RESOURCES",
    [
      "Documentation",
      "Compliance Center",
      "Training & Education",
      "Blog",
      "Podcasts",
      "Get Started",
    ],
  ],
  [
    "ABOUT",
    [
      "About Us",
      "What is Heroku",
      "Heroku & Salesforce",
      "Our Customers",
      "Careers",
      "Partners",
      "Elements Marketplace",
    ],
  ],
  ["SUPPORT", ["Help Center", "Status", "Premium Support", "Contact Us"]],
];

const div_root = document.querySelector("#root");

renderFooter(datas);

function renderFooter(array) {
  const footer = document.createElement("footer");
  const div_footer = document.createElement("div");
  div_footer.className = "footeer_wrapper";

  // -----------------
  // for(let i = 0; i < array.length; i++){
  //     let title = datas[i][0]
  //     let text_array = datas[i][1]
  // }
  // -----------------

  for (let elem of array) {
    // let [title, text_array] = elem
    let title = elem[0];
    let text_array = elem[1];

    const div_title_block = document.createElement("div");
    div_title_block.className = "title_wrapper";

    const title_block = document.createElement("h4");
    title_block.innerText = title;

    const ul_block = document.createElement("ul");

    for (let j = 0; j < text_array.length; j++) {
      const li_elem = document.createElement("li");
      li_elem.innerText = text_array[j];
      ul_block.append(li_elem);
    }

    div_title_block.append(title_block, ul_block);
    div_footer.append(div_title_block);
  }

  footer.append(div_footer);
  div_root.append(footer);
}
const icons = [
  "./media/._1.png",
  "./media/._2.png",
  "./media/._3.png",
  "./media/._4.png",
  "./media/._5.png",
  "./media/._6.png",
  "./media/._7.png",
  "./media/._8.png",
];

const div_images = document.createElement("div");
div_images.className = "imges_wrapper";

for (let i = 0; i < icons.length; i++) {
  const icon = document.createElement("img");
  icon.src = icons[i];
  div_images.append(icon);
}

div_root.append(div_images);
