import { jobInfo } from "./interfaces";
const uiList = document.querySelector("#job-list") as HTMLUListElement;
const template = document.querySelector("template") as HTMLTemplateElement;
export function updateUI(dataArr: []) {
  dataArr.forEach((item: jobInfo) => {
    const clone = template.content.cloneNode(true) as HTMLTemplateElement;
    const logo = clone.querySelector("#logo") as HTMLImageElement;
    logo.src = item.logo;
    const companyTitle = clone.querySelector(
      "#company-title"
    ) as HTMLParagraphElement;
    companyTitle.textContent = item.company;
    const jobTitle = clone.querySelector("#job-title") as HTMLHeadingElement;
    jobTitle.textContent = item.position;
    const postedAt = clone.querySelector("#postedAt") as HTMLParagraphElement;
    postedAt.textContent = item.postedAt;
    const contract = clone.querySelector("#contract") as HTMLParagraphElement;
    contract.textContent = item.contract;
    const location = clone.querySelector("#location") as HTMLParagraphElement;
    location.textContent = item.location;
    const jobNew = clone.querySelector("#job-new") as HTMLParagraphElement;
    jobNew.style.display = `${item.featured ? "block" : "none"}`;

    const filters = clone.querySelector("#filters") as HTMLDivElement;
    const filterArr: object[] = [
      { role: item.role },
      { level: item.level },
      { languages: item.languages },
      { tools: item.tools },
    ];
    filterArr.forEach((item: object) => {
      const spanEl = document.createElement("span") as HTMLSpanElement;
      const key: string = Object.keys(item)[0];
      spanEl.textContent = item[key];
      spanEl.setAttribute(`data-${key}`, item[key]);
      filters.appendChild(spanEl);
    });
    uiList.appendChild(clone);
  });
}
