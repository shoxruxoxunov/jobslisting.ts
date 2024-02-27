const uiList = document.querySelector("#job-list");
const template = document.querySelector("template");
export function updateUI(dataArr) {
    dataArr.forEach((item) => {
        const clone = template.content.cloneNode(true);
        const logo = clone.querySelector("#logo");
        logo.src = item.logo;
        const companyTitle = clone.querySelector("#company-title");
        companyTitle.textContent = item.company;
        const jobTitle = clone.querySelector("#job-title");
        jobTitle.textContent = item.position;
        const postedAt = clone.querySelector("#postedAt");
        postedAt.textContent = item.postedAt;
        const contract = clone.querySelector("#contract");
        contract.textContent = item.contract;
        const location = clone.querySelector("#location");
        location.textContent = item.location;
        const jobNew = clone.querySelector("#job-new");
        jobNew.style.display = `${item.featured ? "block" : "none"}`;
        const filters = clone.querySelector("#filters");
        const filterArr = [
            { role: item.role },
            { level: item.level },
            { languages: item.languages },
            { tools: item.tools },
        ];
        filterArr.forEach((item) => {
            const spanEl = document.createElement("span");
            const key = Object.keys(item)[0];
            spanEl.textContent = item[key];
            spanEl.setAttribute(`data-${key}`, item[key]);
            filters.appendChild(spanEl);
        });
        uiList.appendChild(clone);
    });
}
