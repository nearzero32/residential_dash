const results = JSON.parse(localStorage.getItem("results"));

const centerId = results?.center_id?._id || "default";

var colors = {};
if (centerId === "67b9a76da56dab25e4b2de01") {
  colors = {
    name: "مجمع البروج السكني",
    nameEN: "buruj",
    background: "rgb(33 36 91)",
    color: "#ffffff",
    imgTop: null,
    imgBottom: null,
  };
} else if (centerId === "6638d6a4c8462a1d83346b54") {
  colors = {
    name: "مجمع لاماسو السكني",
    nameEN: "Lamassu",
    background: "rgb(124 20 65)",
    color: "#ffffff",
    imgTop: null,
    imgBottom: null,
  };
}

export default colors;
